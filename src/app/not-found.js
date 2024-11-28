// app/not-found.js

import { useState, useEffect } from 'react';

export default function Custom404() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply initial theme based on user preference or system setting (if available)
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
      document.body.classList.toggle('dark-mode', storedTheme === 'dark');
    } else {
        //Default to dark mode
        setIsDarkMode(true);
        document.body.classList.add('dark-mode');
    }
  }, []);


  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: isDarkMode ? '#121212' : '#f0f0f0',
        color: isDarkMode ? '#f0f0f0' : '#121212',
        fontFamily: 'sans-serif'
      }}>
      <h1 style={{ color: 'crimson' }}>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={toggleTheme} style={{
            backgroundColor: isDarkMode ? '#333' : '#eee',
            color: isDarkMode ? '#eee' : '#333',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '20px'
          }}>
        Toggle Theme
      </button>
    </div>
  );
}