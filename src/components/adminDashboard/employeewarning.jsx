// import React from 'react'

// const Employeewarning = () => {
//   return (
//     <div>
//       hello
//     </div>
//   )
// }

// export default Employeewarning




import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { CiCirclePlus } from 'react-icons/ci';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import axiosInstance from '@/axios/axios';

function Employeewarning() {
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
        <DialogTrigger className="">
          

          <button className='bg-white border-2 border-red-500 text-red-500 w-[100px] h-[30px] text-md font-normal rounded-md' >Warning</button>
        </DialogTrigger>
        <DialogContent className="mx-auto p-6 bg-white rounded-lg shadow-lg w-full max-w-[800px] overflow-auto h-[580px] ">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-800 mb-6 " >Warning To the Employee</DialogTitle>
          </DialogHeader>
          <form>
            <div className="mb-6">
              <label htmlFor="jobTittel" className="block text-gray-700 text-sm font-semibold mb-2">Employee-Id:</label>
              <input id="jobTittel" className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" onChange={(e) => setinputs({ ...inputs, jobTittel: e.target.value })} value={inputs.jobTittel} />
            </div>
            <div className="mb-6">
              <label htmlFor="jobLocation" className="block text-gray-700 text-sm font-semibold mb-2">Employee-Name:</label>
              <input id="jobLocation" className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" onChange={(e) => setinputs({...inputs,jobLocation:e.target.value})} value={inputs.jobLocation} />
            </div>
            <div className="mb-6">
              <label htmlFor="jobType" className="block text-gray-700 text-sm font-semibold mb-2">Employee-Email:</label>
              <input id="jobType" className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" onChange={(e) => setinputs({ ...inputs, jobType: e.target.value })} value={inputs.jobType} />
            </div>
            <div className="mb-6">
              <label htmlFor="jobDiscription" className="block text-gray-700 text-sm font-semibold mb-2">Date:</label>
              <input id="jobDiscription" className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" onChange={(e) => setinputs({ ...inputs, jobDiscription: e.target.value })} value={inputs.jobDiscription} />
            </div>
            <div className="mb-6">
              <label htmlFor="jobRequirment" className="block text-gray-700 text-sm font-semibold mb-2">Warning-Type:</label>
              <textarea id="jobRequirment" className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" onChange={(e) => setinputs({ ...inputs, jobRequirment: e.target.value })} value={inputs.jobRequirment} />
            </div>
            <div className="mb-6">
              <label htmlFor="rolesResponsibilities" className="block text-gray-700 text-sm font-semibold mb-2">Warning-Description:</label>
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

export default Employeewarning;




// import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
// import { CiCirclePlus } from 'react-icons/ci';
// import axiosInstance from '@/axios/axios';
// import { useState, useEffect } from 'react';
// import Swal from 'sweetalert2';
// import { useNavigate, useLocation } from 'react-router-dom';

// function Employeewarning() {
//   const [inputs, setinputs] = useState({
//     jobTittel: "",
//     jobLocation: "",
//     jobType: "",
//     jobDiscription: "",
//     jobRequirment: "",
//     rolesResponsibilities: ""
//   });

//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     // Check if the URL has a specific query parameter to open the dialog
//     const params = new URLSearchParams(location.search);
//     if (params.get('dialog') === 'true') {
//       setIsOpen(true);
//     }
//   }, [location.search]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axiosInstance.post('http://157.245.109.206:8087/hr-handler/job/add-job', inputs);
//       if (response.data.status === 'created') {
//         Swal.fire({
//           position: "center",
//           icon: "success",
//           title: "Your work has been saved",
//           showConfirmButton: false,
//           timer: 4000
//         });
//       } else {
//         Swal.fire({
//           position: "center",
//           icon: "error",
//           title: "Your work has not been saved",
//           showConfirmButton: false,
//           timer: 4000
//         });
//       }
//       console.log(response.data);
//       console.log("inputs", inputs);
//     } catch (error) {
//       Swal.fire({
//         position: "center",
//         icon: "error",
//         title: "An error occurred",
//         showConfirmButton: false,
//         timer: 4000
//       });
//     }
//   };

//   const openDialog = () => {
//     setIsOpen(true);
//     navigate('/employeewarning?dialog=true'); // Redirect and open the dialog
//   };

//   return (
//     <div className="App p-4">
//       <button 
//         className='bg-white border-2 border-red-500 text-red-500 w-[100px] h-[30px] text-md font-normal rounded-md' 
//         onClick={openDialog}
//       >
//         Warning
//       </button>
//       <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
//         <DialogTrigger className="">
//           <button className='bg-white border-2 border-red-500 text-red-500 w-[100px] h-[30px] text-md font-normal rounded-md'>Warning</button>
//         </DialogTrigger>
//         <DialogContent className="mx-auto p-6 bg-white rounded-lg shadow-lg w-full max-w-[800px] overflow-auto h-[580px]">
//           <DialogHeader>
//             <DialogTitle className="text-2xl font-bold text-gray-800 mb-6">Add Job</DialogTitle>
//           </DialogHeader>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label htmlFor="jobTittel" className="block text-gray-700 text-sm font-semibold mb-2">Job Title:</label>
//               <input id="jobTittel" className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" onChange={(e) => setinputs({ ...inputs, jobTittel: e.target.value })} value={inputs.jobTittel} />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="jobLocation" className="block text-gray-700 text-sm font-semibold mb-2">Job Location:</label>
//               <input id="jobLocation" className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" onChange={(e) => setinputs({...inputs,jobLocation:e.target.value})} value={inputs.jobLocation} />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="jobType" className="block text-gray-700 text-sm font-semibold mb-2">Job Types:</label>
//               <input id="jobType" className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" onChange={(e) => setinputs({ ...inputs, jobType: e.target.value })} value={inputs.jobType} />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="jobDiscription" className="block text-gray-700 text-sm font-semibold mb-2">Job Description:</label>
//               <textarea id="jobDiscription" className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" onChange={(e) => setinputs({ ...inputs, jobDiscription: e.target.value })} value={inputs.jobDiscription} />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="jobRequirment" className="block text-gray-700 text-sm font-semibold mb-2">Job Requirement:</label>
//               <textarea id="jobRequirment" className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" onChange={(e) => setinputs({ ...inputs, jobRequirment: e.target.value })} value={inputs.jobRequirment} />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="rolesResponsibilities" className="block text-gray-700 text-sm font-semibold mb-2">Roles & Responsibilities:</label>
//               <textarea id="rolesResponsibilities" className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" onChange={(e) => setinputs({ ...inputs, rolesResponsibilities: e.target.value })} value={inputs.rolesResponsibilities} />
//             </div>
//             <div className="flex items-center justify-between">
//               <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300" type="submit">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

// export default Employeewarning;

