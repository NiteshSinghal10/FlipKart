import { NavLink } from "react-router-dom"
import { useState } from 'react';
import { authenticate } from '../methods';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  
  const handleUsername = async (e: any) => {
    setLoginData({ username: e.target.value, password: loginData.password });
  }

  const handlePassword = async (e: any) => {
    setLoginData({ username: loginData.username, password: e.target.value });
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[25%] border shadow-md text-center overflow-hidden rounded-lg ">
        <div className="bg-[#2874f0] flex items-center justify-start py-4 px-10">
          <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" className="w-[15%]" />
          <h1 className="ml-8 text-2xl font-semibold">Welcome to Flipkart</h1>
        </div>

        <div className="flex flex-col py-8 px-12 gap-6">
          <input type="text" placeholder="Enter Username" onChange={handleUsername} className="w-full  px-4 py-2 border border-gray-500 rounded-md focus:outline-none"/>
          <input type="password" placeholder="Enter Password" onChange={handlePassword} className="w-full  px-4 py-2 border border-gray-500 rounded-md focus:outline-none"/>
        </div>

        <div className="px-[48px] w-full mb-4">
          <button className="w-full py-2 rounded-md bg-[#2874f0] text-white font-semibold text-xl" onClick={async() => { console.log(await authenticate(loginData.username, loginData.password))}}>Log In</button>
        </div>

        <div className="mb-2">
          <NavLink to='/signup' className="text-[#2874f0] text-[14px]">Don't have an Account? <p >sign up</p></NavLink>
        </div>

      </div>
    </div>
  )
}

export { Login }