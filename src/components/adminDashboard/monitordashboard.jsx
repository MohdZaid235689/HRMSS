// import React from 'react'
// import MonitorHeader from './monitorheader'

// const Monitordashboard = () => {
//   return (
//     <div>
//       <MonitorHeader className="relative z-20" />
//     </div>
//   )
// }

// export default Monitordashboard

import React from 'react';
import { useSpring, animated } from 'react-spring';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import '../../App.css'; // Ensure Tailwind CSS is imported
// import Headers from './headers';
import MonitorHeader from './monitorheader';
import { useNavigate } from 'react-router-dom';

const performanceData = [
    { name: 'Present', value: 60 },
    { name: 'Absent', value: 30 },
    { name: 'Work From Home', value: 10 },
];

const COLORS = ['#4caf50', '#ff9800', '#f44336'];

const tasks = [
    { task: 'Finish project report', dueDate: '2024-08-15' },
    { task: 'Update website content', dueDate: '2024-08-20' },
    { task: 'Prepare presentation slides', dueDate: '2024-08-25' },
];

const warnings = [
    { issue: 'Missed meeting with client on 02/08', date: '2024-08-02' },
    { issue: 'Delayed submission of quarterly report', date: '2024-07-30' },
    { issue: 'Pending feedback from team', date: '2024-08-01' },
];


const Monitordashboard = () => {
    const navigate = useNavigate()
    const animationProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 2000 },
    });
    const handleEmpAtt = () => {
        navigate('/employee-attendence-page')
    }
    const handleHomePage = () => {
        navigate('/homepage')
    }

    return (
        <>
            <MonitorHeader className='flex-1 flex flex-col overflow-hidden' />
            <div className="p-6 md:p-12 lg:p-8 bg-blue-50 h-[577px]">
                <div className="flex flex-col lg:flex-row gap-6 mb-12">
                    <div className="lg:w-1/2 flex items-center ml-6">
                        <animated.h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mr-6" style={{ fontFamily: 'Montserrat' }}>
                            Hello & Welcome Kritanjali for Monitoring-Management, H.R of Venture Consultancy Services 
                            <div className=""><button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 text-xl" onClick={handleHomePage} style={{ fontFamily: 'Oswald' }} >
                                Go Back
                            </button></div>
                        </animated.h1>

                    </div>
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={performanceData}
                                cx={200}
                                cy={200}
                                labelLine={false}
                                outerRadius={150}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {performanceData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>

                </div>
                <div className="flex flex-col md:flex-row justify-center gap-4">


                </div>



            </div>
        </>
    );
};

export default Monitordashboard;

