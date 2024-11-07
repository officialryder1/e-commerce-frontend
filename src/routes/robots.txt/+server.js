export function GET() {
    const robotsTxt = `
      User-agent: *
      Disallow:
  
      Sitemap: http://localhost:8000/sitemap.xml
    `;
  
    return new Response(robotsTxt.trim(), {
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  }
  