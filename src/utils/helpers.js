// Format price with currency
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

// Calculate discount percentage
export const calculateDiscount = (originalPrice, currentPrice) => {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};

// Filter products based on search query and filters
export const filterProducts = (products, searchQuery, filters) => {
  let filtered = products;

  // Search filter
  if (searchQuery) {
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Category filter
  if (filters.category) {
    filtered = filtered.filter(product => product.category === filters.category);
  }

  // Price range filter
  if (filters.priceRange) {
    filtered = filtered.filter(product =>
      product.price >= filters.priceRange.min && product.price <= filters.priceRange.max
    );
  }

  // Color filter
  if (filters.color) {
    filtered = filtered.filter(product => product.color === filters.color);
  }

  // Material filter
  if (filters.material) {
    filtered = filtered.filter(product => product.material === filters.material);
  }

  // Sort products
  switch (filters.sortBy) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      filtered.sort((a, b) => b.id - a.id);
      break;
    case 'featured':
    default:
      filtered.sort((a, b) => b.featured - a.featured);
      break;
  }

  return filtered;
};

// Generate random order ID
export const generateOrderId = () => {
  return 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
};

// Validate email
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Validate password
export const validatePassword = (password) => {
  return password.length >= 6;
};








