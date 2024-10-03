import styles from './ToggleThemeButton';
import React from 'react';

function ToggleThemeButton({ toggleTheme, isDarkMode }) {
  return (
    <div>
      {/* Botón para alternar entre los modos */}
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Modo Claro' : 'Modo Nocturno'}
      </button>
    </div>
  );
}

export default ToggleThemeButton;