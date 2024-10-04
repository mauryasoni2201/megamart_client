import React from "react";
import { CartProduct } from "../../models/Cart";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import Button from "../Button/Button";
import Item from "../Item/Item";

const CartItem: React.FC<{ item: CartProduct }> = ({ item }) => {
  const dispatch = useDispatch();
  const handleIncreaseQuantity = (): void => {
    dispatch(cartActions.increaseQuantity({ product: item }));
  };
  const handleDecreaseQuantity = (): void => {
    dispatch(cartActions.decreaseQuantity(item.id));
  };
  const handleRemoveItem = (): void => {
    dispatch(cartActions.removeItem(item.id));
  };
  const { name, totalPrice, quantity, image } = item;
  return (
    <Item name={name} totalPrice={totalPrice} image={image}>
      <div className="cart-options">
        <Button onClick={handleDecreaseQuantity}>-</Button>
        <span>{quantity}</span>
        <Button onClick={handleIncreaseQuantity}>+</Button>
      </div>
      <div className="remove-item">
        <Button onClick={handleRemoveItem}>REMOVE</Button>
      </div>
    </Item>
  );
};

export default CartItem;
