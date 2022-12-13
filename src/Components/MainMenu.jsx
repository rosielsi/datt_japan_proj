import React from "react";
import {useNavigate} from 'react-router-dom'
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';


/**
 *****************************************
 * This is where the cards of main menu  *
 * ***************************************
 */

export default function MainMenu() {
    const navigate = useNavigate()
    return (

        <div className="grid min-h-screen grid-cols-1 mx-auto gap-2h-14 bg-gradient-to-r from-gray-800 to-white place-items-center">
            <div className="flex space-x-4 ...  content-center ... relative">           
                    {/** Response Record Registration */}
                <div className="flex justify-center place-items-center drop-shadow-2xl ... cursor-pointer" onClick={null}>
                    <div class="block rounded-lg shadow-lg bg-gray-200 hover:bg-gray-300 max-w-sm text-center bgimg" >
                        <div class="p-6">
                            <h5 className="mb-2 text-xl font-bold text-gray-900">Response Record Registraion</h5>
                            <img className="my-3 ml-8" src={card3} alt="" />
                        </div>
                    </div>
                </div>
                
                    {/** Repair Request Registration */}
                <div className="flex justify-center place-items-center drop-shadow-2xl ... cursor-pointer" onClick={() => navigate('/repair')}>
                    <div class="block rounded-lg shadow-lg bg-gray-200 hover:bg-gray-300 max-w-sm text-center bgimg" >
                        <div class="p-6">
                            <h5 className="mb-2 text-xl font-bold text-gray-900">Repair Request Registration</h5>
                            <img className="my-3 ml-8" src={card4} alt="" />
                        </div>
                    </div>
                </div>

                    {/** Response Record Search */}
                <div className="flex justify-center place-items-center drop-shadow-2xl ... cursor-pointer " onClick={null}>
                    <div class="block rounded-lg shadow-lg bg-gray-200 hover:bg-gray-300 max-w-sm text-center bgimg" >
                        <div class="p-6">
                            <h5 className="mb-2 text-xl font-bold text-gray-900">Response Record Search</h5>
                            <img className="my-3 ml-8" src={card1} alt="" />
                        </div>
                    </div>
                </div>

                    {/** Repair Request Search */}
                <div className="flex justify-center place-items-center drop-shadow-4xl ... cursor-pointer"onClick={() => navigate('/repair-request-search')}>
                    <div class="block rounded-lg shadow-lg bg-gray-200 hover:bg-gray-300 max-w-sm text-center bgimg" >
                        <div class="p-6">
                            <h5 className="mb-2 text-xl font-bold text-gray-900">Repair Request Search</h5>
                            <img className="my-3 ml-8" src={card2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}