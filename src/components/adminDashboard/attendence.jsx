import React, { useEffect, useState } from 'react';
import Header from './headers';
import Image from '../../assets/myimage.jpg' // Adjust the import path if needed
import Checkinbutton from './checkinbutton';
import CheckOutButton from './checkoutpage';
import axios from 'axios';
import '../../App.css'
const Page = () => {

  let content;
  const [data, setData] = useState([])
  const empCode = localStorage.getItem('empCode');
  const token = localStorage.getItem('token');
  const empNumber = localStorage.getItem('empNumber')
  const name = localStorage.getItem('name')
  const [isToggled, setIsToggled] = useState(false);
  const [baseImage, setBaseImage] = useState("");
  const designation = localStorage.getItem('designation')
  const [selectedFile, setSelectedFile] = useState(null);



  const fetchImageApi = async () => {
    try {
      const response = await axios.get('http://157.245.109.206:8093/emp-handler/image/get-emp-image?empCode=' + empCode);
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
    fetchImageApi()
  }, [])


  return (
    <>
      {/* Header Component */}
      <Header />

      <div className="relative w-full h-screen"> {/* Adjust margin-top based on header height */}
        {/* Background Blur Overlay */}
        <div className="absolute inset-0 bg-green-50 backdrop-blur-sm"></div>

        {/* Foreground Content */}
        <div className="absolute inset-0 flex items-center ml-36">
          <div className="w-[420px] h-[470px] border border-gray-300 rounded-xl flex justify-center items-center bg-green-50">
            <div className="w-[360px] h-[400px]">
              <div className="w-full flex justify-center">
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-md">
                  {/* <img src={Image} alt="Profile" className="w-full h-full object-cover" /> */}

                  <div className="image-container">
                    {isToggled ? (
                      <img src={baseImage} alt="Profile" className="w-full h-full" />
                    ) : (
                      <img src={Image} alt="Profile" className="w-full h-full" />
                    )}

                  </div>
                </div>





              </div>
              <div className="w-full justify-center">
                <div className="w-[300px] flex justify-end">
                  <p className="text-xl text-black mt-2">{designation}</p>
                </div>
                <div className="w-[300px] flex justify-end">
                  <p className="text-lg text-black font-bold">{name}</p>
                </div>
              </div>
              <div className="w-full flex justify-center  mt-8">
                <div className="flex h-[45px] w-[270px] justify-between ">
                  <Checkinbutton className='ml-2' />

                  {/* <button className="text-md font-medium text-green-800 bg-green-300 rounded-full px-9">Check-Out</button> */}
                  <CheckOutButton />
                </div>
              </div>
              <div className="w-full flex justify-center mt-4 ">
                <div className="font-medium text-xl  m-2 rounded-lg h-[100px] w-[320px] bg-green-100 shadow-inner bg-opacity-90 p-3 text-gray-700">
                  Hi, it's chef Chandru. Interview tomorrow at 9 am.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
