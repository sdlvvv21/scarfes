import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { formatPrice, calculateDiscount } from '../utils/helpers';

const ProductCard = ({ product, showAddToCart = true }) => {
  const { addToCart } = useCart();
  const discount = product.originalPrice ? calculateDiscount(product.originalPrice, product.price) : 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card group rounded-xl overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium shadow">
            -{discount}%
          </div>
        )}
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-50">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 font-heading text-lg">{product.name}</h3>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-base md:text-lg font-semibold text-primary-800">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`}
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>
        
        {showAddToCart && (
          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 bg-primary-800 text-white py-2.5 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;


