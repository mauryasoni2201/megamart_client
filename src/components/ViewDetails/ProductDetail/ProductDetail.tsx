import React from "react";
import Button from "../../Button/Button";
import Slider from "react-slick";
import { ProductDetails } from "../../../models/Product";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cartSlice";
import { Rating } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductDetail.css";

const ProductDetail: React.FC<{ product: ProductDetails }> = ({ product }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  const handleAddToCart = (): void => {
    dispatch(
      cartActions.addItem({
        product: {
          id: product.id,
          name: product.title,
          image: product.images[0],
          price: parseFloat((product.price - (product.price * product.discountPercentage/100)).toFixed(2)),
          totalPrice:parseFloat((product.price - (product.price * product.discountPercentage/100)).toFixed(2)),
          quantity: 1,
        },
      })
    );
  };
  const dispatch = useDispatch();
  const navigate: NavigateFunction = useNavigate();
  const handleClick = (): void => navigate("/");
  return (
    <div className="details">
      <div className="details-wrapper">
        <div className="detail-card-wrapper">
          <div className="detail-card">
            <div className="detail-image">
              {product.images.length > 1 ? (
                <Slider {...settings}>
                  {product.images.map((element, index) => (
                    <div className="slider-image" key={`${element} ${index}`}>
                      <a target="_self" href={element}>
                        <img
                          src={element}
                          height="413px"
                          width="400px"
                          alt={product.title}
                          loading="lazy"
                        />
                      </a>
                    </div>
                  ))}
                </Slider>
              ) : (
                <Slider {...settings}>
                  <div className="slider-image">
                    <a target="_self" href={product.images[0]}>
                      <img
                        src={product.images[0]}
                        height={"413px"}
                        width={"400px"}
                        alt={product.title}
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div className="slider-image">
                    <a target="_self" href={product.images[0]}>
                      <img
                        src={product.images[0]}
                        height={"413px"}
                        width={"400px"}
                        alt={product.title}
                        loading="lazy"
                      />
                    </a>
                  </div>
                </Slider>
              )}
            </div>
            <div className="product-information">
              <div className="product-name">
                <h2>{product.title}</h2>
              </div>
              <div className="product-price">
                <h3>${(product.price - (product.price * product.discountPercentage/100)).toFixed(2)}</h3>
              </div>
              <div className="product-rating">
                <Rating
                  name="hover-feedback"
                  value={product.rating}
                  precision={0.5}
                />
              </div>
              <div className="product-description">
                <p>{product.description}</p>
              </div>
              <div className="options">
                <Button onClick={handleAddToCart}>ADD TO CART</Button>
                <Button onClick={handleClick}>BACK</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
