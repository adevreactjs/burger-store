'use client'
import React from 'react';
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/store/store";
import {removeCartItem} from "@/app/store/reducers/PizzaSlice";

const CartPage = () => {
    const cartItems = useSelector((state: RootState) => state.pizzas.cartItems)
    const dispatch = useDispatch()
    const sumSubTotal = cartItems.reduce((previousValue, currentValue) => {
        return currentValue.price + previousValue
    }, 0).toFixed(1)

    const removeItem = (id: number) => {
        const removeItem = cartItems.filter((item) => item.id !== id)
        dispatch(removeCartItem(removeItem))
    }

    return (
        <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
            {/*Products container*/}
            <div
                className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40'>
                {cartItems.map((item) => {

                    return (
                        <div key={item.id} className='flex items-center justify-between mb-4'>
                            {
                                item.img && <Image src={item.img} alt='img' width={100} height={100}/>
                            }
                            <div>
                                <h1 className='uppercase text-xl font-bold'>{item.title}</h1>
                                <span>{item.options[0].title}</span>
                            </div>
                            <h2 className='font-bold'>${item.price.toFixed(1)}</h2>
                            <span>{item.count}</span>

                            <span onClick={() => removeItem(item.id)} className='cursor-pointer'>X</span>
                        </div>
                    );
                })}
            </div>
            {/*Payment container*/}
            <div
                className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
                <div className='flex justify-between'>
                    <span className=''>Subtotal ({cartItems.length} items)</span>
                    <span className=''>${sumSubTotal}</span>
                </div>
                <div className='flex justify-between'>
                    <span className=''>Service cost ({cartItems.length} items)</span>
                    <span className=''>$0</span>
                </div>
                <div className='flex justify-between'>
                    <span className=''>Delivery cost</span>
                    <span className='uppercase text-green-500'>Free</span>
                </div>
                <hr className='my-2'/>
                <div className='flex justify-between'>
                    <span className='uppercase'>Total(incl. vat)</span>
                    <span className='uppercase font-bold'>${sumSubTotal}</span>
                </div>
                <button className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end'>Checkout</button>
            </div>

        </div>
    );
};

export default CartPage;