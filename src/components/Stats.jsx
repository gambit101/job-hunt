import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const Stats = () => {
    const marksArray = [
        {
            id: 1,
            name: "A-1",
            marks: 60
        },
        {
            id: 2,
            name: "A-2",
            marks: 56
        },
        {
            id: 3,
            name: "A-3",
            marks: 59
        },
        {
            id: 4,
            name: "A-4",
            marks: 50
        },
        {
            id: 5,
            name: "A-5",
            marks: 58
        },
        {
            id: 6,
            name: "A-6",
            marks: 58
        },
        {
            id: 7,
            name: "A-7",
            marks: 60
        },
        {
            id: 8,
            name: "A-8",
            marks: 60
        },
    ]
    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-cyan-600 mt-10'>My Assignment Marks</h2>
            <PieChart width={1300} height={500}>
                <Pie
                    dataKey="marks"
                    isAnimationActive={false}
                    data={marksArray}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default Stats;