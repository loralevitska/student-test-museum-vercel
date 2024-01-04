import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { Menu } from './pages/Menu/Menu';
import { HomePage } from './pages/HomePage/HomePage';

export default function App() {
  const [lang, setLang] = React.useState('ua');

  const handleLangChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setLang(e.target.value);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage lang={lang} handleLangChange={handleLangChange} />} />
        <Route path="/menu" element={<Menu lang={lang} handleLangChange={handleLangChange} />} />
      </Routes>
    </BrowserRouter>
  );
}
