import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://gamestation.cc';
const DATA_FILE = path.join(__dirname, 'src/data.js');
const OUTPUT_FILE = path.join(__dirname, 'public/sitemap.xml');

const staticRoutes = [
  '',
  'about',
  'changelog',
  'sponsors',
  'the-last-of-us-part-2/trophies'
];

function extractSlugs() {
  try {
    const content = fs.readFileSync(DATA_FILE, 'utf8');
    const slugRegex = /slug:\s*["']([^"']+)["']/g;
    const slugs = [];
    let match;
    while ((match = slugRegex.exec(content)) !== null) {
      if (match[1] && match[1] !== 'null') {
          slugs.push(match[1]);
      }
    }
    return slugs;
  } catch (error) {
    console.error('Error reading data file:', error);
    return [];
  }
}

function generateSitemap() {
  const slugs = extractSlugs();
  const allRoutes = [...staticRoutes, ...slugs];
  const currentDate = new Date().toISOString().split('T')[0];

  let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xmlContent += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  allRoutes.forEach(route => {
      const loc = route ? `${DOMAIN}/${route}` : DOMAIN;
      const priority = route === '' ? '1.0' : '0.8';
      
      xmlContent += `
  <url>
    <loc>${loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  xmlContent += '\n</urlset>';

  fs.writeFileSync(OUTPUT_FILE, xmlContent);
  console.log(`Sitemap generated at ${OUTPUT_FILE}`);
  console.log(`Total URLs: ${allRoutes.length}`);
}

generateSitemap();
