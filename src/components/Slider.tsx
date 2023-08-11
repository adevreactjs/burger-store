"use client";

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const data = [
        {
            id: 1,
            title: "always fresh & always crispy & always hot",
            image: "/slide1.png",
        },
        {
            id: 2,
            title: "we deliver your order wherever you are in NY",
            image: "/slide2.png",
        },
        {
            id: 3,
            title: "the best pizza to share with your family",
            image: "/slide3.jpg",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevState => prevState === data.length - 1 ? 0 : prevState + 1)
        }, 2000)

        return () => clearInterval(interval);
    }, [])

    return (
        <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
            <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full'>
                <h1 className='text-5xl text-center uppercase p-4 sm: text-2xl md:p-10 md:text-6xl'>{data[currentSlide].title}</h1>
                <Link href={'/menu/pastas'} className='bg-red-500 text-white py-4 px-8 mb-[15px]'>Order Now</Link>
            </div>
            <div className='flex-1 w-full relative lg:h-full lg:w-1/2'>
                <Image className='top-0 left-0 object-cover' src={data[currentSlide].image} alt='slide' fill={true}/>
            </div>
        </div>
    );
};

export default Slider;