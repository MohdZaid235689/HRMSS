// import React, { useEffect, useState } from 'react';
// import Header from '../Header';
// import Sidebar from '../SideBar';
// import { Link,useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Joblist = () => {
//     const [jobData,setJobData] = useState([])
//     const jobId = localStorage.getItem('jobId')
//     console.log(jobId)

//     const fetchJobData = async() => {
//         // const formData = new FormData()
//         // formData.append('jobId', jobId)

//         const response = await axios.post('http://157.245.109.206:8087/hr-handler/job/getdata-by-jobId?jobId='+jobId)
//         setJobData(response.data)
//         console.log("jobData",jobData[jobLocation])
//     }

//     useEffect(() => {
//         fetchJobData();
//     },[])
    // const data = [
    //     { id: 'MD-ZAID-01', name: 'Mohd Zaid', email: 'zaidmohd9761@gmail.com', phone: '8864844665' },
    //     { id: 'MD-Huzaif-01', name: 'Mohd Huzaif', email: 'zaidhuzaif9761@gmail.com', phone: '8864844698' },
    //     { id: 'MD-Hammad-01', name: 'Mohd Hammad', email: 'zaidhammad9761@gmail.com', phone: '8864844678' },
    //     { id: 'MD-ZAID-01', name: 'Mohd Zaid', email: 'zaidmohd9761@gmail.com', phone: '8864844665' },
    //     { id: 'MD-Huzaif-01', name: 'Mohd Huzaif', email: 'zaidhuzaif9761@gmail.com', phone: '8864844698' },
    //     { id: 'MD-Hammad-01', name: 'Mohd Hammad', email: 'zaidhammad9761@gmail.com', phone: '8864844678' },
        
    //     // Add more data as needed
    //   ];
//     const navigate = useNavigate();

//     const handleViewDetails = (id) => {
//         navigate(`/details/${id}`);
//     };
//     const [showCandidates, setShowCandidates] = useState(false);

//     const handleShowCandidates = () => {
//         setShowCandidates(!showCandidates);
//     };





//     return (
//         <div>
//             <div className="dashboard flex h-screen">
//                 <Sidebar />
//                 <div className="flex-1 flex flex-col overflow-hidden">
//                     <Header />
//                     <div className="flex justify-center m-5">
//                         <div className="flex justify-between items-center w-full h-[120px] bg-sky-50 p-3 rounded-xl m-3 cursor-pointer border border-sky-200">
//                             <p className="font-medium">
//                                 <span className="text-blue-700 text-xl">{jobData.jobTittel}</span>
//                                 <br />
//                                 <span className="text-gray-600 font-light text-">{jobData.jobLocation}</span>
//                                 <br />
//                                 <span className="text-gray-600 text-lg">Product Developer</span>
//                             </p>
//                             <div className="flex flex-col justify-center items-center">
//                                 <div className="flex items-center justify-center border border-gray-400 h-20 w-20 rounded-3xl top-3 right-0 bg-sky-50 m-1">
//                                     <p className="text-2xl font font-semibold">23</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex justify-center m-5">
//                         <div className="w-full" style={{ maxHeight: '400px', overflowY: 'auto' }}>
//                             <table className="table-auto w-full border border-collapse shadow">
//                                 <thead>
//                                     <tr className="text-center" style={{ backgroundColor: "#CFE0E733" }}>
//                                         <th className="px-4 py-2 border border-gray-200 text-sky-500">SI.NO.</th>
//                                         <th className="px-4 py-2 border border-gray-200">CandidateId</th>
//                                         <th className="px-4 py-2 border border-gray-200 text-sky-500">Candidate-Name</th>
//                                         <th className="px-4 py-2 border border-gray-200">Candidate-Email</th>
//                                         <th className="px-4 py-2 border border-gray-200 text-sky-500">Candidate-Ph</th>
                                        
//                                         <th className="px-4 py-2 border border-gray-200 text-sky-500">Shedule Interview</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {data.map((item, index) => (
//                                         <tr key={item.id} className="border border-gray-200 text-center">
//                                             <td className="px-4 py-3 border border-gray-200 ">{index + 1}</td>
//                                             <td className="px-4 py-3 border border-gray-200" >{item.id}</td>
//                                             <td className="px-4 py-3 border border-gray-200" >{item.name}</td>
//                                             <td className="px-4 py-3 border border-gray-200" >{item.email}</td>
//                                             <td className="px-4 py-3 border border-gray-200" >{item.phone}</td>
//                                             {/* <td className="px-4 py-3 border border-gray-200">
//                                                 <button
//                                                     className="text-lg font-medium text-sky-500 p-1 rounded-md mt-3"
//                                                     onClick={() => handleViewDetails(item.id)}
//                                                 >
//                                                     View Details
//                                                 </button>
//                                             </td> */}
//                                             <td className="px-4 py-3 border border-gray-200">
//                                                 <button className="text-lg font-medium text-blue-500 p-1 rounded-md mt-3"
//                                                 onClick={() => handleViewDetails(item.id)}>
//                                                     Schedule Interview
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Joblist;



import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Sidebar from '../SideBar';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '@/axios/axios';

const Joblist = () => {
    const data = [
        { id: 'MD-ZAID-01', name: 'Mohd Zaid', email: 'zaidmohd9761@gmail.com', phone: '8864844665' },
        { id: 'MD-Huzaif-01', name: 'Mohd Huzaif', email: 'zaidhuzaif9761@gmail.com', phone: '8864844698' },
        { id: 'MD-Hammad-01', name: 'Mohd Hammad', email: 'zaidhammad9761@gmail.com', phone: '8864844678' },
        { id: 'MD-ZAID-01', name: 'Mohd Zaid', email: 'zaidmohd9761@gmail.com', phone: '8864844665' },
        { id: 'MD-Huzaif-01', name: 'Mohd Huzaif', email: 'zaidhuzaif9761@gmail.com', phone: '8864844698' },
        { id: 'MD-Hammad-01', name: 'Mohd Hammad', email: 'zaidhammad9761@gmail.com', phone: '8864844678' },
        
        // Add more data as needed
      ];
    const [jobData, setJobData] = useState([]);
    const jobId = localStorage.getItem('jobId');
    const navigate = useNavigate();

    const fetchJobData = async () => {
        try {
            // Using POST request with jobId in the query parameter
            const response = await axiosInstance.post(`http://157.245.109.206:8087/hr-handler/job/getdata-by-jobId?jobId=${jobId}`);
            setJobData(response.data);
            console.log("jobData", response.data);
        } catch (error) {
            console.error("Error fetching job data:", error);
        }
    };

    useEffect(() => {
        if (jobId) {
            fetchJobData();
        } else {
            console.error("No job ID found in localStorage");
        }
    }, [jobId]);

    const handleViewDetails = (id) => {
        navigate(`/details/${id}`);
    };

    const job = jobData[0] || {}; // Safely access the first job item if it exists

    return (
        <div>
            <div className="dashboard flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header />
                    <div className="flex justify-center m-5">
                        <div className="flex justify-between items-center w-full h-[120px] bg-sky-50 p-3 rounded-xl m-3 cursor-pointer border border-sky-200">
                            <p className="font-medium">
                                <span className="text-blue-700 text-xl">{job.jobTittel}</span>
                                <br />
                                <span className="text-gray-600 font-light text-">{job.jobLocation}</span>
                                <br />
                                <span className="text-gray-600 text-lg">{job.jobType}</span>
                            </p>
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex items-center justify-center border border-gray-400 h-20 w-20 rounded-3xl top-3 right-0 bg-sky-50 m-1">
                                    <p className="text-2xl font font-semibold">{0}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center m-5">
                        <div className="w-full" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                            <table className="table-auto w-full border border-collapse shadow">
                                <thead>
                                    <tr className="text-center" style={{ backgroundColor: "#CFE0E733" }}>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">SI.NO.</th>
                                        <th className="px-4 py-2 border border-gray-200">CandidateId</th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">Candidate-Name</th>
                                        <th className="px-4 py-2 border border-gray-200">Candidate-Email</th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">Candidate-Ph</th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">Schedule Interview</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={item.id} className="border border-gray-200 text-center">
                                            <td className="px-4 py-3 border border-gray-200">{index + 1}</td>
                                            <td className="px-4 py-3 border border-gray-200">{item.id}</td>
                                            <td className="px-4 py-3 border border-gray-200">{item.name}</td>
                                            <td className="px-4 py-3 border border-gray-200">{item.email}</td>
                                            <td className="px-4 py-3 border border-gray-200">{item.phone}</td>
                                            <td className="px-4 py-3 border border-gray-200">
                                                <button
                                                    className="text-lg font-medium text-blue-500 p-1 rounded-md mt-3"
                                                    onClick={() => handleViewDetails(item.id)}
                                                >
                                                    Schedule Interview
                                                </button>
                                            </td>
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

export default Joblist;
