import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Rechart = () => {
    const data = useLoaderData().data



    return (
        <div className=' mt-10 grid align-items-center justify-items-center'>

            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <CartesianGrid />
                <Legend />
                <ResponsiveContainer />
            </LineChart>

        </div>
    );
};

export default Rechart;