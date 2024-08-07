// // // import React from 'react'
// // // import {
// // //     Sheet,
// // //     SheetContent,
// // //     SheetDescription,
// // //     SheetHeader,
// // //     SheetTitle,
// // //     SheetTrigger,
// // // } from "@/components/ui/sheet"


// // // const Checkinbutton = () => {
// // //     return (
// // //         <div>
// // //             <Sheet>
// // //                 <SheetTrigger><button className="text-md font-medium text-red-800 bg-gray-200 rounded-full px-10 py-2">Check-in</button></SheetTrigger>
// // //                 <SheetContent>
// // //                     <SheetHeader>
// // //                         <SheetTitle>CHECK-IN PAGE</SheetTitle>
// // //                         <SheetDescription>

// // //                         </SheetDescription>
// // //                     </SheetHeader>
// // //                 </SheetContent>
// // //             </Sheet>

// // //         </div>
// // //     )
// // // }

// // // export default Checkinbutton


// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //     Sheet,
// // //     SheetContent,
// // //     SheetDescription,
// // //     SheetHeader,
// // //     SheetTitle,
// // //     SheetTrigger,
// // // } from "@/components/ui/sheet";

// // // const Checkinbutton = () => {
// // //     // State to store today's date
// // //     // const [todayDate, setTodayDate] = useState('');

// // //     // // Set today's date when the component mounts
// // //     // useEffect(() => {
// // //     //     const today = new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD
// // //     //     setTodayDate(today);
// // //     // }, []);


// // //     const [attendanceApplied, setAttendanceApplied] = useState(false);
// // //     const [checkInTime, setCheckInTime] = useState('');
// // //     const [status, setStatus] = useState('Pending');
// // //     const todayDate = new Date().toISOString().split('T')[0];

// // //     const handleApplyAttendance = () => {
// // //         const currentTime = new Date().toLocaleTimeString();
// // //         setCheckInTime(currentTime);
// // //         setAttendanceApplied(true);
// // //         const currentHour = new Date().getHours();
// // //         if (currentHour > 9) { // assuming 9 AM is the official start time
// // //             setStatus('Late');
// // //         } else {
// // //             setStatus('On Time');
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             <Sheet>
// // //                 <SheetTrigger>
// // //                     <button className="text-md font-medium text-red-800 bg-gray-200 rounded-full px-10 py-2">
// // //                         Check-in
// // //                     </button>
// // //                 </SheetTrigger>
// // //                 <SheetContent>
// // //                     <SheetHeader>
// // //                         <SheetTitle>
// // //                             <div className="flex justify-center items-center bg-gray-400 text-white h-[30px] mt-5 rounded-lg">CHECK-IN PAGE</div>
// // //                         </SheetTitle>
// // //                         <SheetDescription>
// // //                             <div className="mt-4">
// // //                                 <div className="flex gap-4 mb-4">
// // //                                     <div className="flex items-center">
// // //                                         <label className="flex items-center mr-4">
// // //                                             <input
// // //                                                 type="radio"
// // //                                                 name="workMode"
// // //                                                 value="home"
// // //                                                 className="form-radio h-5 w-5 text-black"
// // //                                             />
// // //                                             <span className="ml-2 text-black">Work from Home</span>
// // //                                         </label>
// // //                                         <label className="flex items-center">
// // //                                             <input
// // //                                                 type="radio"
// // //                                                 name="workMode"
// // //                                                 value="office"
// // //                                                 className="form-radio h-5 w-5 text-black"
// // //                                             />
// // //                                             <span className="ml-2 text-black">Work from Office</span>
// // //                                         </label>
// // //                                     </div>
// // //                                 </div>

// // //                                 <div className="mb-4">
// // //                                     <label className="block text-gray-700 mb-2" htmlFor="date">
// // //                                         Today's Date
// // //                                     </label>
// // //                                     <input
// // //                                         type="date"
// // //                                         id="date"
// // //                                         value={todayDate}
// // //                                         className="border rounded p-2 w-full"
// // //                                         readOnly
// // //                                     />
// // //                                 </div>
// // //                                 <div className="mb-4">
// // //                                     <label className="block text-gray-700 mb-2" htmlFor="employee-number">
// // //                                         Employee Number
// // //                                     </label>
// // //                                     <input
// // //                                         type="text"
// // //                                         id="employee-number"
// // //                                         className="border rounded p-2 w-full"
// // //                                     />
// // //                                 </div>



// // //                                     <div className="flex justify-end">
// // //                                         <button
// // //                                             onClick={handleApplyAttendance}
// // //                                             className="px-4 py-2 bg-white text-black rounded border border-black hover:bg-green-500 hover:text-white hover:border-none"
// // //                                         >
// // //                                             Apply Attendance
// // //                                         </button>
// // //                                     </div>
// // //                                     <div className="flex justify-center items-center bg-gray-400 text-white h-[30px] mt-3 mb-3 text-xl font-medium rounded-lg">Attendance Status</div>

// // //                                     <div>
// // //                                         <div className="mb-4">
// // //                                             <label className="block text-gray-700 mb-2" htmlFor="check-in-time">
// // //                                                 Check-in Time
// // //                                             </label>
// // //                                             <input
// // //                                                 type="text"
// // //                                                 id="check-in-time"
// // //                                                 value={checkInTime}
// // //                                                 className="border rounded p-2 w-full"
// // //                                                 readOnly
// // //                                             />
// // //                                         </div>
// // //                                         <div className="mb-4">
// // //                                             <label className="block text-gray-700 mb-2">
// // //                                                 Current Date
// // //                                             </label>
// // //                                             <input
// // //                                                 type="text"
// // //                                                 value={todayDate}
// // //                                                 className="border rounded p-2 w-full"
// // //                                                 readOnly
// // //                                             />
// // //                                         </div>
// // //                                         <div className="mb-4">
// // //                                             <label className="block text-gray-700 mb-2">
// // //                                                 Attendance Status
// // //                                             </label>
// // //                                             <input
// // //                                                 type="text"
// // //                                                 value={status}
// // //                                                 className="border rounded p-2 w-full"
// // //                                                 readOnly
// // //                                             />
// // //                                         </div>
// // //                                     </div>


// // //                             </div>
// // //                         </SheetDescription>
// // //                     </SheetHeader>
// // //                 </SheetContent>
// // //             </Sheet>
// // //         </div>
// // //     );
// // // }

// // // export default Checkinbutton;





// // // import React, { useState } from 'react';
// // // import {
// // //     Sheet,
// // //     SheetContent,
// // //     SheetDescription,
// // //     SheetHeader,
// // //     SheetTitle,
// // //     SheetTrigger,
// // // } from "@/components/ui/sheet";

// // // const CheckinButton = () => {
// // //     const [attendanceApplied, setAttendanceApplied] = useState(false);
// // //     const [checkInTime, setCheckInTime] = useState('');
// // //     const [status, setStatus] = useState('Pending');
// // //     const todayDate = new Date().toISOString().split('T')[0];

// // //     const handleApplyAttendance = () => {
// // //         const currentTime = new Date().toLocaleTimeString();
// // //         setCheckInTime(currentTime);
// // //         setAttendanceApplied(true);
// // //         const currentHour = new Date().getHours();
// // //         if (currentHour > 9) { // assuming 9 AM is the official start time
// // //             setStatus('Late');
// // //         } else {
// // //             setStatus('On Time');
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             <Sheet>
// // //                 <SheetTrigger>
// // //                     <button className="text-md font-medium text-red-800 bg-gray-200 rounded-full px-10 py-2">
// // //                         Check-in
// // //                     </button>
// // //                 </SheetTrigger>
// // //                 <SheetContent>
// // //                     <SheetHeader>
// // //                         <SheetTitle>
// // //                             <div className="flex justify-center items-center bg-gray-400 text-white h-[30px] mt-5 rounded-lg">
// // //                                 CHECK-IN PAGE
// // //                             </div>
// // //                         </SheetTitle>
// // //                         <SheetDescription>
// // //                             <div className="mt-4">
// // //                                 <div className="flex gap-4 mb-4">
// // //                                     <div className="flex items-center">
// // //                                         <label className="flex items-center mr-4">
// // //                                             <input
// // //                                                 type="radio"
// // //                                                 name="workMode"
// // //                                                 value="home"
// // //                                                 className="form-radio h-5 w-5 text-black"
// // //                                                 disabled={attendanceApplied}
// // //                                             />
// // //                                             <span className="ml-2 text-black">Work from Home</span>
// // //                                         </label>
// // //                                         <label className="flex items-center">
// // //                                             <input
// // //                                                 type="radio"
// // //                                                 name="workMode"
// // //                                                 value="office"
// // //                                                 className="form-radio h-5 w-5 text-black"
// // //                                                 disabled={attendanceApplied}
// // //                                             />
// // //                                             <span className="ml-2 text-black">Work from Office</span>
// // //                                         </label>
// // //                                     </div>
// // //                                 </div>

// // //                                 <div className="mb-4">
// // //                                     <label className="block text-gray-700 mb-2" htmlFor="date">
// // //                                         Today's Date
// // //                                     </label>
// // //                                     <input
// // //                                         type="date"
// // //                                         id="date"
// // //                                         value={todayDate}
// // //                                         className="border rounded p-2 w-full"
// // //                                         readOnly
// // //                                     />
// // //                                 </div>
// // //                                 <div className="mb-4">
// // //                                     <label className="block text-gray-700 mb-2" htmlFor="employee-number">
// // //                                         Employee Number
// // //                                     </label>
// // //                                     <input
// // //                                         type="text"
// // //                                         id="employee-number"
// // //                                         className="border rounded p-2 w-full"
// // //                                     />
// // //                                 </div>

// // //                                 <div className="flex justify-end">
// // //                                     <button
// // //                                         onClick={handleApplyAttendance}
// // //                                         className="px-4 py-2 bg-white text-black rounded border border-black hover:bg-green-500 hover:text-white hover:border-none"
// // //                                         disabled={attendanceApplied}
// // //                                     >
// // //                                         Apply Attendance
// // //                                     </button>
// // //                                 </div>
// // //                                 <div className="flex justify-center items-center bg-gray-400 text-white h-[30px] mt-3 mb-3 text-xl font-medium rounded-lg">
// // //                                     Attendance Status
// // //                                 </div>

// // //                                 <div>
// // //                                     <div className="mb-4">
// // //                                         <label className="block text-gray-700 mb-2" htmlFor="check-in-time">
// // //                                             Check-in Time
// // //                                         </label>
// // //                                         <input
// // //                                             type="text"
// // //                                             id="check-in-time"
// // //                                             value={attendanceApplied ? checkInTime : 'Not Checked In'}
// // //                                             className="border rounded p-2 w-full"
// // //                                             readOnly
// // //                                         />
// // //                                     </div>
// // //                                     <div className="mb-4">
// // //                                         <label className="block text-gray-700 mb-2">
// // //                                             Current Date
// // //                                         </label>
// // //                                         <input
// // //                                             type="text"
// // //                                             value={todayDate}
// // //                                             className="border rounded p-2 w-full"
// // //                                             readOnly
// // //                                         />
// // //                                     </div>
// // //                                     <div className="mb-4">
// // //                                         <label className="block text-gray-700 mb-2">
// // //                                             Attendance Status
// // //                                         </label>
// // //                                         <input
// // //                                             type="text"
// // //                                             value={attendanceApplied ? status : 'Not Applied'}
// // //                                             className="border rounded p-2 w-full"
// // //                                             readOnly
// // //                                         />
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         </SheetDescription>
// // //                     </SheetHeader>
// // //                 </SheetContent>
// // //             </Sheet>
// // //         </div>
// // //     );
// // // };

// // // export default CheckinButton;




// // // import React, { useState } from 'react';
// // // import {
// // //     Sheet,
// // //     SheetContent,
// // //     SheetDescription,
// // //     SheetHeader,
// // //     SheetTitle,
// // //     SheetTrigger,
// // // } from "@/components/ui/sheet";
// // // import axios from 'axios';
// // // import { useGeolocated } from "react-geolocated";


// // // const CheckinButton = () => {
// // //     const [attendanceApplied, setAttendanceApplied] = useState(false);
// // //     const [checkInTime, setCheckInTime] = useState('');
// // //     const [status, setStatus] = useState('Pending');
// // //     const todayDate = new Date().toISOString().split('T')[0];
// // //     const [selectedWorkMode, setSelectedWorkMode] = useState('');





// // //     // Handle change event
// // //     const handleChange = (event) => {
// // //         setSelectedWorkMode(event.target.value);
// // //     };


// // //     const handleApplyAttendance = () =>{


// // //         const { coords, isGeolocationAvailable, isGeolocationEnabled } =
// // //         useGeolocated({
// // //             positionOptions: {
// // //                 enableHighAccuracy: false,
// // //             },
// // //             userDecisionTimeout: 5000,
// // //         });
// // //         const longitude = coords.latitude;
// // //         const latitude = coords.longitude;

// // //         console.log({longitude,latitude})



// // //           const data = {

// // //             empNo,
// // //             empCode,
// // //             longitude:location,
// // //             latitude:location,
// // //             workMode:selectedWorkMode



// // //           }
// // //           console.log("localtion",data)





// // //     }




// // //     return (
// // //         <div>
// // //             <Sheet>
// // //                 <SheetTrigger>
// // //                     <button className="text-md font-medium text-red-800 bg-gray-200 rounded-full px-10 py-2">
// // //                         Check-in
// // //                     </button>
// // //                 </SheetTrigger>
// // //                 <SheetContent>
// // //                     <SheetHeader>
// // //                         <SheetTitle>
// // //                             <div className="flex justify-center items-center bg-gray-400 text-white h-[30px] mt-5 rounded-lg">
// // //                                 CHECK-IN PAGE
// // //                             </div>
// // //                         </SheetTitle>
// // //                         <SheetDescription>
// // //                             <div className="mt-4">
// // //                                  <div className="flex gap-4 mb-4">
// // //             <div className="flex items-center">
// // //                 <label className="flex items-center mr-4">
// // //                     <input
// // //                         type="radio"
// // //                         name="workMode"
// // //                         value="WFH"
// // //                         className="form-radio h-5 w-5 text-black"
// // //                         disabled={attendanceApplied}
// // //                         checked={selectedWorkMode === 'WFH'}
// // //                         onChange={handleChange}
// // //                     />
// // //                     <span className="ml-2 text-black">WFH</span>
// // //                 </label>
// // //                 <label className="flex items-center">
// // //                     <input
// // //                         type="radio"
// // //                         name="workMode"
// // //                         value="WFO"
// // //                         className="form-radio h-5 w-5 text-black"
// // //                         disabled={attendanceApplied}
// // //                         checked={selectedWorkMode === 'WFO'}
// // //                         onChange={handleChange}
// // //                     />
// // //                     <span className="ml-2 text-black">WFO</span>
// // //                 </label>
// // //             </div>
// // //         </div>

// // //                                 <div className="mb-4">
// // //                                     <label className="block text-gray-700 mb-2" htmlFor="date">
// // //                                         Today's Date
// // //                                     </label>
// // //                                     <input
// // //                                         type="date"
// // //                                         id="date"
// // //                                         value={todayDate}
// // //                                         className="border rounded p-2 w-full"
// // //                                         readOnly
// // //                                     />
// // //                                 </div>
// // //                                 <div className="mb-4">
// // //                                     <label className="block text-gray-700 mb-2" htmlFor="employee-number">
// // //                                         Employee Number
// // //                                     </label>
// // //                                     <input
// // //                                         type="text"
// // //                                         id="employee-number"
// // //                                         className="border rounded p-2 w-full"
// // //                                     />
// // //                                 </div>

// // //                                 <div className="flex justify-end">
// // //                                     <button
// // //                                         onClick={handleApplyAttendance}
// // //                                         className="px-4 py-2 bg-white text-black rounded border border-black hover:bg-green-500 hover:text-white hover:border-none"
// // //                                         disabled={attendanceApplied}
// // //                                     >
// // //                                         Apply Attendance
// // //                                     </button>
// // //                                 </div>
// // //                                 <div className="flex justify-center items-center bg-gray-400 text-white h-[30px] mt-3 mb-3 text-xl font-medium rounded-lg">
// // //                                     Attendance Status
// // //                                 </div>

// // //                                 <div>
// // //                                 <div className="mb-4 flex items-center">
// // //     <label className="block text-gray-700 mb-2 w-1/3">
// // //         Check-in Time
// // //     </label>
// // //     <div className="text-gray-800">
// // //         {attendanceApplied ? checkInTime : '--'}
// // //     </div>
// // // </div>

// // // <div className="mb-4 flex items-center">
// // //     <label className="block text-gray-700 mb-2 w-1/3">
// // //         Current Date
// // //     </label>
// // //     <div className="text-gray-800 w-2/3">
// // //         {todayDate}
// // //     </div>
// // // </div>

// // // <div className="mb-4 flex items-center">
// // //     <label className="block text-gray-700 mb-2 w-1/3">
// // //         Attendance Status
// // //     </label>
// // //     <div className="text-gray-800 w-2/3">
// // //         {attendanceApplied ? status : '--'}
// // //     </div>
// // // </div>


// // //                                 </div>
// // //                             </div>
// // //                         </SheetDescription>
// // //                     </SheetHeader>
// // //                 </SheetContent>
// // //             </Sheet>
// // //         </div>
// // //     );
// // // };

// // // export default CheckinButton;




// // // import React, { useState } from 'react';
// // // import {
// // //     Sheet,
// // //     SheetContent,
// // //     SheetDescription,
// // //     SheetHeader,
// // //     SheetTitle,
// // //     SheetTrigger,
// // // } from "@/components/ui/sheet";

// // // const Checkinbutton = () => {
// // //     const [attendanceApplied, setAttendanceApplied] = useState(false);
// // //     const [checkInTime, setCheckInTime] = useState('');
// // //     const [status, setStatus] = useState('Pending');
// // //     const todayDate = new Date().toISOString().split('T')[0];

// // //     const handleApplyAttendance = () => {
// // //         const currentTime = new Date().toLocaleTimeString();
// // //         setCheckInTime(currentTime);
// // //         setAttendanceApplied(true);
// // //         const currentHour = new Date().getHours();
// // //         if (currentHour > 9) { // assuming 9 AM is the official start time
// // //             setStatus('Late');
// // //         } else {
// // //             setStatus('On Time');
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             <Sheet>
// // //                 <SheetTrigger>
// // //                     <button className="text-md font-medium text-red-800 bg-gray-200 rounded-full px-10 py-2">
// // //                         Check-in
// // //                     </button>
// // //                 </SheetTrigger>
// // //                 <SheetContent>
// // //                     <SheetHeader>
// // //                         <SheetTitle>
// // //                             <div className="flex justify-center items-center bg-gray-400 text-white h-[40px] mt-5 rounded-lg">CHECK-IN PAGE</div>
// // //                         </SheetTitle>
// // //                         <SheetDescription>
// // //                             <div className="mt-4">
// // //                                 <div className="flex gap-4 mb-4">
// // //                                     <div className="flex items-center">
// // //                                         <label className="flex items-center mr-4">
// // //                                             <input
// // //                                                 type="radio"
// // //                                                 name="workMode"
// // //                                                 value="home"
// // //                                                 className="form-radio h-5 w-5 text-black"
// // //                                             />
// // //                                             <span className="ml-2 text-black">Work from Home</span>
// // //                                         </label>
// // //                                         <label className="flex items-center">
// // //                                             <input
// // //                                                 type="radio"
// // //                                                 name="workMode"
// // //                                                 value="office"
// // //                                                 className="form-radio h-5 w-5 text-black"
// // //                                             />
// // //                                             <span className="ml-2 text-black">Work from Office</span>
// // //                                         </label>
// // //                                     </div>
// // //                                 </div>

// // //                                 <div className="mb-4">
// // //                                     <label className="block text-gray-700 mb-2" htmlFor="date">
// // //                                         Today's Date
// // //                                     </label>
// // //                                     <input
// // //                                         type="date"
// // //                                         id="date"
// // //                                         value={todayDate}
// // //                                         className="border rounded p-2 w-full"
// // //                                         readOnly
// // //                                     />
// // //                                 </div>
// // //                                 <div className="mb-4">
// // //                                     <label className="block text-gray-700 mb-2" htmlFor="employee-number">
// // //                                         Employee Number
// // //                                     </label>
// // //                                     <input
// // //                                         type="text"
// // //                                         id="employee-number"
// // //                                         className="border rounded p-2 w-full"
// // //                                     />
// // //                                 </div>

// // //                                 {!attendanceApplied ? (
// // //                                     <div>
// // //                                         <p className="text-gray-700 mb-4">Attendance Status: {status}</p>
// // //                                         <div className="flex justify-end">
// // //                                             <button
// // //                                                 onClick={handleApplyAttendance}
// // //                                                 className="px-4 py-2 bg-white text-black rounded border border-black hover:bg-green-500 hover:text-white hover:border-none"
// // //                                             >
// // //                                                 Apply Attendance
// // //                                             </button>
// // //                                         </div>
// // //                                     </div>
// // //                                 ) : (
// // //                                     <div>
// // //                                         <div className="mb-4">
// // //                                             <label className="block text-gray-700 mb-2" htmlFor="check-in-time">
// // //                                                 Check-in Time
// // //                                             </label>
// // //                                             <input
// // //                                                 type="text"
// // //                                                 id="check-in-time"
// // //                                                 value={checkInTime}
// // //                                                 className="border rounded p-2 w-full"
// // //                                                 readOnly
// // //                                             />
// // //                                         </div>
// // //                                         <div className="mb-4">
// // //                                             <label className="block text-gray-700 mb-2">
// // //                                                 Today Date
// // //                                             </label>
// // //                                             <input
// // //                                                 type="text"
// // //                                                 value={todayDate}
// // //                                                 className="border rounded p-2 w-full"
// // //                                                 readOnly
// // //                                             />
// // //                                         </div>
// // //                                         <div className="mb-4">
// // //                                             <label className="block text-gray-700 mb-2">
// // //                                                 Attendance Status
// // //                                             </label>
// // //                                             <input
// // //                                                 type="text"
// // //                                                 value={status}
// // //                                                 className="border rounded p-2 w-full"
// // //                                                 readOnly
// // //                                             />
// // //                                         </div>
// // //                                     </div>
// // //                                 )}


// // //                             </div>
// // //                         </SheetDescription>
// // //                     </SheetHeader>
// // //                 </SheetContent>
// // //             </Sheet>
// // //         </div>
// // //     );
// // // }

// // // export default Checkinbutton;


















// // import React, { useState } from 'react';
// // import {
// //     Sheet,
// //     SheetContent,
// //     SheetDescription,
// //     SheetHeader,
// //     SheetTitle,
// //     SheetTrigger,
// // } from "@/components/ui/sheet";
// // import axios from 'axios';
// // // import { Navigate, useNavigate } from 'react-router-dom';
// // import { useNavigate } from 'react-router-dom';
// // import { useGeolocated } from "react-geolocated";

// // // const CheckinButton = () => {
// // //     const navigate = useNavigate()
// // //     const [attendanceApplied, setAttendanceApplied] = useState(false);
// // //     const [checkInTime, setCheckInTime] = useState('');
// // //     const [status, setStatus] = useState('Pending');
// // //     const todayDate = new Date().toISOString().split('T')[0];
// // //     const [selectedWorkMode, setSelectedWorkMode] = useState('');

// // //     // Handle change event for selecting work mode
// // //     const handleChange = (event) => {
// // //         setSelectedWorkMode(event.target.value);
// // //     };

// // //     // Handle applying attendance
// // //     const handleApplyAttendance = async () => {

// // //         const { coords, isGeolocationAvailable, isGeolocationEnabled } =
// // //             useGeolocated({
// // //                 positionOptions: {
// // //                     enableHighAccuracy: false,
// // //                 },
// // //                 userDecisionTimeout: 5000,
// // //             });

// // //         const latitude = coords.latitude
// // //         const longitude = coords.longitude

// // //         const empNumber = localStorage.getItem('empNumber');
// // //         const empCode = localStorage.getItem('empCode');

// // //         // Example data object structure
// // //         const data = {
// // //             empNumber: empNumber, // Replace with actual employee number
// // //             empCode: empCode, // Replace with actual employee code
// // //             longitude: longitude,
// // //             latitude: latitude,
// // //             workMode: selectedWorkMode
// // //         };

// // //         console.log("Data to be sent:", data);

// // //         // const response = await axios.post('http://192.168.1.11:7005/emp-handler/attendence/check-in', data);

// // //         // console.log('Attendance applied successfully', response.data);
// // //         console.log("data",data)






// // //     };

// // const CheckinButton = () => {
// //     const navigate = useNavigate();
// //     const [attendanceApplied, setAttendanceApplied] = useState(false);
// //     const [checkInTime, setCheckInTime] = useState('');
// //     const [status, setStatus] = useState('Pending');
// //     const todayDate = new Date().toISOString().split('T')[0];
// //     const [selectedWorkMode, setSelectedWorkMode] = useState('');

// //     // Using the useGeolocated hook
// //     const { coords, isGeolocationAvailable, isGeolocationEnabled } =
// //         useGeolocated({
// //             positionOptions: {
// //                 enableHighAccuracy: false,
// //             },
// //             userDecisionTimeout: 5000,
// //         });


// //     // Handle change event for selecting work mode
// //     const handleChange = (event) => {
// //         setSelectedWorkMode(event.target.value);
// //     };

// //     // Handle applying attendance
// //     const handleApplyAttendance = async () => {
// //         if (!isGeolocationAvailable || !isGeolocationEnabled || !coords) {
// //             console.error("Geolocation is not available or enabled.");
// //             return;
// //         }
// //         const dataa= {

// //         latitude: coords.latitude,
// //         longitude: coords.longitude,
// //         }


// //         // const { latitude, longitude } = coords;

// //         const empNumber = localStorage.getItem('empNumber');
// //         const empCode = localStorage.getItem('empCode');

// //         // Example data object structure
// //         const data = {
// //             empNumber: empNumber, // Replace with actual employee number
// //             empCode: empCode, // Replace with actual employee code
// //             latitude: dataa.latitude,
// //             longitude:dataa.longitude,
// //             workMode: selectedWorkMode,
// //         };

// //         console.log("Data to be sent:", data);
// //     }

// //     return (
// //         <div>
// //             <Sheet>
// //                 <SheetTrigger>
// //                     <button className="text-md font-medium text-red-800 bg-gray-200 rounded-full px-10 py-2">
// //                         Check-in
// //                     </button>
// //                 </SheetTrigger>
// //                 <SheetContent>
// //                     <SheetHeader>
// //                         <SheetTitle>
// //                             <div className="flex justify-center items-center bg-gray-400 text-white h-[30px] mt-5 rounded-lg">
// //                                 CHECK-IN PAGE
// //                             </div>
// //                         </SheetTitle>
// //                         <SheetDescription>
// //                             <div className="mt-4">
// //                                 <div className="flex gap-4 mb-4">
// //                                     <div className="flex items-center">
// //                                         <label className="flex items-center mr-4">
// //                                             <input
// //                                                 type="radio"
// //                                                 name="workMode"
// //                                                 value="WFH"
// //                                                 className="form-radio h-5 w-5 text-black"
// //                                                 disabled={attendanceApplied}
// //                                                 checked={selectedWorkMode === 'WFH'}
// //                                                 onChange={handleChange}
// //                                             />
// //                                             <span className="ml-2 text-black">WFH</span>
// //                                         </label>
// //                                         <label className="flex items-center">
// //                                             <input
// //                                                 type="radio"
// //                                                 name="workMode"
// //                                                 value="WFO"
// //                                                 className="form-radio h-5 w-5 text-black"
// //                                                 disabled={attendanceApplied}
// //                                                 checked={selectedWorkMode === 'WFO'}
// //                                                 onChange={handleChange}
// //                                             />
// //                                             <span className="ml-2 text-black">WFO</span>
// //                                         </label>
// //                                     </div>
// //                                 </div>

// //                                 <div className="mb-4">
// //                                     <label className="block text-gray-700 mb-2" htmlFor="date">
// //                                         Today's Date
// //                                     </label>
// //                                     <input
// //                                         type="date"
// //                                         id="date"
// //                                         value={todayDate}
// //                                         className="border rounded p-2 w-full"
// //                                         readOnly
// //                                     />
// //                                 </div>
// //                                 <div className="mb-4">
// //                                     <label className="block text-gray-700 mb-2" htmlFor="employee-number">
// //                                         Employee Number
// //                                     </label>
// //                                     <input
// //                                         type="text"
// //                                         id="employee-number"
// //                                         className="border rounded p-2 w-full"
// //                                     />
// //                                 </div>

// // <div className="flex justify-end">
// //     <button
// //         onClick={handleApplyAttendance}
// //         className="px-4 py-2 bg-white text-black rounded border border-black hover:bg-green-500 hover:text-white hover:border-none"
// //         disabled={attendanceApplied}
// //     >
// //         Apply Attendance
// //     </button>
// // </div>
// //                                 <div className="flex justify-center items-center bg-gray-400 text-white h-[30px] mt-3 mb-3 text-xl font-medium rounded-lg">
// //                                     Attendance Status
// //                                 </div>

// //                                 <div>
// //                                     <div className="mb-4 flex items-center">
// //                                         <label className="block text-gray-700 mb-2 w-1/3">
// //                                             Check-in Time
// //                                         </label>
// //                                         <div className="text-gray-800">
// //                                             {attendanceApplied ? checkInTime : '--'}
// //                                         </div>
// //                                     </div>

// //                                     <div className="mb-4 flex items-center">
// //                                         <label className="block text-gray-700 mb-2 w-1/3">
// //                                             Current Date
// //                                         </label>
// //                                         <div className="text-gray-800 w-2/3">
// //                                             {todayDate}
// //                                         </div>
// //                                     </div>

// //                                     <div className="mb-4 flex items-center">
// //                                         <label className="block text-gray-700 mb-2 w-1/3">
// //                                             Attendance Status
// //                                         </label>
// //                                         <div className="text-gray-800 w-2/3">
// //                                             {attendanceApplied ? status : '--'}
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </SheetDescription>
// //                     </SheetHeader>
// //                 </SheetContent>
// //             </Sheet>
// //         </div>
// //     );
// // };

// // export default CheckinButton;
















// import React, { useState, useEffect } from 'react';
// import { useGeolocated } from "react-geolocated";
// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
// } from "@/components/ui/sheet";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const CheckinButton = () => {
//     const navigate = useNavigate();
//     const [isPending, setIsPending] = useState(true);
//     const [attendanceApplied, setAttendanceApplied] = useState(false);
//     const [checkInTime, setCheckInTime] = useState('');
//     const [status, setStatus] = useState('Pending');
//     const todayDate = new Date().toISOString().split('T')[0];
//     const [selectedWorkMode, setSelectedWorkMode] = useState('WFO');

//     // Using the useGeolocated hook
//     const { coords, isGeolocationAvailable, isGeolocationEnabled } =
//         useGeolocated({
//             positionOptions: {
//                 enableHighAccuracy: false,
//             },
//             userDecisionTimeout: 5000,
//         });


//     // Handle change event for selecting work mode
//     const handleChange = (event) => {
//         setSelectedWorkMode(event.target.value);
//         console.log("mode", selectedWorkMode)
//     };

//     const empNumber = localStorage.getItem('empNumber');
//     const empCode = localStorage.getItem('empCode');

//     const handleApplyAttendance = async () => {
//         if (!isGeolocationAvailable || !isGeolocationEnabled || !coords) {
//             console.error("Geolocation is not available or enabled.");
//             return;
//         }
//         const dataa = {
//             latitude: coords.latitude,
//             longitude: coords.longitude,
//         }

//         const data = {
//             empNumber: empNumber, // Replace with actual employee number
//             empCode: empCode, // Replace with actual employee code
//             latitude: dataa.latitude,
//             longitude: dataa.longitude,
//             remoteWork: selectedWorkMode,
//         };

//         const response = await axios.post('http://157.245.109.206:8093/emp-handler/attendence/check-in', data)
//         console.log(response.data)
//         if (response.status === 202) {
//             localStorage.setItem('checkIn-Time', response.data.result.checkIn)
//             localStorage.setItem('remoteWork', response.data.result.remoteWork)

//             console.log(response);
//             navigate("/attendence")
//             setIsPending(false);
//         }
//         else {
//             alert("you are already mark attendence");
//         }
//     }

//     useEffect(() => {

//         const findTodayAttendence = async () => {

//             const response = await axios.post('http://157.245.109.206:8093/emp-handler/attendence/today-emp-atttendence?empCod=' + empCode)
//             if (response.status === 202) {
//                 setIsPending(false)
//                 setStatus(response.data.result.attendenceStatus);
//                 setCheckInTime(response.data.result.checkIn);
//                 console.log("data", response.data);
//             }
//             return;
//         }

//         findTodayAttendence();
//     }, []);

//     return (
//         <div>
//             <Sheet>
//                 <SheetTrigger>
//                     <button className="text-md font-medium text-red-800 bg-gray-200 rounded-full px-10 py-2">
//                         Check-in
//                     </button>
//                 </SheetTrigger>
//                 <SheetContent>
//                     <SheetHeader>
//                         <SheetTitle>
//                             <div className="flex justify-center items-center bg-gray-400 text-white h-[30px] mt-5 rounded-lg">
//                                 CHECK-IN PAGE
//                             </div>
//                         </SheetTitle>
//                         <SheetDescription>
//                             <div className="mt-4">
//                                 <div className="flex gap-4 mb-4">
//                                     <div className="flex items-center">
//                                         <label className="flex items-center mr-4">
//                                             <input
//                                                 type="radio"
//                                                 name="workMode"
//                                                 value="WFH"
//                                                 className="form-radio h-5 w-5 text-black"
//                                                 checked={selectedWorkMode === 'WFH'} // Set checked conditionally
//                                                 disabled={attendanceApplied}
//                                                 onChange={(e) => setSelectedWorkMode(e.target.value)}
//                                             />
//                                             <span className="ml-2 text-black">WFH</span>
//                                         </label>
//                                         <label className="flex items-center mr-4">
//                                             <input
//                                                 type="radio"
//                                                 name="workMode"
//                                                 value="WFF"
//                                                 className="form-radio h-5 w-5 text-black"
//                                                 checked={selectedWorkMode === 'WFF'} // Set checked conditionally
//                                                 disabled={attendanceApplied}
//                                                 onChange={(e) => setSelectedWorkMode(e.target.value)}
//                                             />
//                                             <span className="ml-2 text-black">WFF</span>
//                                         </label>
//                                         <label className="flex items-center">
//                                             <input
//                                                 type="radio"
//                                                 name="workMode"
//                                                 value="WFO"
//                                                 className="form-radio h-5 w-5 text-black"
//                                                 checked={selectedWorkMode === 'WFO'} // Set checked conditionally
//                                                 disabled={attendanceApplied}
//                                                 onChange={(e) => setSelectedWorkMode(e.target.value)}
//                                             />
//                                             <span className="ml-2 text-black">WFO</span>
//                                         </label>
//                                     </div>
//                                 </div>

//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 mb-2" htmlFor="date">
//                                         Today's Date
//                                     </label>
//                                     <input
//                                         type="date"
//                                         id="date"
//                                         value={todayDate}
//                                         className="border rounded p-2 w-full"
//                                         readOnly
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label className="block text-gray-700 mb-2" htmlFor="employee-number">
//                                         Employee Number
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="employee-number"
//                                         value={empCode}
//                                         className="border rounded p-2 w-full"
//                                     />
//                                 </div>


// {<div className="flex justify-end">
//     <button
//         onClick={handleApplyAttendance}
//         className={`px-4 py-2 rounded border text-black ${isPending
//             ? 'bg-white border-black hover:bg-green-500 hover:text-white hover:border-none'
//             : 'bg-red-300 border-gray-300 text-white cursor-not-allowed filter blur-xs'
//             }`}
//         disabled={!isPending}
//     >
//         Apply Attendance
//     </button>
// </div> }

//                                 <div className="flex justify-end">
//                                     <button
//                                         onClick={handleApplyAttendance}
//                                         className="px-4 py-2 bg-white text-black rounded border border-black hover:bg-green-500 hover:text-white hover:border-none"
//                                         disabled={attendanceApplied}
//                                     >
//                                         Apply Attendance
//                                     </button>
//                                 </div>
//                                 <div className="flex justify-center items-center bg-gray-400 text-white h-[30px] mt-3 mb-3 text-xl font-medium rounded-lg">
//                                     Attendance Status
//                                 </div>


//                                 <div>
//                                     {isPending ? (
//                                         <p>Attendance pending...</p>
//                                     ) : (
//                                         <div >
//                                             <div className="mb-4 flex items-center">
//                                                 <label className="block text-gray-700 mb-2 w-1/2">
//                                                     Check-in Time
//                                                 </label>
//                                                 <div className="text-gray-800 w-2/3">
//                                                     : {isPending ? '--' : checkInTime}
//                                                 </div>
//                                             </div>

//                                             <div className="mb-4 flex items-center">
//                                                 <label className="block text-gray-700 mb-2 w-1/2">
//                                                     Current Date
//                                                 </label>
//                                                 <div className="text-gray-800 w-2/3">
//                                                     : {isPending ? '--' : todayDate}
//                                                 </div>
//                                             </div>

//                                             <div className="mb-4 flex items-center">
//                                                 <label className="block text-gray-700 mb-2 w-1/2">
//                                                     Attendance Status
//                                                 </label>
//                                                 <div className="text-gray-800 w-2/3">
//                                                     : {isPending ? '--' : status}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </SheetDescription>
//                     </SheetHeader>
//                 </SheetContent>
//             </Sheet>
//         </div>
//     );
// };

// export default CheckinButton;










import React, { useState, useEffect } from 'react';
import { useGeolocated } from "react-geolocated";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CheckinButton = () => {
    const navigate = useNavigate();
    const [isPending, setIsPending] = useState(true);
    const [attendanceApplied, setAttendanceApplied] = useState(false);
    const [checkInTime, setCheckInTime] = useState('');
    const [status, setStatus] = useState('Pending');
    const todayDate = new Date().toISOString().split('T')[0];
    const [selectedWorkMode, setSelectedWorkMode] = useState('');

    // Using the useGeolocated hook
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });


    // Handle change event for selecting work mode
    const handleChange = (event) => {
        setSelectedWorkMode(event.target.value);
        console.log("mode", selectedWorkMode)
    };

    const empNumber = localStorage.getItem('empNumber');
    const empCode = localStorage.getItem('empCode');

    const handleApplyAttendance = async () => {
        if (!isGeolocationAvailable || !isGeolocationEnabled || !coords) {
            console.error("Geolocation is not available or enabled.");
            return;
        }
        const dataa = {
            latitude: coords.latitude,
            longitude: coords.longitude,
        }

        const data = {
            empNumber: empNumber, // Replace with actual employee number
            empCode: empCode, // Replace with actual employee code
            latitude: dataa.latitude,
            longitude: dataa.longitude,
            remoteWork: selectedWorkMode,
        };

        const response = await axios.post('http://157.245.109.206:8093/emp-handler/attendence/check-in', data)
        console.log(response.data)
        if (response.status === 202) {
            console.log(response);
            setIsPending(false);
            navigate("/attendence")

        }
        else {
            alert("you are already mark attendence");
        }
    }

    useEffect(() => {
        const findTodayAttendence = async () => {
            const response = await axios.post('http://157.245.109.206:8093/emp-handler/attendence/today-emp-atttendence?empCode=' + empCode)
            if (response.status === 202) {
                console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
                if(response?.data?.result?.checkIn != null)
                {
                    setIsPending(false);
                }
                setStatus(response.data.result.attendenceStatus);
                setCheckInTime(response.data.result.checkIn);
                localStorage.setItem('checkIn',response.data.result.checkIn)
            }
            return;
        }

        findTodayAttendence();
    });

    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <button className='font-medium text-red-800 bg-gray-200 px-5 py-2 rounded-full'>Check-in</button>
                    {/* <button className="text-md font-medium text-red-800 bg-gray-200 rounded-full ">
                        Check-in
                    </button> */}
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>
                            <div className="flex justify-center items-center bg-gray-400 text-white h-[30px] mt-5 rounded-lg">
                                CHECK-IN PAGE
                            </div>
                        </SheetTitle>
                        <SheetDescription>
                            <div className="mt-4">
                                <div className="flex gap-4 mb-4">
                                    <div className="flex items-center">
                                        <label className="flex items-center mr-4">
                                            <input
                                                type="radio"
                                                name="workMode"
                                                value="WFH"
                                                className="form-radio h-5 w-5 text-black"
                                                disabled={attendanceApplied}
                                                onChange={(e) => setSelectedWorkMode(e.target.value)}
                                            />
                                            <span className="ml-2 text-black">WFH</span>
                                        </label>
                                        <label className="flex items-center mr-4">
                                            <input
                                                type="radio"
                                                name="workMode"
                                                value="WFF"
                                                className="form-radio h-5 w-5 text-black"
                                                disabled={attendanceApplied}
                                                onChange={(e) => setSelectedWorkMode(e.target.value)}
                                            />
                                            <span className="ml-2 text-black">WFF</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="workMode"
                                                value="WFO"
                                                className="form-radio h-5 w-5 text-black"
                                                disabled={attendanceApplied}
                                                onChange={(e) => setSelectedWorkMode(e.target.value)}
                                            />
                                            <span className="ml-2 text-black">WFO</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="date">
                                        Today's Date
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        value={todayDate}
                                        className="border rounded p-2 w-full"
                                        readOnly
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="employee-number">
                                        Employee Number
                                    </label>
                                    <input
                                        type="text"
                                        id="employee-number"
                                        value={empCode}
                                        className="border rounded p-2 w-full"
                                    />
                                </div>

                                {<div className="flex justify-end">
                                    <button
                                        onClick={handleApplyAttendance}
                                        className={`px-4 py-2 rounded border text-black ${isPending
                                            ? 'bg-white border-black hover:bg-green-500 hover:text-white hover:border-none'
                                            : 'bg-red-300 border-gray-300 text-white filter blur-xs'
                                            }`}
                                        disabled={!isPending}
                                    >
                                        Apply Attendance
                                    </button>
                                </div>}
                                <div className="flex justify-center items-center bg-gray-400 text-white h-[30px] mt-3 mb-3 text-xl font-medium rounded-lg">
                                    Attendance Status
                                </div>

                                {/* <div>
                                <div className="mb-4 flex items-center">
    <label className="block text-gray-700 mb-2 w-1/3">
        Check-in Time
    </label>
    <div className="text-gray-800">
        {attendanceApplied ? checkInTime : '--'}
    </div>
</div>

<div className="mb-4 flex items-center">
    <label className="block text-gray-700 mb-2 w-1/3">
        Current Date
    </label>
    <div className="text-gray-800 w-2/3">
        {todayDate}
    </div>
</div>

<div className="mb-4 flex items-center">
    <label className="block text-gray-700 mb-2 w-1/3">
        Attendance Status
    </label>
    <div className="text-gray-800 w-2/3">
        {attendanceApplied ? status : '--'}
    </div>
</div>


                                </div> */}

                                <div>
                                    {isPending ? (
                                        <p>Attendance pending...</p>
                                    ) : (
                                        <div >
                                            <div className="mb-4 flex items-center">
                                                <label className="block text-gray-700 mb-2 w-1/2">
                                                    Check-in Time
                                                </label>
                                                <div className="text-gray-800 w-2/3">
                                                    : {isPending ? '--' : checkInTime}
                                                </div>
                                            </div>

                                            <div className="mb-4 flex items-center">
                                                <label className="block text-gray-700 mb-2 w-1/2">
                                                    Current Date
                                                </label>
                                                <div className="text-gray-800 w-2/3">
                                                    : {isPending ? '--' : todayDate}
                                                </div>
                                            </div>

                                            <div className="mb-4 flex items-center">
                                                <label className="block text-gray-700 mb-2 w-1/2">
                                                    Attendance Status
                                                </label>
                                                <div className="text-gray-800 w-2/3">
                                                    : {isPending ? '--' : status}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default CheckinButton;
