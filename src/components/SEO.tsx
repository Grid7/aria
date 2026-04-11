import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  articleData?: {
    author: string;
    datePublished: string;
    dateModified: string;
    category: string;
    image: string;
  };
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = 'https://picsum.photos/seed/ai-productivity/1200/630',
  articleData,
}) => {
  const siteTitle = 'Aria 인사이트';
  const fullTitle = `${title} | ${siteTitle}`;

  useEffect(() => {
    document.title = fullTitle;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogT = document.querySelector('meta[property="og:type"]');
    if (ogT) ogT.setAttribute('content', ogType);

    const ogI = document.querySelector('meta[property="og:image"]');
    if (ogI) ogI.setAttribute('content', ogImage);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    const currentUrl = canonical || window.location.href;
    if (ogUrl) {
      ogUrl.setAttribute('content', currentUrl);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:url');
      meta.setAttribute('content', currentUrl);
      document.head.appendChild(meta);
    }

    const ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (ogSiteName) {
      ogSiteName.setAttribute('content', siteTitle);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:site_name');
      meta.setAttribute('content', siteTitle);
      document.head.appendChild(meta);
    }

    // Canonical
    const finalCanonical = canonical || window.location.href.split('?')[0];
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', finalCanonical);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', finalCanonical);
      document.head.appendChild(link);
    }

    // JSON-LD Structured Data
    const existingScript = document.getElementById('json-ld');
    if (existingScript) existingScript.remove();

    const jsonLd: any = {
      "@context": "https://schema.org",
      "@type": ogType === 'article' ? "BlogPosting" : "WebSite",
      "name": siteTitle,
      "url": currentUrl,
      "description": description,
      "headline": title,
    };

    if (ogType === 'article' && articleData) {
      jsonLd.author = {
        "@type": "Person",
        "name": articleData.author
      };
      jsonLd.datePublished = articleData.datePublished;
      jsonLd.dateModified = articleData.dateModified;
      jsonLd.image = articleData.image;
      jsonLd.articleSection = articleData.category;
    }

    const script = document.createElement('script');
    script.id = 'json-ld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

  }, [fullTitle, description, ogType, ogImage, canonical, articleData]);

  return null;
};
