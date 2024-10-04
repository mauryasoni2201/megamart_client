import React from "react";
import DataControls from "../DataControls/DataControls";
import ProductsListing from "../ProductLisiting/ProductsListing";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import Section from "../Section/Section";
import Product from "../Product/Product";
import { useQuery } from "@tanstack/react-query";
import { fetchData, productUrl } from "../../utils/request";
import { Products } from "../../models/Product";
import { useSelector } from "react-redux";
import "./Homepage.css";

const Homepage: React.FC= () => {
  const { skip, sorting, order, category, search } = useSelector((state:any) => state.options);

  const { data, isError, isLoading, error} = useQuery({
    queryKey: ["products",skip,sorting,order],
    queryFn: ({queryKey}) => fetchData(`${productUrl}?limit=${10}&sortBy=${queryKey[2]}&order=${queryKey[3]}&skip=${queryKey[1]}`)
  });
  const {data: categoryData,isError: isCategoryError,isLoading: isCatergoryLoading,error: categoryError} = useQuery({
    queryKey: ["productsFilter",category],
    queryFn: ({queryKey}) => fetchData(`${productUrl}/category/${queryKey[1]}`),
    enabled: category !== "",
  });
  const {data: searchData,isError: isSearchError,isLoading: isSearchLoading,error: searchError} = useQuery({
    queryKey: ["productSearch",search],
    queryFn: ({queryKey}) => fetchData(`${productUrl}/search?q=${queryKey[1]}`),
    enabled: search.trim().length>0,
  });

  let content;
  if (isLoading) {
    content = <Loader />;
  }
  if (data) {
    const products: Array<Products> = data.products;
    content = (
      <ProductsListing>
        {products.map((element) => (
          <Product key={element.id} item={element} />
        ))}
      </ProductsListing>
    );
  }
  if (isError) {
    content = <Error message={error.message} />;
  }
    
  if(isCatergoryLoading){
    content = <Loader/>;
  }
  if (categoryData) {
    const products: Array<Products> = categoryData.products;
    content = (
      <ProductsListing>
        {products.map((element) => (
          <Product key={element.id} item={element} />
        ))}
      </ProductsListing>
    );
  }
  if (isCategoryError) {
    content = <Error message={categoryError.message} />;
  }

  if(isSearchLoading){
    content = <Loader/>;
  }
  if (searchData) {
    const products: Array<Products> = searchData.products;
    content = (
      <ProductsListing justifyStart={products.length===0||search.trim().length===0?false:true}>
        {products.length === 0 ? (
          <p className="fallback-text">No results found!</p>
        ) : (
          products.map((element) => <Product key={element.id} item={element} />)
        )}
      </ProductsListing>
    );
  }
  if (isSearchError) {
    content = <Error message={searchError.message} />;
  }

return(
<Section heading="Our Products">
{!(error || categoryError || searchError) && (
  <DataControls/>
)}
  {content}
</Section>
)}

export default Homepage;
