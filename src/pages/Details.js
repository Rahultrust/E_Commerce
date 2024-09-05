// src/components/Product.js
import React from "react";
import { useParams } from "react-router-dom";
import products from "../data";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className='product-detail'>
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
      <p>Rating: {product.rating} / 5</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
