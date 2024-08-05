// import React from 'react'

// const Checkoutpage = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Checkoutpage


import React, { useState, useEffect } from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import '../../App.css'

const CheckOutButton = () => {
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
                    <button className="text-md font-medium text-green-800 bg-green-200 rounded-full px-5 py-2">
                        Check-out
                    </button>
                </SheetTrigger>
                <SheetContent className="max-h-screen overflow-auto">
                    <SheetHeader>
                        <SheetTitle>
                            <div className="flex justify-center items-center bg-gray-400 text-white h-[30px] mt-5 rounded-lg">
                                CHECK-Out PAGE
                            </div>
                        </SheetTitle>
                        <SheetDescription>
                            <div className="mt-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="date">
                                        Check-In Time
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
                                    <label className="block text-gray-700 mb-2" htmlFor="description">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        className="border rounded p-2 w-full"
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
                                        Check-Out Button
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
                                            Check-Out Time
                                        </label>
                                        <div className="text-gray-800 w-2/3">
                                            {/* Show check-out time if applicable */}
                                        </div>
                                    </div>

                                    <div className="mb-4 flex items-center">
                                        <label className="block text-gray-700 mb-2 w-1/3">
                                            Working Hours
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

export default CheckOutButton;
