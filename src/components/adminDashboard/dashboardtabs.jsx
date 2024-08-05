import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Table from '../adminDashboard/tablejob';
import { IoBagRemoveSharp } from "react-icons/io5";
import '../../App.css'

import React from 'react'

const Tabss = () => {
    return (
        <div>
            <Tabs>
                <TabList className={"flex justify-between  w-full p-3 bg-white"}>
                    {/* <Tab className={"font-bold"}>Jobs</Tab> */}
                    <div className="flex justify-between  w-[350px] h-[35px] items-center text-l bg-white">
                        <Tab className={"font-medium text-gray-600 outline-none cursor-pointer hover:font-bold"}>Jobs</Tab>
                        <Tab className={"font-medium text-gray-600 outline-none cursor-pointer"}>Candidates</Tab>
                        <Tab className={"font-medium text-gray-600 outline-none cursor-pointer"}>Onboarding</Tab>
                    </div>

                </TabList>

                <TabPanel>
                {/* <div class="overflow-x-auto mt-6">
                        <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                            <thead class="bg-sky-50 text-gray-400 ">
                                <tr>
                                    <th class="py-3 px-4 text-center"></th>
                                    <th class="py-3 px-4 text-center font-bold">Positions Left</th>
                                    <th class="py-3 px-4 text-center">Applications</th>
                                    <th class="py-3 px-4 text-center">Interviewed</th>
                                    <th class="py-3 px-4 text-center">Rejected</th>
                                    <th class="py-3 px-4 text-center">Feedback Pending</th>
                                    <th class="py-3 px-4 text-center">Offered</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-600">
                                <tr className='bg-sky-50'>
                                    <td class="py-3 px-4 text-start text-slate-700 font-bold">Senior Data Analyst<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">3</td>
                                    <td class="py-3 px-4 text-center">123</td>
                                    <td class="py-3 px-4 text-center">40</td>
                                    <td class="py-3 px-4 text-center">33</td>
                                    <td class="py-3 px-4 text-center">7</td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">2</td>
                                </tr>
                                <tr className='bg-sky-50'>
                                    <td class="py-3 px-4 text-start text-slate-700 font-bold">Junior Data Analyst<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">7</td>
                                    <td class="py-3 px-4 text-center">567</td>
                                    <td class="py-3 px-4 text-center">22</td>
                                    <td class="py-3 px-4 text-center">20</td>
                                    <td class="py-3 px-4 text-center">2</td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">4</td>
                                </tr>
                                <tr className='bg-sky-50'>
                                    <td class="py-3 px-4 text-start text-slate-700 font-bold">Product Designer<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">2</td>
                                    <td class="py-3 px-4 text-center">201</td>
                                    <td class="py-3 px-4 text-center">32</td>
                                    <td class="py-3 px-4 text-center">18</td>
                                    <td class="py-3 px-4 text-center">14</td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">0</td>
                                </tr>
                                <tr className='bg-sky-50'>
                                    <td class="py-3 px-4 text-start text-slate-700 font-bold">Java Developer<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">5</td>
                                    <td class="py-3 px-4 text-center">231</td>
                                    <td class="py-3 px-4 text-center">23</td>
                                    <td class="py-3 px-4 text-center">10</td>
                                    <td class="py-3 px-4 text-center">13</td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">3</td>
                                </tr>
                                <tr className='bg-sky-50'>
                                    <td class="py-3 px-4 text-start text-slate-700 font-bold">Product Manager<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">3</td>
                                    <td class="py-3 px-4 text-center">67</td>
                                    <td class="py-3 px-4 text-center">41</td>
                                    <td class="py-3 px-4 text-center">22</td>
                                    <td class="py-3 px-4 text-center">19</td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">1</td>
                                </tr>

                            </tbody>
                        </table>
                    </div> */}
                    {/* <section className="table h-auto w-full lg:w-[580px] xl:w-full sm-w-[200px] overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg mt-4">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 text-center"></th>
                  <th className="p-2 text-center">Positions Left</th>
                  <th className="p-2 text-center">Applications</th>
                  <th className="p-2 text-center">Interviewed</th>
                  <th className="p-2 text-center">Hired</th>
                  <th className="p-2 text-center">Feedback Pending</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 text-center">Senior Data Analyst</td>
                  <td className="p-2 text-center">2</td>
                  <td className="p-2 text-center">123</td>
                  <td className="p-2 text-center">40</td>
                  <td className="p-2 text-center">33</td>
                  <td className="p-2 text-center">7</td>
                </tr>
                <tr>
                  <td className="p-2 text-center">Senior Data Analyst</td>
                  <td className="p-2 text-center">2</td>
                  <td className="p-2 text-center">123</td>
                  <td className="p-2 text-center">40</td>
                  <td className="p-2 text-center">33</td>
                  <td className="p-2 text-center">7</td>
                </tr>
                <tr>
                  <td className="p-2 text-center">Senior Data Analyst</td>
                  <td className="p-2 text-center">2</td>
                  <td className="p-2 text-center">123</td>
                  <td className="p-2 text-center">40</td>
                  <td className="p-2 text-center">33</td>
                  <td className="p-2 text-center">7</td>
                </tr>
              </tbody>
            </table>
          </section> */}
          <div className="flex justify-center bg-white">
                        <div className="w-full overflow-auto scrollbar-hide" style={{ maxHeight: '400px' }}>
                            <table className="table-auto w-full  shadow border border-black mt-4">
                                <thead>
                                    <tr className="text-center" style={{ backgroundColor: "#CFE0E733" }}>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">SI.NO.</th>
                                        <th className="px-4 py-2 border border-gray-200">CandidateId</th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">Candidate-Name</th>
                                        <th className="px-4 py-2 border border-gray-200">Candidate-Email</th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">Candidate-Ph</th>
                                        <th className="px-4 py-2 border border-gray-200">View Details</th>
                                        <th className="px-4 py-2 border border-gray-200 text-sky-500">Shedule Interview</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
                                        <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
                                        <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
                                        <td className="px-4 py-3 border border-gray-200">8864844665</td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
                                        <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
                                        <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
                                        <td className="px-4 py-3 border border-gray-200">8864844665</td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
                                        <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
                                        <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
                                        <td className="px-4 py-3 border border-gray-200">8864844665</td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
                                        <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
                                        <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
                                        <td className="px-4 py-3 border border-gray-200">8864844665</td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
                                        <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
                                        <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
                                        <td className="px-4 py-3 border border-gray-200">8864844665</td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
                                        <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
                                        <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
                                        <td className="px-4 py-3 border border-gray-200">8864844665</td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
                                        <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
                                        <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
                                        <td className="px-4 py-3 border border-gray-200">8864844665</td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
                                        <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
                                        <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
                                        <td className="px-4 py-3 border border-gray-200">8864844665</td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
                                        <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
                                        <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
                                        <td className="px-4 py-3 border border-gray-200">8864844665</td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
                                    </tr>
                                    <tr className="border border-gray-200 text-center">
                                        <td className="px-4 py-3 border border-gray-200">1</td>
                                        <td className="px-4 py-3 border border-gray-200">MD-ZAID-01</td>
                                        <td className="px-4 py-3 border border-gray-200">Mohd Zaid</td>
                                        <td className="px-4 py-3 border border-gray-200">zaidmohd9761@gmail.com</td>
                                        <td className="px-4 py-3 border border-gray-200">8864844665</td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-sky-500  p-1 rounded-md mt-3" >View Details</button></td>
                                        <td className="px-4 py-3 border border-gray-200"><button className=" text-lg font-medium text-blue-500  p-1 rounded-md mt-3" >Schedule Interview</button></td>
                                    </tr>
                                    
                                    {/* Additional rows here */}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </TabPanel>
                <TabPanel>
                {/* <div class="overflow-x-auto mt-6">
                        <table class="min-w-full w-[880px] bg-white shadow-md rounded-lg overflow-hidden">
                            <thead class="bg-sky-50 text-gray-400 ">
                                <tr>
                                    <th class="py-3 px-4 text-center"></th>
                                    <th class="py-3 px-4 text-center font-bold">Positions Left</th>
                                    <th class="py-3 px-4 text-center">Applications</th>
                                    <th class="py-3 px-4 text-center">Interviewed</th>
                                    <th class="py-3 px-4 text-center">Rejected</th>
                                    <th class="py-3 px-4 text-center">Feedback Pending</th>
                                    <th class="py-3 px-4 text-center">Offered</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-600">
                                <tr className='bg-sky-50'>
                                    
                                    <td class="py-3 px-4 text-start text-slate-700 font-bold">Senior Data Analyst<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">3</td>
                                    <td class="py-3 px-4 text-center">123</td>
                                    <td class="py-3 px-4 text-center">40</td>
                                    <td class="py-3 px-4 text-center">33</td>
                                    <td class="py-3 px-4 text-center">7</td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">2</td>
                                </tr>
                                <tr className='bg-sky-50'>
                                    <td class="py-3 px-4 text-start text-slate-700 font-bold">Junior Data Analyst<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">7</td>
                                    <td class="py-3 px-4 text-center">567</td>
                                    <td class="py-3 px-4 text-center">22</td>
                                    <td class="py-3 px-4 text-center">20</td>
                                    <td class="py-3 px-4 text-center">2</td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">4</td>
                                </tr>
                                <tr className='bg-sky-50'>
                                    <td class="py-3 px-4 text-start text-slate-700 font-bold">Product Designer<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">2</td>
                                    <td class="py-3 px-4 text-center">201</td>
                                    <td class="py-3 px-4 text-center">32</td>
                                    <td class="py-3 px-4 text-center">18</td>
                                    <td class="py-3 px-4 text-center">14</td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">0</td>
                                </tr>
                                <tr className='bg-sky-50'>
                                    <td class="py-3 px-4 text-start text-slate-700 font-bold">Java Developer<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">5</td>
                                    <td class="py-3 px-4 text-center">231</td>
                                    <td class="py-3 px-4 text-center">23</td>
                                    <td class="py-3 px-4 text-center">10</td>
                                    <td class="py-3 px-4 text-center">13</td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">3</td>
                                </tr>
                                <tr className='bg-sky-50'>
                                    <td class="py-3 px-4 text-start text-slate-700 font-bold">Product Manager<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">3</td>
                                    <td class="py-3 px-4 text-center">67</td>
                                    <td class="py-3 px-4 text-center">41</td>
                                    <td class="py-3 px-4 text-center">22</td>
                                    <td class="py-3 px-4 text-center">19</td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">1</td>
                                </tr>

                            </tbody>
                        </table>
                    </div> */}
                    <section className="table h-auto w-full lg:w-[580px] xl:w-full sm-w-[200px] overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg mt-4">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 text-center"></th>
                  <th className="p-2 text-center">Positions Left</th>
                  <th className="p-2 text-center">Applications</th>
                  <th className="p-2 text-center">Interviewed</th>
                  <th className="p-2 text-center">Hired</th>
                  <th className="p-2 text-center">Feedback Pending</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 text-center">Senior Data Analyst</td>
                  <td className="p-2 text-center">2</td>
                  <td className="p-2 text-center">123</td>
                  <td className="p-2 text-center">40</td>
                  <td className="p-2 text-center">33</td>
                  <td className="p-2 text-center">7</td>
                </tr>
                <tr>
                  <td className="p-2 text-center">Senior Data Analyst</td>
                  <td className="p-2 text-center">2</td>
                  <td className="p-2 text-center">123</td>
                  <td className="p-2 text-center">40</td>
                  <td className="p-2 text-center">33</td>
                  <td className="p-2 text-center">7</td>
                </tr>
                <tr>
                  <td className="p-2 text-center">Senior Data Analyst</td>
                  <td className="p-2 text-center">2</td>
                  <td className="p-2 text-center">123</td>
                  <td className="p-2 text-center">40</td>
                  <td className="p-2 text-center">33</td>
                  <td className="p-2 text-center">7</td>
                </tr>
              </tbody>
            </table>
          </section>

                </TabPanel>
                <TabPanel>
                {/* <div class="overflow-x-auto mt-6">
                        <table class="min-w-full w-[880px] bg-white shadow-md rounded-lg overflow-hidden">
                            <thead class="bg-sky-50 text-gray-400 ">
                                <tr>
                                    <th class="py-3 px-4 text-center"></th>
                                    <th class="py-3 px-4 text-center font-bold">Positions Left</th>
                                    <th class="py-3 px-4 text-center">Applications</th>
                                    <th class="py-3 px-4 text-center">Interviewed</th>
                                    <th class="py-3 px-4 text-center">Rejected</th>
                                    <th class="py-3 px-4 text-center">Feedback Pending</th>
                                    <th class="py-3 px-4 text-center">Offered</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-600">
                                <tr className='bg-sky-50'>
                                    
                                    <td class="py-3 px-4 text-start text-slate-700 font-bold">Senior Data Analyst<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">3</td>
                                    <td class="py-3 px-4 text-center">123</td>
                                    <td class="py-3 px-4 text-center">40</td>
                                    <td class="py-3 px-4 text-center">33</td>
                                    <td class="py-3 px-4 text-center">7</td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">2</td>
                                </tr>
                                <tr className='bg-sky-50'>
                                    <td class="py-3 px-4 text-start text-slate-700 font-bold">Junior Data Analyst<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">7</td>
                                    <td class="py-3 px-4 text-center">567</td>
                                    <td class="py-3 px-4 text-center">22</td>
                                    <td class="py-3 px-4 text-center">20</td>
                                    <td class="py-3 px-4 text-center">2</td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">4</td>
                                </tr>
                                <tr className='bg-sky-50'>
                                    <td class="py-3 px-4 text-start text-slate-700 font-bold">Product Designer<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">2</td>
                                    <td class="py-3 px-4 text-center">201</td>
                                    <td class="py-3 px-4 text-center">32</td>
                                    <td class="py-3 px-4 text-center">18</td>
                                    <td class="py-3 px-4 text-center">14</td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">0</td>
                                </tr>
                                <tr className='bg-sky-50'>
                                    <td class="py-3 px-4 text-start text-slate-700 font-bold">Java Developer<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">5</td>
                                    <td class="py-3 px-4 text-center">231</td>
                                    <td class="py-3 px-4 text-center">23</td>
                                    <td class="py-3 px-4 text-center">10</td>
                                    <td class="py-3 px-4 text-center">13</td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">3</td>
                                </tr>
                                <tr className='bg-sky-50'>
                                    <td class="py-3 px-4 text-start text-slate-700 font-bold">Product Manager<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">3</td>
                                    <td class="py-3 px-4 text-center">67</td>
                                    <td class="py-3 px-4 text-center">41</td>
                                    <td class="py-3 px-4 text-center">22</td>
                                    <td class="py-3 px-4 text-center">19</td>
                                    <td class="py-3 px-4 text-center text-slate-700 font-bold">1</td>
                                </tr>

                            </tbody>
                        </table>
                    </div> */}
                    <section className="table h-auto w-full lg:w-[580px] xl:w-full sm-w-[200px] overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg mt-4">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 text-center "></th>
                  <th className="p-2 text-center">Positions Left</th>
                  <th className="p-2 text-center">Applications</th>
                  <th className="p-2 text-center">Interviewed</th>
                  <th className="p-2 text-center">Hired</th>
                  <th className="p-2 text-center">Feedback Pending</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 text-center">Senior Data Analyst</td>
                  <td className="p-2 text-center">2</td>
                  <td className="p-2 text-center">123</td>
                  <td className="p-2 text-center">40</td>
                  <td className="p-2 text-center">33</td>
                  <td className="p-2 text-center">7</td>
                </tr>
                <tr>
                  <td className="p-2 text-center">Senior Data Analyst</td>
                  <td className="p-2 text-center">2</td>
                  <td className="p-2 text-center">123</td>
                  <td className="p-2 text-center">40</td>
                  <td className="p-2 text-center">33</td>
                  <td className="p-2 text-center">7</td>
                </tr>
                <tr>
                  <td className="p-2 text-center">Senior Data Analyst</td>
                  <td className="p-2 text-center">2</td>
                  <td className="p-2 text-center">123</td>
                  <td className="p-2 text-center">40</td>
                  <td className="p-2 text-center">33</td>
                  <td className="p-2 text-center">7</td>
                </tr>
              </tbody>
            </table>
          </section>
                </TabPanel>

            </Tabs>
        </div>
    )
}
export default Tabss

// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import React from 'react';

// const Tabss = () => {
//     return (
//         <div className="max-w-screen-xl mx-auto">
//             <Tabs>
//                 <TabList className="flex justify-between p-3">
//                     <Tab className="font-medium text-black">Jobs</Tab>
//                     <Tab className="font-medium text-black">Candidates</Tab>
//                     <Tab className="font-medium text-black">Onboarding</Tab>
//                 </TabList>

//                 <TabPanel>
//                     <div className="overflow-x-auto mt-6">
//                         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//                             <thead className="bg-sky-50 text-gray-400">
//                                 <tr>
//                                     <th className="py-3 px-4 text-center"></th>
//                                     <th className="py-3 px-4 text-center font-bold">Positions Left</th>
//                                     <th className="py-3 px-4 text-center">Applications</th>
//                                     <th className="py-3 px-4 text-center">Interviewed</th>
//                                     <th className="py-3 px-4 text-center">Rejected</th>
//                                     <th className="py-3 px-4 text-center">Feedback Pending</th>
//                                     <th className="py-3 px-4 text-center">Offered</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="text-gray-600">
//                                 {/*
//                                     Your table rows here (same structure as before)
//                                 */}
//                                 <tr className='bg-sky-50'>
//                                     <td class="py-3 px-4 text-start text-slate-700 font-bold">Senior Data Analyst<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
//                                     <td class="py-3 px-4 text-center text-slate-700 font-bold">3</td>
//                                     <td class="py-3 px-4 text-center">123</td>
//                                     <td class="py-3 px-4 text-center">40</td>
//                                     <td class="py-3 px-4 text-center">33</td>
//                                     <td class="py-3 px-4 text-center">7</td>
//                                     <td class="py-3 px-4 text-center text-slate-700 font-bold">2</td>
//                                 </tr>
//                                 <tr className='bg-sky-50'>
//                                     <td class="py-3 px-4 text-start text-slate-700 font-bold">Junior Data Analyst<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
//                                     <td class="py-3 px-4 text-center text-slate-700 font-bold">7</td>
//                                     <td class="py-3 px-4 text-center">567</td>
//                                     <td class="py-3 px-4 text-center">22</td>
//                                     <td class="py-3 px-4 text-center">20</td>
//                                     <td class="py-3 px-4 text-center">2</td>
//                                     <td class="py-3 px-4 text-center text-slate-700 font-bold">4</td>
//                                 </tr>
//                                 <tr className='bg-sky-50'>
//                                     <td class="py-3 px-4 text-start text-slate-700 font-bold">Product Designer<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
//                                     <td class="py-3 px-4 text-center text-slate-700 font-bold">2</td>
//                                     <td class="py-3 px-4 text-center">201</td>
//                                     <td class="py-3 px-4 text-center">32</td>
//                                     <td class="py-3 px-4 text-center">18</td>
//                                     <td class="py-3 px-4 text-center">14</td>
//                                     <td class="py-3 px-4 text-center text-slate-700 font-bold">0</td>
//                                 </tr>
//                                 <tr className='bg-sky-50'>
//                                     <td class="py-3 px-4 text-start text-slate-700 font-bold">Java Developer<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
//                                     <td class="py-3 px-4 text-center text-slate-700 font-bold">5</td>
//                                     <td class="py-3 px-4 text-center">231</td>
//                                     <td class="py-3 px-4 text-center">23</td>
//                                     <td class="py-3 px-4 text-center">10</td>
//                                     <td class="py-3 px-4 text-center">13</td>
//                                     <td class="py-3 px-4 text-center text-slate-700 font-bold">3</td>
//                                 </tr>
//                                 <tr className='bg-sky-50'>
//                                     <td class="py-3 px-4 text-start text-slate-700 font-bold">Product Manager<br/><span className='text-slate-500 text-sm font-light'>100 days ago</span></td>
//                                     <td class="py-3 px-4 text-center text-slate-700 font-bold">3</td>
//                                     <td class="py-3 px-4 text-center">67</td>
//                                     <td class="py-3 px-4 text-center">41</td>
//                                     <td class="py-3 px-4 text-center">22</td>
//                                     <td class="py-3 px-4 text-center">19</td>
//                                     <td class="py-3 px-4 text-center text-slate-700 font-bold">1</td>
//                                 </tr>

                                
//                             </tbody>
//                         </table>
//                     </div>
//                 </TabPanel>

//                 {/*
//                     Additional TabPanels with similar table structure
//                 */}

//             </Tabs>
//         </div>
//     );
// };

// export default Tabss;


// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import Table from './tablejob'; // Assuming this is a custom table component you have
// import { IoBagRemoveSharp } from "react-icons/io5";
// import React from 'react';

// const Tabss = () => {
//     return (
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Responsive container */}
//             <Tabs>
//                 <TabList className="flex justify-between w-full p-3">
//                     <Tab className="font-medium text-black-200">Jobs</Tab>
//                     <Tab className="font-medium text-black-200">Candidates</Tab>
//                     <Tab className="font-medium text-black-200">Onboarding</Tab>
//                 </TabList>

//                 <TabPanel>
//                     <div className="overflow-x-auto mt-6">
//                         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//                             <thead className="bg-sky-50 text-gray-400">
//                                 <tr>
//                                     <th className="py-3 px-4 text-center"></th>
//                                     <th className="py-3 px-4 text-center font-bold">Positions Left</th>
//                                     <th className="py-3 px-4 text-center">Applications</th>
//                                     <th className="py-3 px-4 text-center">Interviewed</th>
//                                     <th className="py-3 px-4 text-center">Rejected</th>
//                                     <th className="py-3 px-4 text-center">Feedback Pending</th>
//                                     <th className="py-3 px-4 text-center">Offered</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="text-gray-600">
//                                 {/* Sample data rows */}
//                                 <tr className="bg-sky-50">
//                                     <td className="py-3 px-4 text-start text-slate-700 font-bold">Senior Data Analyst<br /><span className="text-slate-500 text-sm font-light">100 days ago</span></td>
//                                     <td className="py-3 px-4 text-center text-slate-700 font-bold">3</td>
//                                     <td className="py-3 px-4 text-center">123</td>
//                                     <td className="py-3 px-4 text-center">40</td>
//                                     <td className="py-3 px-4 text-center">33</td>
//                                     <td className="py-3 px-4 text-center">7</td>
//                                     <td className="py-3 px-4 text-center text-slate-700 font-bold">2</td>
//                                 </tr>
//                                 {/* More rows */}
//                             </tbody>
//                         </table>
//                     </div>
//                 </TabPanel>

//                 <TabPanel>
//                     <div className="overflow-x-auto mt-6">
//                         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//                             <thead className="bg-sky-50 text-gray-400">
//                                 <tr>
//                                     <th className="py-3 px-4 text-center"></th>
//                                     <th className="py-3 px-4 text-center font-bold">Positions Left</th>
//                                     <th className="py-3 px-4 text-center">Applications</th>
//                                     <th className="py-3 px-4 text-center">Interviewed</th>
//                                     <th className="py-3 px-4 text-center">Rejected</th>
//                                     <th className="py-3 px-4 text-center">Feedback Pending</th>
//                                     <th className="py-3 px-4 text-center">Offered</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="text-gray-600">
//                                 {/* Sample data rows */}
//                                 <tr className="bg-sky-50">
//                                     <td className="py-3 px-4 text-start text-slate-700 font-bold">Junior Data Analyst<br /><span className="text-slate-500 text-sm font-light">100 days ago</span></td>
//                                     <td className="py-3 px-4 text-center text-slate-700 font-bold">7</td>
//                                     <td className="py-3 px-4 text-center">567</td>
//                                     <td className="py-3 px-4 text-center">22</td>
//                                     <td className="py-3 px-4 text-center">20</td>
//                                     <td className="py-3 px-4 text-center">2</td>
//                                     <td className="py-3 px-4 text-center text-slate-700 font-bold">4</td>
//                                 </tr>
//                                 {/* More rows */}
//                             </tbody>
//                         </table>
//                     </div>
//                 </TabPanel>

//                 <TabPanel>
//                     <div className="overflow-x-auto mt-6">
//                         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//                             <thead className="bg-sky-50 text-gray-400">
//                                 <tr>
//                                     <th className="py-3 px-4 text-center"></th>
//                                     <th className="py-3 px-4 text-center font-bold">Positions Left</th>
//                                     <th className="py-3 px-4 text-center">Applications</th>
//                                     <th className="py-3 px-4 text-center">Interviewed</th>
//                                     <th className="py-3 px-4 text-center">Rejected</th>
//                                     <th className="py-3 px-4 text-center">Feedback Pending</th>
//                                     <th className="py-3 px-4 text-center">Offered</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="text-gray-600">
//                                 {/* Sample data rows */}
//                                 <tr className="bg-sky-50">
//                                     <td className="py-3 px-4 text-start text-slate-700 font-bold">Product Designer<br /><span className="text-slate-500 text-sm font-light">100 days ago</span></td>
//                                     <td className="py-3 px-4 text-center text-slate-700 font-bold">2</td>
//                                     <td className="py-3 px-4 text-center">201</td>
//                                     <td className="py-3 px-4 text-center">32</td>
//                                     <td className="py-3 px-4 text-center">18</td>
//                                     <td className="py-3 px-4 text-center">14</td>
//                                     <td className="py-3 px-4 text-center text-slate-700 font-bold">0</td>
//                                 </tr>
//                                 {/* More rows */}
//                             </tbody>
//                         </table>
//                     </div>
//                 </TabPanel>

//             </Tabs>
//         </div>
//     );
// }

// export default Tabss;
