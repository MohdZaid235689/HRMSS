import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const MonitorHeader = () => {
    const navigate = useNavigate();

    const handleEmpMon = () => {
        navigate("/monitor-dashboard");
    }
    const handleEmpAttendence = () => {
        navigate('/employee-attendence-page')
    }
    const handleAttendence = () => {
        navigate('/attendence-history-page')
    }
    const handleemployeee = () => {
        navigate('/employee-list-page')
    }
    
    return (
        <header className="flex items-center justify-between h-[55px] bg-white shadow-md py-5 px-6">
            <div>
                <div className="text-3xl font-semibold text-gray-600" style={{ fontFamily: 'monserrat' }}>Venture Consultancy Services</div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex">
                    <span className="profileSelect mx-2 flex items-center">
                        <img
                            className="w-8 h-7 ml-5 cursor-pointer"
                            src="/vite.svg"
                            alt=""
                        />
                    </span>

                    {/* <div className="text-lg font-normal">Hemant</div> */}
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger><CiMenuBurger size={30} /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleEmpMon}>Employee-Monitoring</DropdownMenuItem>
                        <DropdownMenuItem onClick={handleEmpAttendence}>Employee-Attendence-Tracker</DropdownMenuItem>
                        <DropdownMenuItem onClick={handleAttendence}>Employee-Attendence</DropdownMenuItem>
                        <DropdownMenuItem onClick={handleemployeee}>All-Employees</DropdownMenuItem>

                        
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* <IoIosArrowDown /> */}
            </div>
        </header>
    );
};

export default MonitorHeader;