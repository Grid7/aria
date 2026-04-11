import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { SEOProvider, SEOData } from './contexts/SEOContext';
import App from './App';
import './i18n';

export function render(url: string) {
  const seoContext: SEOData = {};
  
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <SEOProvider context={seoContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </SEOProvider>
    </React.StrictMode>
  );

  return { html, seoContext };
}

export { posts } from './data/posts';
