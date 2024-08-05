import React from 'react';
import Headers from './headers';
import Image from '../../assets/homeimage.jpg';
import { useNavigate } from 'react-router-dom';

const Mainpage = () => {
    const navigate = useNavigate()
    const handleMonitor = () => {
        navigate('/monitor-dashboard')
    }
    const handleDashboard = () => {
        navigate('/dashboard/home')
    }
  return (
    <div className="relative">
      {/* Header */}
      <Headers className="relative z-20" />

      {/* Background Image */}
      <img 
        src={Image} 
        alt="Background" 
        className="h-[578px] w-full object-cover" 
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-60">
        <div className="p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            Hello & Welcome Kritanjali,
          </h1>
          <p className="text-lg md:text-xl lg:text-3xl text-white mb-8" style={{ fontFamily: 'Montserrat' }}>
            {/* Explore your performance, manage tasks, and track your progress. */}
            H.R OF VENTURE CONSULTANCY SERVICES
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300" onClick={handleMonitor}>
              Monitoring-Employee
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300" onClick={handleDashboard}>
              Go To Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;

