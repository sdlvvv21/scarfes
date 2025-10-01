import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { formatPrice, generateOrderId } from '../utils/helpers';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';
import Button from '../components/Button';

const Orders = () => {
  const { user } = useAuth();
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Mock order data - in a real app, this would come from an API
  const orders = [
    {
      id: generateOrderId(),
      date: '2024-01-15',
      status: 'delivered',
      total: 189.98,
      items: [
        {
          id: 1,
          name: 'Silk Elegance Scarf',
          price: 89.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1601925260369-0b0b0b0b0b0b?w=100&h=100&fit=crop'
        },
        {
          id: 2,
          name: 'Cashmere Winter Wrap',
          price: 99.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1601925260369-0b0b0b0b0b0b?w=100&h=100&fit=crop'
        }
      ],
      shippingAddress: {
        name: 'John Doe',
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001'
      }
    },
    {
      id: generateOrderId(),
      date: '2024-01-10',
      status: 'shipped',
      total: 75.99,
      items: [
        {
          id: 3,
          name: 'Floral Print Scarf',
          price: 45.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1601925260369-0b0b0b0b0b0b?w=100&h=100&fit=crop'
        },
        {
          id: 4,
          name: 'Geometric Pattern Scarf',
          price: 30.00,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1601925260369-0b0b0b0b0b0b?w=100&h=100&fit=crop'
        }
      ],
      shippingAddress: {
        name: 'John Doe',
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001'
      }
    },
    {
      id: generateOrderId(),
      date: '2024-01-05',
      status: 'processing',
      total: 199.99,
      items: [
        {
          id: 5,
          name: 'Luxury Pashmina Shawl',
          price: 199.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1601925260369-0b0b0b0b0b0b?w=100&h=100&fit=crop'
        }
      ],
      shippingAddress: {
        name: 'John Doe',
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001'
      }
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'shipped':
        return <Truck className="w-5 h-5 text-blue-600" />;
      case 'processing':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      default:
        return <Package className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-100';
      case 'shipped':
        return 'text-blue-600 bg-blue-100';
      case 'processing':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p className="text-gray-600">Track and manage your orders</p>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-16">
            <Package className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No orders yet</h2>
            <p className="text-gray-600 mb-8">
              You haven't placed any orders yet. Start shopping to see your orders here.
            </p>
            <Button onClick={() => window.location.href = '/shop'}>
              Start Shopping
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                {/* Order Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Order #{order.id}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Placed on {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="ml-1 capitalize">{order.status}</span>
                      </span>
                      <span className="text-lg font-semibold text-primary-800">
                        {formatPrice(order.total)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Actions */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        variant="outline"
                        onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                      >
                        {selectedOrder === order.id ? 'Hide Details' : 'View Details'}
                      </Button>
                      {order.status === 'delivered' && (
                        <Button variant="outline">
                          Reorder
                        </Button>
                      )}
                      {order.status === 'shipped' && (
                        <Button variant="outline">
                          Track Package
                        </Button>
                      )}
                    </div>

                    {/* Order Details */}
                    {selectedOrder === order.id && (
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-3">Order Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-gray-700 mb-2">Shipping Address</h5>
                            <p className="text-sm text-gray-600">
                              {order.shippingAddress.name}<br />
                              {order.shippingAddress.street}<br />
                              {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-700 mb-2">Order Summary</h5>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>{formatPrice(order.total * 0.92)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Shipping:</span>
                                <span>{order.total >= 100 ? 'Free' : formatPrice(9.99)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Tax:</span>
                                <span>{formatPrice(order.total * 0.08)}</span>
                              </div>
                              <div className="flex justify-between font-medium">
                                <span>Total:</span>
                                <span>{formatPrice(order.total)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
