import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [userName, setUserName] = useState("");
    const[password, setPassword] = useState("");
    console.log(password);
  return (

    <div className='mx-96 p-10 my-28 text-center shadow-xl'>
    <h1 className='text-3xl font-bold'>Login Now</h1>
    <div className='my-10'>
        <div className='flex'>
      <label className='text-lg' htmlFor="username">Enter your Username :</label>
      <input value={userName} onChange={(e)=> setUserName(e.target.value)} className='border-2 border-solid border-gray-700 rounded-lg mx-5' type="text" id="username" name="username" />
      </div>
  <div className='flex my-5 w-'>
      <label className='text-lg' htmlFor="password">Enter your Password :</label>
      <input value={password} onChange={(e)=> setPassword(e.target.value)} className='border-2 border-solid border-gray-700 rounded-lg mx-6' type="password" id="password" name="password" />
      </div>
  
      <button className='bg-blue-700 px-5 py-2 text-md text-white mt-5'>Login</button>
    </div>
  </div>
  
  )
}

export default Login
