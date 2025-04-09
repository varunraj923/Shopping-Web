import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const LoginSubmit = async () => {
    try {
      const res = await axios.post('https://fakestoreapi.com/auth/login',{
        username,
        password
      });

      console.log('Login successful:', res.data);
      setToken(res.data.token); // Save token if needed

      // Optionally store in localStorage
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
      alert('Login failed: ' + (err.response?.data || err.message));
    }
  };

  return (
    <div className='mx-96 p-10 my-28 text-center shadow-xl'>
      <h1 className='text-3xl font-bold mb-8'>Login Now</h1>

      <div className='flex items-center justify-between mb-5'>
        <label className='text-lg' htmlFor='username'>Username:</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='border-2 border-gray-700 rounded-lg p-2 w-2/3'
          type='text'
          id='username'
          name='username'
          placeholder='e.g. mor_2314'
        />
      </div>

      <div className='flex items-center justify-between mb-5'>
        <label className='text-lg' htmlFor='password'>Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='border-2 border-gray-700 rounded-lg p-2 w-2/3'
          type='password'
          id='password'
          name='password'
          placeholder='e.g. 83r5^_'
        />
      </div>

      <button
        onClick={LoginSubmit}
        className='bg-blue-700 hover:bg-blue-800 transition-all px-6 py-2 text-white rounded-lg mt-5'
      >
        Login
      </button>

      {token && (
        <p className='mt-5 text-green-600 font-semibold'>
          ✅ Token: {token}
        </p>
      )}
    </div>
  );
};

export default Login;


