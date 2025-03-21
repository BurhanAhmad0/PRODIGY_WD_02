import React from 'react';
import { useState } from 'react';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false); // Hook to toggle menu

    return (
        <nav className="sticky top-0 w-full h-20 px-6 md:px-20 flex justify-between items-center bg-transparent">
            <div>
                <a href="/">
                    <h1 className="text-2xl font-bold text-[#33cccc]">
                        0<sup>o</sup><sub>Clock</sub>
                    </h1>
                </a>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden">
                <button
                    className="text-[#33cccc] focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)} // Hook to toggle menu
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>

            {/* Navigation Links */}
            <div className={`nav-links ${menuOpen ? 'block' : 'hidden'} md:flex md:items-center`}>
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 text-[#33cccc]">
                    <li><a href="#" className="nav-link">Home</a></li>
                    <li><a href="#" className="nav-link">About</a></li>
                    <li><a href="#" className="nav-link">StopWatch</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
