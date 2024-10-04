import React from "react";
import Swal from "sweetalert2";
import Button from "../Button/Button";
import { OrderDetails, PlaceOrder } from "../../models/Order";
import { useMutation } from "@tanstack/react-query";
import { cancelOrder, client } from "../../utils/request";
import "./OrderItem.css";

const OrderItem: React.FC<{ order: OrderDetails }> = ({ order }) => {
  const total:Number|any = order.items.reduce((a,b:object|any)=>a+b.totalPrice,0);
  const { mutate, isPending } = useMutation({
    mutationFn: cancelOrder,
    onSuccess() {
      Swal.fire({
        title: "Order Canceled!",
        text: "Order canceled successfully.",
        icon: "success",
      });
      client.invalidateQueries({ queryKey: ["orders"] });
    },
    onError(error: any) {
      Swal.fire({
        title: "Error Occured!",
        html: `<h3 style="font-size:20px;line-height:26px;font-weight:500;">${error.message}</h3>`,
        icon: "error",
      });
    },
  });
  const handleDeleteItem = (): void => {
    mutate(order._id);
  };
  return (
    <>
    <div className="order-item">
      {order.items.map((element:PlaceOrder|any)=>{
        return<><div key={element._id} className="order-details">
          <div className="order-allDetails">
          <div className="order-image">
            <img src={element.image} alt={element.name} height={"80px"} width={"80px"} />
          </div>
          <div className="order-name"><h3>{element.name}</h3></div>
          </div>
        <div>
          <div className="order-price"><h4>${element.totalPrice}</h4></div>
          <div className="order-quantity"><h5>Qty:{element.quantity}</h5></div>
        </div>
        </div>
        </>
      })}
      <div className="order-options">
        {!isPending && <Button onClick={handleDeleteItem}>CANCEL ORDER</Button>}
        {isPending && <p className="loading-text">CANCELING ORDER....</p>}
        <div><h6>Total : ${total}</h6></div>
      </div>
      </div>
      </>
  );
};

export default OrderItem;
