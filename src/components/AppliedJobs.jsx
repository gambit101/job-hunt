import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../utils/fakeDB';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const [cart, setCart] = useState([]);
    const pData = useLoaderData();
    // console.log(pData);
    useEffect(() => {
        const savedCart = getStoredCart();
        let newArr = []
        for (const id in savedCart) {
            const foundProduct = pData.find(product => product.id == id);
            if (foundProduct) {
                foundProduct.quantity = savedCart[id];
                newArr.push(foundProduct);
            }
        }
        setCart(newArr)
    }, [])
    console.log(cart);

    return (
        <div>
            {
                cart.map(item => <div className='flex justify-center mt-10 border-2 w-2/3 ml-44 p-4 rounded-md'>
                    <img className='h-36 w-34 mx-6rounded-md' src={item.company_logo} alt="" />
                    <div className='flex justify-between mx-6'>
                        <div>
                            <p>{item.title}</p>
                            <p>{item.company_name}</p>
                            <div className='flex mt-2'>
                                <button className='border-2 border-cyan-600 p-1 rounded hover:bg-cyan-400'>Remote</button>
                                <button className='border-2 border-cyan-600 p-1 rounded hover:bg-cyan-400 ml-2'>Full Time</button>
                            </div>
                            <div className='flex'>
                                <p className='text-gray-600 mt-2'>
                                    {item.location}
                                </p>
                                <p className='text-gray-600 mt-2 ml-3' >
                                    {item.salary}
                                </p>
                            </div>

                        </div>
                        <div className='ml-24 mt-8'>
                            <button className='btn-primary'>View Details</button>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default AppliedJobs;