// Returns HTTP 410 Gone for permanently retired URLs.
// Tells Google these pages are gone forever and should be removed from the index.
export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.status(410).send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>410 Gone</title>
  <meta name="robots" content="noindex, nofollow" />
</head>
<body>
  <h1>410 Gone</h1>
  <p>This page has been permanently removed.</p>
  <p><a href="https://www.franchiseleadspro.com/">Return to homepage</a></p>
</body>
</html>`);
}
