// // import React from 'react';

// // const ResponsiveComponent = () => {
// //   return (
// //     <div className="p-8 bg-pink-100 min-h-screen">
// //       <div className="bg-white shadow-md rounded-lg p-6">
// //         <div className="bg-red-400 text-white text-center p-4 rounded-t-lg">
// //           <h1 className="text-xl font-bold">NSG, MANESAR</h1>
// //         </div>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
// //           <div>
// //             <label className="block text-gray-700">Reading Date</label>
// //             <input
// //               type="date"
// //               className="w-full p-2 border rounded-lg"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-gray-700">Member Number</label>
// //             <input
// //               type="text"
// //               className="w-full p-2 border rounded-lg"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-gray-700">Current Reading</label>
// //             <input
// //               type="text"
// //               className="w-full p-2 border rounded-lg"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-gray-700">Load (KW)</label>
// //             <input
// //               type="text"
// //               className="w-full p-2 border rounded-lg"
// //             />
// //           </div>
// //         </div>

// //         <div className="my-4">
// //           <h2 className="text-lg font-bold mb-2">New Bill</h2>
// //           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
// //             <div>
// //               <label className="block text-gray-700">Meter No. 1</label>
// //               <input
// //                 type="text"
// //                 className="w-full p-2 border rounded-lg"
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-gray-700">Meter No. 2</label>
// //               <input
// //                 type="text"
// //                 className="w-full p-2 border rounded-lg"
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-gray-700">Meter No. 3</label>
// //               <input
// //                 type="text"
// //                 className="w-full p-2 border rounded-lg"
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         <div className="my-4">
// //           <h2 className="text-lg font-bold mb-2">Charges</h2>
// //           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
// //             <div>
// //               <label className="block text-gray-700">Date</label>
// //               <input
// //                 type="date"
// //                 className="w-full p-2 border rounded-lg"
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-gray-700">Month</label>
// //               <input
// //                 type="text"
// //                 className="w-full p-2 border rounded-lg"
// //               />
// //             </div>
// //             <div>
// //               <label className="block text-gray-700">Amount</label>
// //               <input
// //                 type="text"
// //                 className="w-full p-2 border rounded-lg"
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         <div className="my-4">
// //           <h2 className="text-lg font-bold mb-2">Total Amount</h2>
// //           <input
// //             type="text"
// //             className="w-full p-2 border rounded-lg"
// //           />
// //         </div>

// //         <div className="text-center mt-4">
// //           <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
// //             Submit
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ResponsiveComponent;


// import React from 'react';
// // import './App.css';
// import Header from './Header';
// import Sidebar from './SideBar';
// const Apple = () => {
//     return (

//         <div className=" flex h-screen">
//             <Sidebar />
//             <div className="flex-1 flex flex-col overflow-hidden">
//             <main className="flex-1 p-4 bg-gray-200 overflow-auto">
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <h2 className="text-lg font-bold mb-4">Reading Entry</h2>

//               {/* Input Fields */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//                 <div>
//                   <label className="block text-gray-700">Reading Date</label>
//                   <input type="date" className="w-full p-2 border rounded"/>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700">Rank ID</label>
//                   <input type="text" className="w-full p-2 border rounded"/>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700">Bill No</label>
//                   <input type="text" className="w-full p-2 border rounded"/>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700">Bill Period</label>
//                   <input type="text" className="w-full p-2 border rounded"/>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700">Charge Period</label>
//                   <input type="text" className="w-full p-2 border rounded"/>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700">Last Pay Date</label>
//                   <input type="date" className="w-full p-2 border rounded"/>
//                 </div>
//               </div>

//               {/* Table */}
//               {/* <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white">
//                   <thead>
//                     <tr>
//                       <th className="py-2 px-4 border">Charges</th>
//                       <th className="py-2 px-4 border">From</th>
//                       <th className="py-2 px-4 border">To</th>
//                       <th className="py-2 px-4 border">Days</th>
//                       <th className="py-2 px-4 border">Chargeable</th>
//                       <th className="py-2 px-4 border">Appl.</th>
//                       <th className="py-2 px-4 border">Rate/Unit</th>
//                       <th className="py-2 px-4 border">Amount</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td className="py-2 px-4 border">MMC</td>
//                       <td className="py-2 px-4 border">23-05-2024</td>
//                       <td className="py-2 px-4 border">23-05-2024</td>
//                       <td className="py-2 px-4 border">1</td>
//                       <td className="py-2 px-4 border">1</td>
//                       <td className="py-2 px-4 border">+</td>
//                       <td className="py-2 px-4 border">0</td>
//                       <td className="py-2 px-4 border">0</td>
//                     </tr>
//                     <tr>
//                       <td className="py-2 px-4 border">F.C.</td>
//                       <td className="py-2 px-4 border">23-05-2024</td>
//                       <td className="py-2 px-4 border">23-05-2024</td>
//                       <td className="py-2 px-4 border">1</td>
//                       <td className="py-2 px-4 border">1</td>
//                       <td className="py-2 px-4 border">+</td>
//                       <td className="py-2 px-4 border">0</td>
//                       <td className="py-2 px-4 border">0</td>
//                     </tr>
//                     <tr>
//                       <td className="py-2 px-4 border">L.F.</td>
//                       <td className="py-2 px-4 border">23-05-2024</td>
//                       <td className="py-2 px-4 border">23-05-2024</td>
//                       <td className="py-2 px-4 border">1</td>
//                       <td className="py-2 px-4 border">1</td>
//                       <td className="py-2 px-4 border">+</td>
//                       <td className="py-2 px-4 border">0</td>
//                       <td className="py-2 px-4 border">0</td>
//                     </tr>
//                     <tr>
//                       <td className="py-2 px-4 border">E.R.</td>
//                       <td className="py-2 px-4 border">23-05-2024</td>
//                       <td className="py-2 px-4 border">23-05-2024</td>
//                       <td className="py-2 px-4 border">1</td>
//                       <td className="py-2 px-4 border">1</td>
//                       <td className="py-2 px-4 border">+</td>
//                       <td className="py-2 px-4 border">0</td>
//                       <td className="py-2 px-4 border">0</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div> */}
//               <div className=" flex flex-col items-center m-7 h-[600px] p-5">
//                         <div className="flex justify-start">
//                             <div className="text-xl font-medium text-slate-600 mb-5">All Company-Employees</div>
//                         </div>
//                         <div className="w-full " style={{ maxHeight: '400px', overflowY: 'auto' }}>
//                             <table className="table-auto w-full border border-collapse shadow">
//                                 <thead>
//                                     <tr className="text-center" style={{ backgroundColor: "#CFE0E733" }}>
//                                         <th className="px-4 py-2 border border-gray-200 text-sky-500">Name</th>

//                                         <th className="px-4 py-2 border border-gray-200">Department</th>
//                                         <th className="px-4 py-2 border border-gray-200 text-sky-500">Role</th>
//                                         <th className="px-4 py-2 border border-gray-200">Degree</th>

//                                         <th className="px-4 py-2 border border-gray-200 text-sky-500 ">Mobile-No</th>

//                                         <th className="px-4 py-2 border border-gray-200 ">Email</th>
//                                         <th className="px-4 py-2 border border-gray-200 text-sky-500 ">Joining-Date</th>

//                                         <th className="px-4 py-2 border border-gray-200 ">Actions</th>
//                                     </tr>

//                                 </thead>
//                                 <tbody>

//                                     <tr className="border border-gray-200 text-center">
//                                         <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

//                                         <td className="px-4 py-3 border border-gray-200" >Java</td>
//                                         <td className="px-4 py-3 border border-gray-200" >Developer</td>
//                                         <td className="px-4 py-3 border border-gray-200" >CS-IT</td>

//                                         <td className="px-4 py-3 border border-gray-200" >8864844665</td>
//                                         <td className="px-4 py-3 border border-gray-200" >zaidmohd9761@gmail.com</td>
//                                         <td className="px-4 py-3 border border-gray-200" >12-04-2024</td>
//                                         <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>

//                                     </tr>
//                                     <tr className="border border-gray-200 text-center">
//                                         <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

//                                         <td className="px-4 py-3 border border-gray-200" >Java</td>
//                                         <td className="px-4 py-3 border border-gray-200" >Developer</td>
//                                         <td className="px-4 py-3 border border-gray-200" >CS-IT</td>

//                                         <td className="px-4 py-3 border border-gray-200" >8864844665</td>
//                                         <td className="px-4 py-3 border border-gray-200" >zaidmohd9761@gmail.com</td>
//                                         <td className="px-4 py-3 border border-gray-200" >12-04-2024</td>
//                                         <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>

//                                     </tr>
//                                     <tr className="border border-gray-200 text-center">
//                                         <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

//                                         <td className="px-4 py-3 border border-gray-200" >Java</td>
//                                         <td className="px-4 py-3 border border-gray-200" >Developer</td>
//                                         <td className="px-4 py-3 border border-gray-200" >CS-IT</td>

//                                         <td className="px-4 py-3 border border-gray-200" >8864844665</td>
//                                         <td className="px-4 py-3 border border-gray-200" >zaidmohd9761@gmail.com</td>
//                                         <td className="px-4 py-3 border border-gray-200" >12-04-2024</td>
//                                         <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>

//                                     </tr>
//                                     <tr className="border border-gray-200 text-center">
//                                         <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

//                                         <td className="px-4 py-3 border border-gray-200" >Java</td>
//                                         <td className="px-4 py-3 border border-gray-200" >Developer</td>
//                                         <td className="px-4 py-3 border border-gray-200" >CS-IT</td>

//                                         <td className="px-4 py-3 border border-gray-200" >8864844665</td>
//                                         <td className="px-4 py-3 border border-gray-200" >zaidmohd9761@gmail.com</td>
//                                         <td className="px-4 py-3 border border-gray-200" >12-04-2024</td>
//                                         <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>

//                                     </tr>
//                                     <tr className="border border-gray-200 text-center">
//                                         <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

//                                         <td className="px-4 py-3 border border-gray-200" >Java</td>
//                                         <td className="px-4 py-3 border border-gray-200" >Developer</td>
//                                         <td className="px-4 py-3 border border-gray-200" >CS-IT</td>

//                                         <td className="px-4 py-3 border border-gray-200" >8864844665</td>
//                                         <td className="px-4 py-3 border border-gray-200" >zaidmohd9761@gmail.com</td>
//                                         <td className="px-4 py-3 border border-gray-200" >12-04-2024</td>
//                                         <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>

//                                     </tr>
//                                     <tr className="border border-gray-200 text-center">
//                                         <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

//                                         <td className="px-4 py-3 border border-gray-200" >Java</td>
//                                         <td className="px-4 py-3 border border-gray-200" >Developer</td>
//                                         <td className="px-4 py-3 border border-gray-200" >CS-IT</td>

//                                         <td className="px-4 py-3 border border-gray-200" >8864844665</td>
//                                         <td className="px-4 py-3 border border-gray-200" >zaidmohd9761@gmail.com</td>
//                                         <td className="px-4 py-3 border border-gray-200" >12-04-2024</td>
//                                         <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>

//                                     </tr>
//                                     <tr className="border border-gray-200 text-center">
//                                         <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

//                                         <td className="px-4 py-3 border border-gray-200" >Java</td>
//                                         <td className="px-4 py-3 border border-gray-200" >Developer</td>
//                                         <td className="px-4 py-3 border border-gray-200" >CS-IT</td>

//                                         <td className="px-4 py-3 border border-gray-200" >8864844665</td>
//                                         <td className="px-4 py-3 border border-gray-200" >zaidmohd9761@gmail.com</td>
//                                         <td className="px-4 py-3 border border-gray-200" >12-04-2024</td>
//                                         <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>

//                                     </tr>
//                                     <tr className="border border-gray-200 text-center">
//                                         <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

//                                         <td className="px-4 py-3 border border-gray-200" >Java</td>
//                                         <td className="px-4 py-3 border border-gray-200" >Developer</td>
//                                         <td className="px-4 py-3 border border-gray-200" >CS-IT</td>

//                                         <td className="px-4 py-3 border border-gray-200" >8864844665</td>
//                                         <td className="px-4 py-3 border border-gray-200" >zaidmohd9761@gmail.com</td>
//                                         <td className="px-4 py-3 border border-gray-200" >12-04-2024</td>
//                                         <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>

//                                     </tr>


//                                 </tbody>
//                             </table>
//                         </div>

//                     </div>

//               <div className="mt-4">
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded">New</button>
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded ml-2">Update</button>
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded ml-2">Search</button>
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded ml-2">Save</button>
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded ml-2">Exit</button>
//               </div>
//             </div>
//           </main>

//             </div>
//         </div>

//         // <div className="flex flex-col md:flex-row h-screen">
//         //   {/* Header/Sidebar */}


//         //   {/* Main Content */}
//         //   <main className="flex-1 p-4 bg-gray-200 overflow-auto">
//         //     <div className="bg-white p-4 rounded-lg shadow-md">
//         //       <h2 className="text-lg font-bold mb-4">Reading Entry</h2>

//         //       {/* Input Fields */}
//         //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//         //         <div>
//         //           <label className="block text-gray-700">Reading Date</label>
//         //           <input type="date" className="w-full p-2 border rounded"/>
//         //         </div>
//         //         <div>
//         //           <label className="block text-gray-700">Rank ID</label>
//         //           <input type="text" className="w-full p-2 border rounded"/>
//         //         </div>
//         //         <div>
//         //           <label className="block text-gray-700">Bill No</label>
//         //           <input type="text" className="w-full p-2 border rounded"/>
//         //         </div>
//         //         <div>
//         //           <label className="block text-gray-700">Bill Period</label>
//         //           <input type="text" className="w-full p-2 border rounded"/>
//         //         </div>
//         //         <div>
//         //           <label className="block text-gray-700">Charge Period</label>
//         //           <input type="text" className="w-full p-2 border rounded"/>
//         //         </div>
//         //         <div>
//         //           <label className="block text-gray-700">Last Pay Date</label>
//         //           <input type="date" className="w-full p-2 border rounded"/>
//         //         </div>
//         //       </div>

//         //       {/* Table */}
//         //       <div className="overflow-x-auto">
//         //         <table className="min-w-full bg-white">
//         //           <thead>
//         //             <tr>
//         //               <th className="py-2 px-4 border">Charges</th>
//         //               <th className="py-2 px-4 border">From</th>
//         //               <th className="py-2 px-4 border">To</th>
//         //               <th className="py-2 px-4 border">Days</th>
//         //               <th className="py-2 px-4 border">Chargeable</th>
//         //               <th className="py-2 px-4 border">Appl.</th>
//         //               <th className="py-2 px-4 border">Rate/Unit</th>
//         //               <th className="py-2 px-4 border">Amount</th>
//         //             </tr>
//         //           </thead>
//         //           <tbody>
//         //             <tr>
//         //               <td className="py-2 px-4 border">MMC</td>
//         //               <td className="py-2 px-4 border">23-05-2024</td>
//         //               <td className="py-2 px-4 border">23-05-2024</td>
//         //               <td className="py-2 px-4 border">1</td>
//         //               <td className="py-2 px-4 border">1</td>
//         //               <td className="py-2 px-4 border">+</td>
//         //               <td className="py-2 px-4 border">0</td>
//         //               <td className="py-2 px-4 border">0</td>
//         //             </tr>
//         //             <tr>
//         //               <td className="py-2 px-4 border">F.C.</td>
//         //               <td className="py-2 px-4 border">23-05-2024</td>
//         //               <td className="py-2 px-4 border">23-05-2024</td>
//         //               <td className="py-2 px-4 border">1</td>
//         //               <td className="py-2 px-4 border">1</td>
//         //               <td className="py-2 px-4 border">+</td>
//         //               <td className="py-2 px-4 border">0</td>
//         //               <td className="py-2 px-4 border">0</td>
//         //             </tr>
//         //             <tr>
//         //               <td className="py-2 px-4 border">L.F.</td>
//         //               <td className="py-2 px-4 border">23-05-2024</td>
//         //               <td className="py-2 px-4 border">23-05-2024</td>
//         //               <td className="py-2 px-4 border">1</td>
//         //               <td className="py-2 px-4 border">1</td>
//         //               <td className="py-2 px-4 border">+</td>
//         //               <td className="py-2 px-4 border">0</td>
//         //               <td className="py-2 px-4 border">0</td>
//         //             </tr>
//         //             <tr>
//         //               <td className="py-2 px-4 border">E.R.</td>
//         //               <td className="py-2 px-4 border">23-05-2024</td>
//         //               <td className="py-2 px-4 border">23-05-2024</td>
//         //               <td className="py-2 px-4 border">1</td>
//         //               <td className="py-2 px-4 border">1</td>
//         //               <td className="py-2 px-4 border">+</td>
//         //               <td className="py-2 px-4 border">0</td>
//         //               <td className="py-2 px-4 border">0</td>
//         //             </tr>
//         //           </tbody>
//         //         </table>
//         //       </div>

//         //       <div className="mt-4">
//         //         <button className="bg-blue-500 text-white py-2 px-4 rounded">New</button>
//         //         <button className="bg-blue-500 text-white py-2 px-4 rounded ml-2">Update</button>
//         //         <button className="bg-blue-500 text-white py-2 px-4 rounded ml-2">Search</button>
//         //         <button className="bg-blue-500 text-white py-2 px-4 rounded ml-2">Save</button>
//         //         <button className="bg-blue-500 text-white py-2 px-4 rounded ml-2">Exit</button>
//         //       </div>
//         //     </div>
//         //   </main>
//         // </div>
//     );
// }

// export default Apple;



import React from 'react'
import Sidebar from './SideBar'

const Manage = () => {
    return (
        <div>
            <div className=" flex h-screen">
                <Sidebar />
            
                <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold">NSG, MANESAR</h1>
        <p>Reading Entry...</p>
      </header>

      <div className="top-info grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <label className="flex flex-col">
          Reading Date: <input type="date" value="2024-07-02" className="border p-2" />
        </label>
        <label className="flex flex-col">
          GI Type: <input type="text" value="2 TYPE" className="border p-2" />
        </label>
        <label className="flex flex-col">
          Member: <input type="text" value="GUEST ROOM" className="border p-2" />
        </label>
        <label className="flex flex-col">
          Rank ID: <input type="text" value="R1" className="border p-2" />
        </label>
        <label className="flex flex-col">
          CPO (R/ICPO): <input type="text" value="R/ICPO" className="border p-2" />
        </label>
        <label className="flex flex-col">
          Bill No.: <input type="text" value="2 May 2024" className="border p-2" />
        </label>
      </div>

      <div className="new-bill grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <label className="flex flex-col">
          Occup. Date: <input type="date" value="2021-10-15" className="border p-2" />
        </label>
        <label className="flex flex-col">
          Vac. Date: <input type="date" value="2040-12-31" className="border p-2" />
        </label>
        <label className="flex flex-col">
          Bill Period: <input type="text" value="15 Oct 2021 - 31 Dec 2040" className="border p-2" />
        </label>
        <label className="flex flex-col">
          Charge Period: <input type="text" value="26 May 2024 - 02 Jul 2024" className="border p-2" />
        </label>
        <label className="flex flex-col">
          Last Pay Date: <input type="date" value="2024-09-25" className="border p-2" />
        </label>
      </div>

      <div className="charges-table overflow-x-auto mb-8">
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Charge</th>
              <th className="border px-4 py-2">From</th>
              <th className="border px-4 py-2">To</th>
              <th className="border px-4 py-2">Days</th>
              <th className="border px-4 py-2">Chargeable Months</th>
              <th className="border px-4 py-2">Days</th>
              <th className="border px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">MRC</td>
              <td className="border px-4 py-2">2024-05-26</td>
              <td className="border px-4 py-2">2024-07-02</td>
              <td className="border px-4 py-2">61</td>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">61</td>
              <td className="border px-4 py-2">1000</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">RMC</td>
              <td className="border px-4 py-2">2024-05-26</td>
              <td className="border px-4 py-2">2024-07-02</td>
              <td className="border px-4 py-2">61</td>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">61</td>
              <td className="border px-4 py-2">1000</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">BAC</td>
              <td className="border px-4 py-2">2024-05-26</td>
              <td className="border px-4 py-2">2024-07-02</td>
              <td className="border px-4 py-2">61</td>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">61</td>
              <td className="border px-4 py-2">646</td>
            </tr>
            <tr>
              <td colSpan="6" className="border px-4 py-2 text-right">
                Total
              </td>
              <td className="border px-4 py-2">2646</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="summary mb-8">
        <p>Total Payable: Two Thousand Six Hundred Forty Six</p>
      </div>

      <div className="footer flex justify-center gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Back</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">Print</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Help</button>
      </div>
    </div>

            </div>
        </div>
    )
}

export default Manage

