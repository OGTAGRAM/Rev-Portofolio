// C:\xampp\htdocs\portofolio\src\App.js

import React, { useState, useEffect } from 'react';

// Impor semua komponen yang Anda buat
// Pastikan path-nya benar sesuai lokasi file Anda
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ToolsSection from './components/ToolsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    // Efek untuk memuat preferensi tema dari localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    // Fungsi untuk mengubah tema terang/gelap
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className="min-h-screen text-gray-900 transition-colors duration-300 bg-white dark:bg-gray-900 dark:text-white">
            <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ToolsSection />
            <ProjectsSection />
            <ContactSection />
            
            {/* Footer */}
            <footer className="py-8 text-white bg-gray-900 dark:bg-black">
                <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
                    <p>&copy; 2024 Moch.Adib I'zaz Al Hakim - All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App; // Ekspor komponen App agar bisa digunakan di index.js