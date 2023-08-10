'use client';

import {createSlice} from "@reduxjs/toolkit";
import {featuredProducts, Product} from "@/data";


interface PizzaState {
    pizzasData: Product[],
    isLoading: boolean,
    error: string
}

const initialState: PizzaState = {
    pizzasData: featuredProducts,
    isLoading: false,
    error: ''
}

export const pizzaSlice = createSlice({
    name: 'pizzaData',
    initialState,
    reducers: {
        test: state => {state.isLoading}
    }
})

export const { test } = pizzaSlice.actions;

export default pizzaSlice.reducer