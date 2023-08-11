'use client'

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Price from "@/components/Price";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/store/store";
import {addToCartWithOptions} from "@/app/store/reducers/PizzaSlice";

const SingleProductPage = () => {

    const pizza = useSelector((state: RootState) => state.pizzas.pizza);
    const dispatch = useDispatch()
    const setOptions = (option: number, quantity: number, total: number) => {
        const chooseOption = pizza[0].options[option]
        const newPizza = pizza.map((item) => ({...item, 'options': [chooseOption], 'count': quantity, 'price': total}))
        dispatch(addToCartWithOptions(newPizza))
    }

    return (
        <div
            className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row items-center md:gap-8'>
            {<div className='relative w-full h-1/2 flex items-center justify-center'>
                 <Image src={pizza[0].img} alt='img' className='object-contain' fill={true}/>
            </div>}
            <div className='h-1/2 flex flex-col gap-4 md:h-[30%]'>
                <h1 className='text-3xl font-bold uppercase'>{pizza[0].title}</h1>
                <p>{pizza[0].desc}</p>
                <Price price={pizza[0].price} id={pizza[0].id} options={pizza[0].options} setOptions={setOptions}/>
            </div>
        </div>
    );
};

export default SingleProductPage;