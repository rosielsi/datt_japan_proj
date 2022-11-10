import Bg1 from '../assets/bg1.jpg';
import React from "react";

export default function SsRepair() {
    return (

        <div className="relative right-0 z-0 justify-start mb-6 h-1/2 group md:flex md:w-auto absolue">
            <div>
                <form className="bg-teal-500 max-w-[900] mx-auto p-4 px-20 mb-6 flex flex-col space-y-3 ...">
                    <div className="flex justify-start grid-cols-3 ">
                        <div className="flex justify-start grid-cols-3 md:gap-8">
                            <label className='inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded last:mr-0'>Estimate</label>
                            <input type="text" id="small-input" className="block w-2/12 p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            <div class="items-center mb-4 flex space-x-4 ...">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sales</label>
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Users</label>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start grid-cols-3 ">
                        <div className="flex justify-start grid-cols-3 md:gap-8">
                            <label className='inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded last:mr-0'>Re-pair</label>
                            <input type="text" id="small-input" className="block w-2/12 p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            <div class="items-center mb-4 flex space-x-4 ...">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sales</label>
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Users</label>
                            </div>
                        </div>
                    </div>


                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">
                        <label className='inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded last:mr-0'>SS Code</label>
                        <input type="number" id="small-input" class="w-3/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <input type="text" id="small-input" class="w-6/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>
                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Clear</button>
                    </div>

                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">
                        <label className='inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded last:mr-0'>Visit Hope day</label>
                        <input type="number" id="small-input" class="w-3/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <input type="number" id="small-input" class="w-3/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <input type="text" id="small-input" class="w-6/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>
                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Clear</button>
                    </div>
                    <h1 className='inline-block px-2 py-1 mr-1 font-semibold text-center text-gray-900 uppercase bg-green-200 rounded last:mr-0'>Remarks</h1>
                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">                       
                        <input type="number" id="small-input" class="w-2/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <input type="text" id="small-input" class="w-8/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>
                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Clear</button>
                    </div>
                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">      
                        <input type="number" id="small-input" class="w-2/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <input type="text" id="small-input" class="w-8/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>
                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Clear</button>
                    </div>
                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">
                        <input type="number" id="small-input" class="w-2/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <input type="text" id="small-input" class="w-8/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>
                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Clear</button>
                    </div>
                </form>
            </div>



            <div>
                <form className="bg-teal-500 max-w-[900px] w-full mx-auto p-2 px-10 mb-6 flex flex-col space-y-4 ... absolute right-2 ...">
                <div className="flex justify-start w-full grid-cols-3 md:gap-8">
                        <label className='inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded last:mr-0'>Reason for setting</label>
                        <input type="text" id="small-input" class="w-2/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="w-6/12 text-white bg-teal-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-blue-700 dark:focus:ring-teal-800" type="button">1. Telephone Reception <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-start grid-cols-3 ">
                        <div className="flex justify-start grid-cols-3 md:gap-8">
                            <label className='inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded last:mr-0'>Estimated Limit</label>
                            <input type="number" id="small-input" className="block w-2/12 p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            <span>1,000 yen</span>
                        </div>
                    </div>
                    
                    <div className="flex justify-start w-full grid-cols-3 md:gap-2">
                        <label className='inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded last:mr-0'>Request first</label>
                        <input type="text" id="small-input" class="w-2/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="w-6/12 text-white bg-teal-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-blue-700 dark:focus:ring-teal-800" type="button">1. Telephone Reception <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Request</button>
                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Meta Request first</button>
                    </div>

                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">
                        <label className='inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded last:mr-0'>Visit Notes</label>
                        <input type="number" id="small-input" class="w-3/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <input type="text" id="small-input" class="w-6/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>                    
                    </div>

                    
                    <div className="flex justify-start grid-cols-3 ">
                        <div className="flex justify-start grid-cols-3 md:gap-8">
                            <label className='inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded last:mr-0'>Travel Expenses</label>
                            <input type="number" id="small-input" className="block w-7/12 p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        </div>
                    </div>
                    
                    
                    <div className="flex justify-start w-full grid-cols-3 md:gap-2">
                        <label className='inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded last:mr-0'>Hodidays/Overtime charges</label>
                        <input type="text" id="small-input" class="w-2/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="w-3/12 text-white bg-teal-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-blue-700 dark:focus:ring-teal-800" type="button">0. Yes <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                   </div>


                </form>
            </div>




        </div>

    )
}

