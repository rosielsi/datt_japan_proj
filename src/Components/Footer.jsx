import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (

            <footer class="fixed bottom-0 left-0 z-20 p-4 w-full  border-t shadow md:flex md:items-center md:justify-between md:p-6  bg-teal-900 border-teal-200 dark:border-teal-600 dark:bg-teal-900 ">
                <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">Datt-Japan™</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" class="text-white mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="text-white mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="text-white mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class=" text-white hover:underline">Contact</a>
                    </li>
                </ul>
            </footer>

        )
    }
}