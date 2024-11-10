// src/components/ProductDashboard.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; 
import { addProduct, removeProduct, editProduct } from '../../redux/actions/productActions';
import { addToCart } from '../../redux/actions/cartActions'; 
import './productDashboard.css';

const ProductDashboard = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const [product, setProduct] = useState({ id: null, name: '', price: 0, description: '', imageUrl: '' });
  const [error, setError] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct({ ...product, imageUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (product.name.trim() === '' || product.price <= 0) {
      setError('Product name and price are required and price must be greater than 0.');
      return;
    }
    if (product.id) {
      dispatch(editProduct(product.id, product)); 
    } else {
      const newProduct = { ...product, id: uuidv4() }; 
      dispatch(addProduct(newProduct)); 
    }
    setProduct({ id: null, name: '', price: 0, description: '', imageUrl: '' });
    setError('');
  };

  const handleEdit = (product) => {
    setProduct(product); 
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); 
  };

  return (
    <div className="dashboard-container">
      <h2>Product Dashboard</h2>
      <input
        className="input-field"
        type="text"
        placeholder="Product Name"
        value={product.name}
        onChange={e => setProduct({ ...product, name: e.target.value })}
      />
      <input
        className="input-field"
        type="number"
        placeholder="Product Price"
        value={product.price}
        onChange={e => setProduct({ ...product, price: e.target.value })}
      />
      <textarea
        className="input-field"
        placeholder="Product Description"
        value={product.description}
        onChange={e => setProduct({ ...product, description: e.target.value })}
      />
      <input
        className="input-field"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <img src={product.imageUrl} alt="Product Preview" className="image-preview" />
      <button className="button" onClick={handleSubmit}>
        {product.id ? 'Update Product' : 'Add Product'}
      </button>
      {error && <p className="error-message">{error}</p>}
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index} className="product-item">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            {product.name} - ${product.price}
            <div>
              <button className="button btn-edit" onClick={() => handleEdit(product)}>Edit</button>
              <button className="button btn-del" onClick={() => dispatch(removeProduct(product.id))}>Delete</button>
              <button className="button btn-atc" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDashboard;
