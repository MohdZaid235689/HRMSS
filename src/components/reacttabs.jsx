import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

const Reacttabs = () => {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Taxi Audit</Tab>
                    <Tab>Meals Audit</Tab>
                    <Tab>Flight Audit</Tab>
                    <Tab>Hotels Audit</Tab>
                    <Tab>Deep Dive Audit</Tab>
                </TabList>

                <TabPanel>
                    <section className="flex items-start">
                        <div className="container 5/6  mx-auto ">
                            <table className="table-auto w-full border border-collapse shadow ">
                                <thead>
                                    <tr
                                        className=" text-center"
                                        style={{ backgroundColor: "#CFE0E733" }}
                                    >
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">
                                            SI.NO.
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Case Type
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">
                                            Case No
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Case Open Date
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Case Assign Date
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            FMNO
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Region
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">2</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Flight Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">2</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>

                                    {/* ... more table rows */}
                                </tbody>
                            </table>
                        </div>
                        <div className="container w-1/3 mx-auto">
                            <table className="table-auto w-full  border border-collapse shadow">
                                <thead>
                                    <tr className="bg-gray-100 text-center">
                                        <th className="px-4 py-2 border border-gray-200 text-red-500">
                                            Auditor Name
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-600">
                                            Auditor
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    {/* ... more table rows */}
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section className="flex items-center justify-end py-10 px-8 gap-3">
                        <div className="bgcolor flex items-center gap-4  text-white py-2 px-4 rounded-md">
                            {/* <FaArrowLeft /> */}
                            <button>Previous Page</button>
                        </div>
                        <div className="bgcolor flex items-center gap-4   text-white py-2 px-4 rounded-md">
                            <button>Next Page</button>
                            {/* <FaArrowRight /> */}
                        </div>
                    </section>
                </TabPanel>
                <TabPanel>
                    <section className="flex items-start">
                        <div className="container 5/6  mx-auto ">
                            <table className="table-auto w-full border border-collapse shadow ">
                                <thead>
                                    <tr
                                        className=" text-center"
                                        style={{ backgroundColor: "#CFE0E733" }}
                                    >
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">
                                            SI.NO.
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Case Type
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">
                                            Case No
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Case Open Date
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Case Assign Date
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            FMNO
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Region
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">2</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Flight Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">2</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>

                                    {/* ... more table rows */}
                                </tbody>
                            </table>
                        </div>
                        <div className="container w-1/3 mx-auto">
                            <table className="table-auto w-full  border border-collapse shadow">
                                <thead>
                                    <tr className="bg-gray-100 text-center">
                                        <th className="px-4 py-2 border border-gray-200 text-red-500">
                                            Auditor Name
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-600">
                                            Auditor
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    {/* ... more table rows */}
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section className="flex items-center justify-end py-10 px-8 gap-3">
                        <div className="bgcolor flex items-center gap-4  text-white py-2 px-4 rounded-md">
                            {/* <FaArrowLeft /> */}
                            <button>Previous Page</button>
                        </div>
                        <div className="bgcolor flex items-center gap-4   text-white py-2 px-4 rounded-md">
                            <button>Next Page</button>
                            {/* <FaArrowRight /> */}
                        </div>
                    </section>
                </TabPanel>
                <TabPanel>
                    <section className="flex items-start">
                        <div className="container 5/6  mx-auto ">
                            <table className="table-auto w-full border border-collapse shadow ">
                                <thead>
                                    <tr
                                        className=" text-center"
                                        style={{ backgroundColor: "#CFE0E733" }}
                                    >
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">
                                            SI.NO.
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Case Type
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">
                                            Case No
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Case Open Date
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Case Assign Date
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            FMNO
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Region
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">2</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Flight Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">2</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>

                                    {/* ... more table rows */}
                                </tbody>
                            </table>
                        </div>
                        <div className="container w-1/3 mx-auto">
                            <table className="table-auto w-full  border border-collapse shadow">
                                <thead>
                                    <tr className="bg-gray-100 text-center">
                                        <th className="px-4 py-2 border border-gray-200 text-red-500">
                                            Auditor Name
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-600">
                                            Auditor
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    {/* ... more table rows */}
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section className="flex items-center justify-end py-10 px-8 gap-3">
                        <div className="bgcolor flex items-center gap-4  text-white py-2 px-4 rounded-md">
                            {/* <FaArrowLeft /> */}
                            <button>Previous Page</button>
                        </div>
                        <div className="bgcolor flex items-center gap-4   text-white py-2 px-4 rounded-md">
                            <button>Next Page</button>
                            {/* <FaArrowRight /> */}
                        </div>
                    </section>
                </TabPanel>
                <TabPanel>
                    <section className="flex items-start">
                        <div className="container 5/6  mx-auto ">
                            <table className="table-auto w-full border border-collapse shadow ">
                                <thead>
                                    <tr
                                        className=" text-center"
                                        style={{ backgroundColor: "#CFE0E733" }}
                                    >
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">
                                            SI.NO.
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Case Type
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">
                                            Case No
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Case Open Date
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Case Assign Date
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            FMNO
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Region
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">2</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Flight Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">2</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>

                                    {/* ... more table rows */}
                                </tbody>
                            </table>
                        </div>
                        <div className="container w-1/3 mx-auto">
                            <table className="table-auto w-full  border border-collapse shadow">
                                <thead>
                                    <tr className="bg-gray-100 text-center">
                                        <th className="px-4 py-2 border border-gray-200 text-red-500">
                                            Auditor Name
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-600">
                                            Auditor
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    {/* ... more table rows */}
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section className="flex items-center justify-end py-10 px-8 gap-3">
                        <div className="bgcolor flex items-center gap-4  text-white py-2 px-4 rounded-md">
                            {/* <FaArrowLeft /> */}
                            <button>Previous Page</button>
                        </div>
                        <div className="bgcolor flex items-center gap-4   text-white py-2 px-4 rounded-md">
                            <button>Next Page</button>
                            {/* <FaArrowRight /> */}
                        </div>
                    </section>
                </TabPanel>
                <TabPanel>
                    <section className="flex items-start">
                        <div className="container 5/6  mx-auto ">
                            <table className="table-auto w-full border border-collapse shadow ">
                                <thead>
                                    <tr
                                        className=" text-center"
                                        style={{ backgroundColor: "#CFE0E733" }}
                                    >
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">
                                            SI.NO.
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Case Type
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">
                                            Case No
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Case Open Date
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Case Assign Date
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            FMNO
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200">
                                            Region
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">2</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Flight Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">2</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Taxi Audit
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">3</td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            12-12-2024
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Abcd
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            India
                                        </td>
                                    </tr>

                                    {/* ... more table rows */}
                                </tbody>
                            </table>
                        </div>
                        <div className="container w-1/3 mx-auto">
                            <table className="table-auto w-full  border border-collapse shadow">
                                <thead>
                                    <tr className="bg-gray-100 text-center">
                                        <th className="px-4 py-2 border border-gray-200 text-red-500">
                                            Auditor Name
                                        </th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-600">
                                            Auditor
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">
                                            Kavita
                                        </td>
                                        <td className="px-4 py-3 border border-gray-200">
                                            Delhi
                                        </td>
                                    </tr>
                                    {/* ... more table rows */}
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <section className="flex items-center justify-end py-10 px-8 gap-3">
                        <div className="bgcolor flex items-center gap-4  text-white py-2 px-4 rounded-md">
                            {/* <FaArrowLeft /> */}
                            <button>Previous Page</button>
                        </div>
                        <div className="bgcolor flex items-center gap-4   text-white py-2 px-4 rounded-md">
                            <button>Next Page</button>
                            {/* <FaArrowRight /> */}
                        </div>
                    </section>
                </TabPanel>
                
            </Tabs>
        </div>
    )
}

export default Reacttabs
