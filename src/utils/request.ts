import { QueryClient } from "@tanstack/react-query";
import { SendOrder } from "../models/Order";

export const client = new QueryClient();

export const productUrl: string = "https://dummyjson.com/products";
export const backendUrl: string = "https://megamart-server.onrender.com/api/orders";

export const fetchData = async (url: string): Promise<any> => {
  try {
    const response: Response = await fetch(url);
    const data: any = await response.json();
    if (!response.ok) {
      throw new Error("An error occurred while trying to fetch the data.");
    }
    return data;
  } catch (error) {
    throw new Error("An error occurred while trying to fetch the data.");
  }
};

export const sendOrder = async (data: SendOrder): Promise<void> => {
  const response = await fetch(backendUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    const errorMessage = await response.json();
    throw new Error(errorMessage.errors||errorMessage.message||"An error occurred while placing the order.");
  }
};

export const cancelOrder = async (id: string): Promise<void> => {
  const response = await fetch(`${backendUrl}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const errorMessage = await response.json();
    throw new Error(errorMessage.message || "An error occurred while canceling the order.");
};
};
