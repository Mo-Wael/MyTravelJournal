import React from 'react';
import{ useState } from 'react';
import reactLogo from './assets/react.svg'

export default function navBar(){
    const[isDarkMode, setIsDarkMode] = useState(false);

    const DarkMode = () => {
        document.body.classList.toggle('dark-mode')
        setIsDarkMode(!isDarkMode)
    }

    return ( 
        <nav>
            <img src={reactLogo} alt="react logo" className='reactLogo' />
            <h1 className="logo">🌍My Travel Journal</h1>
            <button onClick={DarkMode} className='dark-mode'>
                {isDarkMode ? 'Light-mode' : 'Dark-mode'}
            </button>
            {/* <ul className="options">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul> */}
        </nav>
    );
}
