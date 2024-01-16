import { createSlice } from "@reduxjs/toolkit";
import {ICartState} from "../../interfaces/Interfaces";



const initialState: ICartState = {
    selectedProducts: [],
    loading: false,
    summaryPrice: 0
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

            if (!state.selectedProducts.some(product => product.id === action.payload.id)) {
                const newProduct = action.payload;
                state.selectedProducts = [...state.selectedProducts, newProduct];
                state.summaryPrice = state.selectedProducts.reduce((acc, product) => acc + product.price, 0);

            }
            },
        deleteProductFromCart: (state, action) => {
            state.selectedProducts = state.selectedProducts.filter((product) => product.id !== action.payload.id);
            state.summaryPrice = state.summaryPrice - action.payload.price

        },


    },


});
export const {addToCart,deleteProductFromCart} = cartSlice.actions;
export default cartSlice.reducer;
