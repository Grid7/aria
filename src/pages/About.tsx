import React from 'react';
import { SEO } from '../components/SEO';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Sparkles, Target, Zap, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-paper min-h-screen pb-32">
      <SEO 
        title={t('about.title')} 
        description={t('about.desc')} 
      />
      
      <header className="pt-32 pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-stone-100 text-[10px] font-black uppercase tracking-widest text-ink">
              <Sparkles className="w-3 h-3 text-accent" />
              {t('about.title')}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-ink leading-[1.1]">
              {t('about.heading')}
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-500 font-light leading-relaxed">
              {t('about.subheading')}
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 space-y-32">
        {/* Story Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          <div className="md:col-span-4">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-stone-400 sticky top-32">
              {t('about.storyTitle')}
            </h2>
          </div>
          <div className="md:col-span-8 space-y-8 text-lg text-stone-600 font-light leading-relaxed">
            <p>{t('about.storyText1')}</p>
            <p>{t('about.storyText2')}</p>
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-ink text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 space-y-8">
            <Target className="w-12 h-12 text-accent" />
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
              {t('about.missionTitle')}
            </h2>
            <p className="text-xl md:text-2xl text-stone-400 font-light leading-relaxed max-w-2xl">
              {t('about.missionText')}
            </p>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          <div className="md:col-span-4">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-stone-400 sticky top-32">
              {t('about.valuesTitle')}
            </h2>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 space-y-4">
              <div className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-ink" />
              </div>
              <h3 className="text-xl font-bold text-ink">{t('about.value1Title')}</h3>
              <p className="text-stone-500 font-light">{t('about.value1Text')}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 space-y-4">
              <div className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-ink" />
              </div>
              <h3 className="text-xl font-bold text-ink">{t('about.value2Title')}</h3>
              <p className="text-stone-500 font-light">{t('about.value2Text')}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 space-y-4 sm:col-span-2">
              <div className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-ink" />
              </div>
              <h3 className="text-xl font-bold text-ink">{t('about.value3Title')}</h3>
              <p className="text-stone-500 font-light">{t('about.value3Text')}</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};
