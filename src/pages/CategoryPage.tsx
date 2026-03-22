import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { PostCard } from '../components/PostCard';

import { SEO } from '../components/SEO';
import { ChevronLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ko';

  // Filter by english category name since that's what's in the URL
  const filteredPosts = posts.filter((p) => p.category.en === category);
  
  // Get localized category name
  const localizedCategory = filteredPosts.length > 0 ? filteredPosts[0].category[lang] : category;

  return (
    <div className="bg-paper min-h-screen">
      <SEO 
        title={localizedCategory || 'Category'} 
        description={`${t('category.desc')} ${localizedCategory}.`} 
      />
      
      <header className="pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 hover:text-accent transition-colors group">
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {t('category.back')}
            </Link>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-stone-100 text-[10px] font-black uppercase tracking-widest text-ink">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {t('category.label')}
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-ink leading-[0.9] max-w-5xl">
              {localizedCategory}
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-500 max-w-2xl font-light leading-relaxed">
              {t('category.desc')} {localizedCategory}.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 pb-32">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PostCard post={post} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-32 text-center">
              <p className="text-stone-400 font-light text-2xl">{t('category.empty')}</p>
            </div>
          )}
        </div>

        <div className="mt-20">

        </div>
      </div>
    </div>
  );
};
