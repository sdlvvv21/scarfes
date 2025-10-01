import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { formatPrice } from '../utils/helpers';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-200">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-lg"
      />
      
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-600 capitalize">{item.material} • {item.color}</p>
        <p className="text-lg font-semibold text-primary-800 mt-1">
          {formatPrice(item.price)}
        </p>
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
        >
          <Minus className="w-4 h-4" />
        </button>
        
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      
      <div className="text-right">
        <p className="font-semibold text-primary-800">
          {formatPrice(item.price * item.quantity)}
        </p>
      </div>
      
      <button
        onClick={() => removeFromCart(item.id)}
        className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default CartItem;
