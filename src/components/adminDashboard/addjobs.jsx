import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { CiCirclePlus } from 'react-icons/ci';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import axiosInstance from '@/axios/axios';

function Addjobs() {
  const [inputs, setinputs] = useState({
    jobTittel: "",
    jobLocation: "",
    jobType: "",
    jobDiscription: "",
    jobRequirment: "",
    rolesResponsibilities: ""
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axiosInstance.post('http://157.245.109.206:8087/hr-handler/job/add-job', inputs);
    if(response.data.status === 'created')
    {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 4000
      });
    }
    else
    {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Your work has not been saved",
        showConfirmButton: false,
        timer: 4000
        })
    }
    console.log(response.data);
    console.log("inputs", inputs);
  }

  return (
    <div className="App p-4">
      <Dialog>
        <DialogTrigger className="flex items-center gap-2 text-white bg-blue-400 py-1 px-2 rounded-md">
          <CiCirclePlus size={24} className="mr-2" />
          <span className="text-sm font-medium">Add Jobs</span>
        </DialogTrigger>
        <DialogContent className="mx-auto p-6 bg-white rounded-lg shadow-lg w-full max-w-[800px] overflow-auto h-[580px] ">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800 mb-6">Add Job</DialogTitle>
          </DialogHeader>
          <form>
            <div className="mb-6">
              <label htmlFor="jobTittel" className="block text-gray-700 text-sm font-semibold mb-2">Job Title:</label>
              <input id="jobTittel" className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" onChange={(e) => setinputs({ ...inputs, jobTittel: e.target.value })} value={inputs.jobTittel} />
            </div>
            <div className="mb-6">
              <label htmlFor="jobLocation" className="block text-gray-700 text-sm font-semibold mb-2">Job Location:</label>
              <input id="jobLocation" className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" onChange={(e) => setinputs({...inputs,jobLocation:e.target.value})} value={inputs.jobLocation} />
            </div>
            <div className="mb-6">
              <label htmlFor="jobType" className="block text-gray-700 text-sm font-semibold mb-2">Job Types:</label>
              <input id="jobType" className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" onChange={(e) => setinputs({ ...inputs, jobType: e.target.value })} value={inputs.jobType} />
            </div>
            <div className="mb-6">
              <label htmlFor="jobDiscription" className="block text-gray-700 text-sm font-semibold mb-2">Job Description:</label>
              <textarea id="jobDiscription" className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" onChange={(e) => setinputs({ ...inputs, jobDiscription: e.target.value })} value={inputs.jobDiscription} />
            </div>
            <div className="mb-6">
              <label htmlFor="jobRequirment" className="block text-gray-700 text-sm font-semibold mb-2">Job Requirement:</label>
              <textarea id="jobRequirment" className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" onChange={(e) => setinputs({ ...inputs, jobRequirment: e.target.value })} value={inputs.jobRequirment} />
            </div>
            <div className="mb-6">
              <label htmlFor="rolesResponsibilities" className="block text-gray-700 text-sm font-semibold mb-2">Roles & Responsibilities:</label>
              <textarea id="rolesResponsibilities" className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" onChange={(e) => setinputs({ ...inputs, rolesResponsibilities: e.target.value })} value={inputs.rolesResponsibilities} />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300" type="button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Addjobs;
