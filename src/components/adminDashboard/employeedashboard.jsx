

import React from 'react';
import Image from '../../assets/myimage.jpg'
import Headers from './headers';

const EmployeeDashboard = () => {
    return (
        <>
            <Headers className='flex-1 flex flex-col overflow-hidden' />
            <div className="bg-blue-100 min-h-screen p-4 shadow-lg">
                {/* Header Section */}
                <div className="bg-blue-50 rounded-lg shadow p-6 mb-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-semibold  text-gray-600 shadow-lg " style={{ fontFamily: 'monserrat' }}>Employee Details</h1>

                    </div>
                    <div className="flex flex-col md:flex-row items-center md:items-start mt-6">
                        <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg">
                            <img src={Image} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="md:ml-4 mt-4 md:mt-0">
                            <div className="flex flex-col">
                                <h2 className="text-xl font-semibold text-gray-600" style={{ fontFamily: 'monserrat' }}>Mohd Zaid</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

                                    <div key={0} className=" p-4 rounded-lg shadow-md">
                                        <p className="text-gray-600">Role</p>
                                        <p className="text-sm font-semibold text-blue-500">UI/UX DESIGNER</p>
                                        {/* <p>Check In Time: 17:02</p>
                                    <p>Check Out Time: 23:04</p> */}
                                    </div>

                                    <div key={1} className=" p-4 rounded-lg shadow-md">
                                        <p className="text-gray-600">Phone-No</p>
                                        <p className="text-sm font-semibold text-blue-500">8864844665</p>

                                    </div>

                                    <div key={2} className="p-4 rounded-lg shadow-md">
                                        <p className="text-gray-600">Email-Adress</p>
                                        <p className="text-sm font-semibold text-blue-500">zaidmohd9761@gmail.com</p>

                                    </div>



                                </div>



                            </div>

                        </div>
                    </div>
                    {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 md:h-[65px]">
                        
                        <div className="text-center border border-gray bg-white rounded-lg shadow-md ">
                            <p className="text-lg font-medium  mt-2 text-black">309</p>
                            <p className="text-md font-medium text-gray-500">Total Attendance</p>
                        </div>
                        
                        <div className="text-center border border-gray bg-white rounded-lg shadow-md ">
                            <p className="text-md font-semibold mt-2 text-black">Role Model</p>
                            <p className="text-md font-medium text-gray-500">Employee Predicate</p>
                        </div>
                    </div> */}

                    <div className="flex justify-center ">
                        <div className="flex ">
                            <div className="text-center border border-gray bg-white rounded-lg shadow-md w-[220px] mx-auto mr-2">
                                <p className="text-lg font-medium mt-2 text-black">309</p>
                                <p className="text-md font-medium text-gray-500">Total Attendance</p>
                            </div>

                            <div className="text-center border border-gray bg-white rounded-lg shadow-md w-[220px] mx-auto">
                                <p className="text-md font-semibold mt-2 text-black">Role Model</p>
                                <p className="text-md font-medium text-gray-500">Employee Predicate</p>
                            </div>


                        </div>

                    </div>

                </div>

                {/* Attendance History Section */}

                <div className="min-h-screen flex flex-col">
                    {/* Sticky Header Section */}
                    <div className="bg-blue-50 p-6 rounded-lg shadow-md sticky top-0 z-10 mb-2">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold shadow-md" style={{ fontFamily: 'Montserrat' }}>Attendance History</h2>
                            <div className="flex items-center space-x-4">
                                <input
                                    type="text"
                                    placeholder="Search by Date"
                                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 shadow-md"
                                />
                                <button
                                    className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-300"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">



                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-green-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-green-600 focus:outline-none"
                                >
                                    On Time
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>


                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500  border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-red-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-red-500 focus:outline-none"
                                >
                                    Absent
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-yellow-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none"
                                >
                                    Warning
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-green-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-green-600 focus:outline-none"
                                >
                                    On Time
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>


                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500  border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-red-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-red-500 focus:outline-none"
                                >
                                    Absent
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-yellow-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none"
                                >
                                    Warning
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-green-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-green-600 focus:outline-none"
                                >
                                    On Time
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>


                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500  border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-red-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-red-500 focus:outline-none"
                                >
                                    Absent
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-yellow-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none"
                                >
                                    Warning
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-green-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-green-600 focus:outline-none"
                                >
                                    On Time
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>


                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500  border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-red-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-red-500 focus:outline-none"
                                >
                                    Absent
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-yellow-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none"
                                >
                                    Warning
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-green-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-green-600 focus:outline-none"
                                >
                                    On Time
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>


                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500  border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-red-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-red-500 focus:outline-none"
                                >
                                    Absent
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-yellow-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none"
                                >
                                    Warning
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-green-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-green-600 focus:outline-none"
                                >
                                    On Time
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>


                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500  border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-red-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-red-500 focus:outline-none"
                                >
                                    Absent
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-yellow-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none"
                                >
                                    Warning
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
}

export default EmployeeDashboard;




// // src/DashboardPage.js
// import React from 'react';
// import { useSpring, animated } from 'react-spring';
// import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
// // import './DashboardPage.css'; // Ensure you create this CSS file for any additional styling
// import '../.././App.css'
// import Header from './Header';

// const performanceData = [
//     { name: 'Attendence', value: 60 },
//     { name: 'Warning', value: 30 },
//     { name: 'Tasks-Done', value: 10 },
//     // { name: 'Atte', value: 10 },
// ];

// const COLORS = ['#4caf50', '#ff9800', '#f44336'];

// const tasks = [
//     'Finish project report',
//     'Update website content',
//     'Prepare presentation slides',
// ];

// const warnings = [
//     'Missed meeting with client on 02/08',
//     'Delayed submission of quarterly report',
//     'Pending feedback from team',
// ];

// const DashboardPage = () => {
//     const animationProps = useSpring({
//         opacity: 1,
//         from: { opacity: 0 },
//         config: { duration: 2000 },
//     });

//     return (
//         <>
//             <Header className='flex-1 flex flex-col overflow-hidden'/>

//             <div className="p-6 md:p-12 lg:p-24 bg-blue-50">
//                 <div className="text-center mb-12">
//                     <animated.h1 style={{fontFamily:'monserrat'}} className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-500 " >
//                         Welcome to the Employee-Dashboard, Mohd Zaid
//                     </animated.h1>
//                 </div>
//                 <div className="flex flex-col lg:flex-row gap-6">
//                     <div className="lg:w-1/2">
//                         <PieChart width={400} height={400}>
//                             <Pie
//                                 data={performanceData}
//                                 cx={200}
//                                 cy={200}
//                                 labelLine={false}
//                                 outerRadius={150}
//                                 fill="#8884d8"
//                                 dataKey="value"
//                             >
//                                 {performanceData.map((entry, index) => (
//                                     <Cell key={`cell-${index}`} fill={COLORS[index]} />
//                                 ))}
//                             </Pie>
//                             <Tooltip />
//                             <Legend />
//                         </PieChart>
//                     </div>
//                     <div className="lg:w-1/2 flex flex-col gap-8">
//                         <div className="tasks">
//                             <h2 className="text-xl font-semibold mb-4">Tasks</h2>
//                             <ul className="list-disc pl-5">
//                                 {tasks.map((task, index) => (
//                                     <li key={index} className="text-lg">{task}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div className="warnings">
//                             <h2 className="text-xl font-semibold mb-4">Warnings</h2>
//                             <ul className="list-disc pl-5">
//                                 {warnings.map((warning, index) => (
//                                     <li key={index} className="text-lg text-red-600">{warning}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default DashboardPage;




// // src/DashboardPage.js
// import React from 'react';
// import { useSpring, animated } from 'react-spring';
// import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
// import '../../App.css'; // Ensure you have Tailwind CSS imported
// import Header from './Header';

// const performanceData = [
//     { name: 'Attendance', value: 60 },
//     { name: 'Warning', value: 30 },
//     { name: 'Tasks Done', value: 10 },
// ];

// const COLORS = ['#4caf50', '#ff9800', '#f44336'];

// const tasks = [
//     { task: 'Finish project report', dueDate: '2024-08-15' },
//     { task: 'Update website content', dueDate: '2024-08-20' },
//     { task: 'Prepare presentation slides', dueDate: '2024-08-25' },
// ];

// const warnings = [
//     { issue: 'Missed meeting with client on 02/08', date: '2024-08-02' },
//     { issue: 'Delayed submission of quarterly report', date: '2024-07-30' },
//     { issue: 'Pending feedback from team', date: '2024-08-01' },
// ];

// const DashboardPage = () => {
//     const animationProps = useSpring({
//         opacity: 1,
//         from: { opacity: 0 },
//         config: { duration: 2000 },
//     });

//     return (
//         <>
//             <Header className='flex-1 flex flex-col overflow-hidden' />
//             <div className="p-6 md:p-12 lg:p-24 bg-blue-50">
//                 <div className="text-center mb-12">
//                     <animated.h1 style={{fontFamily:'monserrat'}} className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600">
//                         Welcome to the Employee Dashboard, Mohd Zaid
//                     </animated.h1>
//                 </div>
//                 <div className="flex flex-col lg:flex-row gap-6">
//                     <div className="lg:w-1/2 flex justify-center items-start">
//                         <PieChart width={400} height={400}>
//                             <Pie
//                                 data={performanceData}
//                                 cx={200}
//                                 cy={200}
//                                 labelLine={false}
//                                 outerRadius={150}
//                                 fill="#8884d8"
//                                 dataKey="value"
//                             >
//                                 {performanceData.map((entry, index) => (
//                                     <Cell key={`cell-${index}`} fill={COLORS[index]} />
//                                 ))}
//                             </Pie>
//                             <Tooltip />
//                             <Legend />
//                         </PieChart>
//                     </div>
//                     <div className="lg:w-1/2 flex flex-col gap-8">
//                         <div className="tasks mb-8">
//                             <h2 className="text-2xl font-semibold mb-4 text-gray-600" style={{fontFamily:'monserrat'}}>Tasks</h2>
//                             <div className="overflow-x-auto">
//                                 <table className="min-w-full divide-y divide-gray-200">
//                                     <thead className="bg-gray-100">
//                                         <tr>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody className="bg-white divide-y divide-gray-200">
//                                         {tasks.map((task, index) => (
//                                             <tr key={index}>
//                                                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.task}</td>
//                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.dueDate}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                         <div className="warnings">
//                             <h2 className="text-2xl font-semibold mb-4 tetx-gray-600" style={{fontFamily:'monserrat'}}>Warnings</h2>
//                             <div className="overflow-x-auto">
//                                 <table className="min-w-full divide-y divide-gray-200">
//                                     <thead className="bg-gray-100">
//                                         <tr>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue</th>
//                                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody className="bg-white divide-y divide-gray-200">
//                                         {warnings.map((warning, index) => (
//                                             <tr key={index}>
//                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">{warning.issue}</td>
//                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{warning.date}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default DashboardPage;



