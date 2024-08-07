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
import { useGeolocated } from "react-geolocated";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CheckOutButton = () => {
    const navigate = useNavigate()
    const [isPending, setIsPending] = useState(true);
    const [checkOutTime,setcheckOutTime] = useState('')
    const [attendanceApplied, setAttendanceApplied] = useState(false);
    const [checkInTime, setCheckInTime] = useState('');
    const [status, setStatus] = useState('Pending');
    const [workingHours,setWorkingHours] = useState(0)

    const todayDate = new Date().toISOString().split('T')[0];

    const [selectedWorkMode, setSelectedWorkMode] = useState('');


    const [description,setDescription] = useState('')

    

   

    useEffect(() => {

        const findTodayAttendence = async () => {

            const response = await axios.post('http://157.245.109.206:8093/emp-handler/attendence/today-emp-atttendence?empCode='+empCode)
            if (response.status === 202) {
                if(response.data.result.checkOut != null)
                {
                    setIsPending(false)
                }
                
                setCheckInTime(response.data.result.checkIn);
                setcheckOutTime(response.data.result.checkOut)
                setWorkingHours(response.data.result.workingHours)
                console.log("data", response.data);
            }
            return;
        }

        findTodayAttendence();

        const workMode = localStorage.getItem('remoteWork');
        if (workMode) {
            setSelectedWorkMode(workMode);
        }

    }, []);



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
            name : localStorage.getItem('name'),
            empNumber: empNumber, // Replace with actual employee number
            empCode: empCode, // Replace with actual employee code
            latitude: dataa.latitude,
            longitude: dataa.longitude,
            remoteWork: localStorage.getItem('remoteWork'),
            description: description 
        };
        console.log(data)


        const response = await axios.post('http://157.245.109.206:8093/emp-handler/attendence/check-out', data)
        console.log(response.data)
        if (response.status === 202) {
            // setIsPending(false)
            localStorage.setItem('checkout-Time',response.data.result.checkIn)
            localStorage.setItem('remoteWork',response.data.result.remoteWork)
            

            console.log(response);
            navigate("/attendence")
            setIsPending(false);
        }
        else {
            alert("you are already mark attendence");
        }
    };

    return (
        <div>
            <Sheet>
                <SheetTrigger>
                <button className='font-medium text-green-800 bg-green-200 px-4 py-2 rounded-full'>Check-out</button>
                    {/* <button className="text-md font-medium text-green-800 bg-green-200 rounded-full ">
                        Check-out
                    </button> */}
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
                                    <div className="flex gap-4 mb-4">
                                        <div className="flex items-center">
                                            <label className="flex items-center mr-4">
                                                <input
                                                    type="radio"
                                                    name="workMode"
                                                    value="WFH"
                                                    className="form-radio h-5 w-5 text-black"
                                                    checked={selectedWorkMode === 'WFH'}
                                                    disabled
                                                />
                                                <span className="ml-2 text-black">WFH</span>
                                            </label>
                                            <label className="flex items-center mr-4">
                                                <input
                                                    type="radio"
                                                    name="workMode"
                                                    value="WFF"
                                                    className="form-radio h-5 w-5 text-black"
                                                    checked={selectedWorkMode === 'WFF'}
                                                    disabled
                                                />
                                                <span className="ml-2 text-black">WFF</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="workMode"
                                                    value="WFO"
                                                    className="form-radio h-5 w-5 text-black"
                                                    checked={selectedWorkMode === 'WFO'}
                                                    disabled
                                                />
                                                <span className="ml-2 text-black">WFO</span>
                                            </label>
                                        </div>
                                    </div>



                



                                    <label className="block text-gray-700 mb-2" htmlFor="date">
                                        Check-In Time
                                    </label>
                                    <input
                                        
                                        value={checkInTime}
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
                                        onChange={(e) => setDescription(e.target.value)}
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
                                        value={localStorage.getItem('empNumber')}
                                    />
                                </div>

                                {<div className="flex justify-end">
                                    <button
                                        onClick={handleApplyAttendance}
                                        className={`px-4 py-2 rounded border text-black ${isPending
                                            ? 'bg-white border-black hover:bg-green-500 hover:text-white hover:border-none'
                                            : 'bg-red-300 border-gray-300 text-white cursor-not-allowed filter blur-xs'
                                            }`}
                                        disabled={!isPending}
                                    >
                                        Check-out Button
                                    </button>
                                </div>}
                                <div className="flex justify-center items-center bg-gray-400 text-white h-[30px] mt-3 mb-3 text-xl font-medium rounded-lg">
                                    Attendance Status
                                </div>

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
                                                    Check-out Time
                                                </label>
                                                <div className="text-gray-800 w-2/3">
                                                    : {isPending ? '--' : checkOutTime}
                                                </div>
                                            </div>

                                            <div className="mb-4 flex items-center">
                                                <label className="block text-gray-700 mb-2 w-1/2">
                                                    Working Hours
                                                </label>
                                                <div className="text-gray-800 w-2/3">
                                                    : {isPending ? '--' : workingHours}
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

export default CheckOutButton;
