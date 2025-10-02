import React from 'react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <PageTransition className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Premium Scarves for Every Occasion
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Discover our curated collection of luxury scarves, shawls, and wraps. 
                From silk elegance to cashmere warmth, find your perfect style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center bg-white text-primary-800 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-800 transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img
                src="/headscarf.jpg "
                alt="Luxury scarves"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $100</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">Premium materials and craftsmanship</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
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
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
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


