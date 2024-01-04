import { google } from "googleapis";

export default function handler(req, res) {
  if (process.env.DEVELOPMENT !== "true") {
    return res.status(503).end();
  }

  // exchange the code for access token and ID token

  const { code } = req.query;

  const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "http://localhost:3000/api/oauth2callback"
  );

  oAuth2Client.getToken(code, (err, token) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    res.status(200).json(token);
  });
}
