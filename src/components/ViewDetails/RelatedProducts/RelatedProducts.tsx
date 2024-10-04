import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchData, productUrl } from "../../../utils/request";
import Loader from "../../Loader/Loader";
import Error from "../../Error/Error";
import "../../Product/Product.css";
import { Products } from "../../../models/Product";
import ProductsListing from "../../ProductLisiting/ProductsListing";
import Product from "../../Product/Product";

const RelatedProducts: React.FC<{ category: string,id:number }> = ({ category,id }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", category],
    queryFn: ({queryKey}) => fetchData(`${productUrl}/category/${queryKey[1]}`),
  });
  let content;
  if(data){
    const products:Array<Products> = data.products;
    const category = products.filter((element)=>element.id!==id);
    content = <ProductsListing>
        {category.map((element)=>(
            <Product key={element.id} item={element} />
        ))}
    </ProductsListing>
  }
  if(isLoading){
    content = <Loader/>
  }
  if(isError){
    content = <Error message={error.message}/>
  }
  return <section className="related-products">
    <h2>Related Products</h2>
    {content}
  </section>;
};

export default RelatedProducts;
