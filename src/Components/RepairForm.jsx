import Bg1 from '../assets/bg1.jpg';
import React from "react";

export default function RepairForm() {   
    return (
        
        <div className="relative right-0 z-0 justify-start mb-6 h-1/2 group md:flex md:w-auto absolue">
            <div>
                <form className="bg-teal-500 max-w-[600px] w-full mx-auto p-2 px-10 mb-6 flex flex-col space-y-4 ... justify-start">
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""></input>
                            <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2">Insuance ID</label>
                        </div>
                    </div>

                    <div className="flex justify-start w-full grid-cols-3 md:gap-2">
                        <label className='self-center inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded last:mr-0'>Reception Type</label>
                        <input type="text" id="small-input" className="block w-2/12 p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="w-6/12 text-white bg-teal-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-blue-700 dark:focus:ring-teal-800" type="button">1. Telephone Reception <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow md:gap-2 w-44 dark:bg-gray-700">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault" id='dropdownDefault'>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-start grid-cols-3 md:gap-2">
                        <div className="flex justify-start grid-cols-3 md:gap-8">
                            <label className='text-center ... inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded last:mr-0'>Requester</label>
                            <input type="text" id="small-input" className="block w-2/12 p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            <div class="items-center mb-4 flex space-x-2 ... md:gap-2">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" className="h-4 text-blue-600 bg-gray-100 border-gray-300 w-7 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sales</label>
                                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Users</label>
                            </div>
                        </div>

                    </div>

                </form>
            </div>




            <div>
                <form className="bg-teal-500 max-w-[600px] w-full mx-auto p-2 px-10 mb-6 flex flex-col space-y-4 ... justify-start">
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" value="Disabled" disabled></input>
                            <label for="floating_phone" class="peer-focus:font-medium absolute  text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2">Document ID</label>
                        </div>
                    </div>
                    <div className="flex justify-start grid-cols-3 md:gap-8">
                        <label className='inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded last:mr-0'>Work Type</label>
                        <input type="text" id="small-input" class="w-2/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="w-6/12 text-white bg-teal-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-blue-700 dark:focus:ring-teal-800" type="button">2. Maintinance <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
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

                    <div className="flex justify-start grid-cols-3 md:gap-8">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" value="Disabled" disabled></input>
                            <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2">Receptionist</label>
                        </div>
                    </div>
                </form>
            </div>


            <div>
                <form className="bg-teal-500 max-w-[600px] w-full mx-auto p-2 px-10 mb-6 flex flex-col space-y-4 ... justify-start">

                    <div className="relative z-0 justify-start mb-6 group md:flex md:w-auto">              
                        <label className='text-center ... inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded last:mr-0'>Service Symbol</label>
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className=" w-6/12 block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" value="Disabled" disabled></input>
                            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Search
                            </button>
                            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                               Clear
                            </button>
                    </div>
                    
                    <div className="flex justify-start grid-cols-3 md:gap-8">
                        <label className='text-center ... inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded last:mr-0'>Sales Type</label>
                        <input type="text" id="small-input" className="block w-2/12 p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="w-6/12 text-white bg-teal-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-blue-700 dark:focus:ring-teal-800" type="button">E21: Camera Related main... <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="flex justify-start grid-cols-3 md:gap-8">
                        <label className='text-center ... inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded last:mr-0'>Date And Time</label>
                        <input type="time" id="small-input" class="w-3/12 block p-2 text-gray-900 bg-gray-300 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled></input>
                        <input type="date" id="small-input" class="w-5/12 block p-2 text-gray-900 bg-gray-300 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled></input>

                    </div>
                </form>
            </div>

        </div>

    )
}

