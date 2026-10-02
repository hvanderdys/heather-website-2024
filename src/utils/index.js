import { google } from "googleapis";
import { get, put } from "./cache";

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "http://localhost:3000/api/oauth2callback"
);

// Check if we have previously stored a token.
let token;
if (process.env.GOOGLE_TOKEN) {
  try {
    token = JSON.parse(process.env.GOOGLE_TOKEN);
  } catch {
    throw new Error("GOOGLE_TOKEN must contain valid JSON.");
  }
}

const hasBlogCredentials = Boolean(
  process.env.GOOGLE_CLIENT_ID &&
  process.env.GOOGLE_CLIENT_SECRET &&
  process.env.FOLDER_ID &&
  token &&
  (token.access_token || token.refresh_token)
);

if (hasBlogCredentials) {
  oAuth2Client.setCredentials(token);
}

const drive = google.drive({ version: "v3", auth: oAuth2Client });

function slugify(text) {
  return text
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .toLowerCase();
}

export function byPosted({ postDate }) {
  const date = new Date(postDate);
  const now = new Date();
  return date <= now;
}

export async function getPosts({ allowAuthFailure = false } = {}) {
  const cached = await get("posts");

  if (cached) {
    return cached;
  }

  if (!hasBlogCredentials) {
    console.warn("Google Drive blog credentials are not configured; skipping blog fetch.");
    return [];
  }

  let response;
  try {
    response = await drive.files.list({
      q: `'${process.env.FOLDER_ID}' in parents and mimeType='application/vnd.google-apps.document'`,
      fields: "files(id, name, properties)",
    });
  } catch (error) {
    if (allowAuthFailure && error.response?.data?.error === "invalid_grant") {
      console.warn("Google Drive rejected the blog token (invalid_grant). Renew GOOGLE_TOKEN; building without blog posts.");
      return [];
    }
    throw error;
  }

  const posts = response.data.files
    .filter(({ properties }) => properties)
    .map(({ id, name, properties }) => {
      return {
        id,
        name: name.trim(),
        slug: name.substring(0, 3),
        ...parseCustomProperties(properties),
      };
    });

  await put(posts, "posts");

  return posts;
}

export async function getPostHtml(documentId) {
  const cacheKey = `post-${documentId}-html`;
  const cached = await get(cacheKey);

  if (cached) {
    return cached;
  }

  const response = await drive.files.export({
    fileId: documentId,
    mimeType: "text/html",
  });

  const html = response.data;

  await put(html, cacheKey);

  return html;
}

function parseCustomProperties(properties) {
  const postDate = new Date(properties["date-to-post"]).toISOString();
  const summary = properties["TLDR"] || "";
  const keywords = Object.keys(properties)
    .filter((key) => key.startsWith("k"))
    .map((key) => properties[key])
    .flat()
    .join(",")
    .split(",")
    .map((keyword) => keyword.trim())
    .filter((keyword) => keyword);

  return {
    postDate,
    keywords,
    summary,
    date: properties.date,
    img: properties.img,
  };
}
