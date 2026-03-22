import React from 'react';
import { SEO } from '../components/SEO';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-paper min-h-screen pb-32">
      <SEO 
        title={t('privacy.title')} 
        description="Our privacy policy details how we collect, use, and protect your data at Aria Insights." 
      />
      
      <header className="pt-32 pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-stone-100 text-[10px] font-black uppercase tracking-widest text-ink">
              <ShieldCheck className="w-3 h-3 text-accent" />
              {t('privacy.title')}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-ink leading-[1.1]">
              {t('privacy.title')}
            </h1>
            
            <p className="text-sm font-bold uppercase tracking-widest text-stone-400">
              {t('privacy.updated')}
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 md:p-16 rounded-[3rem] shadow-sm border border-stone-100 space-y-12"
        >
          <p className="text-xl text-stone-600 font-light leading-relaxed">
            {t('privacy.intro')}
          </p>

          <div className="space-y-12">
            {[1, 2, 3, 4, 5, 6].map((sectionNum) => (
              <section key={sectionNum} className="space-y-4">
                <h2 className="text-2xl font-bold text-ink">
                  {t(`privacy.section${sectionNum}Title` as any)}
                </h2>
                <div className="space-y-4 text-stone-500 font-light leading-relaxed">
                  <p>{t(`privacy.section${sectionNum}Text1` as any)}</p>
                  {t(`privacy.section${sectionNum}Text2` as any) && (
                    <p>{t(`privacy.section${sectionNum}Text2` as any)}</p>
                  )}
                </div>
              </section>
            ))}
          </div>

          <div className="pt-12 border-t border-stone-100">
            <p className="text-stone-600 font-medium">
              {t('privacy.contactUs')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
