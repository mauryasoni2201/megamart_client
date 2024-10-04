import React from "react";
import Section from "../Section/Section";
import ProductsListing from "../ProductLisiting/ProductsListing";
import CartItem from "./CartItem";
import { CartProduct } from "../../models/Cart";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import Button from "../Button/Button";
import { useMutation } from "@tanstack/react-query";
import { client, sendOrder } from "../../utils/request";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../store/cartSlice";


const Cart: React.FC = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  const totalPrice: number = cartItems.reduce((a: number, b: CartProduct) => a + b.totalPrice,0);
  const { mutate,isPending } = useMutation({
    mutationFn: sendOrder,
    onSuccess() {
      Swal.fire({
        title: "Order Placed!",
        text: "Order placed successfully.",
        icon: "success",
        willClose(){
          navigate("/orders");
        }
      });
      client.invalidateQueries({ queryKey: ["orders"] });
      dispatch(cartActions.changeCart([]));
    },
    onError(error: any) {
      Swal.fire({
        title: "Error Occured!",
        html: `<h3 style="font-size:20px;line-height:26px;font-weight:500;">${error.message}</h3>`,
        icon: "error",
      });
      dispatch(cartActions.changeCart(cartItems));
    }
  });
  const handlePlaceOrder = () => {
    mutate({ orders: cartItems });
  };
  let content;
  return (
    <Section heading="Cart">
      {cartItems.length >= 1 && (
        <h2 className="totalprice">Total Price: ${totalPrice.toFixed(2)}</h2>
      )}
      {cartItems.length === 0 ? (
        <p className="fallback-text">Your cart is empty. Please add an item!</p>
      ) : (
        <>
          {isPending&&content}
          <ProductsListing justifyStart={true}>
            {cartItems.map((element: CartProduct) => (
              <CartItem key={element.id} item={element} />
            ))}
          </ProductsListing>
          {!isPending&&<div className="place-order">
            <Button onClick={handlePlaceOrder}>PLACE ORDER</Button>
          </div>}
          {isPending&&<p className="loading-text">PLACING ORDER....</p>}
        </>
      )}
    </Section>
  );
};

export default Cart;
