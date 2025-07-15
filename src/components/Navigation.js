// C:\xampp\htdocs\portofolio\src\components\Navigation.js

import React, { useState, useEffect } from 'react';

const Navigation = ({ darkMode, toggleDarkMode }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const smoothScrollTo = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            const offsetTop = element.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
                : 'bg-transparent'
        }`}>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold cursor-pointer gradient-text" onClick={() => smoothScrollTo('home')}>Portfolio</h1>
                    </div>
                    <div className="items-center hidden space-x-8 md:flex">
                        <button onClick={() => smoothScrollTo('home')} className="text-gray-700 transition-colors dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</button>
                        <button onClick={() => smoothScrollTo('about')} className="text-gray-700 transition-colors dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</button>
                        <button onClick={() => smoothScrollTo('skills')} className="text-gray-700 transition-colors dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Skills</button>
                        <button onClick={() => smoothScrollTo('tools')} className="text-gray-700 transition-colors dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Tools</button>
                        <button onClick={() => smoothScrollTo('projects')} className="text-gray-700 transition-colors dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Projects</button>
                        <button onClick={() => smoothScrollTo('contact')} className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700">Contact</button>
                        <button 
                            onClick={toggleDarkMode}
                            className="p-2 text-gray-600 transition-colors bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            {darkMode ? (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation; // Ekspor komponen Navigation