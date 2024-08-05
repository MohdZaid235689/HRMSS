// // import React from 'react'

// // const Warningemployee = () => {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default Warningemployee


// import React, { useState } from 'react';
// import Headers from './headers';

// const EmployeeWarnings = () => {
//   const [activeTab, setActiveTab] = useState('active');
  
//   // Sample data
//   const warnings = {
//     active: [
//       { id: '01', date: '12-09-2024', title: 'Warning 1', description: 'Description for Warning 1' },
//       { id: '02', date: '13-09-2024', title: 'Warning 2', description: 'Description for Warning 2' },
//       { id: '02', date: '13-09-2024', title: 'Warning 2', description: 'Description for Warning 2' }

//     ],
//     resolved: [
//       { id: '03', date: '14-09-2024', title: 'Warning 3', description: 'Description for Warning 3' },
//       { id: '04', date: '15-09-2024', title: 'Warning 4', description: 'Description for Warning 4' }
//     ]
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Headers className='flex-1 flex flex-col overflow-hidden' />

//       <div className="flex flex-col items-end p-6">
//         <div className="flex gap-4 mb-5">
//           <button
//             className={`text-lg font-medium h-[50px] w-[200px] rounded-lg border ${activeTab === 'active' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'}`}
//             onClick={() => setActiveTab('active')}
//           >
//             Active Warnings
//           </button>
//           <button
//             className={`text-lg font-medium h-[50px] w-[200px] rounded-lg border ${activeTab === 'resolved' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'}`}
//             onClick={() => setActiveTab('resolved')}
//           >
//             Resolved Warnings
//           </button>
//         </div>

//         <div className="w-full max-w-4xl mx-auto h-[500px] overflow-auto">
//           <ul className="space-y-4">
//             {warnings[activeTab]?.map((warning) => (
//               <li key={warning.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-4 md:flex-row md:items-center text-gray-600" style={{fontFamily:'monserrat'}}>
//                 <div className="text-xl font-semibold text-gray-800">{warning.id}</div>
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold text-gray-800">{warning.title}</h3>
//                   <p className="text-gray-600">{warning.description}</p>
//                 </div>
//                 <div className="flex gap-4 mt-4 md:mt-0 justify-center items-center">
//                   <div className="text-gray-500">{warning.date}</div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeWarnings;

import React, { useState } from 'react';
import Headers from './headers';

const EmployeeWarnings = () => {
  const [activeTab, setActiveTab] = useState('active');
  
  // Sample data
  const warnings = {
    active: [
      { id: '01', date: '12-09-2024', title: 'Warning 1', description: 'Description for Warning 1' },
      { id: '02', date: '13-09-2024', title: 'Warning 2', description: 'Description for Warning 2' },
      { id: '03', date: '13-09-2024', title: 'Warning 3', description: 'Description for Warning 3' }
    ],
    resolved: [
      { id: '04', date: '14-09-2024', title: 'Warning 4', description: 'Description for Warning 4' },
      { id: '05', date: '15-09-2024', title: 'Warning 5', description: 'Description for Warning 5' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Headers className='flex-1 flex flex-col overflow-hidden' />

      <div className="flex flex-col items-end p-6">
        <div className="flex gap-4 mb-5">
          <button
            className={`text-md font-medium h-[40px] w-[170px] rounded-lg border ${activeTab === 'active' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'}`}
            onClick={() => setActiveTab('active')}
          >
            Active Warnings
            
          </button>
          <button
            className={`text-md font-medium h-[40px] w-[170px] rounded-lg border ${activeTab === 'resolved' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'}`}
            onClick={() => setActiveTab('resolved')}
          >
            Resolved Warnings
          </button>
        </div>

        <div className="w-full max-w-4xl mx-auto h-[500px] overflow-auto  scrollbar-hide">
          <ul className="space-y-4">
            {warnings[activeTab]?.map((warning) => (
              <li key={warning.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-4 md:flex-row md:items-center text-gray-600" style={{ fontFamily: 'Montserrat' }}>
                <div className="text-xl font-semibold text-gray-800">{warning.id}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{warning.title}</h3>
                  <p className="text-gray-600">{warning.description}</p>
                </div>
                <div className="flex gap-4 mt-4 md:mt-0 justify-center items-center">
                  <div className="text-gray-500">{warning.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployeeWarnings;


