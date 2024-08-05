import React from 'react'
import MonitorHeader from './monitorheader'

const Employeelistpage = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100">
                <MonitorHeader className="flex-1 flex flex-col overflow-hidden" />
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
    )
}

export default Employeelistpage
