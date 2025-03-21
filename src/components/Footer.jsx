import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#33cccc] text-white py-6 mt-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-neutral-800 mb-4 md:mb-0">
                    © 2025 My Stopwatch. All rights reserved.
                </p>
                <p className="text-sm text-neutral-800">
                    Designed by Burhan Ahmad
                </p>
            </div>
        </footer>

    );
};

export default Footer;
