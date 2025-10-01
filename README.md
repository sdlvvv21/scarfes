# Scarfes - Premium Scarf Collection

A modern React frontend application for a scarf-selling business, built with React Router, Context API, and TailwindCSS.

## Features

- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Product Catalog**: Browse, search, and filter scarves
- **Shopping Cart**: Add/remove items with quantity management
- **User Authentication**: Login/signup with form validation
- **Order Management**: View order history and details
- **Modern UI**: Clean, professional design inspired by luxury fashion brands

## Pages

- **Home**: Hero section, featured products, testimonials
- **Shop**: Product listing with search and filters
- **Product Detail**: Individual product pages with image gallery
- **About**: Company information and team
- **Cart**: Shopping cart with checkout flow
- **Orders**: Order history and tracking
- **Login/Signup**: User authentication

## Components

- **Navbar**: Navigation with cart counter and user menu
- **Footer**: Links and company information
- **ProductCard**: Product display with add to cart
- **Button**: Reusable button component with variants
- **CartItem**: Individual cart item management
- **SearchBar**: Product search functionality
- **FilterPanel**: Product filtering options

## State Management

- **CartContext**: Shopping cart state and operations
- **AuthContext**: User authentication state
- **FilterContext**: Product filtering state
- **SearchContext**: Search query and results

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd scarfes
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React Context providers
├── data/              # Sample data and constants
├── pages/             # Page components
├── utils/             # Utility functions
├── App.jsx            # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## Technologies Used

- **React 18** - UI library
- **React Router 6** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Vite** - Build tool and dev server

## Assets: Where to store images and how to reference them

You can store images in either location depending on your need:

1) Public assets (recommended for product images)
- Put files in `public/images/...`
- Refer with absolute URL from root at runtime (no import needed):
  - In JSX: `<img src="/images/scarves/silk-rose.jpg" alt="Silk Rose" />`
  - In data files like `src/data/products.js`: `image: "/images/scarves/silk-rose.jpg"`
- Pros: URL remains stable, no bundling overhead, easy to update without code changes.

2) Imported assets (use for component-specific graphics)
- Put files in `src/assets/...`
- Import and use in components:
  ```jsx
  import heroImg from '../assets/hero/banner.png'
  <img src={heroImg} alt="Banner" />
  ```
- Pros: Hashed filenames for cache-busting in builds; tree-shaken if unused.

Notes
- For dynamic product catalogs, prefer `public/images` so `src/data/products.js` can point to plain paths.
- When deploying, make sure the `public/` folder is included so URLs like `/images/...` resolve.

## Features Overview

### Shopping Experience
- Browse products by category, material, color, and price
- Search products by name or description
- Add items to cart with quantity selection
- View detailed product information
- Responsive design for all devices

### User Management
- User registration and login
- Order history tracking
- Profile management (ready for backend integration)

### Cart & Checkout
- Add/remove items from cart
- Update quantities
- Calculate totals with tax and shipping
- Free shipping threshold

## Backend Integration Ready

The application is designed to be easily integrated with a backend API:

- Context providers can be updated to make API calls
- Form submissions are ready for API endpoints
- State management is structured for server synchronization
- Authentication flow is prepared for JWT tokens

## Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update color palette in the config file
- Customize component styles in individual files

### Data
- Replace sample data in `src/data/products.js`
- Update product categories and filters
- Modify user authentication flow

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.




