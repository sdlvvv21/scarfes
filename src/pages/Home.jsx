import React from 'react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, Feather, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <PageTransition className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
        style={{ backgroundImage: "url('/headscarf.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-600/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Premium Scarves for Every Generation
          </h1>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl">
            From bold trends to timeless elegance — explore scarves designed for youth, women, and the older generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-white text-primary-800 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
            >
              Shop Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Age Group Highlights */}
      <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Youth */}
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Youth</h3>
              <p className="text-gray-600">Trendy, bold, and stylish scarves for the new generation.</p>
            </div>

            {/* Middle-aged Women */}
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Feather className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Middle-Aged Women</h3>
              <p className="text-gray-600">Elegant, versatile, and designed to match every occasion.</p>
            </div>

            {/* Older Generation */}
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Older Generation</h3>
              <p className="text-gray-600">Classic, timeless comfort that never goes out of style.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Handpicked favorites from our collection</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, idx) => (
              <div key={product.id} data-aos="fade-up" data-aos-delay={idx * 75}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="150">
            <Link
              to="/shop"
              className="inline-flex items-center bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
            >
              View All Products <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real reviews from satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                text: "The silk scarf is absolutely beautiful! The quality is exceptional and it arrived quickly."
              },
              {
                name: "Michael Chen",
                rating: 5,
                text: "Love my cashmere wrap. It's so soft and warm, perfect for winter evenings."
              },
              {
                name: "Emily Davis",
                rating: 5,
                text: "Great customer service and the product exceeded my expectations. Will definitely order again!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-800 text-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-primary-100 mb-8">
            Subscribe to our newsletter for exclusive offers and new arrivals
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="bg-white text-primary-800 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
