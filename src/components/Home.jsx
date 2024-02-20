import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Category from './Category';
import Job from './Job';

const Home = () => {
    const [jobs, setJobs] = useState([])
    const [visibleCards, setVisibleCards] = useState(4);

    const [categories] = useLoaderData();



    useEffect(() => {
        fetch('features.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    const handleSeeMoreClick = () => {
        setVisibleCards(visibleCards + 5);
    };

    // console.log(jobs);


    return (
        <div>
            <div className='md:flex mx-10'>
                <div className='mt-6 '>
                    <h2 className='items-center text-6xl font-bold'>
                        One Step  <br />  Closer To Your <br /> <span className='text-cyan-600'>Dream Job</span>
                    </h2>
                    <p className='text-gray-600 mt-4'>
                        Explore thousands of job opportunities with all <br /> the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <button className='btn-primary mt-4'>Get Started</button>
                </div>
                <div>
                    <img className='h-3/4 ml-4' src="https://cdn.pixabay.com/photo/2013/07/13/12/42/inspector-160143_960_720.png" alt="" />
                </div>
            </div>

            {/* category section  */}

            <div className='mt-10'>
                <h2 className='text-center text-4xl font-bold'>
                    Job Category List
                </h2>
                <p className='text-gray-600 mt-4 text-center'>
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>

                {/* dynamic categories  */}

                <div className='grid gap-10 mx-52 mt-8 lg:grid-cols-4'>
                    {
                        categories.map(category => <Category key={category.id} category={category}></Category>

                        )
                    }
                </div>
            </div>

            {/* featured jobs  */}

            <div className='mt-10'>
                <h2 className='text-center text-4xl font-bold'>
                    Featured Jobs
                </h2>
                <p className='text-gray-600 mt-4 text-center'>
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>

            {/* main features */}



            {/* map  */}

            <div className='grid grid-cols-1 md:grid-cols-2'>
                {
                    jobs.slice(0, visibleCards).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className='text-center my-12 '>
                <button className='font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3  text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-purple-400 bg-purple-300' onClick={handleSeeMoreClick}>See All</button>
            </div>
        </div>
    );
};

export default Home;