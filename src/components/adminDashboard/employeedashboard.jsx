import React, { useEffect, useState } from 'react';
import Image from '../../assets/myimage.jpg'
import Headers from './headers';
import axios from 'axios';
import '../../App.css'

const EmployeeDashboard = () => {

    let content;
    const [data, setData] = useState([])
    const empCode = localStorage.getItem('empCode');
    const token = localStorage.getItem('token');
    const empNumber = localStorage.getItem('empNumber')
    const [isToggled, setIsToggled] = useState(false);
    const [baseImage, setBaseImage] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const name = localStorage.getItem('name')

    const fetchApi = async () => {


        if (!empCode || !token) {
            console.error("Employee code or token is missing.");
            return;
        }


        const response = await axios.post('http://157.245.109.206:8091/identity-handler/details/get-emp-details?empCode='+ empCode);
        console.log("response", response.data)
        localStorage.setItem('designation',response.data.disignation)
        setData(response.data)

    };






    const fetchImageApi = async () => {
        try {
            const response = await axios.get('http://157.245.109.206:8093/emp-handler/image/get-emp-image?empCode='+empCode);
            console.log("response", response.data);

            if (response.status === 202) {
                setIsToggled(true);
                setBaseImage("data:image/png;base64," + response.data.result);
            } else {
                setIsToggled(false);
            }
        } catch (error) {
            console.error("Error fetching image:", error);
            setIsToggled(false);
        }

    };

    useEffect(() => {
        fetchApi();
        fetchImageApi();

    }, []);

    const handleFileChange = async(event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file); // Set the selected file
        }
        console.log("file",file)

        await handleUploadImage(file)
    };

    const handleUploadImage = async(file) => {
        // const empCode = localStorage.getItem('empCode',empCode)
        // const empNumber = localStorage.getItem('empNumber',empNumber)
        const formData = new FormData()
        // formData.append('empCode',empCode)
        // formData.append('empNumber',empNumber)
        formData.append('file',file)

        const response = await axios.post('http://157.245.109.206:8093/emp-handler/image/edit-emp-image?empCode=C5ZAIDMOHD9761&empNumber=1',formData)
        if(response.status === 202)
        {
            fetchImageApi()
        }
        console.log("response",response.data)



    }






    // const fetchUploadImage = async () => {
    //     const response = await axios.post('http://157.245.109.206:8093/emp-handler/image/edit-emp-image?empCode=' + empCode & 'empNumber=' + empNumber)
    //     console.log(response.data)
    // }



    return (
        <>
            <Headers className='flex-1 flex flex-col overflow-hidden' />
            <div className="bg-blue-100 min-h-screen p-4 shadow-lg">
                {/* Header Section */}
                <div className="bg-blue-50 rounded-lg shadow p-6 mb-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-semibold  text-gray-600 shadow-md " style={{ fontFamily: 'monserrat' }}>Employee Details</h1>

                    </div>
                    <div className="flex flex-col md:flex-row items-center md:items-start mt-6">

                        <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg">
                            <div className="image-container">
                                {isToggled ? (
                                    <img src={baseImage} alt="Profile" className="w-full h-full" />
                                ) : (
                                    <img src={Image} alt="Profile" className="w-full h-full" />
                                )}
                                <label htmlFor="file-upload" className="edit-button">
                                    Edit
                                    <input
                                        id="file-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        // onClick={handleUploadImage}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="md:ml-4 mt-4 md:mt-0">
                            <div className="flex flex-col">
                                <h2 className="text-xl font-semibold text-gray-600" style={{ fontFamily: 'monserrat' }}>{name}</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

                                    <div key={0} className=" p-4 rounded-lg shadow-md">
                                        <p className="text-gray-600">Role</p>
                                        <p className="text-sm font-semibold text-blue-500">{data.disignation}</p>
                                        
                                    </div>

                                    <div key={1} className=" p-4 rounded-lg shadow-md">
                                        <p className="text-gray-600">Phone-No</p>
                                        <p className="text-sm font-semibold text-blue-500">{data.primaryPhone}</p>

                                    </div>

                                    <div key={2} className="p-4 rounded-lg shadow-md">
                                        <p className="text-gray-600">Email-Adress</p>
                                        <p className="text-sm font-semibold text-blue-500">{data.officialEmail}</p>

                                    </div>



                                </div>



                            </div>

                        </div>
                    </div>
                    

                    <div className="flex justify-center ">
                        <div className="flex ">
                            <div className="text-center border border-gray bg-white rounded-lg shadow-md w-[220px] mx-auto mr-2">
                                <p className="text-lg font-medium mt-2 text-black">309</p>
                                <p className="text-md font-medium text-gray-500">Total Attendance</p>
                            </div>

                            <div className="text-center border border-gray bg-white rounded-lg shadow-md w-[220px] mx-auto">
                                <p className="text-md font-semibold mt-2 text-black">Role Model</p>
                                <p className="text-md font-medium text-gray-500">Employee Predicate</p>
                            </div>


                        </div>

                    </div>

                </div>

                {/* Attendance History Section */}

                <div className="min-h-screen flex flex-col">
                    {/* Sticky Header Section */}
                    <div className="bg-blue-50 p-6 rounded-lg shadow-md sticky top-0 z-10 mb-2">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold shadow-md" style={{ fontFamily: 'Montserrat' }}>Attendance History</h2>
                            <div className="flex items-center space-x-4">
                                <input
                                    type="text"
                                    placeholder="Search by Date"
                                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 shadow-md"
                                />
                                <button
                                    className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-300"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">



                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-green-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-green-600 focus:outline-none"
                                >
                                    On Time
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>


                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500  border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-red-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-red-500 focus:outline-none"
                                >
                                    Absent
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-yellow-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none"
                                >
                                    Warning
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-green-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-green-600 focus:outline-none"
                                >
                                    On Time
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>


                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500  border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-red-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-red-500 focus:outline-none"
                                >
                                    Absent
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-yellow-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none"
                                >
                                    Warning
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-green-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-green-600 focus:outline-none"
                                >
                                    On Time
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>


                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500  border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-red-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-red-500 focus:outline-none"
                                >
                                    Absent
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-yellow-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none"
                                >
                                    Warning
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-green-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-green-600 focus:outline-none"
                                >
                                    On Time
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>


                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500  border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-red-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-red-500 focus:outline-none"
                                >
                                    Absent
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-yellow-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none"
                                >
                                    Warning
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-green-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-green-600 focus:outline-none"
                                >
                                    On Time
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>


                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500  border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-red-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-red-500 focus:outline-none"
                                >
                                    Absent
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-yellow-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none"
                                >
                                    Warning
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-green-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-green-600 focus:outline-none"
                                >
                                    On Time
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>


                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500  border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-red-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-red-500 focus:outline-none"
                                >
                                    Absent
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-3xl text-blue-500 border-2 border-blue-100">
                            <div className="flex justify-between">

                                <p className="text-sm font-semibold ">March 06 2024</p>
                                <button
                                    className="top-4 right-4 bg-yellow-500 text-white px-1 py-1 rounded-md font-semibold hover:bg-yellow-500 focus:outline-none"
                                >
                                    Warning
                                </button>
                            </div>


                            <p className='text-md font-semibold'>Check In Time: 17:02</p>
                            <p className='text-md font-semibold'>Check Out Time: 23:04</p>
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
}

export default EmployeeDashboard;



