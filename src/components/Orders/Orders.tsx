import React from "react";
import Section from "../Section/Section";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import ProductsListing from "../ProductLisiting/ProductsListing";
import OrderItem from "./OrderItem";
import { OrderDetails } from "../../models/Order";
import { useQuery } from "@tanstack/react-query";
import { fetchData, backendUrl } from "../../utils/request";

const Orders: React.FC = () => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["orders"],
    queryFn: () => fetchData(backendUrl),
  });
  let content;
  if (data) {
    const myOrders: Array<OrderDetails> = data;
    content = (
      <>
        {myOrders.length === 0 ? (
          <p className="fallback-text">
            You haven't placed any orders yet. Please place an order to get
            started!
          </p>
        ) : (
          <div className="my-orders">
            <ProductsListing justifyStart={true}>
              {myOrders.map((element) => (
                <OrderItem key={element._id} order={element} />
              ))}
            </ProductsListing>
          </div>
        )}
      </>
    );
  }
  if (isLoading) {
    content = <Loader />;
  }
  if (isError) {
    content = <Error message={error.message} />;
  }
  return <Section heading="My orders">{content}</Section>;
};

export default Orders;
