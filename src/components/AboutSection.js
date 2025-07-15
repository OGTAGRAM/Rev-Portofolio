// C:\xampp\htdocs\portofolio\src\components\AboutSection.js

import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mb-16 text-center animate-fade-in">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
                    <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
                        I'm a passionate developer with experience in modern web technologies. I love creating efficient, scalable, and user-friendly applications.
                    </p>
                </div>
                
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div className="animate-slide-up">
                        <div className="flex items-center justify-center w-64 h-64 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 animate-float">
                            <span className="text-6xl">👨‍💻</span>
                        </div>
                    </div>
                    <div className="animate-slide-up">
                        <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">My Journey</h3>
                        <p className="mb-6 text-gray-600 dark:text-gray-300">
                            With several years of experience in web development, I've worked on various projects ranging from small business websites to large-scale applications. I'm always eager to learn new technologies and improve my skills.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-4 h-4 mr-3 bg-blue-600 rounded-full"></div>
                                <span className="text-gray-700 dark:text-gray-300">Problem-solving mindset</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 mr-3 bg-blue-600 rounded-full"></div>
                                <span className="text-gray-700 dark:text-gray-300">Continuous learning</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 mr-3 bg-blue-600 rounded-full"></div>
                                <span className="text-gray-700 dark:text-gray-300">Team collaboration</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;