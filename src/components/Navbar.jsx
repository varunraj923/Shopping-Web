import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); 
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold tracking-wide">🛒 FakeStore</span>
          </div>

         
          {isLoggedIn && (
            <div className="hidden md:flex space-x-6">
              <button className="hover:text-gray-200 transition" onClick={() => navigate("/home")}>Home</button>
              <button className="hover:text-gray-200 transition" onClick={() => navigate("/cart")}>Cart</button>
              <button className="hover:text-gray-200 transition" onClick={handleLogout}>Logout</button>
            </div>
          )}

      
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

   
      {menuOpen && isLoggedIn && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <button onClick={() => navigate("/home")} className="block w-full text-left hover:text-gray-200">
            Home
          </button>
          <button onClick={() => navigate("/cart")} className="block w-full text-left hover:text-gray-200">
            Cart
          </button>
          <button onClick={handleLogout} className="block w-full text-left hover:text-gray-200">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;





