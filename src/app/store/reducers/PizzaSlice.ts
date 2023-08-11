'use client';

import {createSlice} from "@reduxjs/toolkit";
import {featuredProducts, Product} from "@/data";

interface PizzaState {
    pizzasData: Product[],
    pizza: Product[],
    cartItems: Product[],
    isLoading: boolean,
    error: string
}

const initialState: PizzaState = {
    pizzasData: featuredProducts,
    pizza: [],
    cartItems: [],
    isLoading: false,
    error: ''
}

export const pizzaSlice = createSlice({
    name: 'pizzaData',
    initialState,
    reducers: {
        clickCartHandler: (state, action) => {
            const filterCart = state.pizzasData.filter((piz) => piz.id === action.payload)
            state.pizza = filterCart
        },
        addToCartItem: (state, action) => {
            let addPizza = state.pizzasData.filter((item) => item.id === action.payload);
            // for (const obj of state.cartItems) {
            //     if (obj.id === addPizza[0].id) {
            //         state.cartItems.push((addPizza[0]))
            //     }
            // }
            state.cartItems.push((addPizza[0]))

        },
        removeCartItem: (state, action) => {
            state.cartItems = action.payload
        },
        addToCartWithOptions: (state, action) => {
            if(state.cartItems.includes(action.payload)) {
                console.log('t')

            } else {
                state.cartItems.push(...action.payload)

            }
        }
    }
})

export const {clickCartHandler, addToCartItem, removeCartItem, addToCartWithOptions} = pizzaSlice.actions;

export default pizzaSlice.reducer