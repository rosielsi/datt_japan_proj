import React from "react";
import Bg1 from '../assets/bg1.jpg';
export default function UserRepair() {

    return (

        <div className="relative right-0 z-0 justify-start mb-6 h-1/2 group md:flex md:w-auto absolue">
            <div>
                <form className="bg-teal-500 max-w-[900px] w-full mx-auto p-2 px-10 mb-6 flex flex-col space-y-3 ...">
                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">
                        <label className='text-center ...inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  last:mr-0'>Customer Name Kanji</label>
                        <input type="number" id="small-input" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                    </div>

                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">
                        <label className='text-center ...inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  last:mr-0'>Contact Tell1</label>
                        <input type="number" id="small-input" className="block w-6/12 p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>
                    </div>

                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">
                        <label className='text-center ...inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  font-2xl last:mr-0'>Address</label>
                        <input type="number" id="small-input" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>
                    </div>
                    <div>
                        <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address"></input>
                    </div>

                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">              
                        <label className='text-center ...inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  last:mr-0'>Tel</label>
                            <input type="number" id="small-input" className="block w-6/12 p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            <input type="number" id="small-input" className="block w-1/4 p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input> 
                            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>       
                    </div>

                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">              
                        <label className='text-center ...inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  last:mr-0'>Contact Tel1</label>
                            <input type="number" id="small-input" className="block w-6/12 p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            <input type="number" id="small-input" className="block w-1/4 p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input> 
                    </div>

                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">
                        <label className='text-center ...inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  last:mr-0'>Send SMS to</label>
                        <input id="default-checkbox" type="checkbox" value="" className="w-10 h-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <input type="text" id="small-input" className="block w-8/12 p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>
                        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Copy</button>
                    </div>

                </form>
            </div>


            <div>
                <form className="bg-teal-500 max-w-[700px] w-full p-2  flex flex-col space-y-7 ... absolute right-0 ...">
                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">
                        <label className='text-center ...inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  last:mr-0'>Customer Name Kana</label>
                        <input type="text" id="small-input" className="block w-8/12 p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                    </div>

                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">
                        <label className='text-center ...inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  last:mr-0'>Work Department</label>
                        <input type="text" id="small-input" className="block w-8/12 p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                    </div>

                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">
                        <label className='text-center ...inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  last:mr-0'>Email</label>
                        <input type="email" id="small-input" className="block w-8/12 p-2 text-gray-900 border-gray-300 rounded-lg bg-gray-50 sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                    </div>

                    <div className="relative z-0 justify-start mb-6 space-x-1 group md:flex md:w-auto">              
                        <label className='text-center ...inline-block px-2 py-1 mr-1 font-semibold text-gray-900 uppercase bg-green-200 rounded  last:mr-0'>Contact Tel2</label>
                            <input type="number" id="small-input" class="w-6/12 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            <input type="number" id="small-input" class="w-1/4 block p-2 text-gray-900 bg-gray-50 rounded-lg border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input> 
                    </div>

                </form>
            </div>




        </div>

    )
}