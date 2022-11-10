import React, { Component, useEffect, useState } from 'react'



export default class RepairNav extends Component {
    render() {
        return (
            <nav class="bg-cyan-500 hover:bg-cyan-600 ... border-gray-400 dark:border-gray-600 dark:bg-gray-200 sm:s">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <a href="https://flowbite.com" class="flex items-center">
                        <h1 class="max-w-[1000px] py-2 mb-4 text-3xl font-extrabold text-red-500 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-teal-800">Repair Request</span> Registraion</h1>
                    </a>
                    <div className='border-double border-4 border-gray-900 ... grid grid-cols-2 divide-y-2 > * + * right-10 bg-gray-200 center absolute'>
                        <div className='text-center place-content-center content-evenly'>
                            <Timer />
                        </div>
                    </div>


                    <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div id="mega-menu-full" class="hidden  items-center w-full md:flex md:w-auto md:order-1 justify-end">
                        <ul class="flex  mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0 ">

                            <div>
                                <div class="inline-flex rounded-md shadow-sm justify-end" role="group">
                                    <button type="button" onClick={() => modal1()}  data-bs-toggle="modal" data-bs-target="#exampleModalXl" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        Issue NO
                                    </button>
                                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        Registration
                                    </button>
                                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        Provisional Registration
                                    </button>
                                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        close
                                    </button>
                                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        Printing
                                    </button>
                                </div>

                                <div class="inline-flex rounded-md shadow-sm justify-end" role="group">
                                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        Cancel
                                    </button>
                                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        Reflection of Registration
                                    </button>
                                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        Repair Slip seal
                                    </button>
                                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        Reservation Slip
                                    </button>
                                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        0 Contact notes
                                    </button>
                                </div>

                                <div class="inline-flex rounded-md shadow-sm justify-end" role="group">
                                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        Print Cancel
                                    </button>
                                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        Print Re-pair
                                    </button>
                                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        Print Cancellation
                                    </button>
                                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        Printed PL
                                    </button>
                                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        Sending Visit Resevervation
                                    </button>
                                </div>
                                <div class="inline-flex rounded-md shadow-sm justify-end" role="group">
                                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        View history
                                    </button>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}




const Timer = () => {

    const [seconds, SetSeconds] = useState(0);
    const [minutes, SetMinutes] = useState(0);

    var timer;
    useEffect(() => {

        timer = setInterval(() => {

            SetSeconds(seconds + 1);

            if (seconds === 59) {
                SetMinutes(minutes + 1);
                SetSeconds(0);
            }



        }, 1000)

        return () => clearInterval(timer);
    });

    return (
        <div className='text-center'>
            <h2 className='mb-2 font-mono text-5xl font-normal leading-normal text-center text-red-800 mt-0- text bold'>Reception</h2>
            <h3 class="self-center text-4xl font-semibold whitespace-nowrap dark:text-white font-mono ... text-center">TIME : {minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h3>
        </div>
    )
}


const modal1 = () => {
    return (

        <div className="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade" id="exampleModalSm" tabindex="-1" aria-labelledby="exampleModalSmLabel" aria-modal="true" role="dialog">
            <div className="relative w-auto pointer-events-none modal-dialog modal-sm">
                <div className="relative flex flex-col w-full text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto modal-content bg-clip-padding">
                    <div className="flex items-center justify-between flex-shrink-0 p-4 border-b border-gray-200 modal-header rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalSmLabel">
                            Small modal
                        </h5>
                        <button type="button"
                            className="box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="relative p-4 modal-body">
                        ...
                    </div>
                </div>
            </div>
        </div>
    
    )
}