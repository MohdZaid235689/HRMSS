import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MonitorHeader from './monitorheader';
import Addjobs from './addjobs';
import Employeewarning from './employeewarning';
import Employeetask from './employeetask';

const Employeeattendence = () => {

    const [activeTab, setActiveTab] = useState('pending');
    const navigate = useNavigate();

    const handleMonitor = () => {
        navigate('/monitor-dashboard')
    }
    // const handleWarning = () => {
    //     navigate('/warning-page')
    // }
    const handleTask = () => {
        navigate('/warning-page')
    }
    const handleViewHistory = () => {
        navigate('/attendence-history-page')
    }
    const data = {
        pending: [

            { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
            { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
            { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
            { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
            { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
            { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
            { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
            { id: 'MD-ZAID-01', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },

        ],
        approved: [
            { id: 'MD-ZAID-01', candidateId: '123456', jobId: '76543', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewer1: 'Sr.Hemant', interviewer2: 'Sr.Hemant', interviewer3: 'Sr.Hemant', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
            { id: 'MD-ZAID-01', candidateId: '123456', jobId: '76543', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewer1: 'Sr.Hemant', interviewer2: 'Sr.Hemant', interviewer3: 'Sr.Hemant', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
            { id: 'MD-ZAID-01', candidateId: '123456', jobId: '76543', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewer1: 'Sr.Hemant', interviewer2: 'Sr.Hemant', interviewer3: 'Sr.Hemant', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },
            { id: 'MD-ZAID-01', candidateId: '123456', jobId: '76543', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewer1: 'Sr.Hemant', interviewer2: 'Sr.Hemant', interviewer3: 'Sr.Hemant', interviewDate: '12-09-2024', interviewTime: '12:00:09am' },

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
            <MonitorHeader className='flex-1 flex flex-col overflow-hidden' />


            <div className="flex flex-col items-end m-7">
                <div className="flex gap-4 mb-5">
                    <button
                        className={`text-lg font-medium h-[50px] w-[200px] rounded-lg border ${activeTab === 'pending' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'
                            }`}
                        onClick={() => setActiveTab('pending')}
                    >
                        Today-present
                    </button>
                    <button
                        className={`text-lg font-medium h-[50px] w-[200px] rounded-lg border ${activeTab === 'approved' ? 'bg-sky-400 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-300'
                            }`}
                        onClick={() => setActiveTab('approved')}
                    >
                        Today-Absent
                    </button>
                </div>
                {/* <FilterComponent /> */}
                <div className="w-full" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <table className="table-auto w-full border border-collapse shadow">
                        <thead>
                            <tr className="text-center" style={{ backgroundColor: "#CFE0E733" }}>
                                <th className="px-4 py-2 border border-gray-200 text-sky-500">Id</th>

                                {/* <th className="px-4 py-2 border border-gray-200"></th> */}
                                <th className="px-4 py-2 border border-gray-200 text-sky-500">Employee-Name</th>
                                <th className="px-4 py-2 border border-gray-200">Employee-Email</th>

                                <th className="px-4 py-2 border border-gray-200 ">Today-Date</th>

                                <th className="px-4 py-2 border border-gray-200 text-sky-500">Warning</th>
                                <th className="px-4 py-2 border border-gray-200 ">Task</th>
                                <th className="px-4 py-2 border border-gray-200 ">View History</th>


                            </tr>
                        </thead>
                        <tbody>
                            {data[activeTab].map((item, index) => (
                                <tr key={item.id} className="border border-gray-200 text-center">
                                    <td className="px-4 py-3 border border-gray-200 ">{item.id}</td>

                                    {/* <td className="px-4 py-3 border border-gray-200" >{item.interviewId}</td> */}
                                    <td className="px-4 py-3 border border-gray-200" >{item.candidateName}</td>
                                    {/* <td className="px-4 py-3 border border-gray-200" ><Addjobs/></td> */}
                                    <td className="px-4 py-3 border border-gray-200" >{item.candidateEmail}</td>

                                    <td className="px-4 py-3 border border-gray-200" >{item.interviewDate}</td>

                                    <td className="px-4 py-3 border border-gray-200" ><Employeewarning/></td>
                                    <td className="px-4 py-3 border border-gray-200" ><Employeetask/></td>
                                    <td className="px-4 py-3 border border-gray-200">
                                        <button
                                            className="text-lg font-medium text-sky-500 p-1 rounded-md mt-3"
                                            // onClick={() => handleViewDetails(item.id)}
                                            onClick={handleViewHistory}
                                        >
                                            View Attendence History
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
            <div className="flex flex-col md:flex-row justify-center gap-4">
                    {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300" >
                        Go Back To the Main-Page
                    </button> */}
            
                </div>
        </div>

    );
};

export default Employeeattendence;
