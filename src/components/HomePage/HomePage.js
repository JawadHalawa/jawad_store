// src/components/HomePage/HomePage.jss
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import ProductPreviewModal from "../ProductPreviewModal/ProductPreviewModal";
import "./HomePage.css";

const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = useSelector((state) => state.products.products);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product, event) => {
    event.stopPropagation(); // Prevent the modal from showing
    dispatch(addToCart(product));
  };

  return (
    <div className="home-container">
      <h2>Welcome to Jawad E-commerce Site</h2>
      <p>Explore our products and enjoy shopping!</p>

      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product)}
          >
            <img
              src={`${process.env.PUBLIC_URL}${product.imageUrl}`}
              alt={product.name}
              className="home-product-image"
            />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              {isAuthenticated && (
                <button
                  className="add-to-cart-button"
                  onClick={(event) => handleAddToCart(product , event)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <ProductPreviewModal
        product={selectedProduct}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default HomePage;
