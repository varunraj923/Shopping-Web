import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const LoginNav = () => {
    navigate("/login");
  };

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold tracking-wide">🛒 FakeStore</span>
          </div>

          <div className="hidden md:flex space-x-6">
            <button className="hover:text-gray-200 transition" onClick={() => navigate("/")}>Home</button>
            <button className="hover:text-gray-200 transition" onClick={() => navigate("/cart")}>Cart</button>
            <button className="hover:text-gray-200 transition" onClick={Logout}>Logout</button>
          </div>

          <div className="hidden md:flex">
            <button
              onClick={LoginNav}
              className="bg-white text-blue-700 px-4 py-1 rounded hover:bg-gray-100"
            >
              Login
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <button onClick={() => navigate("/")} className="block w-full text-left hover:text-gray-200">
            Home
          </button>
          <button onClick={() => navigate("/cart")} className="block w-full text-left hover:text-gray-200">
            Cart
          </button>
          <button onClick={Logout} className="block w-full text-left hover:text-gray-200">
            Logout
          </button>
          <button
            onClick={LoginNav}
            className="w-full bg-white text-blue-700 px-4 py-2 rounded mt-2"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

