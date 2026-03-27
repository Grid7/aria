import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { posts } from '../data/posts';

import { SEO } from '../components/SEO';
import { formatDate } from '../utils';
import { Clock, ChevronLeft, Cpu, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useSpring } from 'motion/react';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ko';
  const [readingTime, setReadingTime] = useState(0);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      const words = post.content[lang].split(/\s+/).length;
      setReadingTime(Math.ceil(words / 200));
      window.scrollTo(0, 0);
    }
  }, [post, lang]);

  if (!post) {
    return <Navigate to="/404" />;
  }

  const content = post.content[lang];

  // Simple TOC generation from content (H2s)
  const headings = content
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => line.replace('## ', '').trim());

  return (
    <div className="relative bg-paper">
      <SEO 
        title={post.title[lang]} 
        description={post.description[lang]} 
        ogType="article"
        ogImage={post.image}
        canonical={`https://aria.ai.kr/blog/${post.slug}`}
      />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />
      
      {/* Hero Header */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 hover:text-accent transition-colors group">
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {t('post.back')}
            </Link>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-stone-100 text-[10px] font-black uppercase tracking-widest text-ink">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {post.category[lang]}
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-ink leading-[0.95] max-w-5xl">
              {post.title[lang]}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center border border-stone-200 overflow-hidden shadow-sm">
                  <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`} 
                    alt={post.author} 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-ink">{post.author}</span>
                  <span className="text-[8px] opacity-60">Author</span>
                </div>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-stone-200" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{formatDate(post.date)} • {readingTime} MIN READ</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl shadow-stone-200/50 relative group"
        >
          <img 
            src={post.image} 
            alt={post.title[lang]} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 pb-32">
        {/* Sidebar / TOC */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-32 space-y-12">
            {headings.length > 0 && (
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-300">Table of Contents</h4>
                <nav className="flex flex-col gap-4">
                  {headings.map((heading, i) => (
                    <a 
                      key={i}
                      href={`#${heading.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm font-medium text-stone-400 hover:text-accent transition-colors flex items-center gap-3 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-stone-200 group-hover:bg-accent group-hover:scale-150 transition-all" />
                      {heading}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-7 prose prose-stone max-w-none">

          
          <div className="markdown-body">
            <ReactMarkdown
              components={{
                h2: ({ node, ...props }) => {
                  const id = String(props.children).toLowerCase().replace(/\s+/g, '-');
                  return <h2 id={id} className="scroll-mt-32 text-4xl font-black tracking-tight text-ink mt-20 mb-8">{props.children}</h2>;
                },
                h3: ({ node, ...props }) => {
                  return <h3 className="text-2xl font-black tracking-tight text-ink mt-12 mb-6">{props.children}</h3>;
                },
                p: ({ node, ...props }) => {
                  return <p className="text-xl text-stone-600 font-light leading-relaxed mb-8">{props.children}</p>;
                },
                img: (props: any) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="my-12 rounded-[2rem] overflow-hidden shadow-xl"
                  >
                    <img {...props} className="w-full h-auto" referrerPolicy="no-referrer" />
                  </motion.div>
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-4 border-accent pl-8 my-12 italic text-2xl text-ink font-light leading-relaxed">
                    {props.children}
                  </blockquote>
                )
              }}
            >
              {content}
            </ReactMarkdown>
          </div>



          {/* Author Bio Footer */}
          <footer className="mt-32 pt-20 border-t border-stone-100">
            <div className="flex flex-col md:flex-row items-center gap-12 p-12 bg-stone-50 rounded-[3rem] border border-stone-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              
              <div className="w-32 h-32 rounded-[2rem] bg-white p-1 border border-stone-200 flex-shrink-0 shadow-xl relative z-10">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`} 
                  alt={post.author} 
                  className="w-full h-full rounded-[1.8rem]"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-6 text-center md:text-left relative z-10">
                <div className="space-y-2">
                  <h4 className="text-3xl font-black tracking-tight text-ink">{post.author}</h4>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Senior Tech Strategist</p>
                </div>
                <p className="text-lg text-stone-500 leading-relaxed font-light">
                  {lang === 'ko' 
                    ? 'Aria 편집팀은 AI, 자동화, 그리고 미래 기술 트렌드를 심도 있게 분석하는 전문가 그룹입니다. 독자들에게 실질적인 가치와 통찰력을 제공하기 위해 끊임없이 연구하고 있습니다.'
                    : 'The Aria Editorial Team is a group of experts deeply analyzing AI, automation, and future tech trends. We constantly research to provide practical value and insights to our readers.'}
                </p>
              </div>
            </div>

            <div className="mt-20 flex flex-col md:flex-row items-center justify-end gap-8">
              <Link to="/blog" className="flex items-center gap-3 text-ink hover:text-accent transition-colors group">
                <span className="text-[10px] font-black uppercase tracking-widest">Next Article</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </footer>
        </main>

        {/* Right Sidebar (Optional Ads/Related) */}
        <aside className="lg:col-span-2 hidden lg:block">
          <div className="sticky top-32 space-y-8">
            <div className="aspect-[3/4] bg-stone-50 rounded-3xl border border-stone-100 flex items-center justify-center p-6 text-center">
              <div className="space-y-4">
                <Cpu className="w-10 h-10 mx-auto text-stone-200" />
                <p className="text-[10px] font-black uppercase tracking-widest text-stone-300">Advertisement</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
