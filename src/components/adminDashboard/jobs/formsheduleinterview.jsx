// // InterviewDetails.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Sidebar from '../SideBar';
// import Header from '../Header';

// const InterviewDetails = () => {
//     const { id } = useParams();


//     const data = {
//         'MD-ZAID-01': {
//             name: 'Mohd Zaid',
//             email: 'zaidmohd9761@gmail.com',
//             phone: '8864844665',

//         },
//         // add other candidate data
//     };

//     const candidate = data[id];

//     return (


//         <div>
//             <div className="dashboard flex h-screen">
//                 <Sidebar />
//                 <div className="flex-1 flex flex-col overflow-x-auto">
//                     <Header />

//                     {candidate ? (
//                         <div className='flex justify-center m-5 '>
//                             <div className="flex flex-col bg-white h-[800px] w-[800px] border-2 border-sky-200 rounded-2xl  shadow-xl">
//                                 <div className="text-center text-3xl text-black font-normal m-5 ">Interview Schedule Details</div>
//                                     <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="id">
//                                                 Id:
//                                             </label>
//                                             <input
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                                 id="username"
//                                                 type="text"
//                                                 placeholder="Enter your username"

//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="id">
//                                                 CandidateId:
//                                             </label>
//                                             <input
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                                 id="username"
//                                                 type="text"
//                                                 placeholder="Enter your username"
//                                                 value={id}

//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="id">
//                                                 JobId:
//                                             </label>
//                                             <input
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                                 id="username"
//                                                 type="text"
//                                                 placeholder="Enter your username"
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="id">
//                                                 InterviewId
//                                             </label>
//                                             <input
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                                 id="username"
//                                                 type="text"
//                                                 placeholder="Enter your username"

//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="link">
//                                                 Meeting Link:
//                                             </label>
//                                             <input
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                                 id="username"
//                                                 type="text"
//                                                 placeholder="Enter your username"
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="username">
//                                                 Candidate Name:
//                                             </label>
//                                             <input
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                                 id="username"
//                                                 type="text"
//                                                 placeholder="Enter your username"
//                                                 value={candidate.name}
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="email">
//                                                 Candidate Email:
//                                             </label>
//                                             <input
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                                 id="username"
//                                                 type="text"
//                                                 placeholder="Enter your username"
//                                                 value={candidate.email}
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="mobileno">
//                                                 Candidate Ph:
//                                             </label>
//                                             <input
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                                 id="username"
//                                                 type="text"
//                                                 placeholder="Enter your username"
//                                                 value={candidate.phone}
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="location">
//                                                 Candidate Location:
//                                             </label>
//                                             <input
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                                 id="username"
//                                                 type="text"
//                                                 placeholder="Enter your username"

//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="experience">
//                                                 Years Of Experience:
//                                             </label>
//                                             <input
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                                 id="username"
//                                                 type="text"
//                                                 placeholder="Enter your username"
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="interviewer">
//                                                 Interviewer-1:
//                                             </label>
//                                             <input
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                                 id="username"
//                                                 type="text"
//                                                 placeholder="Enter your username"
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="interviewer">
//                                                 Interviewer-2:
//                                             </label>
//                                             <input
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                                 id="username"
//                                                 type="text"
//                                                 placeholder="Enter your username"
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="interviewer">
//                                                 Interviewer-3:
//                                             </label>
//                                             <input
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                                 id="username"
//                                                 type="text"
//                                                 placeholder="Enter your username"
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="date">
//                                                 Date:
//                                             </label>
//                                             <input
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                                 id="username"
//                                                 type="text"
//                                                 placeholder="Enter your username"
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="time">
//                                                 Time:
//                                             </label>
//                                             <input
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                                 id="username"
//                                                 type="text"
//                                                 placeholder="Enter your username"
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="designation">
//                                                 Designation:
//                                             </label>
//                                             <input
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                                 id="username"
//                                                 type="text"
//                                                 placeholder="Enter your username"
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="date">
//                                                 Interview Date:
//                                             </label>
//                                             <input
//                                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                                 id="username"
//                                                 type="text"
//                                                 placeholder="Enter your username"
//                                             />
//                                         </div>

//                                         <div className="flex items-center justify-end">
//                                             <button
//                                                 className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                                 type="button"
//                                             >
//                                                 Schedule Interview
//                                             </button>
//                                         </div>
//                                     </form>
//                                 </div>


//                             {/* </div> */}
//                         </div>
//                     ) 
//                     : (
//                         <p>No details found for ID {id}</p>

//                     )
//                     }
//                 </div>

//             </div>
//         </div>


//     );
// };

// export default InterviewDetails;


import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../SideBar';
import Header from '../Header';

const InterviewDetails = () => {
    const { id } = useParams();

    const data = {
        'MD-ZAID-01': {
            name: 'Mohd Zaid',
            email: 'zaidmohd9761@gmail.com',
            phone: '8864844665',
            // Add more candidate data as needed
        },
    };

    const candidate = data[id];

    return (
        <div>
            <div className="dashboard flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-auto">
                    <Header />

                    {candidate ? (
                        <div className="flex justify-center m-5 " style={{ fontFamily: 'ostwald' }}>
                            <div className="flex flex-col bg-white max-w-6xl w-full border-2 border-sky-200 rounded-2xl shadow-xl">
                                <div className="text-center text-3xl text-black font-normal m-5">Interview Schedule Details</div>
                                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <div>
                                            <label className="block text-gray-700 text-lg font-normal mb-2" htmlFor="id">
                                                Id:
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="id"
                                                type="text"
                                                placeholder="Enter your ID"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-lg font-normal mb-2" htmlFor="candidateId">
                                                CandidateId:
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="candidateId"
                                                type="text"
                                                value={id}
                                                readOnly
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-lg font-normal mb-2" htmlFor="jobId">
                                                JobId:
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="jobId"
                                                type="text"
                                                placeholder="Enter Job ID"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-lg font-normal mb-2" htmlFor="interviewId">
                                                InterviewId:
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="interviewId"
                                                type="text"
                                                placeholder="Enter Interview ID"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-lg font-normal mb-2" htmlFor="link">
                                                Meeting Link:
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="link"
                                                type="text"
                                                placeholder="Enter Meeting Link"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-lg font-normal mb-2" htmlFor="name">
                                                Candidate Name:
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="name"
                                                type="text"
                                                value={candidate.name}
                                                readOnly
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-lg font-normal mb-2" htmlFor="email">
                                                Candidate Email:
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="email"
                                                type="email"
                                                value={candidate.email}
                                                readOnly
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-lg font-normal mb-2" htmlFor="phone">
                                                Candidate Phone:
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="phone"
                                                type="text"
                                                value={candidate.phone}
                                                readOnly
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-lg font-normal mb-2" htmlFor="location">
                                                Candidate Location:
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="location"
                                                type="text"
                                                placeholder="Enter Candidate Location"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-lg font-normal mb-2" htmlFor="experience">
                                                Years Of Experience:
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="experience"
                                                type="text"
                                                placeholder="Enter Years of Experience"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-lg font-normal mb-2" htmlFor="interviewer1">
                                                Interviewer-1:
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="interviewer1"
                                                type="text"
                                                placeholder="Enter Interviewer Name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-lg font-normal mb-2" htmlFor="interviewer2">
                                                Interviewer-2:
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="interviewer2"
                                                type="text"
                                                placeholder="Enter Interviewer Name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-lg font-normal mb-2" htmlFor="interviewer3">
                                                Interviewer-3:
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="interviewer3"
                                                type="text"
                                                placeholder="Enter Interviewer Name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-lg font-normal mb-2" htmlFor="date">
                                                Date:
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="date"
                                                type="date"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-lg font-normal mb-2" htmlFor="time">
                                                Time:
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="time"
                                                type="time"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-lg font-normal mb-2" htmlFor="designation">
                                                Designation:
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="designation"
                                                type="text"
                                                placeholder="Enter Designation"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-lg font-normal mb-2" htmlFor="interviewDate">
                                                Interview Date:
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="interviewDate"
                                                type="date"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="button"
                                        >
                                            Schedule Interview
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <p>No details found for ID {id}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InterviewDetails;

