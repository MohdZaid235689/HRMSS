import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const OtpScreen = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    zero: '',
    one: '',
    two: '',
    three: ''
  });

  // useEffect(() => {
  //   const email = localStorage.getItem('email')
  //   if(!email)
  //   {
  //     Swal.fire({
  //       icon: "error",
  //       title: "You Are not Login! Plz login!",
  //       text: "Something went wrong!",
  //       timer:3000
  //     });
  //     navigate('/')
  //   }
  // })

  // const handleOtp = async (event) => {
  //   event.preventDefault();
    

  //   // Construct OTP from individual inputs
  //   const otp = parseInt(`${inputs.zero}${inputs.one}${inputs.two}${inputs.three}`);
  //   console.log("OTP Value:", otp);

  //   // Get email and password from localStorage
  //   const email = localStorage.getItem('email');
  //   const password = localStorage.getItem('password');

  //   // Prepare data payload
  //   const data = {
  //     email: email,
  //     password: password,
  //     otp: otp
  //   };

  //   try {
  //     // Send POST request
  //     const response = await axios.post('http://192.168.1.28:7000/identity-handler/auth/login-with-otp', data);
  //     console.log("response", response.data);
      
  //     if(response.status === 200)
  //     {
  //       localStorage.setItem('empCode',response.data.empCode)
  //       localStorage.setItem('token',response.data.token)
  //       navigate('/dashboard')


  //     }
  //   } catch (error) {
  //     console.error("Error during OTP submission:", error);
  //   }
  // };

  // const handleChange = (e, index) => {
  //   const { value } = e.target;
  //   if (/[^0-9]/.test(value)) return; // Allow only digits

  //   setInputs((prevInputs) => {
  //     const newInputs = { ...prevInputs };
  //     switch (index) {
  //       case 0:
  //         newInputs.zero = value;
  //         break;
  //       case 1:
  //         newInputs.one = value;
  //         break;
  //       case 2:
  //         newInputs.two = value;
  //         break;
  //       case 3:
  //         newInputs.three = value;
  //         break;
  //       default:
  //         break;
  //     }
  //     return newInputs;
  //   });

  //   // Automatically move focus to the next input
  //   if (value && index < 3) {
  //     document.getElementById(`otp-${index + 1}`).focus();
  //   }
  // };

  const handleOtp = () => {
    navigate('/employee-dashboard')
  }
  return (
    <div className="relative flex min-h-screen flex-col justify-center bg-gray-100 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="flex flex-col items-center justify-center space-y-16">
          <div className="text-center space-y-2">
            <div className="font-semibold text-3xl">Email Verification</div>
            <div className="text-sm font-medium text-gray-400">
              We have sent a code to your email ba**@dipainhouse.com
            </div>
          </div>

          <form onSubmit={handleOtp}>
            <div className="flex flex-col space-y-16">
              <div className="flex flex-row items-center justify-center mx-auto w-full space-x-3">
                {Object.keys(inputs).map((key, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength="1"
                    value={inputs[key]}
                    onChange={(e) => handleChange(e, index)}
                    className="w-12 h-12 border-2 border-gray-300 rounded text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ))}
              </div>

              <div className="flex flex-col space-y-5">
                <button
                  type="submit"
                  className="flex items-center justify-center w-full py-3 text-sm font-medium text-white bg-blue-900 rounded-xl border-none shadow-sm hover:bg-blue-800"
                >
                  Verify Account
                </button>

                <div className="flex items-center justify-center text-sm font-medium text-gray-500 space-x-1">
                  <p>Didn't receive code?</p>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resend
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpScreen;





// import React, { useState } from 'react';

// const OtpScreen = () => {
//   const [otp, setOtp] = useState(['', '', '', '']);

//   const handleChange = (e, index) => {
//     const { value } = e.target;
//     const otpCopy = [...otp];
//     otpCopy[index] = value.slice(0, 1); // Only allow single digit
//     setOtp(otpCopy);

//     if (value && index < 3) {
//       document.getElementById(`otp-${index + 1}`).focus();
//     }
//   };

//   const handleSubmit = () => {
//     console.log('OTP Submitted:', otp.join(''));
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <div className="flex space-x-4">
//         {otp.map((value, index) => (
//           <input
//             key={index}
//             id={`otp-${index}`}
//             type="text"
//             maxLength="1"
//             value={value}
//             onChange={(e) => handleChange(e, index)}
//             className="w-12 h-12 border border-gray-300 rounded text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         ))}
//       </div>
//       <button
//         onClick={handleSubmit}
//         className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default OtpScreen;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";

// const OtpPage = () => {
//   const [inputs, setInputs] = useState({
//     zero: '',
//     one: '',
//     two: '',
//     three: ''
//   });

//   const navigate = useNavigate();

//   const handleOtp = async (event: React.FormEvent) => {
//     event.preventDefault();
//     console.log("inputs", inputs);

   
//     const otp = `${inputs.zero}${inputs.one}${inputs.two}${inputs.three}`;
//     console.log("Combined OTP:", otp);
//   };

//   return (
//     <div>
//       <div className="otpPage relative flex min-h-screen flex-col justify-center overflow-hidden py-12">
//         <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
//           <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
//             <div className="flex flex-col items-center justify-center text-center space-y-2">
//               <div className="font-semibold text-3xl">
//                 <p>Email Verification</p>
//               </div>
//               <div className="flex flex-row text-sm font-medium text-gray-400">
//                 <p>We have sent a code to your email ba**@dipainhouse.com</p>
//               </div>
//             </div>

//             <div>
//               <form onSubmit={handleOtp}>
//                 <div className="flex flex-col space-y-16">
//                   <div className="flex flex-row items-center justify-center mx-auto w-full">
//                     <InputOTP 
//                       maxLength={6}
//                       pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
//                     >
//                       <InputOTPGroup className="space-x-3">
//                         <InputOTPSlot
//                           className="w-12 h-12 border-2"
//                           onChange={(e) => setInputs({ ...inputs, zero: e.target.value })}
//                           value={inputs.zero}
//                           index={0}
//                         />
//                         <InputOTPSlot
//                           className="w-12 h-12 border-2"
//                           onChange={(e) => setInputs({ ...inputs, one: e.target.value })}
//                           value={inputs.one}
//                           index={1}
//                         />
//                         <InputOTPSlot
//                           className="w-12 h-12 border-2"
//                           onChange={(e) => setInputs({ ...inputs, two: e.target.value })}
//                           value={inputs.two}
//                           index={2}
//                         />
//                         <InputOTPSlot
//                           className="w-12 h-12 border-2"
//                           onChange={(e) => setInputs({ ...inputs, three: e.target.value })}
//                           value={inputs.three}
//                           index={3}
//                         />
//                       </InputOTPGroup>
//                     </InputOTP>
//                   </div>

//                   <div className="flex flex-col space-y-5">
//                     <div>
//                       <button
//                         type="submit"
//                         className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-3 bg-blue-900 border-none text-white text-sm shadow-sm"
//                       >
//                         Verify Account
//                       </button>
//                     </div>

//                     <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
//                       <p>Didn't receive code?</p>{" "}
//                       <a
//                         className="flex flex-row items-center text-blue-600"
//                         href="http://"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Resend
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div> 
//     </div>
//   );
// };

// export default OtpPage;


