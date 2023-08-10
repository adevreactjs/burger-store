"use client";

import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import CartIcon from "@/components/CartIcon";

const Menu = () => {
    const [open, setOpen] = useState<boolean>(false)
    const links = [
        {id: 1, title: "Homepage", url: "/"},
        {id: 2, title: "Menu", url: "/menu"},
        {id: 3, title: "Working Hours", url: "/"},
        {id: 4, title: "Contact", url: "/"},
    ];
    return (
        <div>
            {
                !open ? <Image src='/open.png'
                               alt='open'
                               width={20}
                               height={20}
                               onClick={() => setOpen(true)}/> :
                    <Image src='/close.png'
                           alt='open'
                           width={20}
                           height={20}
                           onClick={() => setOpen(false)}/>
            }
            {open && <div
                className='bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full flex flex-col items-center justify-center gap-8 z-10 '>
                {links.map((item) => <Link onClick={() => setOpen(false)} className='cursor-pointer' href={item.url}
                                           key={item.id}>{item.title}</Link>)}
                {
                    // !user ? <Link href='/login'>Login</Link> : <Link href='/orders'>Orders</Link>
                }
                <Link onClick={() => setOpen(false)} href='/cart'><CartIcon/></Link>
            </div>}
        </div>
    );
};

export default Menu;