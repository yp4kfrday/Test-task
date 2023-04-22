import React, { useEffect, useState } from 'react';

import "./header.css"
import '../../styles/colors.css';
import '../../styles/styles.css';

import MapPinLineIcon from 'remixicon-react/MapPinLineIcon';
import TelegramFillIcon from 'remixicon-react/TelegramFillIcon';
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon';

import Contact from '../Contact';



function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [modalIsOpen]); // добавляем зависимость от modalIsOpen
  

  const handleGoToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleGoToAbout = () => {
    window.scrollBy(0, 1000);
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="icons">
        <MapPinLineIcon color="#553B91" size={28} />
        <TelegramFillIcon color="#553B91" size={28} />
        <InstagramLineIcon color="#553B91" size={28} />
      </div>
      <div className="logo">
        <h1>Сносим всё!</h1>
      </div>
      <ul className="navlist">
        <li><button className="link" onClick={handleGoToTop}>Главная</button></li>
        <li><button className="link" onClick={handleGoToAbout}>О нас</button></li>
        <li><a href="/">Отзывы</a></li>
        <li>
            <button className="link" onClick={handleOpenModal}>Связаться с нами</button>
            <Contact isOpen={modalIsOpen} onClose={handleCloseModal} />
        </li>
      </ul>
    </header>
  );
}

export default Header