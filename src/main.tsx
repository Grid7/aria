import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SEOProvider } from './contexts/SEOContext';
import App from './App.tsx';
import './index.css';
import './i18n';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <SEOProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SEOProvider>
  </StrictMode>
);

if (container.innerHTML !== '<!--app-html-->') {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
