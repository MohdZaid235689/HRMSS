// import React from 'react'
// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
// } from "@/components/ui/sheet"


// const Checkinbutton = () => {
//     return (
//         <div>
//             <Sheet>
//                 <SheetTrigger><button className="text-md font-medium text-red-800 bg-gray-200 rounded-full px-10 py-2">Check-in</button></SheetTrigger>
//                 <SheetContent>
//                     <SheetHeader>
//                         <SheetTitle>CHECK-IN PAGE</SheetTitle>
//                         <SheetDescription>

//                         </SheetDescription>
//                     </SheetHeader>
//                 </SheetContent>
//             </Sheet>

//         </div>
//     )
// }

// export default Checkinbutton


// import React, { useState, useEffect } from 'react';
// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
// } from "@/components/ui/sheet";

// const Checkinbutton = () => {
//     // State to store today's date
//     // const [todayDate, setTodayDate] = useState('');

//     // // Set today's date when the component mounts
//     // useEffect(() => {
//     //     const today = new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD
//     //     setTodayDate(today);
//     // }, []);


//     const [attendanceApplied, setAttendanceApplied] = useState(false);
//     const [checkInTime, setCheckInTime] = useState('');
//     const [status, setStatus] = useState('Pending');
//     const todayDate = new Date().toISOString().split('T')[0];

//     const handleApplyAttendance = () => {
//         const currentTime = new Date().toLocaleTimeString();
//         setCheckInTime(currentTime);
//         setAttendanceApplied(true);
//         const currentHour = new Date().getHours();
//         if (currentHour > 9) { // assuming 9 AM is the official start time
//             setStatus('Late');
//         } else {
//             setStatus('On Time');
//         }
//     };

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
//                             <div className="flex justify-center items-center bg-gray-400 text-white h-[30px] mt-5 rounded-lg">CHECK-IN PAGE</div>
//                         </SheetTitle>
//                         <SheetDescription>
//                             <div className="mt-4">
//                                 <div className="flex gap-4 mb-4">
//                                     <div className="flex items-center">
//                                         <label className="flex items-center mr-4">
//                                             <input
//                                                 type="radio"
//                                                 name="workMode"
//                                                 value="home"
//                                                 className="form-radio h-5 w-5 text-black"
//                                             />
//                                             <span className="ml-2 text-black">Work from Home</span>
//                                         </label>
//                                         <label className="flex items-center">
//                                             <input
//                                                 type="radio"
//                                                 name="workMode"
//                                                 value="office"
//                                                 className="form-radio h-5 w-5 text-black"
//                                             />
//                                             <span className="ml-2 text-black">Work from Office</span>
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
//                                         className="border rounded p-2 w-full"
//                                     />
//                                 </div>
                                
                                
                                
//                                     <div className="flex justify-end">
//                                         <button
//                                             onClick={handleApplyAttendance}
//                                             className="px-4 py-2 bg-white text-black rounded border border-black hover:bg-green-500 hover:text-white hover:border-none"
//                                         >
//                                             Apply Attendance
//                                         </button>
//                                     </div>
//                                     <div className="flex justify-center items-center bg-gray-400 text-white h-[30px] mt-3 mb-3 text-xl font-medium rounded-lg">Attendance Status</div>

//                                     <div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 mb-2" htmlFor="check-in-time">
//                                                 Check-in Time
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 id="check-in-time"
//                                                 value={checkInTime}
//                                                 className="border rounded p-2 w-full"
//                                                 readOnly
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 mb-2">
//                                                 Current Date
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 value={todayDate}
//                                                 className="border rounded p-2 w-full"
//                                                 readOnly
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 mb-2">
//                                                 Attendance Status
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 value={status}
//                                                 className="border rounded p-2 w-full"
//                                                 readOnly
//                                             />
//                                         </div>
//                                     </div>
                                
                                
//                             </div>
//                         </SheetDescription>
//                     </SheetHeader>
//                 </SheetContent>
//             </Sheet>
//         </div>
//     );
// }

// export default Checkinbutton;





// import React, { useState } from 'react';
// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
// } from "@/components/ui/sheet";

// const CheckinButton = () => {
//     const [attendanceApplied, setAttendanceApplied] = useState(false);
//     const [checkInTime, setCheckInTime] = useState('');
//     const [status, setStatus] = useState('Pending');
//     const todayDate = new Date().toISOString().split('T')[0];

//     const handleApplyAttendance = () => {
//         const currentTime = new Date().toLocaleTimeString();
//         setCheckInTime(currentTime);
//         setAttendanceApplied(true);
//         const currentHour = new Date().getHours();
//         if (currentHour > 9) { // assuming 9 AM is the official start time
//             setStatus('Late');
//         } else {
//             setStatus('On Time');
//         }
//     };

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
//                                                 value="home"
//                                                 className="form-radio h-5 w-5 text-black"
//                                                 disabled={attendanceApplied}
//                                             />
//                                             <span className="ml-2 text-black">Work from Home</span>
//                                         </label>
//                                         <label className="flex items-center">
//                                             <input
//                                                 type="radio"
//                                                 name="workMode"
//                                                 value="office"
//                                                 className="form-radio h-5 w-5 text-black"
//                                                 disabled={attendanceApplied}
//                                             />
//                                             <span className="ml-2 text-black">Work from Office</span>
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
//                                         className="border rounded p-2 w-full"
//                                     />
//                                 </div>

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
//                                     <div className="mb-4">
//                                         <label className="block text-gray-700 mb-2" htmlFor="check-in-time">
//                                             Check-in Time
//                                         </label>
//                                         <input
//                                             type="text"
//                                             id="check-in-time"
//                                             value={attendanceApplied ? checkInTime : 'Not Checked In'}
//                                             className="border rounded p-2 w-full"
//                                             readOnly
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label className="block text-gray-700 mb-2">
//                                             Current Date
//                                         </label>
//                                         <input
//                                             type="text"
//                                             value={todayDate}
//                                             className="border rounded p-2 w-full"
//                                             readOnly
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label className="block text-gray-700 mb-2">
//                                             Attendance Status
//                                         </label>
//                                         <input
//                                             type="text"
//                                             value={attendanceApplied ? status : 'Not Applied'}
//                                             className="border rounded p-2 w-full"
//                                             readOnly
//                                         />
//                                     </div>
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
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const CheckinButton = () => {
    const [attendanceApplied, setAttendanceApplied] = useState(false);
    const [checkInTime, setCheckInTime] = useState('');
    const [status, setStatus] = useState('Pending');
    const todayDate = new Date().toISOString().split('T')[0];

    useEffect(() => {
        // Simulate an API call to check if attendance is already marked
        async function fetchAttendanceStatus() {
            try {
                const response = await fetch('/api/check-attendance'); // Replace with actual API endpoint
                const data = await response.json();
                
                if (data.attendanceMarked) {
                    setAttendanceApplied(true);
                    setCheckInTime(data.checkInTime);
                    setStatus(data.status);
                }
            } catch (error) {
                console.error('Error fetching attendance status:', error);
            }
        }
        
        fetchAttendanceStatus();
    }, []);

    const handleApplyAttendance = async () => {
        const currentTime = new Date().toLocaleTimeString();
        setCheckInTime(currentTime);
        setAttendanceApplied(true);
        const currentHour = new Date().getHours();
        if (currentHour > 9) { // assuming 9 AM is the official start time
            setStatus('Late');
        } else {
            setStatus('On Time');
        }

        // Simulate an API call to mark attendance
        try {
            const response = await fetch('/api/apply-attendance', { // Replace with actual API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    checkInTime: currentTime,
                    date: todayDate,
                    status: currentHour > 9 ? 'Late' : 'On Time'
                }),
            });
            const result = await response.json();
            console.log('Attendance applied:', result);
        } catch (error) {
            console.error('Error applying attendance:', error);
        }
    };

    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <button className="text-md font-medium text-red-800 bg-gray-200 rounded-full px-10 py-2">
                        Check-in
                    </button>
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
                                                value="home"
                                                className="form-radio h-5 w-5 text-black"
                                                disabled={attendanceApplied}
                                            />
                                            <span className="ml-2 text-black">Work from Home</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="workMode"
                                                value="office"
                                                className="form-radio h-5 w-5 text-black"
                                                disabled={attendanceApplied}
                                            />
                                            <span className="ml-2 text-black">Work from Office</span>
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
                                        className="border rounded p-2 w-full"
                                    />
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        onClick={handleApplyAttendance}
                                        className="px-4 py-2 bg-white text-black rounded border border-black hover:bg-green-500 hover:text-white hover:border-none"
                                        disabled={attendanceApplied}
                                    >
                                        Apply Attendance
                                    </button>
                                </div>
                                <div className="flex justify-center items-center bg-gray-400 text-white h-[30px] mt-3 mb-3 text-xl font-medium rounded-lg">
                                    Attendance Status
                                </div>

                                <div>
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




// import React, { useState } from 'react';
// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
// } from "@/components/ui/sheet";

// const Checkinbutton = () => {
//     const [attendanceApplied, setAttendanceApplied] = useState(false);
//     const [checkInTime, setCheckInTime] = useState('');
//     const [status, setStatus] = useState('Pending');
//     const todayDate = new Date().toISOString().split('T')[0];

//     const handleApplyAttendance = () => {
//         const currentTime = new Date().toLocaleTimeString();
//         setCheckInTime(currentTime);
//         setAttendanceApplied(true);
//         const currentHour = new Date().getHours();
//         if (currentHour > 9) { // assuming 9 AM is the official start time
//             setStatus('Late');
//         } else {
//             setStatus('On Time');
//         }
//     };

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
//                             <div className="flex justify-center items-center bg-gray-400 text-white h-[40px] mt-5 rounded-lg">CHECK-IN PAGE</div>
//                         </SheetTitle>
//                         <SheetDescription>
//                             <div className="mt-4">
//                                 <div className="flex gap-4 mb-4">
//                                     <div className="flex items-center">
//                                         <label className="flex items-center mr-4">
//                                             <input
//                                                 type="radio"
//                                                 name="workMode"
//                                                 value="home"
//                                                 className="form-radio h-5 w-5 text-black"
//                                             />
//                                             <span className="ml-2 text-black">Work from Home</span>
//                                         </label>
//                                         <label className="flex items-center">
//                                             <input
//                                                 type="radio"
//                                                 name="workMode"
//                                                 value="office"
//                                                 className="form-radio h-5 w-5 text-black"
//                                             />
//                                             <span className="ml-2 text-black">Work from Office</span>
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
//                                         className="border rounded p-2 w-full"
//                                     />
//                                 </div>
                                
//                                 {!attendanceApplied ? (
//                                     <div>
//                                         <p className="text-gray-700 mb-4">Attendance Status: {status}</p>
//                                         <div className="flex justify-end">
//                                             <button
//                                                 onClick={handleApplyAttendance}
//                                                 className="px-4 py-2 bg-white text-black rounded border border-black hover:bg-green-500 hover:text-white hover:border-none"
//                                             >
//                                                 Apply Attendance
//                                             </button>
//                                         </div>
//                                     </div>
//                                 ) : (
//                                     <div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 mb-2" htmlFor="check-in-time">
//                                                 Check-in Time
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 id="check-in-time"
//                                                 value={checkInTime}
//                                                 className="border rounded p-2 w-full"
//                                                 readOnly
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 mb-2">
//                                                 Today Date
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 value={todayDate}
//                                                 className="border rounded p-2 w-full"
//                                                 readOnly
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <label className="block text-gray-700 mb-2">
//                                                 Attendance Status
//                                             </label>
//                                             <input
//                                                 type="text"
//                                                 value={status}
//                                                 className="border rounded p-2 w-full"
//                                                 readOnly
//                                             />
//                                         </div>
//                                     </div>
//                                 )}

                                
//                             </div>
//                         </SheetDescription>
//                     </SheetHeader>
//                 </SheetContent>
//             </Sheet>
//         </div>
//     );
// }

// export default Checkinbutton;


