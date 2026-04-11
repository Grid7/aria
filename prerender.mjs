import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render, posts } = await import('./dist/server/entry-server.js');

const routesToPrerender = [
  '/',
  '/about',
  '/privacy-policy',
  '/terms',
  '/contact',
  '/blog',
];

// Add blog posts
posts.forEach(post => {
  routesToPrerender.push(`/blog/${post.slug}`);
});

// Add categories
const categories = [...new Set(posts.map(p => p.category.en))];
categories.forEach(category => {
  routesToPrerender.push(`/category/${category}`);
});

for (const url of routesToPrerender) {
  const { html: appHtml, seoContext } = render(url);
  
  let html = template.replace(`<!--app-html-->`, appHtml);
  
  // Inject SEO tags
  if (seoContext) {
    let seoTags = '';
    if (seoContext.title) {
      seoTags += `<title>${seoContext.title}</title>\n`;
      seoTags += `<meta property="og:title" content="${seoContext.title}">\n`;
    }
    if (seoContext.description) {
      seoTags += `<meta name="description" content="${seoContext.description}">\n`;
      seoTags += `<meta property="og:description" content="${seoContext.description}">\n`;
    }
    if (seoContext.canonical) {
      seoTags += `<link rel="canonical" href="${seoContext.canonical}">\n`;
      seoTags += `<meta property="og:url" content="${seoContext.canonical}">\n`;
    }
    if (seoContext.ogType) {
      seoTags += `<meta property="og:type" content="${seoContext.ogType}">\n`;
    }
    if (seoContext.ogImage) {
      seoTags += `<meta property="og:image" content="${seoContext.ogImage}">\n`;
    }
    
    // JSON-LD
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": seoContext.ogType === 'article' ? "BlogPosting" : "WebSite",
      "name": "Aria 인사이트",
      "url": seoContext.canonical || `https://aria.ai.kr${url}`,
      "description": seoContext.description,
      "headline": seoContext.title?.split(' | ')[0],
    };

    if (seoContext.ogType === 'article' && seoContext.articleData) {
      jsonLd.author = {
        "@type": "Person",
        "name": seoContext.articleData.author
      };
      jsonLd.datePublished = seoContext.articleData.datePublished;
      jsonLd.dateModified = seoContext.articleData.dateModified;
      jsonLd.image = seoContext.articleData.image;
      jsonLd.articleSection = seoContext.articleData.category;
    }

    seoTags += `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n`;
    
    // Replace existing title tag or inject into head
    html = html.replace(/<title>.*?<\/title>/, seoTags);
  }
  
  const filePath = `dist${url === '/' ? '/index' : url}.html`;
  const dir = path.dirname(toAbsolute(filePath));
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(toAbsolute(filePath), html);
  console.log('pre-rendered:', filePath);
}
