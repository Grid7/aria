import React from 'react';
import { SEO } from '../components/SEO';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Mail, MapPin, Globe, ArrowUpRight, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ko';

  return (
    <div className="bg-paper min-h-screen pb-32">
      <SEO 
        title={t('contact.title')} 
        description={t('contact.desc')} 
      />
      
      <header className="pt-32 pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-stone-100 text-[10px] font-black uppercase tracking-widest text-ink">
              <MessageSquare className="w-3 h-3 text-accent" />
              {t('contact.title')}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-ink leading-[1.1]">
              {t('contact.heading')}
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-500 font-light leading-relaxed">
              {t('contact.subheading')}
            </p>
          </motion.div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-stone-100 flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                  <Mail className="w-6 h-6 text-ink" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-stone-400 mb-2">{t('contact.emailUs')}</h3>
                  <a href="mailto:contact@aria.ai.kr" className="text-2xl font-bold text-ink hover:text-accent transition-colors">
                    contact@aria.ai.kr
                  </a>
                  <p className="text-stone-500 mt-2 font-light">{t('contact.emailDesc')}</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-stone-100 flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                  <MapPin className="w-6 h-6 text-ink" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-stone-400 mb-2">{t('contact.office')}</h3>
                  <p className="text-2xl font-bold text-ink">{t('contact.officeDesc')}</p>
                  <p className="text-stone-500 mt-2 font-light">{t('contact.remote')}</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-stone-100 flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                  <Globe className="w-6 h-6 text-ink" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-stone-400 mb-2">{t('contact.social')}</h3>
                  <div className="flex gap-4 mt-2">
                    {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                      <a key={social} href="#" className="text-lg font-bold text-ink hover:text-accent transition-colors flex items-center gap-1">
                        {social} <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                  <p className="text-stone-500 mt-2 font-light">{t('contact.socialDesc')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-stone-100 flex flex-col items-center justify-center text-center space-y-8 h-full min-h-[400px]">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-10 h-10 text-accent" />
              </div>
              <h2 className="text-3xl font-black tracking-tighter text-ink">
                {lang === 'ko' ? '이메일로 문의하기' : 'Contact Us via Email'}
              </h2>
              <p className="text-stone-500 font-light text-lg max-w-md">
                {lang === 'ko' 
                  ? '현재 더 나은 서비스 제공을 위해 문의 양식을 개편 중입니다. 모든 문의 사항은 아래 이메일로 보내주시면 신속하게 답변해 드리겠습니다.' 
                  : 'We are currently revamping our contact form to serve you better. Please send all inquiries to the email below, and we will respond promptly.'}
              </p>
              <a 
                href="mailto:contact@aria.ai.kr" 
                className="btn-primary bg-ink hover:bg-accent text-white py-4 px-8 text-lg rounded-2xl inline-flex items-center gap-3 mt-4"
              >
                <Mail className="w-5 h-5" />
                contact@aria.ai.kr
              </a>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-ink">{t('contact.faqTitle')}</h2>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-stone-100">
                <h3 className="text-xl font-bold text-ink mb-4">{t(`contact.faq${i}Q` as any)}</h3>
                <p className="text-stone-500 font-light leading-relaxed">{t(`contact.faq${i}A` as any)}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};
