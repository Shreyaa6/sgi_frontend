import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './components/Home/Home';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Wishlist from './pages/Wishlist/Wishlist';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import Careers from './pages/Careers/Careers';
import Blogs from './pages/Blogs/Blogs';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import Cart from './pages/Cart/Cart';
import Search from './pages/Search/Search';
import FAQ from './pages/FAQ/FAQ';
import Terms from './pages/Terms/Terms';
import Privacy from './pages/Privacy/Privacy';
import ShippingReturns from './pages/ShippingReturns/ShippingReturns';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/shipping" element={<ShippingReturns />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

