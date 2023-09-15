import React, { useState, useRef, useEffect } from 'react';
import '../style/topmenubar.css';
import HamburgerIcon from './hamicon';
import navbar from './navbar';

const TopMenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className={`home-main-b ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="overlay" onClick={toggleMenu}></div>
        <div className="title-and-menu" ref={menuRef}>
          <div className="title">
            <h2>ShopKart</h2>
            <h3>WISHLIST (0) BAG (0)</h3>
            <div className='top-menu-bar-a'>
              <div className='hamburger-icon' onClick={toggleMenu}>
                <div className={`t-bar ${isMenuOpen ? 'active' : ''}`}></div>
                <div className={`t-bar ${isMenuOpen ? 'active' : ''}`}></div>
                <div className={`t-bar ${isMenuOpen ? 'active' : ''}`}></div>
                {isMenuOpen ? (
                  <i className="fas fa-times"></i>
                ) : (
                  <i className="fas fa-bars"></i>
                )}
              </div>
            </div>
          </div>
          <div className="top-menu-bar-b">
            <ul className="menu-u">
              {navbar.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.name}</a>
                  {item.child && (
                    <ul className="submenu">
                      {item.child.map((subItem) => (
                        <li key={subItem.id}>
                          <a href={`#${subItem.id}`}>{subItem.name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {isMenuOpen && (
            <ul className="menu-list">
              <li><a href='#home' className="menu-link">Home</a></li>
              <li><a href='#about' className="menu-link">About</a></li>
              <li><a href='#services' className="menu-link">Services</a></li>
              <li><a href='#contact' className="menu-link">Contact</a></li>
            </ul>
          )}
        </div>
      </div>
          
          <div className='fresh'>
            <h2 >Fresh</h2>
          </div>
          <div className='twenty'>
            <h2 >2022</h2>
          </div>
          <div className='look'>
            <h2 >Look</h2>
          </div>
          <div className='price'>
            <h2 >OREGON JACKET $124</h2>
          </div>
          <div className='line'></div>
          <div className='more'>
            <h3>See more </h3>
          </div>
          <div className='star'>
            <img src={`${process.env.PUBLIC_URL}/images/Star4.png`} alt="Left Image 1" />
          </div>
          <div className='person'>
            <img src={`${process.env.PUBLIC_URL}/images/jessica-radanavong-IchPBHFD0pw-unsplash.png`} alt="Left Image 1" />
          </div>
          <div className='orange'>
            <img src={`${process.env.PUBLIC_URL}/images/Rectangle29.png`} alt="Left Image 1" />
          </div>
          <div className='circle'>
            <img src={`${process.env.PUBLIC_URL}/images/Star3.png`} alt="Left Image 1" />
          </div>
        </div>
  
  );
};

export default TopMenuBar;
