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

const Addemployees = () => {
    return (
        <div>
            <div>
                <div className=" flex h-screen">
                    <Sidebar />
                    <div className="flex-1 flex flex-col overflow-hidden">
                        <Header />
                        <div className="flex justify-between m-7">
                            <div className="text-3xl font-semibold text-slate-500 ml-5">Add-Employees</div>
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
                                        <BreadcrumbPage>Edit-Employee</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                            </div>


                        </div>
                        <div className="">hello</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Addemployees
