import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    const raw = e.target.value;
    // Allow only letters and spaces (unicode letters)
    const cleaned = raw.replace(/[^\p{L} \-']/gu, '');
    setName(cleaned);
  };

  const formatUzPhone = (value) => {
    // Keep only digits
    const digits = value.replace(/\D/g, '');
    // Ensure country code 998
    const withoutCountry = digits.startsWith('998') ? digits.slice(3) : digits;
    const parts = [];
    // +998-XX-XXX-XX-XX
    const a = withoutCountry.slice(0, 2);
    const b = withoutCountry.slice(2, 5);
    const c = withoutCountry.slice(5, 7);
    const d = withoutCountry.slice(7, 9);
    let formatted = '+998';
    if (a) formatted += `-${a}`;
    if (b) formatted += `-${b}`;
    if (c) formatted += `-${c}`;
    if (d) formatted += `-${d}`;
    return formatted;
  };

  const handlePhoneChange = (e) => {
    setPhone(formatUzPhone(e.target.value));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) newErrors.email = 'Invalid email';
    // Expect full length: +998-00-000-00-00 => 1+3 + 4 separators + 2+3+2+2 = 1? Let's check length 17
    if (phone.length !== 17) newErrors.phone = 'Invalid phone';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Submit logic placeholder
    alert('Message sent');
  };
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{t('contact.title')}</h1>
      <p className="text-gray-600 mb-6">
        {t('contact.subtitle')}
      </p>

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          placeholder={t('contact.namePlaceholder')}
          value={name}
          onChange={handleNameChange}
          className="w-full border border-gray-300 rounded-lg p-3"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="email"
          placeholder={t('contact.emailPlaceholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full border rounded-lg p-3 ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
          inputMode="email"
        />
        <input
          type="tel"
          placeholder={t('contact.phonePlaceholder')}
          value={phone}
          onChange={handlePhoneChange}
          className={`w-full border rounded-lg p-3 ${errors.phone ? 'border-red-400' : 'border-gray-300'}`}
          inputMode="numeric"
          maxLength={17}
        />
        </div>
        <textarea
          placeholder={t('contact.messagePlaceholder')}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 h-32"
        />
        <button
          type="submit"
          className="bg-black text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-800"
        >
          {t('contact.sendMessage')}
        </button>
        {(errors.email || errors.phone) && (
          <div className="text-red-600 text-sm">
            {errors.email && <div>{errors.email}</div>}
            {errors.phone && <div>{errors.phone}</div>}
          </div>
        )}
      </form>
    </div>
  );
}
