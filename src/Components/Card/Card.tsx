import React from 'react';
import './Card.css';
import { Product } from '../../types/product';

interface CardProps {
  data: Product;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="product-card">
      <img src={data.image} alt={data.title} className="product-image" />
      <h3 className="product-title">{data.title}</h3>
      <p className="product-price">${data.price}</p>
      <button className="product-button">View Details</button>
    </div>
  );
};

export default Card;
