import React from "react";
import { useNavigate } from "react-router-dom";
import { Products } from "../../models/Product";
import "./Product.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Product: React.FC<{ item: Products }> = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="product-card-wrapper" onClick={handleClick}>
      <div className="product-card">
        <div className="product-image">
          <img
            loading="lazy"
            src={`${item.images[0]}`}
            alt={item.title}
            width={"100%"}
            height={"301px"}
          />
        </div>
        <div className="product-info">
          <div className="product-title">
            <h3>{item.title}</h3>
          </div>
          <div style={{padding:"0px"}} className="product-category">
            <h4>{item.category}</h4>
          </div>
          <div className="product-price">
            <p>${(item.price - (item.price * item.discountPercentage/100)).toFixed(2)}</p>
            <p id="original">${item.price}</p>
          </div>
        </div>
        <div className="discount">
          <p>-{item.discountPercentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
