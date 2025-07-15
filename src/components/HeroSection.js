// C:\xampp\htdocs\portofolio\src\components\HeroSection.js

import React from 'react';

const HeroSection = () => {
    const scrollToNext = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bg-blue-300 rounded-full -top-40 -right-40 w-80 h-80 dark:bg-blue-600 mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
                <div className="absolute bg-purple-300 rounded-full -bottom-40 -left-40 w-80 h-80 dark:bg-purple-600 mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute bg-pink-300 rounded-full top-40 left-40 w-80 h-80 dark:bg-pink-600 mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
            </div>

            <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
                <div className="animate-fade-in">
                    <div className="mb-8">
                        <span className="inline-block text-6xl animate-float">👋</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-7xl dark:text-white">
                        Hello, I'm <span className="gradient-text">Your Name</span>
                    </h1>
                    <p className="max-w-3xl mx-auto mb-8 text-xl text-gray-600 md:text-2xl dark:text-gray-300">
                        Full Stack Developer passionate about creating amazing web experiences with modern technologies
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' })} className="px-8 py-4 font-semibold text-white transition-all duration-300 transform bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 animate-pulse-glow">
                            View My Work
                        </button>
                        <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' })} className="px-8 py-4 font-semibold text-blue-600 transition-all duration-300 transform border-2 border-blue-600 rounded-full dark:text-blue-400 hover:bg-blue-600 hover:text-white hover:scale-105">
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator" onClick={scrollToNext}>
                <div className="flex flex-col items-center text-gray-600 transition-colors dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    <span className="mb-2 text-sm animate-pulse">Scroll Down</span>
                    <svg className="w-6 h-6 animate-bounce-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;