'use client';

import React from 'react';
import Image from "next/image";
import CountDown from "@/components/CountDown";
import Link from "next/link";

const Offer = () => {
    return (
        <div
            className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url(/offerBg.png)] md:h-[70vh]'>
            <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
                <h1 className='text-white sm: text-2xl text-5xl font-bold xl:text-6xl'>Delicious Burger & French Fry</h1>
                <p className='text-white xl:text-xl'>Progressively simplify effective e-toilers and process-centric
                    methods
                    of empowerment. Quickly pontificate parallel.</p>
                    <CountDown/>
                <Link href={'menu/pastas'} className='bg-red-500 text-white rounded-md py-3 px-6'>Order Now</Link>
            </div>
            <div className='relative w-full flex-1 md:h-full'>
                <Image src='/offerProduct.png' alt='offerProduct' fill={true} className='object-contain '/>
            </div>
        </div>
    );
};

export default Offer;