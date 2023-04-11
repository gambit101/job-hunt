import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../utils/fakeDB';
import { useLoaderData } from 'react-router-dom';
import SingleJob from './SingleJob';

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
            <h2 className='text-4xl font-bold text-center text-cyan-600 mt-10'>Applied Jobs</h2>
            {
                cart.map(item => <SingleJob key={item.id} item={item}></SingleJob>)
            }
        </div>
    );
};

export default AppliedJobs;