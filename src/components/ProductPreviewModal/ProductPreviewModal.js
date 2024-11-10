// src/components/ProductPreviewModal/ProductPreviewModal.js
import React from 'react';
import './ProductPreviewModal.css';

const ProductPreviewModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={product.imageUrl} alt={product.name} className="modal-image" />
        <h3 className="modal-title">{product.name}</h3>
        <p className="modal-price">${product.price}</p>
        <p className="modal-description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPreviewModal;
