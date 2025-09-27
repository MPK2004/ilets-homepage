import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Home', 'Courses', 'Pricing', 'About Us'];

  return (
    <nav className="bg-black/20 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wider">IELTS<span className="text-blue-400">Prep</span></h1>
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <a key={link} href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              {link}
            </a>
          ))}
          <button className="bg-blue-600 text-white font-bold px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-500/20">
            Sign Up
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-lg px-6 pt-2 pb-4 flex flex-col space-y-3">
          {links.map((link) => (
            <a key={link} href="#" className="text-gray-300 hover:text-white py-2">
              {link}
            </a>
          ))}
           <button className="bg-blue-600 text-white mt-2 px-4 py-2 rounded-md hover:bg-blue-700 w-full text-left font-bold">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;