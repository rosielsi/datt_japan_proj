import React from "react";
import Bg1 from '../assets/bg1.jpg';
export default function Menu() {

    return (


        <nav className="bg-teal-900 border-teal-200 dark:border-teal-600 dark:bg-teal-900 ">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5 ">
                <a href="https://flowbite.com" className="flex items-center">

                    <span className="self-center text-xl font-semibold whitespace-nowrap text-teal-50 dark:text-white">ダットジャパン</span>
                </a>
                <button data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 ml-1 text-sm rounded-lg text-teal-50 md:hidden hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-200 dark:text-teal-400 dark:hover:bg-teal-700 dark:focus:ring-teal-600" aria-controls="mega-menu-full" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div id="mega-menu-full" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-teal-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-teal-400 md:dark:hover:text-blue-500 dark:hover:bg-teal-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-teal-700" aria-current="page">Home</a>
                        </li>
                        <li>
                            <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium border-b border-teal-100 text-gray-50 md:w-auto hover:bg-teal-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-teal-400 md:dark:hover:text-blue-500 dark:hover:bg-teal-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-teal-700">Company <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white border-b border-teal-100 hover:bg-teal-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-teal-400 md:dark:hover:text-blue-500 dark:hover:bg-teal-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-teal-700">Marketplace</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white border-b border-teal-100 hover:bg-teal-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-teal-400 md:dark:hover:text-blue-500 dark:hover:bg-teal-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-teal-700">Resources</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white border-b border-teal-100 hover:bg-teal-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-teal-400 md:dark:hover:text-blue-500 dark:hover:bg-teal-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-teal-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>

    )
}
