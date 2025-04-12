import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [signup, setSignup] = useState(false);
  const navigate = useNavigate();

  const HandleSignup = () => {
    setSignup(!signup);
  };

  const SignupSubmit = async () => {
    try {
      await axios.post('https://fakestoreapi.com/users', {
        email,
        username,
        password,
      });
      alert('Signup successful. Please log in.');
      setSignup(false);
    } catch (err) {
      console.error('Signup failed:', err.response?.data || err.message);
      alert('Signup failed: ' + (err.response?.data || err.message));
    }
  };

  const LoginSubmit = async () => {
    try {
      const res = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password,
      });

      console.log(res);

      const receivedToken = res.data.token;

      if (receivedToken) {
        setToken(receivedToken);
        localStorage.setItem('token', receivedToken);
        document.cookie = `token=${receivedToken}; path=/; max-age=86400`;

        const savedToken = localStorage.getItem("token");
        if (savedToken) {
          navigate('/home');
        } else {
          alert("Login failed: token not stored correctly.");
        }
      } else {
        alert("Login failed: Invalid token received.");
      }
    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
      alert('Login failed: ' + (err.response?.data || err.message));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          {signup ? 'Sign Up' : 'Login'}
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            placeholder="e.g. mor_2314"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {signup && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="e.g. example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="e.g. 83r5^_"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <p
          onClick={HandleSignup}
          className="text-blue-600 text-sm mb-4 cursor-pointer hover:underline text-center"
        >
          {signup ? 'Already registered? Login now' : 'New user? Signup here'}
        </p>

        <button
          onClick={signup ? SignupSubmit : LoginSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
        >
          {signup ? 'Sign Up' : 'Login'}
        </button>

        {token && (
          <p className="mt-4 text-green-600 text-sm text-center break-words">
            ✅ Token: {token}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;








