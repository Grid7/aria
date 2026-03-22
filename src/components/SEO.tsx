import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = 'https://picsum.photos/seed/ai-productivity/1200/630',
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

  }, [fullTitle, description, ogType, ogImage]);

  return null;
};
