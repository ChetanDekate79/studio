import React from 'react';
import navbar from './navbar'; // Import the navbar array
import '../style/menubar.css';

const MenuBar = () => {
  return (
    <div className="top-menu-bar">
      <div className='top-inner'>
      <div className="left-content">
        {/* Add text and images on the left side */}
        
        <div className="left-images">
          <img src={`${process.env.PUBLIC_URL}/images/truck.png`} alt="Left Image 1" />
        </div>
        <div className="left-text">
          <p>  Free Delivery   |   Return Policy</p>
        </div>
      </div>
      <ul className="menu">
        {/* Menu items go here */}
      </ul>
      <div className="right-content">
        {/* Add images on the right side */}
        <div className="right-text">
          <p> Login  </p>
        </div>
        <p>    Follow US</p>
        <div className="right-images">
        <img width="15" height="15" src="https://img.icons8.com/material-rounded/24/626262/facebook-f--v1.png" alt="facebook-f--v1"/>
        <img width="15" height="15" color="#626262" src="https://img.icons8.com/ios-glyphs/30/626262/linkedin-2--v1.png" alt="linkedin-2--v1"/>       
        <img width="15" height="15" src="https://img.icons8.com/android/24/626262/twitter.png" alt="twitter"/>

        <img width="15" height="15" src="https://img.icons8.com/sf-regular/48/626262/instagram-new.png" alt="instagram-new"/>
           </div>
      </div>
      </div>
    </div>
  );
};

export default MenuBar;
