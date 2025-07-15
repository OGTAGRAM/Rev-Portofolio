// C:\xampp\htdocs\portofolio\src\components\SkillsSection.js

import React, { useState, useEffect } from 'react';

const SkillsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    
    const skills = [
        { name: 'React', icon: '⚛️', color: 'text-blue-500', description: 'Modern UI Library' },
        { name: 'Laravel', icon: '🔧', color: 'text-red-500', description: 'PHP Framework' },
        { name: 'Python', icon: '🐍', color: 'text-yellow-500', description: 'Versatile Programming' },
        { name: 'PHP', icon: '🐘', color: 'text-purple-500', description: 'Server-side Scripting' },
        { name: 'Google Cloud', icon: '☁️', color: 'text-blue-400', description: 'Cloud Platform' },
        { name: 'JavaScript', icon: '📜', color: 'text-yellow-400', description: 'Dynamic Programming' },
        { name: 'Tailwind', icon: '🎨', color: 'text-cyan-500', description: 'Utility-first CSS' },
        { name: 'CSS', icon: '🎭', color: 'text-blue-600', description: 'Styling & Design' },
        { name: 'HTML', icon: '📄', color: 'text-orange-500', description: 'Web Structure' }
    ];

    const skillsPerSlide = 3;
    const totalSlides = Math.ceil(skills.length / skillsPerSlide);

    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 4000);

        return () => clearInterval(interval);
    }, [totalSlides, isAutoPlaying]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    const getCurrentSkills = () => {
        const start = currentSlide * skillsPerSlide;
        return skills.slice(start, start + skillsPerSlide);
    };

    return (
        <section id="skills" className="py-20 overflow-hidden bg-white dark:bg-gray-800">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mb-16 text-center animate-fade-in">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Skills & Technologies</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">Technologies I work with</p>
                </div>
                
                {/* Slider Container */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Navigation Arrows */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-0 z-10 p-3 transition-all duration-300 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 group"
                    >
                        <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <button 
                        onClick={nextSlide}
                        className="absolute right-0 z-10 p-3 transition-all duration-300 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 group"
                    >
                        <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Skills Cards */}
                    <div className="mx-12">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {getCurrentSkills().map((skill, index) => (
                                <div 
                                    key={`${currentSlide}-${skill.name}`}
                                    className="p-8 text-center transition-all duration-500 transform border border-gray-200 shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl hover:shadow-2xl group hover:scale-105 animate-slide-up dark:border-gray-700"
                                    style={{animationDelay: `${index * 0.2}s`}}
                                >
                                    <div className={`text-6xl mb-6 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                                        {skill.icon}
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex justify-center mt-12 space-x-3">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide 
                                        ? 'bg-blue-600 w-8' 
                                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                }`}
                            />
                        ))}
                    </div>


                </div>
            </div>
        </section>
    );
};

export default SkillsSection;