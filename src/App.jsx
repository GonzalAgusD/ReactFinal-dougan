import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';  
import { ItemsListContainer } from './components/ItemsListContainer/ItemsListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'; 
import { Cart } from './components/Cart/Cart'; 
import { NotFound } from './components/NotFound/NotFound';
import './shared.css';
import ToggleThemeButton from './components/ToggleThemeButton/ToggleThemeButton';
import { CartProvider } from './context/CartContext'; 

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar /> 
          <ToggleThemeButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Routes>
            <Route path="/" element={<ItemsListContainer greeting="Welcome the Skin Maker" />} />
            <Route path="/category/:categoryId" element={<ItemsListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}