import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    // console.log(job);
    return (
        <div className='mx-auto mt-14 border-2 p-4 rounded'>
            <img className='rounded w-96 h-56' src={job.company_logo} alt="" />
            <h2 className='text-xl font-bold mt-4'>{job.title}</h2>
            <p className='text-gray-600 mt-2'>{job.company_name}</p>
            <div className='flex mt-2'>
                <button className='border-2 border-cyan-200 p-2 rounded hover:bg-cyan-400'>Remote</button>
                <button className='border-2 border-cyan-200 p-2 rounded hover:bg-cyan-400 ml-2'>Full Time</button>
            </div>
            <div className='flex'>
                <p className='text-gray-600 mt-2'>
                    {job.location}
                </p>
                <p className='text-gray-600 mt-2 ml-3' >
                    {job.salary}
                </p>
            </div>
            <Link to={`/jobDetails/${job.id}`}>

                <button className='btn-primary mt-3'>View Details</button>
            </Link>

        </div>
    );
};

export default Job;