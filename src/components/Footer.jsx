import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
        
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">🛒 Varun's Store</h3>
            <p className="text-gray-400 mt-1">Your one-stop e-commerce solution</p>
          </div>

     
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="https://github.com/varunraj923" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/varunraj23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          
            <a 
              href="mailto:varunraj1545@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          
          <div className="flex flex-col items-center text-gray-400 text-center md:text-right">
            <span className="flex items-center">
              Created by Varun with <FaHeart className="mx-1 text-red-500" /> 
              <span className="ml-1">© {new Date().getFullYear()}</span>
            </span>
            <a 
              href="mailto:varunraj1545@gmail.com" 
              className="mt-1 text-blue-400 hover:text-blue-300 text-sm transition-colors"
            >
              For freelancing: varunraj1545@gmail.com
            </a>
          </div>
        </div>

       
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-2 md:mb-0">
            All product images and data from <a href="https://fakestoreapi.com" className="hover:text-blue-400">FakeStoreAPI</a>
          </div>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;