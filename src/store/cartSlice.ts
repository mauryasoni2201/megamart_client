import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Swal from 'sweetalert2';
import { CartProduct,CartItems } from "../models/Cart";

const initialState:CartItems = {
    items:JSON.parse(localStorage.getItem("cart")??'[]')
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem(state,action:PayloadAction<{product:CartProduct}>){
        const item = action.payload.product;
        const findItem = state.items.findIndex((element)=>element.id===item.id);
        if(findItem===-1){
            state.items.push(item);
            localStorage.setItem("cart",JSON.stringify(state.items));
            Swal.fire({
                title: "Item Added!",
                text: "Item Successfully Added to Cart.",
                icon: "success"
            });
        }else{
            let total:number;
            state.items[findItem].quantity++;
            total = state.items[findItem].totalPrice + state.items[findItem].price;
            state.items[findItem].totalPrice = Number(total.toFixed(2));
            localStorage.setItem("cart",JSON.stringify(state.items));
            Swal.fire({
                title: "Quantity updated!",
                text: "Item's quantity updated successfully.",
                icon: "success"
            });
        }},
        removeItem(state,action:PayloadAction<number>){
            const id = action.payload;
            state.items =  state.items.filter((element)=>element.id!==id); 
            localStorage.setItem('cart',JSON.stringify(state.items));
        },
        decreaseQuantity(state,action:PayloadAction<number>){
            const id= action.payload;
            const findProduct = state.items.findIndex((element)=>element.id===id);
            if(state.items[findProduct].quantity===1){
                state.items =  state.items.filter((element)=>element.id!==id); 
                localStorage.setItem('cart',JSON.stringify(state.items));
            }else{
            let total:number; 
            state.items[findProduct].quantity--;
            total  = state.items[findProduct].totalPrice - state.items[findProduct].price;
            state.items[findProduct].totalPrice = Number(total.toFixed(2));
            localStorage.setItem('cart',JSON.stringify(state.items));
            }
        },
        increaseQuantity(state,action){
            const item = action.payload.product;
            const findItem = state.items.findIndex((element)=>element.id===item.id);
            let total:number;
            state.items[findItem].quantity++;
            total = state.items[findItem].totalPrice + state.items[findItem].price;
            state.items[findItem].totalPrice = Number(total.toFixed(2));
            localStorage.setItem("cart",JSON.stringify(state.items));
        },
        changeCart(state,action:PayloadAction<[]|Array<CartProduct>>){
            state.items=action.payload;
            localStorage.setItem('cart',JSON.stringify(action.payload))
        }
    }
})
export const cartActions =  cartSlice.actions;