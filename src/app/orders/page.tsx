import React from 'react';

const OrdersPage = () => {
    return (
        <div className='p-4 lg:px-20 xl:px-40 '>
            <table className='w-full border-separate border-spacing-3'>
                <thead>
                <tr className='text-left'>
                    <th className='hidden md:block'>Order Id</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th className='hidden md:block'>Products</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr className='text-sm md:text-base bg-red-50'>
                    <td className='hidden md:block py-6 px-1'>12344567</td>
                    <td className='py-6 px-1'>13.06.2023</td>
                    <td className='py-6 px-1'>55.7</td>
                    <td className='hidden md:block py-6 px-1'>Big burger menu (2)</td>
                    <td className='py-6 px-1'>Delivered</td>
                </tr> <tr className='text-sm md:text-base odd: bg-gray-100'>
                    <td className='hidden md:block py-6 px-1'>12344567</td>
                    <td className='py-6 px-1'>13.06.2023</td>
                    <td className='py-6 px-1'>55.7</td>
                    <td className='hidden md:block py-6 px-1'>Big burger menu (2)</td>
                    <td className='py-6 px-1'>Delivered</td>
                </tr> <tr className='text-sm md:text-base odd: bg-gray-100'>
                    <td className='hidden md:block py-6 px-1'>12344567</td>
                    <td className='py-6 px-1'>13.06.2023</td>
                    <td className='py-6 px-1'>55.7</td>
                    <td className='hidden md:block py-6 px-1'>Big burger menu (2)</td>
                    <td className='py-6 px-1'>Delivered</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrdersPage;