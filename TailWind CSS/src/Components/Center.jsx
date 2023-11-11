
import React  from 'react';
import { FaMoon,FaSun } from 'react-icons/fa';
import useDarkMode from '../Hooks/useDarkMode';

const Center = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <div className='center-container'>
      {darkTheme ? (
        <FaSun onClick={handleMode} size='64' className='dark-mode-icon' />
      ) : (
        <FaMoon onClick={handleMode} size='64' className='dark-mode-icon' />
      )}
    </div>
  );
}



export default Center;