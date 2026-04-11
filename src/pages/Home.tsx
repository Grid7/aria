import React from 'react';
import { posts } from '../data/posts';
import { PostCard } from '../components/PostCard';

import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Zap, Cpu, ArrowUpRight, Globe, Rocket, Shield, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ko';
  const latestPosts = posts.slice(0, 6);
  const featuredPost = posts[0];

  return (
    <div className="space-y-32 pb-32">
      <SEO 
        title={t('nav.home')} 
        description={t('home.heroDesc')} 
        ogImage="https://picsum.photos/seed/ai-hero-2026/1200/630"
      />
      
      {/* Latest Feed - Moved to top for AdSense approval */}
      <section className="container mx-auto px-6 pt-24 md:pt-40">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-1.5 bg-accent rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">The Feed</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-ink leading-none">FRESH <br />PERSPECTIVES.</h2>
          </div>
          <Link to="/blog" className="btn-secondary flex items-center gap-4 group text-sm uppercase tracking-widest">
            {t('home.viewAll')} <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {latestPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modern Bento Hero - Moved down */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[650px] lg:h-[750px]">
          {/* Main Hero Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-8 bento-item bg-ink p-12 flex flex-col justify-end group cursor-pointer"
          >
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/future-tech/1200/800" 
                alt="Future Tech" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            </div>
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4">
                <span className="px-5 py-2 bg-accent rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-white shadow-xl shadow-accent/20">
                  {t('home.heroBadge') || 'Featured Insight'}
                </span>
                <span className="text-stone-400 text-xs font-bold tracking-widest uppercase">12 min read</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                {t('home.heroTitle').split(' ').slice(0, -1).join(' ')} <br />
                <span className="text-accent">{t('home.heroTitle').split(' ').slice(-1)}</span>
              </h1>
              <p className="text-stone-400 text-xl md:text-2xl max-w-xl font-light leading-relaxed">
                {t('home.heroDesc')}
              </p>
              <div className="pt-6">
                <Link to={`/blog/${featuredPost.slug}`} className="btn-primary inline-flex items-center gap-4 bg-white text-ink hover:bg-accent hover:text-white group">
                  {t('home.readBlog')} <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Side Bento Cards - Content Focused */}
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bento-item bg-stone-50 border border-stone-100 p-10 flex flex-col justify-between group hover:bg-white hover:shadow-2xl hover:shadow-stone-200/50 transition-all"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black tracking-tighter leading-none text-ink uppercase">EXPERT <br />GUIDES</h3>
                <p className="text-stone-500 font-medium leading-relaxed">Deep dives into AI integration and productivity workflows.</p>
              </div>
              <Link to="/blog" className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-6 h-6 text-accent" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bento-item bg-ink p-10 flex flex-col justify-between group overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-1000">
                <img src="https://picsum.photos/seed/ai-trends/600/400" alt="Trends" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="relative z-10 flex justify-between items-start">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:-rotate-12 transition-transform duration-500">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="relative z-10 space-y-4">
                <h3 className="text-3xl font-black tracking-tighter leading-none text-white uppercase">TRENDING <br />INSIGHTS</h3>
                <p className="text-stone-400 font-medium leading-relaxed">Stay ahead with the latest updates in the AI landscape.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
