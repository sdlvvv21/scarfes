import React from 'react';
import PageTransition from '../components/PageTransition';
import { Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <PageTransition className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">About Scarfes</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            We are passionate about bringing you the finest collection of scarves, 
            shawls, and wraps from around the world. Our mission is to help you 
            express your unique style with premium quality accessories.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, Scarfes began as a small passion project with a simple 
                mission: to curate the world's most beautiful and high-quality scarves. 
                What started as a personal collection has grown into a trusted destination 
                for scarf enthusiasts worldwide.
              </p>
              <p className="text-gray-600 mb-4">
                We work directly with artisans and manufacturers from renowned textile 
                regions, ensuring that every piece in our collection meets our strict 
                standards for quality, craftsmanship, and ethical production.
              </p>
              <p className="text-gray-600">
                Today, we're proud to offer a carefully curated selection of scarves 
                that celebrate both traditional craftsmanship and contemporary design, 
                helping our customers express their individuality through timeless style.
              </p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every scarf is carefully selected 
                for its materials, craftsmanship, and durability.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ethical Sourcing</h3>
              <p className="text-gray-600">
                We partner with suppliers who share our commitment to fair labor 
                practices and sustainable production methods.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We're committed 
                to providing exceptional service and support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Inspiration</h3>
              <p className="text-gray-600">
                We draw inspiration from cultures around the world, bringing you 
                unique designs and traditional techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate people behind Scarfes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
                bio: "Sarah founded Scarfes with a vision to make luxury scarves accessible to everyone."
              },
              {
                name: "Michael Chen",
                role: "Head of Curation",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
                bio: "Michael brings 15 years of experience in textile sourcing and design."
              },
              {
                name: "Emily Davis",
                role: "Customer Experience",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
                bio: "Emily ensures every customer has an exceptional experience with our brand."
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
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
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-primary-100 mb-8">
            Have questions about our products or need styling advice? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@scarfes.com"
              className="bg-white text-primary-800 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
            >
              Email Us
            </a>
            <a
              href="tel:+15551234567"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition-colors duration-200"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;


