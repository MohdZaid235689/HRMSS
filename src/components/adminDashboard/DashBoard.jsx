import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './SideBar';
import Header from './Header';


// sidebar routing
import Home from '../pages/Home';
import Jobs from '../pages/Jobs';
import Candidates from '../pages/Candidates';
import Reports from '../pages/Reports';
import Calender from '../pages/Calender';

const Dashboard = () => {
  return (
    <div className="dashboard flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="home" element={<Home/>} />
            <Route path="jobs" element={<Jobs/>} />
            <Route path="candidate" element={<Candidates/>} />
            <Route path="report" element={<Reports/>} />
            <Route path="calender" element={<Calender/>} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
