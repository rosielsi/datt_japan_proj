import { React, useState } from "react";
import Bg1 from '../assets/bg1.jpg';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import '../index.css';

export default function Loginpage() {


  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  
  
  const login = () => {
    Axios.post("http://localhost:6969/", {
      username: username,
      pass: pass,

    }).then((response) => {
      if(response.data.message){
        alert(response.data.message)
        
      }else{
        alert(response.data.message)
      }
    });
    
  };
  
  

  return (
    <div className="grid w-full h-screen grid-cols1 sm:grid-cols-2">
      <div>
        <img className="object-cover w-full h-full" src={Bg1} alt="" />
      </div>

      <div className="flex flex-col justify-center bg-gray-400">

        <h1 className="max-w-[1000px] py-2 mb-4 text-3xl font-extrabold text-gray-800 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-teal-800">ダット</span> ジャパン</h1>
        <form className="bg-gray-800 max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg mb-6">

          <div className="flex flex-col py-2">
            <label className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-500" >ユーザー名</label>
            <input id="UserVal" className="text-slate-50 block py-2.5 px-0 w-full text-l  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="ユーザー名..."
              onChange={(e) => { setUsername(e.target.value) }}></input>
          </div>

          <div className="flex flex-col py-2">
            <label className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-500">パスワード</label>
            <input id="PassVal" className="block py-2.5 px-0 w-full text-l text-slate-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " type="password" placeholder="パスワード..."
              onChange={(e) => { setPassword(e.target.value) }}></input>
          </div>

          <div>
            <button className=" my-5 text-white bg-teal-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={login}>ログインする</button>
          </div>
          <div>
            <button className=" my-5 text-white bg-teal-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => navigate('/register')}>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}



