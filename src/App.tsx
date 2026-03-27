import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header, Footer } from './layouts/Layout';
import { Home } from './pages/Home';
import { BlogList } from './pages/BlogList';
import { BlogPostPage } from './pages/BlogPost';
import { CategoryPage } from './pages/CategoryPage';
import { About } from './pages/About';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-paper flex flex-col font-sans text-ink selection:bg-accent/20 selection:text-ink">
        <Header />
        
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            {/* Legacy Redirects for SEO/AdSense */}
            <Route path="/post/:slug" element={<Navigate replace to="/blog/:slug" />} />
            <Route path="/privacy" element={<Navigate replace to="/privacy-policy" />} />
            
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
