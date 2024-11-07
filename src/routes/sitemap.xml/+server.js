import {API} from '$env/static/private'

export async function GET() {
    
    const res = await fetch(`${API}products`)

    const result = await res.json()

    const products = result.data
    

    // generate the sitemap urls
    const urls = products.map(product => `
    <url>
        <loc>http://localhost:8000/product/${product.id}</loc>
        
    </url>`).join('')
    
    // create the sitemap xml
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls}
    </urlset>`;

    // Return the sitemap as a response
    return new Response(sitemap, {
        headers: {
        'Content-Type': 'application/xml'
        }
    });
        
}