import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-evenly my-6'>
            <div className='text-3xl font-bold tracking-wide text-gray-800'>
                JobHunt
            </div>
            <ul className='flex gap-8'>
                <Link className='mt-2 hidden space-x-8 lg:flex font-bold' to='/'>Home</Link>
                <Link className='mt-2 hidden space-x-8 lg:flex font-bold'  to='/stats'>Stats</Link>
                <Link className='mt-2 hidden space-x-8 lg:flex font-bold'  to='/appliedJobs'>Applied Jobs</Link>
                <Link className='mt-2 hidden space-x-8 lg:flex font-bold'  to='/blog'>Blog</Link>
                
            </ul>
            <div>
                <button className='btn-primary'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;