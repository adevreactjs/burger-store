'use client';
import React from 'react';
import Image from "next/image";
import {featuredProducts} from "@/data";
import {addToCartItem} from "@/app/store/reducers/PizzaSlice";
import {useDispatch} from "react-redux";

const Featured = () => {
    const dispatch = useDispatch()
    const addToCart = (e: React.SyntheticEvent<EventTarget>, id: number) => {
        e.preventDefault()
        dispatch(addToCartItem(id))
    }

    return (
        <div className='w-screen overflow-x-scroll text-red-500 '>
            <div className='w-max flex'>
                {
                    featuredProducts.map((item) => (
                        <div key={item.id}
                             className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
                            {
                                item.img && <div
                                    className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
                                    <Image src={item.img} alt='cart' fill={true} className='object-contain'/>
                                </div>
                            }
                            <div className='flex-1 flex flex-col gap-4 items-center justify-center text-center gap-4'>
                                <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
                                <p className='p-4 2xl:p-8'>{item.desc}</p>
                                <span className='text-xl font-bold'>${item.price}</span>
                                <button onClick={(e) => addToCart(e, item.id)}
                                        className='bg-red-500 text-white p-2 rounded-md'>add to cart
                                </button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Featured;