import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { optionsSlice } from "./optionsSlice";

export const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        options:optionsSlice.reducer
    }
});
