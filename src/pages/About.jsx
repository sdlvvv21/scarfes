import React from 'react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import { Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <PageTransition className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">{t('about.hero.title')}</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.story.title')}</h2>
              {t('about.story.content', { returnObjects: true }).map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1601925260369-0b0b0b0b0b0b?w=600&h=400&fit=crop"
                alt="Our story"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.values.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('about.values.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('about.values.qualityFirst.title')}</h3>
              <p className="text-gray-600">
                {t('about.values.qualityFirst.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('about.values.ethicalSourcing.title')}</h3>
              <p className="text-gray-600">
                {t('about.values.ethicalSourcing.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('about.values.customerFocus.title')}</h3>
              <p className="text-gray-600">
                {t('about.values.customerFocus.description')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('about.values.globalInspiration.title')}</h3>
              <p className="text-gray-600">
                {t('about.values.globalInspiration.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.team.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('about.team.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t('about.team.members', { returnObjects: true }).map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('about.contact.title')}</h2>
          <p className="text-xl text-primary-100 mb-8">
            {t('about.contact.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@scarfes.com"
              className="bg-white text-primary-800 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
            >
              {t('about.contact.emailUs')}
            </a>
            <a
              href="tel:+15551234567"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition-colors duration-200"
            >
              {t('about.contact.callUs')}
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;


