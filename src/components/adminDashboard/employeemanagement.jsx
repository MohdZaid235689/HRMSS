
// src/DashboardPage.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import '../../App.css'; // Ensure Tailwind CSS is imported
import Headers from './headers';

const performanceData = [
    { name: 'ontime', value: 60 },
    { name: 'late', value: 30 },
    { name: 'absent', value: 10 },
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
const name = localStorage.getItem('name')
console.log("name", name)

const EmpDashboardPage = () => {
    const animationProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 2000 },
    });

    return (
        <>
            <Headers className='flex-1 flex flex-col overflow-hidden' />
            <div className="p-6 md:p-12 lg:p-8 bg-blue-50 ">
                <div className="flex flex-col lg:flex-row gap-6 mb-12">
                    <div className="lg:w-1/2 flex items-center ml-6">
                        {/* <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mr-6 " style={{ fontFamily: 'Montserrat' }}>
                        Hello {name}! <div className="text-2xl">Welcome To Venture consultancy Services</div> <div className="text-gray-400">Employee Portal</div>

                        </div> */}
                        <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mr-6" style={{ fontFamily: 'Montserrat' }}>
                            {/* Hello {name ? name : 'Guest'}! */} <div className="">{name}</div>
                            <div className="text-2xl">Welcome To Venture Consultancy Services</div>
                            <div className="text-gray-400">Employee Portal</div>
                        </div>



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
                <div className="flex flex-col lg:flex-row gap-6 justify-center">
                    <div className="lg:w-[500px] mb-6 lg:mb-0 ">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-600" style={{ fontFamily: 'Montserrat' }}>Tasks</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 shadow-md">
                                    {tasks.map((task, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.task}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.dueDate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="lg:w-[500px] ">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-600" style={{ fontFamily: 'Montserrat' }}>Warnings</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 shadow-md">
                                    {warnings.map((warning, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">{warning.issue}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{warning.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmpDashboardPage;
