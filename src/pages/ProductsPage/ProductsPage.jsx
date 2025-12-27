import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './ProductsPage.css';

const ProductsPage = () => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [sortBy, setSortBy] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [addedToCartIds, setAddedToCartIds] = useState(new Set());
  const timeoutRefs = useRef({});

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(timeoutRefs.current).forEach(timeout => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, []);

  const categories = ['ALL', 'Seeds', 'Fertilizers', 'Pesticides', 'Nursery & Plants', 'Tools & Equipment', 'Agricultural Inputs'];

  const products = [
    { id: 1, name: 'Premium Seeds Collection', size: '500g', price: '₹299', category: 'Seeds', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 2, name: 'Organic Fertilizer - 5kg', size: '5kg', price: '₹450', category: 'Fertilizers', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 3, name: 'Eco-Friendly Pesticides', size: '1L', price: '₹380', category: 'Pesticides', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 4, name: 'Nursery Plants Pack', size: '10 plants', price: '₹550', category: 'Nursery & Plants', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 5, name: 'Soil Enrichment Kit', size: '2kg', price: '₹320', category: 'Fertilizers', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 6, name: 'Water Efficiency Tools', size: '1 set', price: '₹680', category: 'Tools & Equipment', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 7, name: 'Premium Wheat Seeds', size: '1kg', price: '₹250', category: 'Seeds', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 8, name: 'NPK Fertilizer Mix', size: '10kg', price: '₹850', category: 'Fertilizers', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 9, name: 'Organic Pesticide Spray', size: '500ml', price: '₹420', category: 'Pesticides', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 10, name: 'Vegetable Seeds Pack', size: '200g', price: '₹180', category: 'Seeds', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 11, name: 'Compost Fertilizer', size: '20kg', price: '₹650', category: 'Fertilizers', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 12, name: 'Natural Pest Repellent', size: '250ml', price: '₹350', category: 'Pesticides', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 13, name: 'Flower Seeds Collection', size: '150g', price: '₹220', category: 'Seeds', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 14, name: 'Liquid Fertilizer', size: '1L', price: '₹480', category: 'Fertilizers', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 15, name: 'Herbicide Solution', size: '500ml', price: '₹390', category: 'Pesticides', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 16, name: 'Hybrid Seeds Pack', size: '300g', price: '₹320', category: 'Seeds', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 17, name: 'Garden Tools Set', size: '5 pieces', price: '₹750', category: 'Tools & Equipment', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 18, name: 'Potting Soil Mix', size: '25kg', price: '₹580', category: 'Agricultural Inputs', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 19, name: 'Seedling Trays', size: '50 cells', price: '₹120', category: 'Nursery & Plants', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 20, name: 'Plant Growth Hormone', size: '100ml', price: '₹280', category: 'Agricultural Inputs', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 21, name: 'Rice Seeds Premium', size: '2kg', price: '₹380', category: 'Seeds', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 22, name: 'Bio Fertilizer', size: '1kg', price: '₹320', category: 'Fertilizers', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 23, name: 'Fungicide Solution', size: '250ml', price: '₹290', category: 'Pesticides', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 24, name: 'Garden Pruning Shears', size: '1 piece', price: '₹450', category: 'Tools & Equipment', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 25, name: 'Fruit Tree Saplings', size: '5 plants', price: '₹850', category: 'Nursery & Plants', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 26, name: 'Soil Testing Kit', size: '1 kit', price: '₹680', category: 'Agricultural Inputs', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 27, name: 'Corn Seeds Hybrid', size: '500g', price: '₹220', category: 'Seeds', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 28, name: 'Vermicompost', size: '10kg', price: '₹420', category: 'Fertilizers', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 29, name: 'Insecticide Spray', size: '500ml', price: '₹360', category: 'Pesticides', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 30, name: 'Watering Can', size: '5L', price: '₹280', category: 'Tools & Equipment', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 31, name: 'Herb Plants Set', size: '6 plants', price: '₹380', category: 'Nursery & Plants', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&q=80', soldOut: false },
    { id: 32, name: 'Plant Nutrients Mix', size: '500g', price: '₹250', category: 'Agricultural Inputs', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop&q=80', soldOut: false },
  ];

  const filteredProducts = selectedCategory === 'ALL' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const totalProducts = filteredProducts.length;
  const productsPerPage = 16;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="products-page">
      <Navbar />
      <div className="products-page-content">
        <div className="products-header">
          <h1 className="products-page-title">Product</h1>
          
          <div className="products-categories">
            <div className="category-row">
              {categories.slice(0, 5).map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="category-row">
              {categories.slice(5).map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="products-sort">
            <button 
              className={`sort-btn ${sortBy === 'latest' ? 'active' : ''}`}
              onClick={() => setSortBy('latest')}
            >
              Latest
            </button>
            <span className="sort-separator">|</span>
            <button 
              className={`sort-btn ${sortBy === 'popular' ? 'active' : ''}`}
              onClick={() => setSortBy('popular')}
            >
              Popular
            </button>
          </div>
        </div>

        <div className="products-count">
          Total {totalProducts} items
        </div>

        <div className="products-grid">
          {paginatedProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-item">
              <div className="product-item-image-container">
                {product.soldOut && (
                  <div className="sold-out-badge">SOLD OUT</div>
                )}
                <img src={product.image} alt={product.name} className="product-item-image" />
              </div>
              <div className="product-item-separator"></div>
              <div className="product-item-details">
                <h3 className="product-item-name">{product.name}</h3>
                <p className="product-item-size">{product.size}</p>
                <div className="product-item-price-row">
                  <p className="product-item-price">{product.price}</p>
                  <div className="product-item-actions">
                    <button 
                      className={`product-action-btn wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
                      aria-label="Add to wishlist"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleWishlist(product);
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill={isInWishlist(product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </button>
                    <button 
                      className="product-action-btn cart-btn" 
                      aria-label="Add to cart"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        // Clear any existing timeout for this product
                        if (timeoutRefs.current[product.id]) {
                          clearTimeout(timeoutRefs.current[product.id]);
                        }
                        
                        addToCart(product);
                        
                        // Add to the set of added products
                        setAddedToCartIds(prev => new Set([...prev, product.id]));
                        
                        // Set timeout to remove from set after 2 seconds
                        timeoutRefs.current[product.id] = setTimeout(() => {
                          setAddedToCartIds(prev => {
                            const newSet = new Set(prev);
                            newSet.delete(product.id);
                            return newSet;
                          });
                          delete timeoutRefs.current[product.id];
                        }, 2000);
                      }}
                    >
                      {addedToCartIds.has(product.id) ? (
                        <span className="added-message">Added!</span>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="products-pagination">
          <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            &lt;&lt;
          </button>
          <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
              return (
                <button
                  key={page}
                  className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              );
            } else if (page === currentPage - 2 || page === currentPage + 2) {
              return <span key={page} className="pagination-ellipsis">...</span>;
            }
            return null;
          })}
          <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
          <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            &gt;&gt;
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;

