// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// // import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// const LoginPage = () => {
//   const navigate = useNavigate()
//   const [inputs, setinputs] = useState({
//     email: '',
//     password: ''
//   })
//   const [selectedRole, setSelectedRole] = useState('Role'); // Initial state for the dropdown trigger text

//   const handleRoleSelection = (role) => {
//     setSelectedRole(role); // Update the selected role state when a role is clicked
//   };




//   // const navigate = useNavigate();
//   // const handleOtp = () => {
//   //   navigate("/otp");
//   // }

//   // const handleLogin = async () => {
//   //   const response = await axios.post('http://192.168.1.28:7000/identity-handler/auth/login-hr', inputs)
//   //   console.log(response.data)
//   //   if (response.status == '200') {
//   //     localStorage.setItem('email', inputs.email)
//   //     localStorage.setItem('password', inputs.password)
//   //     navigate('/otp')
//   //   }

//   // }

//   const handleLogin = () => {
//     navigate('/otp')
//   }



//   return (


//     <div>
//       <div>
//         <section className="login text-gray-600 body-font">
//           <div className="container xl:px-32 px-5 py-36 mx-auto flex flex-wrap items-center">
//             <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
//               <h1 className="title-font font-bold text-4xl sm:text-6xl lg:text-7xl  text-blue-900 text-center md:text-left ">Venture Consultancy Services</h1>
//               <p className="leading-relaxed mt-4 lg:text-3xl text-2xl lg:max-w-xl font-medium  text-black text-center md:text-left ">VCS share the portal for HR Manegement.</p>
//             </div>
//             <div className="lg:w-2/6 md:w-1/2 bg-white shadow-lg rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
//             <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">

//                 <button
//                     className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 `}


//                 >
//                     H.R
//                 </button>
//                 <button
//                     className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 `}


//                 >
//                     Employee
//                 </button>
//             </div>

//               <div className="relative mb-4 mt-4">
//                 <input type="text" name="email" placeholder="Email address or phone number" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none  text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setinputs({ ...inputs, email: e.target.value })} value={inputs.email} />
//               </div>
//               <div className="relative mb-4">
//                 <input type="text" name="password" placeholder="Password" className="w-full  bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none text-lg text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setinputs({ ...inputs, password: e.target.value })} value={inputs.password} />
//               </div>
//               <button className="text-white border-0 py-2 px-8 focus:outline-none font-medium  rounded text-xl bg-blue-900 " onClick={handleLogin} >Log In</button>
//               <p className="text-sm text-blue-500 py-5 text-center">Forgotten password?</p>
//               <hr className="my-5" />
//               <button className="text-white  border-0 py-2 px-8 focus:outline-none font-medium  rounded text-xl bg-green-500 " >Create New Account</button>
//             </div>

//             {/* <div className="flex justify-center space-x-4 mt-6">
//               <button className="border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">Admin</button>
//               <button className="border rounded-full py-2 px-4 border-red-500 text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500">Employee</button>
//               <button className="border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">Client</button>
//             </div>

//             <form className="space-y-6">
//               <div>
//                 <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username*</label>
//                 <div className="mt-1 relative rounded-md shadow-sm">
//                   <input id="username" name="username" type="text" required className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="admin@software.com" />
//                   <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                     <i className="fa fa-user text-gray-400"></i>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password*</label>
//                 <div className="mt-1 relative rounded-md shadow-sm">
//                   <input id="password" name="password" type="password" required className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
//                   <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
//                     <i className="fa fa-eye-slash text-gray-400"></i>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
//                   <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
//                 </div>

//                 <div className="text-sm">
//                   <a href="#" className="font-medium text-blue-500 hover:text-blue-600">Forgot Password?</a>
//                 </div>
//               </div>

//               <div>
//                 <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//                   Login
//                 </button>
//               </div>
//             </form> */}



//           </div>
//         </section>
//       </div>




//     </div>
//   );
// };

// export default LoginPage;








import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '@/axios/axios';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const [isHRSelected, setIsHRSelected] = useState(false);
  const [isEmployeeSelected, setIsEmployeeSelected] = useState(false);

  const handleHRClick = () => {
    setIsHRSelected(true);
    setIsEmployeeSelected(false);
  };

  const handleEmployeeClick = () => {
    setIsHRSelected(false);
    setIsEmployeeSelected(true);
  };



  const handleLogin = async () => {

    // const getIP = async () => {
    //   try {
    //     const response = await axios.get(
    //       "https://api.ipify.org?format=json"
    //     );
    //     return response.data.ip;
    //   } catch (error) {
    //     console.log("Error fetching IP address:", error);
    //     return "";
    //   }
    // };

    // const ipAddress = await getIP();

    // const getPrivateIP = async () => {
    //   try {
    //     const pc = new RTCPeerConnection({ iceServers: [] });
    //     pc.createDataChannel('');

    //     return new Promise((resolve, reject) => {
    //       pc.onicecandidate = (event) => {
    //         if (!event || !event.candidate) return;
    //         const candidate = event.candidate.candidate;
    //         const parts = candidate.split(' ');
    //         const addr = parts[4];
    //         if (addr.startsWith('192.168') || addr.startsWith('10.') || addr.startsWith('172.')) {
    //           resolve(addr);
    //           pc.close();
    //         }
    //       };

    //       pc.createOffer()
    //         .then(offer => pc.setLocalDescription(offer))
    //         .catch(err => reject(err));
    //     });
    //   } catch (error) {
    //     console.error('Error getting private IP:', error);
    //   }
    // };

    // // Usage example with async/await
    // const fetchPrivateIP = async () => {
    //   const ip = await getPrivateIP();
    //   console.log('Private IP Address:', ip);
    // };
    // fetchPrivateIP();





    const data = {
      email: inputs.email,
      password: inputs.password,
      ip: "string12"
    }

    console.log("data", data)

    const response = await axios.post('http://157.245.109.206:8091/identity-handler/auth/login-employee', data)
    console.log(response.data)
    if (response.status === 200) {
      localStorage.setItem('email', inputs.email)
      localStorage.setItem('password', inputs.password)
      navigate('/otp')
    }




  };

  return (
    <div>
      <section className="login text-gray-600 body-font">
        <div className="container xl:px-32 px-5 py-36 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-bold text-4xl sm:text-6xl lg:text-7xl text-blue-900 text-center md:text-left">Venture Consultancy Services</h1>
            <p className="leading-relaxed mt-4 lg:text-3xl text-2xl lg:max-w-xl font-medium text-black text-center md:text-left">VCS share the portal for HR Management.</p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-white shadow-lg rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-1">
              <button
                className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ${isHRSelected ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleHRClick}
                disabled={isHRSelected}
              >
                H.R
              </button>
              <button
                className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ${isEmployeeSelected ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleEmployeeClick}
                disabled={isEmployeeSelected}
              >
                Employee
              </button>
            </div>
            <div className="relative mb-4 mt-4">
              <input type="text" name="email" placeholder="Email address or phone number" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setInputs({ ...inputs, email: e.target.value })} value={inputs.email} />
            </div>
            <div className="relative mb-4">
              <input type="password" name="password" placeholder="Password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-lg text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setInputs({ ...inputs, password: e.target.value })} value={inputs.password} />
            </div>
            <button className="text-white border-0 py-2 px-8 focus:outline-none font-medium rounded text-xl bg-blue-900" onClick={handleLogin}>Log In</button>
            <p className="text-sm text-blue-500 py-5 text-center">Forgotten password?</p>
            <hr className="my-5" />
            <button className="text-white border-0 py-2 px-8 focus:outline-none font-medium rounded text-xl bg-green-500">Create New Account</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;



// import React from 'react';

// function LoginPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full space-y-8">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold">Welcome to Kuber</h2>
//           <p className="text-sm text-gray-600 mt-2">Need an account? <a href="#" className="text-blue-500 font-medium">Sign Up</a></p>
//         </div>

// <div className="flex justify-center space-x-4 mt-6">
//   <button className="border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">Admin</button>
//   <button className="border rounded-full py-2 px-4 border-red-500 text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500">Employee</button>
//   <button className="border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">Client</button>
// </div>

// <form className="space-y-6">
//   <div>
//     <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username*</label>
//     <div className="mt-1 relative rounded-md shadow-sm">
//       <input id="username" name="username" type="text" required className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="admin@software.com" />
//       <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//         <i className="fa fa-user text-gray-400"></i>
//       </div>
//     </div>
//   </div>

//   <div>
//     <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password*</label>
//     <div className="mt-1 relative rounded-md shadow-sm">
//       <input id="password" name="password" type="password" required className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
//       <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
//         <i className="fa fa-eye-slash text-gray-400"></i>
//       </div>
//     </div>
//   </div>

//   <div className="flex items-center justify-between">
//     <div className="flex items-center">
//       <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
//       <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
//     </div>

//     <div className="text-sm">
//       <a href="#" className="font-medium text-blue-500 hover:text-blue-600">Forgot Password?</a>
//     </div>
//   </div>

//   <div>
//     <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//       Login
//     </button>
//   </div>
// </form>

//         <div className="mt-6 flex justify-center">
//           <p className="text-sm text-gray-500">OR</p>
//         </div>

//         <div className="mt-4 flex justify-center space-x-3">
//           <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-google"></i></a>
//           <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-github"></i></a>
//           <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-twitter"></i></a>
//           <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-linkedin"></i></a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

