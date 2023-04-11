import React from 'react';

const Blog = () => {
    return (
        <div className='mx-16'>
            <h2 className='text-4xl font-bold text-center text-cyan-600'>My Blog</h2>
            <div className='border-2 p-4 rounded-md bg-gray-100 mt-6'>
                <h2 className='text-3xl font-bold text-center'>When should you use context API?</h2>
                <p className='text-gray-500 text-center mt-4'>We should use context api when we want to pass data through component tree. Using context api is easier than manually passing data through components.It can optimize our website</p>
            </div>
            <div className='border-2 p-4 rounded-md bg-gray-100 mt-6'>
                <h2 className='text-3xl font-bold text-center'>What is a custom hook?</h2>
                <p className='text-gray-500 text-center mt-4'>Custom hooks can help website owners create optimized workflows.A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.</p>
            </div>
            <div className='border-2 p-4 rounded-md bg-gray-100 mt-6'>
                <h2 className='text-3xl font-bold text-center'>What is useRef?</h2>
                <p className='text-gray-500 text-center mt-4'>useRef is a React Hook that lets you reference a value thats not needed for rendering.The returned object will persist for the full lifetime of the component.There are two main uses of useRef that are explained in the following sections: Accessing the DOM nodes or React elements and keeping a mutable variable.</p>
            </div>
            <div className='border-2 p-4 rounded-md bg-gray-100 mt-6'>
                <h2 className='text-3xl font-bold text-center'>What is useMemo?</h2>
                <p className='text-gray-500 text-center mt-4'>useMemo is a hook that is used in the functional component of React that returns a memoized value.The basic purpose of the useMemo hook is related to the fact that we try to avoid the unnecessary re-rendering of components and props in our program.</p>
            </div>
        </div>
    );
};

export default Blog;