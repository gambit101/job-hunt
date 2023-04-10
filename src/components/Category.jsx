import React from 'react';

const Category = ({category}) => {
    return (
        <div>
            <div>
                <img className='h-24 w-24 rounded' src={category.logo} alt="" />
                <h2 className='text-xl'>
                    {category.name}
                </h2>
                <p className='text-gray-600 mt-2'>
                    {category.jobs}
                </p>
            </div>
        </div>
    );
};

export default Category;