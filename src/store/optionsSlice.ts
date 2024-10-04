import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Options from "../models/Options";

const initialState:Options={
    skip:0,
    order:"asc",
    sorting:"",
    category:"",
    search:""
}

export const optionsSlice = createSlice({
    name:'options',
    initialState,
    reducers:{
        nextPage(state){
            state.skip = state.skip + 19;
        },
        previousPage(state){
            state.skip = state.skip - 19;
        },
        setOptions(state,action:PayloadAction<{key:string,value:string}>){
            const updated = {...state};
            return{
                ...updated,
                [action.payload.key]:action.payload.value
            }
        },
        resetSearchAndCategory(state){
            state.search = "";
            state.category ="";
        },
        resetSearch(state){
            state.search = "";
        }
    }
});

export const optionActions = optionsSlice.actions;