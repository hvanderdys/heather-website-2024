import { google } from "googleapis";

export default function handler(req, res) {
  if (process.env.DEVELOPMENT !== "true") {
    return res.status(503).end();
  }

  const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "http://localhost:3000/api/oauth2callback"
  );

  const scopes = ["https://www.googleapis.com/auth/drive"];

  const url = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });

  res.redirect(url);
}
