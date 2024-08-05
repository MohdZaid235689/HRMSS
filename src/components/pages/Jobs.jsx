import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '@/axios/axios';
import Addjobs from '../adminDashboard/addjobs'
import '../../App.css'
const Jobs = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  const fetchJobData = async () => {
    try {
      const response = await axiosInstance.get('http://157.245.109.206:8087/hr-handler/job/getall/job-post')
      setData(response.data)
    } catch (error) {
      console.error("Error fetching job data:", error)
    }
  }
  useEffect(() => {
    fetchJobData()
  }, [])
  const handleJobSelect = (jobId) => {
    localStorage.setItem('jobId', jobId)
    console.log("jobId", jobId)
    navigate('/joblist')
  }
  return (
    <>
      <div className="flex justify-end">
        <Addjobs />
      </div>
      <div className="flex justify-center">
        <div className="w-[880px] h-[450px] mt-[20px] overflow-auto scrollbar-hide">
          {data.map((job, index) => (
            // <Link to={`/joblist`} >
            <div key={index} className="flex justify-between items-center w-[860px] h-[120px] bg-sky-50 p-3 rounded-lg m-3 cursor-pointer" onClick={() => handleJobSelect(job.jobId)}>
              <p className="font-medium">
                <span className="text-blue-700">{job.jobTittel}</span>
                <br />
                <span className="text-gray-600 font-light text-sm">{job.jobLocation}</span>
                <br />
                <span className="text-gray-600">{job.jobType}</span>
              </p>
              <div className="flex items-center justify-center border border-gray-400 h-20 w-20 rounded-3xl bg-sky-50">
                <p className="text-2xl font-semibold">{0}</p>
              </div>
            </div>
            // </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Jobs




