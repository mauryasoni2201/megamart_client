import React, { ReactNode } from 'react';
import "./ProductListing.css";

const ProductsListing:React.FC<{children:ReactNode,justifyStart?:any}>= ({children,justifyStart}) => {
    return (
    <div className='products-listing-wrapper'>
        <div className='products-listing' style={{justifyContent:justifyStart&&'start'}}>
            {children}
        </div>
    </div>
    );
}

export default ProductsListing;
