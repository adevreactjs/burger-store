'use client'
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "@/app/store/store";

const CartIcon = () => {
    const cartItems = useSelector((state:RootState) => state.pizzas.cartItems)

    return (
        <Link href='/cart' className='flex items-center gap-3'>
            <div className='relative'>
                <Image src='/cart.png' alt='cart' width={20} height={20}/>
            </div>
            <span>Cart ({cartItems.length})</span>
        </Link>
    );
};

export default CartIcon;