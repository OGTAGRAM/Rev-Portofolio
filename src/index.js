// C:\xampp\htdocs\portofolio\src\index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18+
import App from './App'; // Import the main App component
// import './index.css'; // Opsional: jika Anda memiliki file CSS global

// Membuat root React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Merender komponen App ke dalam root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);