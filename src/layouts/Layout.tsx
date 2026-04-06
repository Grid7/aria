import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Cpu, Globe, Github, Twitter, Instagram, Mail, ArrowUpRight, Linkedin } from 'lucide-react';
import { cn } from '../utils';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en');
  };

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className={cn(
          "mx-auto transition-all duration-500 rounded-3xl flex items-center justify-between",
          isScrolled 
            ? "glass-card px-8 py-4 shadow-2xl shadow-accent/5" 
            : "px-8 py-6 bg-white/10 backdrop-blur-sm border border-black/5"
        )}>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-ink rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-ink/10">
              <Cpu className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-extrabold tracking-tighter text-ink leading-none">ARIA INSIGHT</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold mt-1.5">AI & Future Tech</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:text-accent relative py-2",
                    isActive ? "text-accent" : "text-stone-500"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-1 bg-accent rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            
            <div className="h-6 w-px bg-stone-200 mx-2" />
            
            <div className="flex items-center gap-6">
              <button onClick={toggleLanguage} className="flex items-center gap-2 text-stone-400 hover:text-ink transition-colors text-xs font-black tracking-widest">
                <Globe className="w-4 h-4" />
                {i18n.language === 'en' ? 'KO' : 'EN'}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleLanguage} className="text-stone-500 hover:text-ink text-xs font-bold tracking-widest flex items-center gap-2 px-4 py-2 rounded-2xl bg-stone-100">
              <Globe className="w-4 h-4" />
              {i18n.language === 'en' ? 'KO' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 flex items-center justify-center rounded-2xl bg-ink text-white shadow-xl shadow-ink/20"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed inset-0 z-40 md:hidden bg-paper/98 backdrop-blur-2xl pt-32 px-8"
          >
            <div className="flex flex-col gap-10">
              {navItems.map((item, idx) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.path}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-display font-black text-ink hover:text-accent transition-all"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isKo = i18n.language === 'ko';
  
  return (
    <footer className="bg-ink text-white pt-20 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <Cpu className="w-6 h-6 text-ink" />
              </div>
              <span className="font-display text-2xl font-black text-white tracking-tighter">ARIA INSIGHT</span>
            </div>
            <p className="text-stone-400 leading-relaxed max-w-sm text-base font-light">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Github, Linkedin, Mail].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-ink transition-all duration-500 group"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500 mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4">
              {[
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy-policy' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-stone-300 hover:text-white transition-colors text-base flex items-center gap-2 group">
                    {item.name}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500 mb-6">{t('footer.categories')}</h4>
            <div className="flex flex-wrap gap-2">
              {[
                { name: isKo ? 'AI 도구' : 'AI Tools', path: '/category/AI Tools' },
                { name: isKo ? '자동화' : 'Automation', path: '/category/Automation' },
                { name: isKo ? '생산성' : 'Productivity', path: '/category/Productivity' },
                { name: isKo ? '라이프스타일' : 'Lifestyle', path: '/category/Lifestyle' },
                { name: isKo ? 'IT/테크' : 'Tech', path: '/category/Tech' }
              ].map((cat) => (
                <Link 
                  key={cat.path}
                  to={cat.path} 
                  className="px-4 py-2 rounded-xl bg-white/5 text-xs text-stone-300 hover:bg-white hover:text-ink transition-all duration-500 font-bold"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col items-center gap-6">
          <div className="text-stone-500 text-xs text-center space-y-1">
            <p>옐로페스타 | 대표자: 김민호 | 사업자등록번호: 604-30-53081</p>
            <p>이메일: contact@aria.ai.kr</p>
          </div>
          <div className="flex gap-4 text-xs">
            <Link to="/privacy" className="text-stone-400 hover:text-white transition-colors">
              {isKo ? '개인정보 처리방침' : 'Privacy Policy'}
            </Link>
            <Link to="/terms" className="text-stone-400 hover:text-white transition-colors">
              {isKo ? '이용약관' : 'Terms of Service'}
            </Link>
          </div>
          <p className="text-stone-500 font-medium tracking-wide text-sm">
            © {new Date().getFullYear()} ARIA INSIGHT. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};
