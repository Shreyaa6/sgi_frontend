import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Search.css';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [searchResults, setSearchResults] = useState([]);

  // Mock products for search
  const allProducts = [
    { id: 1, name: 'Premium Seeds Collection', category: 'Seeds', price: '₹299', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop&q=80' },
    { id: 2, name: 'Organic Fertilizer - 5kg', category: 'Fertilizers', price: '₹450', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop&q=80' },
    { id: 3, name: 'Eco-Friendly Pesticides', category: 'Pesticides', price: '₹380', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&q=80' },
    { id: 4, name: 'Nursery Plants Pack', category: 'Nursery & Plants', price: '₹550', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&q=80' },
    { id: 5, name: 'Soil Enrichment Kit', category: 'Fertilizers', price: '₹320', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop&q=80' },
    { id: 6, name: 'Water Efficiency Tools', category: 'Tools & Equipment', price: '₹680', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop&q=80' },
  ];

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });
  };

  return (
    <div className="search-page">
      <Navbar />
      <div className="search-page-content">
        <div className="search-hero">
          <h1 className="search-page-title">Search</h1>
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </form>
        </div>

        {searchQuery && (
          <div className="search-results">
            <h2 className="search-results-title">
              {searchResults.length > 0 
                ? `Found ${searchResults.length} ${searchResults.length === 1 ? 'result' : 'results'} for "${searchQuery}"`
                : `No results found for "${searchQuery}"`
              }
            </h2>
            
            {searchResults.length > 0 && (
              <div className="search-results-grid">
                {searchResults.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="search-result-item">
                    <div className="search-result-image-container">
                      <img src={product.image} alt={product.name} className="search-result-image" />
                    </div>
                    <div className="search-result-separator"></div>
                    <div className="search-result-details">
                      <h3 className="search-result-name">{product.name}</h3>
                      <p className="search-result-category">{product.category}</p>
                      <p className="search-result-price">{product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {!searchQuery && (
          <div className="search-empty">
            <p>Enter a search term to find products</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Search;

