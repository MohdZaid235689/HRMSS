import React, { useEffect, useState } from 'react';
import interviewschedule from '../../assets/interviewschedule.png';
import Tabss from '../adminDashboard/dashboardtabs';
import { CiCirclePlus } from 'react-icons/ci';
import Addjobs from '../adminDashboard/addjobs';
import axios from 'axios';
import second from "../../assets/second.png"
import third2 from "../../assets/third2.png"
import forth from "../../assets/forth.png"
import fivw from "../../assets/fivw.png"
import six from "../../assets/six.png"
import seven from "../../assets/seven.png"
import eight from "../../assets/eight.png"
import Reacttabs from '../reacttabs';
import { Link } from 'react-router-dom';
import '../../App.css'

const Dashboard = () => {


  const [data, setData] = useState({
    interviewshed: 0,
    interviewfeed: 0,
    approval: 0,
    offerletter: 0,
    appointment: 0,
    trainingpen: 0,
    supervisorallocationpen: 0,
    projectallocationpen: 0
  })
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMeetings, setShowMeetings] = useState(false);







  return (
    <>
    <div className="flex flex-col lg:flex-row  h-[600px] ">
      {/* {data.interviewfeed} */}
      {/* Sidebar */}
      {/* Main Content */}
      <main className="flex-1 p-4 sm-w-full w-[78%]">
        <div className="flex items-center justify-between">
          <p className="font-semibold">Overview</p>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-white bg-blue-400 py-1 px-2 rounded-md">
              <CiCirclePlus />
              <p>Add Candidates</p>
            </button>
            <Addjobs />
          </div>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 my-4">


          <Link to='/interviewlist'>
            <div className="flex items-center pt-3 pl-3 justify-center relative">
              <div className="border w-full rounded-lg bg-white p-3">
                <div className="flex items-center justify-center border border-gray-400 h-20 w-20 rounded-3xl absolute top-0 left-0 bg-white">
                  <p className="text-2xl font-semibold">{data.interviewshed}</p>
                </div>
                <div className="flex justify-end p-3">
                  <img className="w-24 h- flex" src={interviewschedule} alt="interviewschedule" />
                </div>
                <p className="font-medium text-gray-500">
                  <span>Interview</span>
                  <br />
                  <span>Scheduled</span>
                </p>
              </div>
            </div>
          </Link>
          <div className="flex items-center pt-3 pl-3 justify-center relative">
            <div className="border w-full rounded-lg bg-white p-3">
              <div className="flex items-center justify-center border border-gray-400 h-20 w-20 rounded-3xl absolute top-0 left-0 bg-white">
                <p className="text-2xl font-semibold">{data.interviewfeed}</p>
              </div>
              <div className="flex justify-end p-3">
                <img className="w-24 h- flex" src={second} alt="interviewschedule" />
              </div>
              <p className="font-medium text-gray-500">
                <span>Interview Feedback</span>
                <br />
                <span>Pending</span>
              </p>
            </div>
          </div>
          <div className="flex items-center pt-3 pl-3 justify-center relative">
            <div className="border w-full rounded-lg bg-white p-3">
              <div className="flex items-center justify-center border border-gray-400 h-20 w-20 rounded-3xl absolute top-0 left-0 bg-white">
                <p className="text-2xl font-semibold">{data.approval}</p>
              </div>
              <div className="flex justify-end p-3">
                <img className="w-24 h- flex" src={third2} alt="interviewschedule" />
              </div>
              <p className="font-medium text-gray-500">
                <span>Approval</span>
                <br />
                <span>Pending</span>
              </p>
            </div>
          </div>
          <div className="flex items-center pt-3 pl-3 justify-center relative">
            <div className="border w-full rounded-lg bg-white p-3">
              <div className="flex items-center justify-center border border-gray-400 h-20 w-20 rounded-3xl absolute top-0 left-0 bg-white">
                <p className="text-2xl font-semibold">{data.offerletter}</p>
              </div>
              <div className="flex justify-end p-3">
                <img className="w-24 h- flex" src={forth} alt="interviewschedule" />
              </div>
              <p className="font-medium text-gray-500">
                <span>Genetate Offer Letter</span>
                <br />
                <span>Pending</span>
              </p>
            </div>
          </div>
          <div className="flex items-center pt-3 pl-3 justify-center relative">
            <div className="border w-full rounded-lg bg-white p-3">
              <div className="flex items-center justify-center border border-gray-400 h-20 w-20 rounded-3xl absolute top-0 left-0 bg-white">
                <p className="text-2xl font-semibold">{data.appointment}</p>
              </div>
              <div className="flex justify-end p-3">
                <img className="w-24 h- flex" src={fivw} alt="interviewschedule" />
              </div>
              <p className="font-medium text-gray-500">
                <span> Oppointment Letter</span>
                <br />
                <span>Pending</span>
              </p>
            </div>
          </div>
          <div className="flex items-center pt-3 pl-3 justify-center relative">
            <div className="border w-full rounded-lg bg-white p-3">
              <div className="flex items-center justify-center border border-gray-400 h-20 w-20 rounded-3xl absolute top-0 left-0 bg-white">
                <p className="text-2xl font-semibold">{data.trainingpen}</p>
              </div>
              <div className="flex justify-end p-3">
                <img className="w-24 h- flex" src={six} alt="interviewschedule" />
              </div>
              <p className="font-medium text-gray-500">
                <span>Training</span>
                <br />
                <span>Pending</span>
              </p>
            </div>
          </div>
          <div className="flex items-center pt-3 pl-3 justify-center relative">
            <div className="border w-full rounded-lg bg-white p-3">
              <div className="flex items-center justify-center border border-gray-400 h-20 w-20 rounded-3xl absolute top-0 left-0 bg-white">
                <p className="text-2xl font-semibold">{data.supervisorallocationpen}</p>
              </div>
              <div className="flex justify-end p-3">
                <img className="w-24 h- flex" src={seven} alt="interviewschedule" />
              </div>
              <p className="font-medium text-gray-500">
                <span>Superviser Allocator</span>
                <br />
                <span>Pending</span>
              </p>
            </div>
          </div>
          <div className="flex items-center pt-3 pl-3 justify-center relative">
            <div className="border w-full rounded-lg bg-white p-3">
              <div className="flex items-center justify-center border border-gray-400 h-20 w-20 rounded-3xl absolute top-0 left-0 bg-white">
                <p className="text-2xl font-semibold">{data.projectallocationpen}</p>
              </div>
              <div className="flex justify-end p-3">
                <img className="w-24 h- flex" src={eight} alt="interviewschedule" />
              </div>
              <p className="font-medium text-gray-500">
                <span>Project Allocation</span>
                <br />
                <span>Pending</span>
              </p>
            </div>
          </div>


        </section>

        {/* Require Attention */}
        
      </main>
      

      {/* Upcoming Meetings */}
      <aside className={`bg-white h-[510px] w-full lg:w-1/4 xl:w-[250px] p-4 overflow-auto  scrollbar-hide  ${showMeetings ? 'block' : 'hidden'} lg:block`}>
        <h2 className="text-xl font-semibold mb-4">Upcoming Meetings</h2>
        <ul className="space-y-4">

          <li className="border rounded-lg p-2 bg-gray-100">
            <p>Meeting with John Doe</p>
            <p className="text-gray-500 text-sm">Tomorrow, 10 AM</p>
          </li>
          <li className="border rounded-lg p-2 bg-green-200">
            <p>Meeting with John Doe</p>
            <p className="text-gray-500 text-sm">Tomorrow, 10 AM</p>
          </li>
          <li className="border rounded-lg p-2 bg-gray-100">
            <p>Meeting with John Doe</p>
            <p className="text-gray-500 text-sm">Tomorrow, 10 AM</p>
          </li>
          <li className="border rounded-lg p-2 bg-green-200">
            <p>Meeting with John Doe</p>
            <p className="text-gray-500 text-sm">Tomorrow, 10 AM</p>
          </li>
          <li className="border rounded-lg p-2 bg-gray-100">
            <p>Meeting with John Doe</p>
            <p className="text-gray-500 text-sm">Tomorrow, 10 AM</p>
          </li>
          <li className="border rounded-lg p-2 bg-green-200">
            <p>Meeting with John Doe</p>
            <p className="text-gray-500 text-sm">Tomorrow, 10 AM</p>
          </li>
          <li className="border rounded-lg p-2 bg-gray-100">
            <p>Meeting with John Doe</p>
            <p className="text-gray-500 text-sm">Tomorrow, 10 AM</p>
          </li>
          <li className="border rounded-lg p-2 bg-green-200">
            <p>Meeting with John Doe</p>
            <p className="text-gray-500 text-sm">Tomorrow, 10 AM</p>
          </li>
          <li className="border rounded-lg p-2 bg-gray-100">
            <p>Meeting with John Doe</p>
            <p className="text-gray-500 text-sm">Tomorrow, 10 AM</p>
          </li>
          <li className="border rounded-lg p-2 bg-green-200">
            <p>Meeting with John Doe</p>
            <p className="text-gray-500 text-sm">Tomorrow, 10 AM</p>
          </li>
          <li className="border rounded-lg p-2 bg-gray-100">
            <p>Meeting with John Doe</p>
            <p className="text-gray-500 text-sm">Tomorrow, 10 AM</p>
          </li>
          <li className="border rounded-lg p-2 bg-green-200">
            <p>Meeting with John Doe</p>
            <p className="text-gray-500 text-sm">Tomorrow, 10 AM</p>
          </li>
          <li className="border rounded-lg p-2 bg-gray-100">
            <p>Meeting with John Doe</p>
            <p className="text-gray-500 text-sm">Tomorrow, 10 AM</p>
          </li>
          <li className="border rounded-lg p-2 bg-green-200">
            <p>Meeting with John Doe</p>
            <p className="text-gray-500 text-sm">Tomorrow, 10 AM</p>
          </li>



        </ul>
      </aside>
      

      {/* Toggle Button for Upcoming Meetings */}
      <button
        onClick={() => setShowMeetings(!showMeetings)}
        className="lg:hidden fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        {showMeetings ? 'Hide Meetings' : 'Show Meetings'}
      </button>
      
    </div>
    <section className="my-4">
          <h2 className="text-xl font-semibold">Require Attention</h2>

          
          {/* <Reacttabs/> */}

        </section>
    <Tabss />
    
    </>
  );
};

export default Dashboard;



