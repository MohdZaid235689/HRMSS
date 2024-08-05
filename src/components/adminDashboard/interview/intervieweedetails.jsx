import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../SideBar';



const Inntervieweedetails = () => {
    const { id } = useParams();
    const data = {
        'MD-ZAID-01': {
            candidateId: '123456', jobId: '76543', interviewId: '45678', candidateName: 'Mohd Zaid', candidateEmail: 'zaidmohd9761@gmail.com', interviewer1: 'Sr.Hemant', interviewer2: 'Sr.Manas', interviewer3: 'Sr.Piyush', interviewDate: '12-09-2024', interviewTime: '12:00:09am',
        },
    };
    const candidate = data[id]
    // const data = {
    //     'MD-ZAID-01': {
    //         name: 'Mohd Zaid',
    //         email: 'zaidmohd9761@gmail.com',
    //         phone: '8864844665',

    //     },
    //     // add other candidate data
    // };

    // const candidate = data[id];
    return (
        <div className="">
            <div className="dashboard flex h-screen">
                <Sidebar />
            <div className="flex-1 flex flex-col overflow-x-auto">
                 <Header />
                 <div className='flex justify-center'>
            <div className="flex flex-col  bg-white  w-[800px] border-2 border-sky-200 rounded-2xl  shadow-xl m-5">
                <div className="text-center text-3xl text-black font-normal m-5 ">Interviewee Details</div>
                {/* <div className=" h-[800px] border-2 border-blue-950 m-5 p-5" style={{ borderRadius: '10%' }}> */}
                {/* <div className="flex-1 bg-red-100 p-5 mb-5">First Div</div>
                                    <div className="flex-1 bg-green-100 p-5 mb-5">Second Div</div>
                                    <div className="flex-1 bg-blue-100 p-5">Third Div</div> */}
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="id">
                            Id:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={id}



                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="id">
                            CandidateId:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={candidate.candidateId}



                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="id">
                            JobId:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={candidate.jobId}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="id">
                            InterviewId
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={candidate.interviewId}

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="username">
                            Candidate Name:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={candidate.candidateName}

                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="email">
                            Candidate Email:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={candidate.candidateEmail}

                        />
                    </div>



                    <div className="mb-4">
                        <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="interviewer">
                            Interviewer-1:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={candidate.interviewer1}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="interviewer">
                            Interviewer-2:
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={candidate.interviewer2}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="interviewer">
                            Interviewer-3:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={candidate.interviewer3}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="date">
                            Date:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={candidate.interviewDate}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="time">
                            Time:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={candidate.interviewTime}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-xl font-normal mb-2 " htmlFor="designation">
                            Designation:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                        />
                    </div>

                    <Link to='/interviewlist'>
                        <div className="flex items-center justify-end">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Back
                            </button>
                        </div>
                    </Link>
                </form>
            </div>


            {/* </div> */}
        </div>



            </div>
        </div>

        </div>
        
    )
}

export default Inntervieweedetails
