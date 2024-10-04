import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchData, productUrl } from "../../utils/request";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import ProductDetail from "./ProductDetail/ProductDetail";
import Reviews from "./Reviews/Reviews";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import Section from "../Section/Section";

const ViewDetails: React.FC = () => {
  const { id } = useParams();
  const {data,isError,isLoading,error} = useQuery({
    queryKey: ["products", id],
    queryFn: ({queryKey}) => fetchData(`${productUrl}/${queryKey[1]}`)
  });
    let content;
    if(data){
        content = <>
        <ProductDetail product={data} />
        <Reviews reviews={data.reviews}/>
        <RelatedProducts id={data.id} category={data.category}/>
        </>
    }
    if(isLoading){
        content = <Loader/>;
    }
    if(isError){
        content=(<Error message={error.message}/>)
    }
  return <Section heading="Product Details">
    {content} 
  </Section>;
};

export default ViewDetails;
