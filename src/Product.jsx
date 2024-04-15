// les props correspondent aux caractéristiques d’un produit (voir ce que propose l'API, voir aussi sur la copie d'écran fournie ci dessus) - https://dummyjson.com/products/category/sunglasses
// Par exemple, le title, la description, le price ....

import React from "react";
import { Card } from "primereact/card";
import { Rating } from "primereact/rating";
import { Badge } from "primereact/badge";

const Product = ({ product }) => {
  const { price, discountPercentage } = product;
  const discountedPrice = price - price * (discountPercentage / 100);

  console.log(typeof(product.rating));

  return (
    <>
      <Card
        title={product.title}
        subTitle={product.brand}
        className="product-card"
      >
        <img
          alt={product.title}
          src={product.thumbnail}
          style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
        />
        <p>{product.description}</p>
        <div className="product-price-container">
          <span
            className="product-original-price"
            style={{ textDecoration: "line-through", color: "gray" }}
          >
            {product.price.toFixed(2)} €
          </span>
          <span className="product-discounted-price">
            {discountedPrice.toFixed(2)} €
          </span>
        </div>
        
        <div className="rating">
          <Rating value={product.rating} readOnly cancel={false} />
          {product.rating}
        </div>
        <div className="stock">
          <Badge
            value={`Stock: ${product.stock}`}
            severity={product.stock > 0 ? "success" : "danger"}
          />
        </div>
      </Card>
    </>
  );
};

export default Product;
