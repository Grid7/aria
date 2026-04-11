import React, { createContext, useContext } from 'react';

export interface SEOData {
  title?: string;
  description?: string;
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

interface SEOContextType {
  seo: SEOData;
  setSEO: (data: SEOData) => void;
}

const SEOContext = createContext<SEOContextType | null>(null);

export const useSEOContext = () => useContext(SEOContext);

export const SEOProvider: React.FC<{ children: React.ReactNode, context?: SEOData }> = ({ children, context }) => {
  const [seo, setSEO] = React.useState<SEOData>(context || {});

  // On the server, we want to mutate the passed context object directly
  // so that the server entry can read it after rendering.
  const handleSetSEO = (data: SEOData) => {
    setSEO(data);
    if (context) {
      Object.assign(context, data);
    }
  };

  return (
    <SEOContext.Provider value={{ seo, setSEO: handleSetSEO }}>
      {children}
    </SEOContext.Provider>
  );
};
