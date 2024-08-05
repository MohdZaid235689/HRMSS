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

const Allemployees = () => {
    return (
        <div>
            <div className=" flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header />
                    <div className="flex justify-between m-7">
                        <div className="text-3xl font-semibold text-slate-500 ml-5">All-Employees</div>
                        <div className="text-xl font-normal text-gray-500"><Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="text-lg text-slate-600">
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem className="text-lg text-slate-600">
                                    <BreadcrumbLink href="/components">Employee</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem className="text-lg text-slate-600">
                                    <BreadcrumbPage>All-Employees</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        </div>
                    </div>
                    <div className=" flex flex-col items-center m-7 h-[600px] p-5">
                        <div className="flex justify-start">
                            <div className="text-xl font-medium text-slate-600 mb-5">All Company-Employees</div>
                        </div>
                        <div className="w-full " style={{ maxHeight: '400px', overflowY: 'auto' }}>
                            <table className="table-auto w-full border border-collapse shadow">
                                <thead>
                                    <tr className="text-center" style={{ backgroundColor: "#CFE0E733" }}>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">Name</th>

                                        <th className="px-4 py-2 border border-gray-200">Department</th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">Role</th>
                                        <th className="px-4 py-2 border border-gray-200">Degree</th>

                                        <th className="px-4 py-2 border border-gray-200 text-sky-500 ">Mobile-No</th>

                                        <th className="px-4 py-2 border border-gray-200 ">Email</th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500 ">Joining-Date</th>

                                        <th className="px-4 py-2 border border-gray-200 ">Actions</th>
                                    </tr>

                                </thead>
                                <tbody>

                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >Java</td>
                                        <td className="px-4 py-3 border border-gray-200" >Developer</td>
                                        <td className="px-4 py-3 border border-gray-200" >CS-IT</td>

                                        <td className="px-4 py-3 border border-gray-200" >8864844665</td>
                                        <td className="px-4 py-3 border border-gray-200" >zaidmohd9761@gmail.com</td>
                                        <td className="px-4 py-3 border border-gray-200" >12-04-2024</td>
                                        <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>

                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >Java</td>
                                        <td className="px-4 py-3 border border-gray-200" >Developer</td>
                                        <td className="px-4 py-3 border border-gray-200" >CS-IT</td>

                                        <td className="px-4 py-3 border border-gray-200" >8864844665</td>
                                        <td className="px-4 py-3 border border-gray-200" >zaidmohd9761@gmail.com</td>
                                        <td className="px-4 py-3 border border-gray-200" >12-04-2024</td>
                                        <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>

                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >Java</td>
                                        <td className="px-4 py-3 border border-gray-200" >Developer</td>
                                        <td className="px-4 py-3 border border-gray-200" >CS-IT</td>

                                        <td className="px-4 py-3 border border-gray-200" >8864844665</td>
                                        <td className="px-4 py-3 border border-gray-200" >zaidmohd9761@gmail.com</td>
                                        <td className="px-4 py-3 border border-gray-200" >12-04-2024</td>
                                        <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>

                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >Java</td>
                                        <td className="px-4 py-3 border border-gray-200" >Developer</td>
                                        <td className="px-4 py-3 border border-gray-200" >CS-IT</td>

                                        <td className="px-4 py-3 border border-gray-200" >8864844665</td>
                                        <td className="px-4 py-3 border border-gray-200" >zaidmohd9761@gmail.com</td>
                                        <td className="px-4 py-3 border border-gray-200" >12-04-2024</td>
                                        <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>

                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >Java</td>
                                        <td className="px-4 py-3 border border-gray-200" >Developer</td>
                                        <td className="px-4 py-3 border border-gray-200" >CS-IT</td>

                                        <td className="px-4 py-3 border border-gray-200" >8864844665</td>
                                        <td className="px-4 py-3 border border-gray-200" >zaidmohd9761@gmail.com</td>
                                        <td className="px-4 py-3 border border-gray-200" >12-04-2024</td>
                                        <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>

                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >Java</td>
                                        <td className="px-4 py-3 border border-gray-200" >Developer</td>
                                        <td className="px-4 py-3 border border-gray-200" >CS-IT</td>

                                        <td className="px-4 py-3 border border-gray-200" >8864844665</td>
                                        <td className="px-4 py-3 border border-gray-200" >zaidmohd9761@gmail.com</td>
                                        <td className="px-4 py-3 border border-gray-200" >12-04-2024</td>
                                        <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>

                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >Java</td>
                                        <td className="px-4 py-3 border border-gray-200" >Developer</td>
                                        <td className="px-4 py-3 border border-gray-200" >CS-IT</td>

                                        <td className="px-4 py-3 border border-gray-200" >8864844665</td>
                                        <td className="px-4 py-3 border border-gray-200" >zaidmohd9761@gmail.com</td>
                                        <td className="px-4 py-3 border border-gray-200" >12-04-2024</td>
                                        <td className="px-4 py-3 border border-gray-200 font-semibold text-2xl" >:</td>

                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >Java</td>
                                        <td className="px-4 py-3 border border-gray-200" >Developer</td>
                                        <td className="px-4 py-3 border border-gray-200" >CS-IT</td>

                                        <td className="px-4 py-3 border border-gray-200" >8864844665</td>
                                        <td className="px-4 py-3 border border-gray-200" >zaidmohd9761@gmail.com</td>
                                        <td className="px-4 py-3 border border-gray-200" >12-04-2024</td>
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

export default Allemployees


