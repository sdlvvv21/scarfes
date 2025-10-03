import React from "react";
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{t('contact.title')}</h1>
      <p className="text-gray-600 mb-6">
        {t('contact.subtitle')}
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder={t('contact.namePlaceholder')}
          className="w-full border border-gray-300 rounded-lg p-3"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="email"
          placeholder={t('contact.emailPlaceholder')}
          className="w-full border border-gray-300 rounded-lg p-3"
        />
        <input
          type="tel"
          placeholder={t('contact.phonePlaceholder')}
          className="w-full border border-gray-300 rounded-lg p-3"
        />
        </div>
        <textarea
          placeholder={t('contact.messagePlaceholder')}
          className="w-full border border-gray-300 rounded-lg p-3 h-32"
        />
        <button
          type="submit"
          className="bg-black text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-800"
        >
          {t('contact.sendMessage')}
        </button>
      </form>
    </div>
  );
}
