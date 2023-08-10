'use client'
import React, {FC, useEffect, useState} from 'react';

interface IPriceProps {
    id: number;
    options?: { title: string; additionalPrice: number }[];
    price: number,
    setOptions: (option: number, quantity: number, total: number) => void;
}
const Price: FC<IPriceProps> = ({price, id, options, setOptions}) => {

    const [total, setTotal] = useState<number>(price)
    const [quantity, setQuantity] = useState<number>(1)
    const [selected, setSelected] = useState<number>(1)

    useEffect(() => {
        setTotal(quantity * (options ? price + options[selected].additionalPrice : price))
    }, [quantity, selected, options, price])

    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>{total.toFixed(2)}</h2>
            <div className='flex gap-4'>
                {options?.map((option, index) => (
                    <button onClick={() => setSelected(index)}
                            className='p-2 ring-1 ring-red-400 rounded-md min-w-[6rem]'
                            key={option.title}
                            style={{
                                background: selected === index ? 'rgb(248 113 113' : 'white',
                                color: selected === index ? 'white' : 'red'
                            }}>{option.title}</button>
                ))}
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
                    <span>Quantity</span>
                    <div className='flex gap-4 items-center'>
                        <button
                            onClick={() => setQuantity(prevState => prevState > 1 ? prevState - 1 : 1)}>{'<'}</button>
                        <span>{quantity}</span>
                        <button
                            onClick={() => setQuantity(prevState => prevState < 9 ? prevState + 1 : 9)}>{'>'}</button>
                    </div>
                </div>
                <button onClick={() => setOptions(selected, quantity, total)} className='w-56 uppercase bg-red-500 text-white p-3 ring-1 ring-red-500'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Price;