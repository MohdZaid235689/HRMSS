// import React from "react";
// import VcsLogo from '@/assets/vcs.png'

// import { Link, NavLink } from "react-router-dom";
// import { FaHome } from "react-icons/fa";
// import { PiBagSimpleFill } from "react-icons/pi";
// import { MdPeopleAlt } from "react-icons/md";
// import { SiFiles } from "react-icons/si";
// import { FaCalendarAlt } from "react-icons/fa";


// const Sidebar = () => {
//   return (
//     <aside
//       className="w-[120px] bg-blue-950 h-screen text-gray-300"
//     >
//       <nav className="p-4">
//           <Link to='/'><img className="w-24 h-16 mx-auto" src={VcsLogo} alt="vcslogo" /></Link>
//         <ul className="flex flex-col items-center mt-8 space-y-2">
//           <li>
//             <NavLink
//               to="/dashboard/home"
//               className=" py-2 px-4  flex flex-col items-center"
//               activeClassName="bg-gray-700 "
//             >
//               <FaHome className="text-2xl" />
//               <span>Home</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/dashboard/jobs"
//               className=" py-2 px-4  flex flex-col items-center"
//               activeClassName="bg-gray-700 "
//             >
//               <PiBagSimpleFill className="text-2xl" />
//               <span>Jobs</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/dashboard/candidate"
//               className=" py-2 px-4  flex flex-col items-center"
//               activeClassName="bg-gray-700 "
//             >
//               <MdPeopleAlt className="text-2xl" />
//               <span>Candidate</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/dashboard/report"
//               className=" py-2 px-4  flex flex-col items-center"
//               activeClassName="bg-gray-700 "
//             >
//               <SiFiles className="text-2xl" />
//               <span>Reports</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/dashboard/calender"
//               className=" py-2 px-4  flex flex-col items-center"
//               activeClassName="bg-gray-700 "
//             >
//               <FaCalendarAlt className="text-2xl" />
//               <span>Calender</span>
//             </NavLink>
//           </li>

//           {/* Add more links as needed */}
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;



// import React, { useState } from "react";
// import VcsLogo from "@/assets/vcs.png";
// import { Link, NavLink } from "react-router-dom";
// import { FaHome, FaBars } from "react-icons/fa";
// import { PiBagSimpleFill } from "react-icons/pi";
// import { MdPeopleAlt } from "react-icons/md";
// import { SiFiles } from "react-icons/si";
// import { FaCalendarAlt } from "react-icons/fa";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <aside className="bg-blue-950 h-screen text-gray-300">
//       <nav className="p-4">
//         <div className="flex items-center justify-between">
//           <Link to="/">
//             <img className="w-24 h-16" src={VcsLogo} alt="vcslogo" />
//           </Link>
//           <button
//             className="lg:hidden text-gray-300 focus:outline-none"
//             onClick={toggleSidebar}
//           >
//             <FaBars className="text-2xl" />
//           </button>
//         </div>
//         <ul
//           className={`flex flex-col items-center mt-8 space-y-2 ${
//             isOpen ? "block" : "hidden"
//           } lg:flex`}
//         >
//           <li>
//             <NavLink
//               to="/dashboard/home"
//               className="py-2 px-4 flex flex-col items-center"
//               activeClassName="bg-gray-700"
//             >
//               <FaHome className="text-2xl" />
//               <span>Home</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/dashboard/jobs"
//               className="py-2 px-4 flex flex-col items-center"
//               activeClassName="bg-gray-700"
//             >
//               <PiBagSimpleFill className="text-2xl" />
//               <span>Jobs</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/dashboard/candidate"
//               className="py-2 px-4 flex flex-col items-center"
//               activeClassName="bg-gray-700"
//             >
//               <MdPeopleAlt className="text-2xl" />
//               <span>Candidate</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/dashboard/report"
//               className="py-2 px-4 flex flex-col items-center"
//               activeClassName="bg-gray-700"
//             >
//               <SiFiles className="text-2xl" />
//               <span>Reports</span>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/dashboard/calender"
//               className="py-2 px-4 flex flex-col items-center"
//               activeClassName="bg-gray-700"
//             >
//               <FaCalendarAlt className="text-2xl" />
//               <span>Calender</span>
//             </NavLink>
//           </li>
//           {/* Add more links as needed */}
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;



import React, { useState } from "react";
import VcsLogo from "@/assets/vcs.png";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";
import { MdPeopleAlt } from "react-icons/md";
import { SiFiles } from "react-icons/si";
import { FaCalendarAlt } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Menu Button */}
      <div className="lg:hidden bg-blue-950 p-4 flex justify-between items-center">
        <Link to="/">
          {/* <img className="w-24 h-16" src={VcsLogo} alt="vcslogo" /> */}
        </Link>
        <button
          className="text-gray-300 focus:outline-none"
          onClick={toggleSidebar}
        >
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-blue-950 h-screen text-gray-300 lg:flex lg:flex-col lg:w-[120px] ${isOpen ? "block" : "hidden"
          }`}
      >
        <nav className="p-4">
          <Link to="/" className="hidden lg:block">
            {/* <img className="w-24 h-16 mx-auto" src={VcsLogo} alt="vcslogo" /> */}
          </Link>
          <ul className="flex flex-col items-center mt-8 space-y-2">
            <li>
              <NavLink
                to="/dashboard/home"
                className="py-2 px-4 flex flex-col items-center"
                activeClassName="bg-gray-700"
              >
                <FaHome className="text-2xl" />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/jobs"
                className="py-2 px-4 flex flex-col items-center"
                activeClassName="bg-gray-700"
              >
                <PiBagSimpleFill className="text-2xl" />
                <span>Jobs</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/candidate"
                className="py-2 px-4 flex flex-col items-center"
                activeClassName="bg-gray-700"
              >
                <MdPeopleAlt className="text-2xl" />
                <span>Candidate</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/report"
                className="py-2 px-4 flex flex-col items-center"
                activeClassName="bg-gray-700"
              >
                <SiFiles className="text-2xl" />
                <span>Reports</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/calender"
                className="py-2 px-4 flex flex-col items-center"
                activeClassName="bg-gray-700"
              >
                <FaCalendarAlt className="text-2xl" />
                <span>Calender</span>
              </NavLink>
            </li>
            

            
            
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
