import React from 'react'
import Sidebar from '../SideBar'
import Header from '../Header'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const Leaverequest = () => {
    return (
        <div>
            <div className=" flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header />
                    <div className="flex justify-between m-7">
                        <div className="text-3xl font-semibold text-slate-500 ml-5">Employee-Leave Request</div>
                        <div className="text-xl font-normal text-gray-500"><Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="text-lg text-slate-600">
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem className="text-lg text-slate-600">
                                    <BreadcrumbLink href="/components">Leave-Request</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem className="text-lg text-slate-600">
                                    <BreadcrumbPage>Employee Leave-Request</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        </div>
                    </div>
                    <div className=" flex flex-col items-center m-7 h-[600px] p-5">
                        <div className="flex justify-start">
                            <div className="text-xl font-medium text-slate-600 mb-5">Employee Leave-Request</div>
                        </div>
                        <div className="w-full " style={{ maxHeight: '400px', overflowY: 'auto' }}>
                            <table className="table-auto w-full border border-collapse shadow">
                                <thead>
                                    <tr className="text-center" style={{ backgroundColor: "#CFE0E733" }}>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">Name</th>

                                        <th className="px-4 py-2 border border-gray-200">Leave-Type</th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">Leave-From</th>
                                        <th className="px-4 py-2 border border-gray-200">Leave-To</th>

                                        <th className="px-4 py-2 border border-gray-200 text-sky-500 ">No.Of.Days</th>

                                        <th className="px-4 py-2 border border-gray-200 ">Status</th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500 ">Reason</th>

                                        <th className="px-4 py-2 border border-gray-200 ">Actions</th>
                                    </tr>

                                </thead>
                                <tbody>

                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >Emergency-Leave</td>
                                        <td className="px-4 py-3 border border-gray-200" >12-07-2024</td>
                                        <td className="px-4 py-3 border border-gray-200" >15-07-2024</td>

                                        <td className="px-4 py-3 border border-gray-200" >3</td>
                                        <td className="px-4 py-3 border border-gray-200" ><button className='bg-white border-2 border-green-500 text-green-500 w-[100px] h-[30px] text-md font-normal rounded-md'>Accepted</button></td>
                                        <td className="px-4 py-3 border border-gray-200" >Suffering From Fever</td>
                                        <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>
                                        
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >Emergency-Leave</td>
                                        <td className="px-4 py-3 border border-gray-200" >12-07-2024</td>
                                        <td className="px-4 py-3 border border-gray-200" >15-07-2024</td>

                                        <td className="px-4 py-3 border border-gray-200" >3</td>
                                        <td className="px-4 py-3 border border-gray-200" ><button className='bg-white border-2 border-red-500 text-red-500 w-[100px] h-[30px] text-md font-normal rounded-md'>Rejected</button></td>
                                        <td className="px-4 py-3 border border-gray-200" >Suffering From Fever</td>
                                        <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>
                                        
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >Emergency-Leave</td>
                                        <td className="px-4 py-3 border border-gray-200" >12-07-2024</td>
                                        <td className="px-4 py-3 border border-gray-200" >15-07-2024</td>

                                        <td className="px-4 py-3 border border-gray-200" >3</td>
                                        <td className="px-4 py-3 border border-gray-200" ><button className='bg-white border-2 border-green-500 text-green-500 w-[100px] h-[30px] text-md font-normal rounded-md'>Accepted</button></td>
                                        <td className="px-4 py-3 border border-gray-200" >Suffering From Fever</td>
                                        <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>
                                        
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >Emergency-Leave</td>
                                        <td className="px-4 py-3 border border-gray-200" >12-07-2024</td>
                                        <td className="px-4 py-3 border border-gray-200" >15-07-2024</td>

                                        <td className="px-4 py-3 border border-gray-200" >3</td>
                                        <td className="px-4 py-3 border border-gray-200" ><button className='bg-white border-2 border-red-500 text-red-500 w-[100px] h-[30px] text-md font-normal rounded-md'>Active</button></td>
                                        <td className="px-4 py-3 border border-gray-200" >Suffering From Fever</td>
                                        <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>
                                        
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >Emergency-Leave</td>
                                        <td className="px-4 py-3 border border-gray-200" >12-07-2024</td>
                                        <td className="px-4 py-3 border border-gray-200" >15-07-2024</td>

                                        <td className="px-4 py-3 border border-gray-200" >3</td>
                                        <td className="px-4 py-3 border border-gray-200" ><button className='bg-white border-2 border-green-500 text-green-500 w-[100px] h-[30px] text-md font-normal rounded-md'>Accepted</button></td>
                                        <td className="px-4 py-3 border border-gray-200" >Suffering From Fever</td>
                                        <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>
                                        
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >Emergency-Leave</td>
                                        <td className="px-4 py-3 border border-gray-200" >12-07-2024</td>
                                        <td className="px-4 py-3 border border-gray-200" >15-07-2024</td>

                                        <td className="px-4 py-3 border border-gray-200" >3</td>
                                        <td className="px-4 py-3 border border-gray-200" ><button className='bg-white border-2 border-red-500 text-red-500 w-[100px] h-[30px] text-md font-normal rounded-md'>Active</button></td>
                                        <td className="px-4 py-3 border border-gray-200" >Suffering From Fever</td>
                                        <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>
                                        
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >Emergency-Leave</td>
                                        <td className="px-4 py-3 border border-gray-200" >12-07-2024</td>
                                        <td className="px-4 py-3 border border-gray-200" >15-07-2024</td>

                                        <td className="px-4 py-3 border border-gray-200" >3</td>
                                        <td className="px-4 py-3 border border-gray-200" ><button className='bg-white border-2 border-green-500 text-green-500 w-[100px] h-[30px] text-md font-normal rounded-md'>Accepted</button></td>
                                        <td className="px-4 py-3 border border-gray-200" >Suffering From Fever</td>
                                        <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>
                                        
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >Emergency-Leave</td>
                                        <td className="px-4 py-3 border border-gray-200" >12-07-2024</td>
                                        <td className="px-4 py-3 border border-gray-200" >15-07-2024</td>

                                        <td className="px-4 py-3 border border-gray-200" >3</td>
                                        <td className="px-4 py-3 border border-gray-200" ><button className='bg-white border-2 border-red-500 text-red-500 w-[100px] h-[30px] text-md font-normal rounded-md'>Active</button></td>
                                        <td className="px-4 py-3 border border-gray-200" >Suffering From Fever</td>
                                        <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>
                                        
                                    </tr>
                                    
                                    

                                </tbody>
                            </table>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Leaverequest

