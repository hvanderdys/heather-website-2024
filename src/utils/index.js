import { google } from "googleapis";
import { get, put } from "./cache";

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "http://localhost:3000/api/oauth2callback"
);

// Check if we have previously stored a token.
let token;
try {
  token = JSON.parse(process.env.GOOGLE_TOKEN);
} catch (error) {
  console.error("Error loading the token", error);
}

oAuth2Client.setCredentials(token);

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

export async function getPosts() {
  const cached = await get("posts");

  if (cached) {
    return cached;
  }

  const response = await drive.files.list({
    q: `'${process.env.FOLDER_ID}' in parents and mimeType='application/vnd.google-apps.document'`,
    fields: "files(id, name, properties)",
  });

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
