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
                cart.map(item=><p key={item.id}>{item.title}</p>)
            }
        </div>
    );
};

export default AppliedJobs;