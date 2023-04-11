import React from 'react';
import { Link } from 'react-router-dom';

const SingleJob = ({ item }) => {
    return (

        <div className='flex justify-center mt-10 border-2 w-2/3 ml-44 p-4 rounded-md'>
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
                    <Link to={`/jobDetails/${item.id}`}>
                        <button className='btn-primary'>View Details</button>
                    </Link>
                </div>
            </div>

        </div>


    );
};

export default SingleJob;