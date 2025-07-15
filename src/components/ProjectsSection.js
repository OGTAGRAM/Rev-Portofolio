// C:\xampp\htdocs\portofolio\src\components\ProjectsSection.js

import React from 'react';

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-800">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mb-16 text-center animate-fade-in">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">Some of my recent work</p>
                </div>
                
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((project, index) => (
                        <div 
                            key={project}
                            className="overflow-hidden transition-all duration-300 transform shadow-lg bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-xl hover:scale-105 animate-slide-up"
                            style={{animationDelay: `${index * 0.2}s`}}
                        >
                            <div className="flex items-center justify-center h-48 bg-gradient-to-br from-blue-400 to-purple-500">
                                <span className="text-6xl">{['🚀', '💼', '📱'][index]}</span>
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Project {project}</h3>
                                <p className="mb-4 text-gray-600 dark:text-gray-300">
                                    {['A modern web application built with React and Node.js', 'E-commerce platform with advanced features', 'Mobile-first responsive web application'][index]}
                                </p>
                                <div className="flex space-x-2">
                                    <span className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-200">React</span>
                                    <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-200">Node.js</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;