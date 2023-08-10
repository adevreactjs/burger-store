import React from 'react';
import Menu from "@/components/Menu";
import Link from "next/link";
import CartIcon from "@/components/CartIcon";
import Image from "next/image";

const NavBar = () => {
    const user = false
    return (
        <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase'>
            <div className='hidden md:flex gap-4'>
                <Link href='/'>Homepage</Link>
                <Link href='/menu'>Menu</Link>
                <Link href='/'>Contact</Link>
            </div>
            <div className='md:font-bold'>
                <Link href='/'>Massimo</Link>
            </div>
            <div className='md:hidden'>
                <Menu/>
            </div>
            <div className='hidden md:flex gap-4 items-center'>
                <div className='flex items-center gap-2 p-1 cursor-pointer bg-orange-300 rounded-md'>
                    <Image src='/phone.png' alt='phone' width={20} height={20}/>
                    <span>123 456 66</span>
                </div>
                {
                    // !user ? <Link href='/login'>Login</Link> : <Link href='/orders'>Orders</Link>
                }
                <CartIcon/>
            </div>
        </div>
    );
};

export default NavBar;