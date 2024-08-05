// // // import React from 'react'

// // // const Employeetasks = () => {
// // //   return (
// // //     <div>

// // //     </div>
// // //   )
// // // }

// // // export default Employeetasks



// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // // import MonitorHeader from './monitorheader';
// // import Headers from './headers';
// // import Addjobs from './addjobs';
// // import Employeewarning from './employeewarning';
// // import Employeetask from './employeetask';

// // const EmployeeTasks = () => {

// //     const [activeTab, setActiveTab] = useState('pending');
// //     const navigate = useNavigate();

// //     const handleMonitor = () => {
// //         navigate('/monitor-dashboard')
// //     }
// //     // const handleWarning = () => {
// //     //     navigate('/warning-page')
// //     // }
// //     const handleTask = () => {
// //         navigate('/warning-page')
// //     }
// //     const handleViewHistory = () => {
// //         navigate('/attendence-history-page')
// //     }
// //     const data = {
// //         pending: [

// //             { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
// //             { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
// //             { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
// //             { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
// //             { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
// //             { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
// //             { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
// //             { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },

// //         ],
// //         approved: [
// //             { id: 'MD-ZAID-01', candidateId: '123456', jobId: '76543', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewer1: 'Sr.Hemant', interviewer2: 'Sr.Hemant', interviewer3: 'Sr.Hemant', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
// //             { id: 'MD-ZAID-01', candidateId: '123456', jobId: '76543', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewer1: 'Sr.Hemant', interviewer2: 'Sr.Hemant', interviewer3: 'Sr.Hemant', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
// //             { id: 'MD-ZAID-01', candidateId: '123456', jobId: '76543', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewer1: 'Sr.Hemant', interviewer2: 'Sr.Hemant', interviewer3: 'Sr.Hemant', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
// //             { id: 'MD-ZAID-01', candidateId: '123456', jobId: '76543', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewer1: 'Sr.Hemant', interviewer2: 'Sr.Hemant', interviewer3: 'Sr.Hemant', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },

// //         ]
// //     };
// //     const FilterComponent = ({ onFilter, onClear, filterText }) => (
// //         <div className="flex gap-4  mb-3">
// //             <input
// //                 class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                 type="text"
// //                 placeholder="Filter rows..."
// //                 value={filterText}
// //                 onChange={onFilter}
// //             />
// //             {/* <button
// //         className="bg-blue-950 text-slate-50 px-3 py-2 rounded-md shadow-sm"
// //         onClick={onClear}
// //       >
// //         Reset
// //       </button> */}
// //         </div>
// //     );

// //     return (
// //         <div>
// //             <Headers className='flex-1 flex flex-col overflow-hidden' />


// //             <div className="flex flex-col items-end m-7">
// //                 <div className="flex gap-4 mb-5">
// //                     <button
// //                         className={`text-lg font-medium h-[50px] w-[200px] rounded-lg border ${activeTab === 'pending' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'
// //                             }`}
// //                         onClick={() => setActiveTab('pending')}
// //                     >
// //                         Today-Task
// //                     </button>
// //                     <button
// //                         className={`text-lg font-medium h-[50px] w-[200px] rounded-lg border ${activeTab === 'pending' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'
// //                             }`}
// //                         onClick={() => setActiveTab('pending')}
// //                     >
// //                         Pending-Task
// //                     </button>
// //                     <button
// //                         className={`text-lg font-medium h-[50px] w-[200px] rounded-lg border ${activeTab === 'approved' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'
// //                             }`}
// //                         onClick={() => setActiveTab('approved')}
// //                     >
// //                         Completed-Task
// //                     </button>
// //                 </div>
// //                 {/* <FilterComponent /> */}
// //                 <div className="w-full" style={{ maxHeight: '400px', overflowY: 'auto' }}>
// //                     <table className="table-auto w-full border border-collapse shadow">
// //                         <thead>
// //                             <tr className="text-center" style={{ backgroundColor: "#CFE0E733" }}>
// //                                 <th className="px-4 py-2 border border-gray-200 text-sky-500">Id</th>

// //                                 {/* <th className="px-4 py-2 border border-gray-200"></th> */}
// //                                 <th className="px-4 py-2 border border-gray-200 text-sky-500">Candidate-Name</th>
// //                                 <th className="px-4 py-2 border border-gray-200">Candidate-Email</th>

// //                                 <th className="px-4 py-2 border border-gray-200 ">Today-Date</th>

// //                                 <th className="px-4 py-2 border border-gray-200 text-sky-500">Warning</th>
// //                                 <th className="px-4 py-2 border border-gray-200 ">Task</th>
// //                                 <th className="px-4 py-2 border border-gray-200 ">View History</th>


// //                             </tr>
// //                         </thead>
// //                         <tbody>
// //                             {data[activeTab].map((item, index) => (
// //                                 <tr key={item.id} className="border border-gray-200 text-center">
// //                                     <td className="px-4 py-3 border border-gray-200 ">{item.id}</td>

// //                                     {/* <td className="px-4 py-3 border border-gray-200" >{item.interviewId}</td> */}
// //                                     <td className="px-4 py-3 border border-gray-200" >{item.candidateName}</td>
// //                                     {/* <td className="px-4 py-3 border border-gray-200" ><Addjobs/></td> */}
// //                                     <td className="px-4 py-3 border border-gray-200" >{item.candidateEmail}</td>

// //                                     <td className="px-4 py-3 border border-gray-200" >{item.interviewDate}</td>

// //                                     <td className="px-4 py-3 border border-gray-200" ><Employeewarning /></td>
// //                                     <td className="px-4 py-3 border border-gray-200" ><Employeetask /></td>
// //                                     <td className="px-4 py-3 border border-gray-200">
// //                                         <button
// //                                             className="text-lg font-medium text-sky-500 p-1 rounded-md mt-3"
// //                                             // onClick={() => handleViewDetails(item.id)}
// //                                             onClick={handleViewHistory}
// //                                         >
// //                                             View Attendence History
// //                                         </button>
// //                                     </td>
// //                                     {/* <td className="px-4 py-3 border border-gray-200">
// //                         <button
// //                           className="text-lg font-medium text-sky-500 p-1 rounded-md mt-3"
// //                           onClick={() => handleViewDetails(item.id)}
// //                         >
// //                           View Details
// //                         </button>
// //                       </td>
// //                       <td className="px-4 py-3 border border-gray-200">
// //                         <button className="text-lg font-medium text-blue-500 p-1 rounded-md mt-3">
// //                           Schedule Interview
// //                         </button>
// //                       </td> */}
// //                                 </tr>
// //                             ))}
// //                         </tbody>
// //                     </table>
// //                 </div>
// //             </div>
// //             <div className="flex flex-col md:flex-row justify-center gap-4">
// //                 {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300" >
// //                         Go Back To the Main-Page
// //                     </button> */}
// //                 <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300" onClick={handleMonitor}>
// //                     Back To the Monitor DashBoard
// //                 </button>
// //             </div>
// //         </div>

// //     );
// // };

// // export default EmployeeTasks;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Headers from './headers';
// import Employeewarning from './employeewarning';
// import Employeetask from './employeetask';

// const EmployeeTasks = () => {
//   const [activeTab, setActiveTab] = useState('pending');
//   const navigate = useNavigate();

//   const handleMonitor = () => {
//     navigate('/monitor-dashboard');
//   };

//   const handleTask = () => {
//     navigate('/warning-page');
//   };

//   const handleViewHistory = () => {
//     navigate('/attendence-history-page');
//   };

//   // Sample data
//   const data = {
//     today: [
//       { id: '01', date: '12-09-2024', taskAbout: 'Complete the Job Portal',taskDescription:'job portal for the VCS and for the world-Wide-Web' },
//       { id: '01', date: '12-09-2024', taskAbout: 'Complete the Job Portal',taskDescription:'job portal for the VCS and for the world-Wide-Web' },
//     //   { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },

//       // Add more items for today
//     ],
//     pending: [
//     //   { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
//     //   { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
//     //   { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },

//       // Add more items for pending
//       { id: '01', date: '12-09-2024', taskAbout: 'Complete the Job Portal',taskDescription:'job portal for the VCS and for the world-Wide-Web' },
//       { id: '01', date: '12-09-2024', taskAbout: 'Complete the Job Portal',taskDescription:'job portal for the VCS and for the world-Wide-Web' },
//       { id: '01', date: '12-09-2024', taskAbout: 'Complete the Job Portal',taskDescription:'job portal for the VCS and for the world-Wide-Web' },
//     ],
//     approved: [
//         { id: '01', date: '12-09-2024', taskAbout: 'Complete the Job Portal',taskDescription:'job portal for the VCS and for the world-Wide-Web' },
//         { id: '01', date: '12-09-2024', taskAbout: 'Complete the Job Portal',taskDescription:'job portal for the VCS and for the world-Wide-Web' },
//         { id: '01', date: '12-09-2024', taskAbout: 'Complete the Job Portal',taskDescription:'job portal for the VCS and for the world-Wide-Web' },
//         { id: '01', date: '12-09-2024', taskAbout: 'Complete the Job Portal',taskDescription:'job portal for the VCS and for the world-Wide-Web' },
//         { id: '01', date: '12-09-2024', taskAbout: 'Complete the Job Portal',taskDescription:'job portal for the VCS and for the world-Wide-Web' },
//         { id: '01', date: '12-09-2024', taskAbout: 'Complete the Job Portal',taskDescription:'job portal for the VCS and for the world-Wide-Web' },
//     //   { id: 'MD-ZAID-01', candidateId: '123456', jobId: '76543', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewer1: 'Sr.Hemant', interviewer2: 'Sr.Hemant', interviewer3: 'Sr.Hemant', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
//       // Add more items for approved
//     ]
//   };

//   return (
//     <div>
//       <Headers className='flex-1 flex flex-col overflow-hidden' />

//       <div className="flex flex-col items-end m-7">
//         <div className="flex gap-4 mb-5">
//           <button
//             className={`text-lg font-medium h-[50px] w-[200px] rounded-lg border ${activeTab === 'today' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'
//               }`}
//             onClick={() => setActiveTab('today')}
//           >
//             Today-Task
//           </button>
//           <button
//             className={`text-lg font-medium h-[50px] w-[200px] rounded-lg border ${activeTab === 'pending' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'
//               }`}
//             onClick={() => setActiveTab('pending')}
//           >
//             Pending-Task
//           </button>
//           <button
//             className={`text-lg font-medium h-[50px] w-[200px] rounded-lg border ${activeTab === 'approved' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'
//               }`}
//             onClick={() => setActiveTab('approved')}
//           >
//             Completed-Task
//           </button>
//         </div>

//         <div className="w-full" style={{ maxHeight: '400px', overflowY: 'auto' }}>
//           <table className="table-auto w-full border border-collapse shadow">
//             <thead>
//               <tr className="text-center" style={{ backgroundColor: "#CFE0E733" }}>
//                 <th className="px-4 py-2 border border-gray-200 text-sky-500">Id</th>
//                 <th className="px-4 py-2 border border-gray-200 ">Date</th>
//                 {/* <th className="px-4 py-2 border border-gray-200"></th> */}
//                 {/* <th className="px-4 py-2 border border-gray-200">Today-Date</th> */}
//                 <th className="px-4 py-2 border border-gray-200 text-sky-500">Task-About</th>
//                 <th className="px-4 py-2 border border-gray-200">Task-Description</th>
//                 <th className="px-4 py-2 border border-gray-200">View Task</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data[activeTab].map((item, index) => (
//                 <tr key={item.id} className="border border-gray-200 text-center">
//                   <td className="px-4 py-3 border border-gray-200">{item.id}</td>
//                   <td className="px-4 py-3 border border-gray-200">{item.date}</td>
//                   <td className="px-4 py-3 border border-gray-200">{item.taskAbout}</td>
//                   <td className="px-4 py-3 border border-gray-200">{item.taskDescription}</td>
//                   <td className="px-4 py-3 border border-gray-200"><Employeewarning /></td>
                  
                  
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row justify-center gap-4">
        
//       </div>
//     </div>
//   );
// };

// export default EmployeeTasks;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Headers from './headers';
// import Employeewarning from './employeewarning';
// import Employeetask from './employeetask';

// const EmployeeTasks = () => {
//   const [activeTab, setActiveTab] = useState('pending');
//   const navigate = useNavigate();

//   const handleMonitor = () => {
//     navigate('/monitor-dashboard');
//   };

//   const handleViewHistory = () => {
//     navigate('/attendence-history-page');
//   };

//   // Sample data
//   const data = {
//     today: [
//       { id: '01', date: '12-09-2024', taskAbout: 'Complete the Job Portal', taskDescription: 'Job portal for the VCS and for the world-Wide-Web' },
//       { id: '02', date: '12-09-2024', taskAbout: 'Update Documentation', taskDescription: 'Update the user documentation for the new features' },
//       { id: '02', date: '12-09-2024', taskAbout: 'Update Documentation', taskDescription: 'Update the user documentation for the new features' },
//       { id: '02', date: '12-09-2024', taskAbout: 'Update Documentation', taskDescription: 'Update the user documentation for the new features' },


//       { id: '02', date: '12-09-2024', taskAbout: 'Update Documentation', taskDescription: 'Update the user documentation for the new features' }

//     ],
//     pending: [
//       { id: '03', date: '13-09-2024', taskAbout: 'Fix Bugs', taskDescription: 'Fix the reported bugs in the system' },
//       { id: '04', date: '14-09-2024', taskAbout: 'Prepare Presentation', taskDescription: 'Prepare slides for the upcoming team meeting' }
//     ],
//     approved: [
//       { id: '05', date: '15-09-2024', taskAbout: 'Deploy Application', taskDescription: 'Deploy the new version of the application to production' },
//       { id: '06', date: '16-09-2024', taskAbout: 'Conduct Training', taskDescription: 'Conduct training for new team members' }
//     ]
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Headers className='flex-1 flex flex-col overflow-hidden' />

//       <div className="flex flex-col items-end p-6">
//         <div className="flex gap-4 mb-5">
//           <button
//             className={`text-lg font-medium h-[50px] w-[200px] rounded-lg border ${activeTab === 'today' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'}`}
//             onClick={() => setActiveTab('today')}
//           >
//             Today-Task
//           </button>
//           <button
//             className={`text-lg font-medium h-[50px] w-[200px] rounded-lg border ${activeTab === 'pending' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'}`}
//             onClick={() => setActiveTab('pending')}
//           >
//             Pending-Task
//           </button>
//           <button
//             className={`text-lg font-medium h-[50px] w-[200px] rounded-lg border ${activeTab === 'approved' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'}`}
//             onClick={() => setActiveTab('approved')}
//           >
//             Completed-Task
//           </button>
//         </div>

//         <div className="w-full max-w-4xl mx-auto">
//           <ul className="space-y-4 overflow-auto">
//             {data[activeTab].map((item) => (
//               <li key={item.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-4 md:flex-row md:items-center text-gray-600" style={{fontFamily:'monserrat'}}>
//                 <div className="text-xl font-semibold text-gray-800">{item.id}</div>
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold text-gray-800">{item.taskAbout}</h3>
//                   <p className="text-gray-600">{item.taskDescription}</p>
//                 </div>
//                 <div className="flex gap-4 mt-4 md:mt-0 justify-center items-center">
//                   <div className="text-gray-500 ">{item.date}</div>
                  
//                   <button
//                     className="text-sky-500 hover:underline"
//                     onClick={handleViewHistory}
//                   >
//                     View Full Description
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

      
//     </div>
//   );
// };

// export default EmployeeTasks;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Headers from './headers';
import '../../App.css'

const EmployeeTasks = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const navigate = useNavigate();

  const handleMonitor = () => {
    navigate('/monitor-dashboard');
  };

  const handleViewHistory = () => {
    navigate('/attendence-history-page');
  };

  // Sample data
  const data = {
    today: [
      { id: '01', date: '12-09-2024', taskAbout: 'Complete the Job Portal', taskDescription: 'Job portal for the VCS and for the world-Wide-Web' },
      { id: '02', date: '12-09-2024', taskAbout: 'Update Documentation', taskDescription: 'Update the user documentation for the new features' },
      { id: '03', date: '12-09-2024', taskAbout: 'Update Documentation', taskDescription: 'Update the user documentation for the new features' },
      { id: '04', date: '12-09-2024', taskAbout: 'Update Documentation', taskDescription: 'Update the user documentation for the new features' },
      { id: '05', date: '12-09-2024', taskAbout: 'Update Documentation', taskDescription: 'Update the user documentation for the new features' }
    ],
    pending: [
      { id: '03', date: '13-09-2024', taskAbout: 'Fix Bugs', taskDescription: 'Fix the reported bugs in the system' },
      { id: '04', date: '14-09-2024', taskAbout: 'Prepare Presentation', taskDescription: 'Prepare slides for the upcoming team meeting' }
    ],
    approved: [
      { id: '05', date: '15-09-2024', taskAbout: 'Deploy Application', taskDescription: 'Deploy the new version of the application to production' },
      { id: '06', date: '16-09-2024', taskAbout: 'Conduct Training', taskDescription: 'Conduct training for new team members' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Headers className='flex-1 flex flex-col overflow-hidden' />

      <div className="flex flex-col items-end p-6">
        <div className="flex gap-4 mb-5">
          <button
            className={`text-md font-medium h-[40px] w-[150px] rounded-lg border ${activeTab === 'today' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'}`}
            onClick={() => setActiveTab('today')}
          >
            Today-Task
          </button>
          <button
            className={`text-md font-medium h-[40px] w-[150px] rounded-lg border ${activeTab === 'pending' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'}`}
            onClick={() => setActiveTab('pending')}
          >
            Pending-Task
          </button>
          <button
            className={`text-md font-medium h-[40px] w-[150px] rounded-lg border ${activeTab === 'approved' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'}`}
            onClick={() => setActiveTab('approved')}
          >
            Complete-Task
          </button>
        </div>

        <div className="w-full max-w-4xl mx-auto h-[450px] overflow-auto  scrollbar-hide">
          <ul className="space-y-4">
            {data[activeTab]?.map((item) => (
              <li key={item.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-4 md:flex-row md:items-center text-gray-600" style={{fontFamily:'monserrat'}}>
                <div className="text-xl font-semibold text-gray-800">{item.id}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{item.taskAbout}</h3>
                  <p className="text-gray-600">{item.taskDescription}</p>
                </div>
                <div className="flex gap-4 mt-4 md:mt-0 justify-center items-center">
                  <div className="text-gray-500">{item.date}</div>
                  <button
                    className="text-sky-500 hover:underline"
                    onClick={handleViewHistory}
                  >
                    View Full Description
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTasks;

