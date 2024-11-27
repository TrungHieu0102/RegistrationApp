import { useState } from 'react';
import '../assets/css/LanguageSwitcher.css';

export const LanguageSwitcher = () => {
  const [language, setLanguage] = useState<'VN' | 'EN'>('EN');
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleLanguage = (lang: 'VN' | 'EN') => {
    setLanguage(lang);
    setIsOpen(false); 
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
   <div className="container">
     <div className={`language-switcher ${isOpen ? 'open' : ''}`}>
      <button className="lang-button" onClick={toggleDropdown}>
        {language} <span className="dropdown-icon">▼</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <button className="dropdown-item" onClick={() => toggleLanguage('VN')}>
            VN
          </button>
          <button className="dropdown-item" onClick={() => toggleLanguage('EN')}>
            EN
          </button>
        </div>
      )}
    </div>
   </div>
  );
};

