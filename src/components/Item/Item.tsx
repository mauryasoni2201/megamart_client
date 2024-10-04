import React, { ReactNode } from 'react';
import "../Product/Product.css";

const Item:React.FC<{children:ReactNode,image:string,name:string,totalPrice:number}>= ({children,totalPrice,name,image}) => {
    return (
    <div className="product-card-wrapper">
    <div className="product-card">
        <div className="product-image">
            <img loading="lazy" src={image} alt={name} width={"100%"} height={"301px"} />
        </div>
        <div className="product-info add-gap">
            <div className="product-title">
                <h3>{name}</h3>
            </div>
            <div className="product-price">
                <p>${totalPrice}</p>
            </div>
            {children}
        </div>
    </div>
</div>
)}

export default Item;
