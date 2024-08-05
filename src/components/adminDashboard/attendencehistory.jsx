// import React from 'react'

// const Attendencehistory = () => {
//   return (
//     <div>
//       hello
//     </div>
//   )
// }

// // export default Attendencehistory


import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import '../../App.css'; // Ensure Tailwind CSS is imported
import MonitorHeader from './monitorheader';
import { useNavigate } from 'react-router-dom';

const yearlyData = [
    { name: 'Present', value: 200 },
    { name: 'Work From Home', value: 50 },
    { name: 'Leaves', value: 115 },
];

const monthlyData = [
    { name: 'Present', value: 20 },
    { name: 'Work From Home', value: 5 },
    { name: 'Leaves', value: 5 },
];

const COLORS = ['#4caf50', '#ff9800', '#f44336'];

const Attendencehistory = () => {
    const [view, setView] = useState('yearly'); // State to track the selected view
    const navigate = useNavigate();
    const animationProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 2000 },
    });

    const handleEmpAtt = () => {
        navigate('/employee-attendence-page');
    };

    const handleHomePage = () => {
        navigate('/homepage');
    };

    const handleBack = () => {
        navigate('/employee-attendence-page')
    }

    const data = view === 'yearly' ? yearlyData : monthlyData;

    return (
        <>
            <MonitorHeader className='flex-1 flex flex-col overflow-hidden' />
            <div className="p-6 md:p-12 lg:p-8 bg-blue-50 h-[577px]">
                <div className="flex flex-col lg:flex-row gap-6 mb-12">
                    <div className="lg:w-1/2 flex items-center ml-6">
                        <animated.h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mr-6" style={{ fontFamily: 'Montserrat' }}>
                            Welcome to see the Employee Attendence, H.R of Venture Consultancy Services
                        </animated.h1>
                    </div>
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={data}
                                cx={200}
                                cy={200}
                                labelLine={false}
                                outerRadius={150}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                
                    <button
                        className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ${view === 'monthly' && 'opacity-50'}`}
                        onClick={() => setView('yearly')}
                        disabled={view === 'yearly'}
                    >
                        Yearly View
                    </button>
                    <button
                        className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ${view === 'yearly' && 'opacity-50'}`}
                        onClick={() => setView('monthly')}
                        disabled={view === 'monthly'}
                    >
                        Monthly View
                    </button>
                </div>
                
            </div>
        </>
    );
};

export default Attendencehistory;
