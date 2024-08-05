// // import React from 'react'
// // import Sidebar from './SideBar'
// // import Header from './Header'
// // const Interviewshedulelist = () => {
// //     return (
// //         <div>
// //             <div className="dashboard flex h-screen">
// //                 <Sidebar />
// //                 <div className="flex-1 flex flex-col overflow-hidden">
// //                     <Header />
// //                     <div className="grid grid-cols-3 gap-5 h-[50px] m-7">
// //                         <div className="flex justify-center">
// //                             <button className='bg-sky-400 text-white font-medium text-lg h-[50px] w-[200px] rounded-lg border border-sky-500'>Interview Schedule</button>
// //                         </div>
// //                         <div className="flex justify-center">
// //                             <button className='bg-sky-400 text-white font-medium text-lg h-[50px] w-[200px] rounded-lg border-sky-500'>Rejected Interview</button>
// //                         </div>
// //                         <div className="flex justify-center">
// //                             <button className='bg-sky-400 text-white font-medium text-xl h-[50px] w-[200px] rounded-lg border-sky-500'>Schedule Interview</button>
// //                         </div>
// //                     </div>
// //                     <div className="flex justify-center m-7">
// //                         <div className="w-full" style={{ maxHeight: '400px', overflowY: 'auto' }}>
// //                             <table className="table-auto w-full border border-collapse shadow">
// //                                 <thead>
// //                                     <tr className="text-center" style={{ backgroundColor: "#CFE0E733" }}>
// //                                         <th className="px-4 py-2 border border-gray-200 text-sky-500">SI.NO.</th>
// //                                         <th className="px-4 py-2 border border-gray-200">CandidateId</th>
// //                                         <th className="px-4 py-2 border border-gray-200 text-sky-500">Candidate-Name</th>
// //                                         <th className="px-4 py-2 border border-gray-200">Candidate-Email</th>
// //                                         <th className="px-4 py-2 border border-gray-200 text-sky-500">Candidate-Ph</th>
// //                                         <th className="px-4 py-2 border border-gray-200">View Details</th>
// //                                         <th className="px-4 py-2 border border-gray-200 text-sky-500">Shedule Interview</th>
// //                                     </tr>
// //                                 </thead>
// //                                 <tbody>
// //                                     <tr className="border border-gray-200 text-center">
// //                                         <td className="px-4 py-3 border border-gray-200">1</td>
// //                                         <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
// //                                         <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
// //                                         <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
// //                                         <td className="px-4 py-3 border border-gray-200">8864844665</td>
// //                                         <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
// //                                         <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
// //                                     </tr>
// //                                     <tr className="border border-gray-200 text-center">
// //                                         <td className="px-4 py-3 border border-gray-200">1</td>
// //                                         <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
// //                                         <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
// //                                         <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
// //                                         <td className="px-4 py-3 border border-gray-200">8864844665</td>
// //                                         <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
// //                                         <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
// //                                     </tr>
// //                                     <tr className="border border-gray-200 text-center">
// //                                         <td className="px-4 py-3 border border-gray-200">1</td>
// //                                         <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
// //                                         <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
// //                                         <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
// //                                         <td className="px-4 py-3 border border-gray-200">8864844665</td>
// //                                         <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
// //                                         <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
// //                                     </tr>
// //                                     <tr className="border border-gray-200 text-center">
// //                                         <td className="px-4 py-3 border border-gray-200">1</td>
// //                                         <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
// //                                         <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
// //                                         <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
// //                                         <td className="px-4 py-3 border border-gray-200">8864844665</td>
// //                                         <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
// //                                         <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
// //                                     </tr>
// //                                     <tr className="border border-gray-200 text-center">
// //                                         <td className="px-4 py-3 border border-gray-200">1</td>
// //                                         <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
// //                                         <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
// //                                         <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
// //                                         <td className="px-4 py-3 border border-gray-200">8864844665</td>
// //                                         <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
// //                                         <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
// //                                     </tr>
// //                                     <tr className="border border-gray-200 text-center">
// //                                         <td className="px-4 py-3 border border-gray-200">1</td>
// //                                         <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
// //                                         <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
// //                                         <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
// //                                         <td className="px-4 py-3 border border-gray-200">8864844665</td>
// //                                         <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
// //                                         <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
// //                                     </tr>
// //                                     <tr className="border border-gray-200 text-center">
// //                                         <td className="px-4 py-3 border border-gray-200">1</td>
// //                                         <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
// //                                         <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
// //                                         <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
// //                                         <td className="px-4 py-3 border border-gray-200">8864844665</td>
// //                                         <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
// //                                         <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
// //                                     </tr>
// //                                     <tr className="border border-gray-200 text-center">
// //                                         <td className="px-4 py-3 border border-gray-200">1</td>
// //                                         <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
// //                                         <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
// //                                         <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
// //                                         <td className="px-4 py-3 border border-gray-200">8864844665</td>
// //                                         <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
// //                                         <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
// //                                     </tr>
// //                                     <tr className="border border-gray-200 text-center">
// //                                         <td className="px-4 py-3 border border-gray-200">1</td>
// //                                         <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
// //                                         <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
// //                                         <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
// //                                         <td className="px-4 py-3 border border-gray-200">8864844665</td>
// //                                         <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
// //                                         <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
// //                                     </tr>
                                    
                                    
// //                                     {/* Additional rows here */}
// //                                 </tbody>
// //                             </table>
// //                         </div>
// //                     </div>

// //                 </div>
// //             </div>

// //         </div>
// //     )
// // }

// // export default Interviewshedulelist

// // Interviewshedulelist.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from './SideBar';
// import Header from './Header';

// const Interviewshedulelist = () => {
//   const navigate = useNavigate();

//   const handleViewDetails = (id) => {
//     navigate(`/details/${id}`);
//   };

//   const data = [
//     { id: 'MD-ZAID-01', name: 'Mohd Zaid', email: 'zaidmohd9761@gmail.com', phone: '8864844665' },
//     { id: 'MD-Huzaif-01', name: 'Mohd Huzaif', email: 'zaidhuzaif9761@gmail.com', phone: '8864844698' },
//     { id: 'MD-Hammad-01', name: 'Mohd Hammad', email: 'zaidhammad9761@gmail.com', phone: '8864844678' },
//     { id: 'MD-ZAID-01', name: 'Mohd Zaid', email: 'zaidmohd9761@gmail.com', phone: '8864844665' },
//     { id: 'MD-Huzaif-01', name: 'Mohd Huzaif', email: 'zaidhuzaif9761@gmail.com', phone: '8864844698' },
//     { id: 'MD-Hammad-01', name: 'Mohd Hammad', email: 'zaidhammad9761@gmail.com', phone: '8864844678' },
    
//     // Add more data as needed
//   ];

//   return (
//     <div>
//       <div className="dashboard flex h-screen">
//         <Sidebar />
//         <div className="flex-1 flex flex-col overflow-hidden">
//           <Header />
//           <div className="grid grid-cols-2 gap-5 h-[50px] m-7">
            
//             <div className="flex justify-end">
//               <button className="bg-sky-400 text-white font-medium text-lg h-[50px] w-[200px] rounded-lg border-sky-500">Pending Interview</button>
//             </div>
//             <div className="flex justify-start">
//               <button className="bg-sky-400 text-white font-medium text-lg h-[50px] w-[200px] rounded-lg border-sky-500">Approved Interview</button>
//             </div>
//           </div>
//           <div className="flex justify-center m-7">
//             <div className="w-full" style={{ maxHeight: '400px', overflowY: 'auto' }}>
//               <table className="table-auto w-full border border-collapse shadow">
//                 <thead>
//                   <tr className="text-center" style={{ backgroundColor: "#CFE0E733" }}>
//                     <th className="px-4 py-2 border border-gray-200 text-sky-500">Id</th>
//                     <th className="px-4 py-2 border border-gray-200">CandidateId</th>
//                     <th className="px-4 py-2 border border-gray-200 text-sky-500">Job-Id</th>
//                     <th className="px-4 py-2 border border-gray-200">Interview-Id</th>
//                     <th className="px-4 py-2 border border-gray-200 text-sky-500">Candidate-Name</th>
//                     <th className="px-4 py-2 border border-gray-200">Candidate-Email</th>
//                     <th className="px-4 py-2 border border-gray-200 text-sky-500">Interviewer-1</th>
//                     <th className="px-4 py-2 border border-gray-200">Interviewer-2</th>
//                     <th className="px-4 py-2 border border-gray-200 text-sky-500">Interviewer-</th>
//                     <th className="px-4 py-2 border border-gray-200 text-sky-500">Schedule Interview</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {data.map((item, index) => (
//                     <tr key={item.id} className="border border-gray-200 text-center">
//                       <td className="px-4 py-3 border border-gray-200 ">{index + 1}</td>
//                       <td className="px-4 py-3 border border-gray-200" >{item.id}</td>
//                       <td className="px-4 py-3 border border-gray-200" >{item.name}</td>
//                       <td className="px-4 py-3 border border-gray-200" >{item.email}</td>
//                       <td className="px-4 py-3 border border-gray-200" >{item.phone}</td>
//                       <td className="px-4 py-3 border border-gray-200">
//                         <button
//                           className="text-lg font-medium text-sky-500 p-1 rounded-md mt-3"
//                           onClick={() => handleViewDetails(item.id)}
//                         >
//                           View Details
//                         </button>
//                       </td>
//                       <td className="px-4 py-3 border border-gray-200">
//                         <button className="text-lg font-medium text-blue-500 p-1 rounded-md mt-3">
//                           Schedule Interview
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Interviewshedulelist;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../SideBar';
import Header from '../Header';

const Interviewshedulelist = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/interview-details/${id}`);
  };

  const data = {
    pending: [

        { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid',candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
        { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid',candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
        { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid',candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
        { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid',candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
        { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid',candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
        { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid',candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
        { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid',candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
        { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid',candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },








    ],
    approved: [
        { id: 'MD-ZAID-01',candidateId:'123456', jobId: '76543', interviewId: '45678', candidateName: 'Mohd Zaid',candidateEmail: 'zaidmohd9761@gmail.com', interviewer1: 'Sr.Hemant', interviewer2: 'Sr.Hemant', interviewer3: 'Sr.Hemant', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
        { id: 'MD-ZAID-01',candidateId:'123456', jobId: '76543', interviewId: '45678', candidateName: 'Mohd Zaid',candidateEmail: 'zaidmohd9761@gmail.com', interviewer1: 'Sr.Hemant', interviewer2: 'Sr.Hemant', interviewer3: 'Sr.Hemant', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
        { id: 'MD-ZAID-01',candidateId:'123456', jobId: '76543', interviewId: '45678', candidateName: 'Mohd Zaid',candidateEmail: 'zaidmohd9761@gmail.com', interviewer1: 'Sr.Hemant', interviewer2: 'Sr.Hemant', interviewer3: 'Sr.Hemant', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
        { id: 'MD-ZAID-01',candidateId:'123456', jobId: '76543', interviewId: '45678', candidateName: 'Mohd Zaid',candidateEmail: 'zaidmohd9761@gmail.com', interviewer1: 'Sr.Hemant', interviewer2: 'Sr.Hemant', interviewer3: 'Sr.Hemant', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
      
    ]
  };
  const FilterComponent = ({ onFilter, onClear, filterText }) => (
    <div className="flex gap-4  mb-3">
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Filter rows..."
        value={filterText}
        onChange={onFilter}
      />
      {/* <button
        className="bg-blue-950 text-slate-50 px-3 py-2 rounded-md shadow-sm"
        onClick={onClear}
      >
        Reset
      </button> */}
    </div>
  );

  return (
    <div>
      <div className=" flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          
          <div className="flex flex-col items-end m-7">
            <div className="flex gap-4 mb-5">
              <button
                className={`text-lg font-medium h-[50px] w-[200px] rounded-lg border ${
                  activeTab === 'pending' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'
                }`}
                onClick={() => setActiveTab('pending')}
              >
                Upcoming Interview
              </button>
              <button
                className={`text-lg font-medium h-[50px] w-[200px] rounded-lg border ${
                  activeTab === 'approved' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'
                }`}
                onClick={() => setActiveTab('approved')}
              >
                All Interview
              </button>
            </div>
            <FilterComponent/>
            <div className="w-full" style={{ maxHeight: '500px', overflowY: 'auto' }}>
              <table className="table-auto w-full border border-collapse shadow">
                <thead>
                  <tr className="text-center" style={{ backgroundColor: "#CFE0E733" }}>
                    <th className="px-4 py-2 border border-gray-200 text-sky-500">Id</th>
           
                    <th className="px-4 py-2 border border-gray-200">Interview-Id</th>
                    <th className="px-4 py-2 border border-gray-200 text-sky-500">Candidate-Name</th>
                    <th className="px-4 py-2 border border-gray-200">Candidate-Email</th>

                    <th className="px-4 py-2 border border-gray-200 ">Interview-Date</th>
                    
                    <th className="px-4 py-2 border border-gray-200 text-sky-500">Interview-Time</th>
                    <th className="px-4 py-2 border border-gray-200 ">views</th>


                  </tr>
                </thead>
                <tbody>
                  {data[activeTab].map((item, index) => (
                    <tr key={item.id} className="border border-gray-200 text-center">
                      <td className="px-4 py-3 border border-gray-200 ">{item.id}</td>
       
                      <td className="px-4 py-3 border border-gray-200" >{item.interviewId}</td>
                      <td className="px-4 py-3 border border-gray-200" >{item.candidateName}</td>
                      <td className="px-4 py-3 border border-gray-200" >{item.candidateEmail}</td>
                      
                      <td className="px-4 py-3 border border-gray-200" >{item.interviewDate}</td>
                      <td className="px-4 py-3 border border-gray-200" >{item.interviewTime}</td>
                      <td className="px-4 py-3 border border-gray-200">
                                                <button
                                                    className="text-lg font-medium text-sky-500 p-1 rounded-md mt-3"
                                                    onClick={() => handleViewDetails(item.id)}
                                                >
                                                    View Details
                                                </button>
                                            </td>
                      {/* <td className="px-4 py-3 border border-gray-200">
                        <button
                          className="text-lg font-medium text-sky-500 p-1 rounded-md mt-3"
                          onClick={() => handleViewDetails(item.id)}
                        >
                          View Details
                        </button>
                      </td>
                      <td className="px-4 py-3 border border-gray-200">
                        <button className="text-lg font-medium text-blue-500 p-1 rounded-md mt-3">
                          Schedule Interview
                        </button>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interviewshedulelist;


