import React from "react";
import Bg1 from '../assets/bg1.jpg';
export default function StoreRepair() {

    return (

        <div className="justify-start group md:flex absolue">
            <div>
                <form className="bg-teal-500 max-w-[600px] w-full mx-auto p-3  mb-6 flex flex-col space-y-4 ... justify-start">
                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">              
                        <label className='text-center ...  inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded last:mr-0'>Dealer Number</label>
                            <input type="number" id="small-input" class="w-6/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            <input type="number" id="small-input" class="w-1/4 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input> 
                            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>       
                    </div>

                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">              
                            <label className='text-center ... inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  last:mr-0'>Contact Tell1</label>
                            <input type="number" id="small-input" class="w-6/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                    </div>

                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">              
                        <label className='text-center ... inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  last:mr-0'>Dealer Name</label>
                            <input type="text" id="small-input" class="w-8/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>       
                    </div>

                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">
                        <div className="flex justify-start grid-cols-3 md:gap-8">
                            <label className='text-center ... inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  last:mr-0'>FAX replied no</label>
                            <div class="items-center mb-4 flex space-x-4 ...">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sales</label>
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Users</label>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">              
                        <label className='text-center ... inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  last:mr-0'>Dealer Name</label>
                            <input type="text" id="small-input" class="w-8/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>       
                            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Copy</button>       
                    </div>

                </form>
            </div>




            <div>
                <form className="bg-teal-500 max-w-[700px] w-full p-2  flex flex-col space-y-7 ... absolute right-0 ...">
                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">              
                        <label className='text-center ... inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  last:mr-0'>Reseller Code</label>
                            <input type="text" id="small-input" class="w-4/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>       
                    </div>
                    
                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">              
                        <label className='text-center ... inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  last:mr-0'>Contact Tell2</label>
                            <input type="text" id="small-input" class="w-5/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                    </div>

                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">              
                        <label className='text-center ... inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  last:mr-0'>Rensponsible</label>
                            <input type="text" id="small-input" class="w-6/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                    </div>

                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">              
                        <label className='text-center ... inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  last:mr-0'>Dealer FAX</label>
                            <input type="text" id="small-input" class="w-6/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>       
                    </div>

                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">              
                        <label className='text-center ... inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  last:mr-0'>Order Number</label>
                            <input type="text" id="small-input" class="w-6/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm: focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                    </div>
                    
                </form>
            </div>




        </div>

    )
}