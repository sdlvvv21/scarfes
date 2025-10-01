import React from 'react';
import PageTransition from '../components/PageTransition';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { formatPrice } from '../utils/helpers';
import CartItem from '../components/CartItem';
import Button from '../components/Button';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

const Cart = () => {
  const { items, getTotalPrice, getTotalItems, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      // In a real app, this would redirect to checkout
      alert('Checkout functionality would be implemented here');
    }
  };

  if (items.length === 0) {
    return (
      <PageTransition className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="text-gray-400 mb-6">
              <ShoppingBag className="w-24 h-24 mx-auto" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button onClick={() => navigate('/shop')}>
              Start Shopping
            </Button>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition className="min-h-screen bg-gray-50 pb-24 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="p-2 text-gray-600 hover:text-primary-800 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Cart Items ({getTotalItems()})
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-sm text-red-600 hover:text-red-700 transition-colors duration-200"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">
                    {getTotalPrice() >= 100 ? 'Free' : formatPrice(9.99)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">{formatPrice(getTotalPrice() * 0.08)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-semibold text-primary-800">
                      {formatPrice(getTotalPrice() + (getTotalPrice() >= 100 ? 0 : 9.99) + (getTotalPrice() * 0.08))}
                    </span>
                  </div>
                </div>
              </div>

              {getTotalPrice() < 100 && (
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-3 mb-6">
                  <p className="text-sm text-primary-800">
                    Add {formatPrice(100 - getTotalPrice())} more for free shipping!
                  </p>
                </div>
              )}

              <Button
                onClick={handleCheckout}
                className="w-full mb-4 hidden md:block"
                size="lg"
              >
                {isAuthenticated ? 'Proceed to Checkout' : 'Login to Checkout'}
              </Button>

              <Link
                to="/shop"
                className="block w-full text-center border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Checkout Bar */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
        <div className="max-w-7xl mx-auto">
          <Button onClick={handleCheckout} className="w-full" size="lg">
            {isAuthenticated ? 'Proceed to Checkout' : 'Login to Checkout'}
          </Button>
        </div>
      </div>
    </PageTransition>
  );
};

export default Cart;


