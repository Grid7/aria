import fs from 'fs';
import path from 'path';
import { posts } from './src/data/posts';

const BASE_URL = 'https://aria.ai.kr';
const TODAY = new Date().toISOString().split('T')[0];

function generateSitemap() {
  const urls = [
    { loc: '/', lastmod: TODAY, changefreq: 'daily', priority: '1.0' },
    { loc: '/about', lastmod: '2026-03-21', changefreq: 'monthly', priority: '0.8' },
    { loc: '/contact', lastmod: '2026-03-21', changefreq: 'monthly', priority: '0.8' },
    { loc: '/privacy-policy', lastmod: '2026-03-21', changefreq: 'monthly', priority: '0.5' },
    ...posts.map(post => ({
      loc: `/blog/${post.slug}`,
      lastmod: post.date,
      changefreq: 'weekly',
      priority: '0.9'
    }))
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${BASE_URL}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('sitemap.xml updated');
}

function generateRSS() {
  const rssItems = posts.map(post => `    <item>
      <title><![CDATA[${post.title.ko}]]></title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid>${BASE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description.ko}]]></description>
      <author>${post.author}</author>
      <category>${post.category.ko}</category>
    </item>`).join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Aria AI Insights</title>
  <link>${BASE_URL}</link>
  <description>The Future of Artificial Intelligence</description>
  <language>ko-KR</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${rssItems}
</channel>
</rss>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'rss.xml'), rss);
  console.log('rss.xml updated');
}

generateSitemap();
generateRSS();
