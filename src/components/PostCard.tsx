import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { formatDate } from '../utils';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowUpRight, Clock } from 'lucide-react';

interface PostCardProps {
  post: BlogPost;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ko';

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Link to={`/blog/${post.slug}`} className="flex flex-col h-full bg-white rounded-[2.5rem] border border-stone-100 overflow-hidden card-hover">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title[lang]} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-ink shadow-sm">
              {post.category[lang]}
            </span>
          </div>
        </div>
        
        <div className="p-10 flex flex-col flex-grow space-y-6">
          <div className="flex items-center gap-4 text-stone-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">{formatDate(post.date)}</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-stone-200" />
            <span className="text-[10px] font-black uppercase tracking-widest">12 min read</span>
          </div>

          <h3 className="text-3xl font-black tracking-tighter text-ink leading-tight group-hover:text-accent transition-colors">
            {post.title[lang]}
          </h3>
          
          <p className="text-stone-500 font-light leading-relaxed line-clamp-3 text-lg">
            {post.description[lang]}
          </p>

          <div className="pt-8 mt-auto border-t border-stone-50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center border border-stone-200 overflow-hidden shadow-sm">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`} 
                  alt={post.author} 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black text-ink uppercase tracking-widest">{post.author}</span>
                <span className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Contributor</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
