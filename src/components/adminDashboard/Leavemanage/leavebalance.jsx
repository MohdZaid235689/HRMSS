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

const Leavebalance = () => {
    return (
        <div>
            <div className=" flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header />
                    <div className="flex justify-between m-7">
                        <div className="text-2xl font-semibold text-slate-500 ml-5">Leave Balance</div>
                        <div className="text-xl font-normal text-gray-500"><Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="text-lg text-slate-600">
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem className="text-lg text-slate-600">
                                    <BreadcrumbLink href="/components">Leave-Dashboard</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem className="text-lg text-slate-600">
                                    <BreadcrumbPage>Leave-Balance</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        </div>
                    </div>
                    <div className=" flex flex-col items-center m-7 h-[600px] p-5">
                        <div className="flex justify-start">
                            <div className="text-xl font-medium text-slate-600 mb-5">Employee Leave-Balance</div>
                        </div>
                        <div className="w-full " style={{ maxHeight: '400px', overflowY: 'auto' }}>
                            <table className="table-auto w-full border border-collapse shadow">
                                <thead>
                                    <tr className="text-center" style={{ backgroundColor: "#CFE0E733" }}>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">Name</th>

                                        <th className="px-4 py-2 border border-gray-200">Previous Year</th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">Current-Year</th>
                                        <th className="px-4 py-2 border border-gray-200">Total</th>

                                        <th className="px-4 py-2 border border-gray-200 text-sky-500 ">Used</th>

                                        <th className="px-4 py-2 border border-gray-200 ">Accepted</th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500 ">Rejected</th>

                                        <th className="px-4 py-2 border border-gray-200 ">Expired</th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500 ">Carryover</th>

                                       



                                    </tr>

                                </thead>
                                <tbody>

                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >10</td>
                                        <td className="px-4 py-3 border border-gray-200" >5</td>
                                        <td className="px-4 py-3 border border-gray-200" >15</td>

                                        <td className="px-4 py-3 border border-gray-200" >10</td>
                                        <td className="px-4 py-3 border border-gray-200" >2</td>
                                        <td className="px-4 py-3 border border-gray-200" >3</td>
                                        <td className="px-4 py-3 border border-gray-200" >2</td>
                                        <td className="px-4 py-3 border border-gray-200" >7</td>
                                        


                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >10</td>
                                        <td className="px-4 py-3 border border-gray-200" >5</td>
                                        <td className="px-4 py-3 border border-gray-200" >15</td>

                                        <td className="px-4 py-3 border border-gray-200" >10</td>
                                        <td className="px-4 py-3 border border-gray-200" >2</td>
                                        <td className="px-4 py-3 border border-gray-200" >3</td>
                                        <td className="px-4 py-3 border border-gray-200" >2</td>
                                        <td className="px-4 py-3 border border-gray-200" >7</td>


                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >10</td>
                                        <td className="px-4 py-3 border border-gray-200" >5</td>
                                        <td className="px-4 py-3 border border-gray-200" >15</td>

                                        <td className="px-4 py-3 border border-gray-200" >10</td>
                                        <td className="px-4 py-3 border border-gray-200" >2</td>
                                        <td className="px-4 py-3 border border-gray-200" >3</td>
                                        <td className="px-4 py-3 border border-gray-200" >2</td>
                                        <td className="px-4 py-3 border border-gray-200" >7</td>


                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >10</td>
                                        <td className="px-4 py-3 border border-gray-200" >5</td>
                                        <td className="px-4 py-3 border border-gray-200" >15</td>

                                        <td className="px-4 py-3 border border-gray-200" >10</td>
                                        <td className="px-4 py-3 border border-gray-200" >2</td>
                                        <td className="px-4 py-3 border border-gray-200" >3</td>
                                        <td className="px-4 py-3 border border-gray-200" >2</td>
                                        <td className="px-4 py-3 border border-gray-200" >7</td>


                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >10</td>
                                        <td className="px-4 py-3 border border-gray-200" >5</td>
                                        <td className="px-4 py-3 border border-gray-200" >15</td>

                                        <td className="px-4 py-3 border border-gray-200" >10</td>
                                        <td className="px-4 py-3 border border-gray-200" >2</td>
                                        <td className="px-4 py-3 border border-gray-200" >3</td>
                                        <td className="px-4 py-3 border border-gray-200" >2</td>
                                        <td className="px-4 py-3 border border-gray-200" >7</td>


                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >10</td>
                                        <td className="px-4 py-3 border border-gray-200" >5</td>
                                        <td className="px-4 py-3 border border-gray-200" >15</td>

                                        <td className="px-4 py-3 border border-gray-200" >10</td>
                                        <td className="px-4 py-3 border border-gray-200" >2</td>
                                        <td className="px-4 py-3 border border-gray-200" >3</td>
                                        <td className="px-4 py-3 border border-gray-200" >2</td>
                                        <td className="px-4 py-3 border border-gray-200" >7</td>


                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >10</td>
                                        <td className="px-4 py-3 border border-gray-200" >5</td>
                                        <td className="px-4 py-3 border border-gray-200" >15</td>

                                        <td className="px-4 py-3 border border-gray-200" >10</td>
                                        <td className="px-4 py-3 border border-gray-200" >2</td>
                                        <td className="px-4 py-3 border border-gray-200" >3</td>
                                        <td className="px-4 py-3 border border-gray-200" >2</td>
                                        <td className="px-4 py-3 border border-gray-200" >7</td>


                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200 ">Mohd Zaid</td>

                                        <td className="px-4 py-3 border border-gray-200" >10</td>
                                        <td className="px-4 py-3 border border-gray-200" >5</td>
                                        <td className="px-4 py-3 border border-gray-200" >15</td>

                                        <td className="px-4 py-3 border border-gray-200" >10</td>
                                        <td className="px-4 py-3 border border-gray-200" >2</td>
                                        <td className="px-4 py-3 border border-gray-200" >3</td>
                                        <td className="px-4 py-3 border border-gray-200" >2</td>
                                        <td className="px-4 py-3 border border-gray-200" >7</td>


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

export default Leavebalance

