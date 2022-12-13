import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';




export default function RepairNav() {
    const navigate = useNavigate()
    return (

        <div>
            <nav class="bg-gray-900 hover:bg-gray-800 ... border-gray-400 dark:border-gray-600 dark:bg-gray-200 sm:s">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <a href="https://flowbite.com" class="flex items-center">
                        <h1 class="max-w-[1000px] py-2 mb-4 text-3xl font-extrabold text-blue-500 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-gray-50 from-teal-500">Repair Request</span> Registraion</h1>
                    </a>
                </div>
            </nav>
        </div>
    )
}
