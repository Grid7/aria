import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { useTranslation } from 'react-i18next';

export const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="py-24 text-center space-y-6">
      <SEO title={t('notfound.title')} description={t('notfound.desc')} />
      <h1 className="font-serif text-6xl font-bold text-stone-900">{t('notfound.heading')}</h1>
      <p className="text-lg text-stone-500 max-w-md mx-auto">
        {t('notfound.desc')}
      </p>
      <Link to="/" className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors">
        {t('notfound.back')}
      </Link>
    </div>
  );
};
