import React from 'react';
import { posts } from '../data/posts';
import { PostCard } from '../components/PostCard';

import { SEO } from '../components/SEO';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export const BlogList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-paper min-h-screen">
      <SEO 
        title={t('nav.blog')} 
        description={t('blog.desc')} 
      />
      
      <header className="pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-stone-100 text-[10px] font-black uppercase tracking-widest text-ink">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Journal Archive
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-ink leading-[0.9] max-w-5xl">
              {t('blog.title')}
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-500 max-w-2xl font-light leading-relaxed">
              {t('blog.desc')}
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 pb-32">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </div>

        <div className="mt-20">

        </div>
      </div>
    </div>
  );
};
