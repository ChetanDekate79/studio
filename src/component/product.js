import React from "react";
import '../style/product.css';

const Product = () => {
  return (
    <div className="product-main">
      <div className="product-content">
        <div className="p-title">
          <div className="p-top">
            <h2>New Products</h2>
            <div className="p-arrow">
              <img width="50" height="50" src="https://img.icons8.com/ios/50/long-arrow-left.png" alt="long-arrow-left" />
              <img width="50" height="50" src="https://img.icons8.com/ios/50/long-arrow-right--v1.png" alt="long-arrow-right--v1" />
            </div>
          </div>
          <div className='p-star'>
            <img src={`${process.env.PUBLIC_URL}/images/Group17.png`} alt="Left Image 1" />
          </div>
          <div className="side-head-t">
      <p>Apparel</p>
      <h3>Accessories</h3>
      <p>Best sellers</p>
      <p>50% off</p>
    </div>
          <div className="p-middle">
          <div className="side-head">
          <p>Apparel</p>
          <h3>Accessories</h3>
          <p>Best sellers</p>
          <p>50% off</p>
          </div>
          <div className="product-details-header">
    
  </div>
          {/* Product details section */}
      <div className="product-details">
        {/* Product 1 */}
        <div className="product-item">
          <img src={`${process.env.PUBLIC_URL}/images/philipp-arlt-8EyB_RvaWtY-unsplash.png`} alt="Product 1" />
          <div className="product-info">
            {/* <img src={`${process.env.PUBLIC_URL}/images/icons8-arrow-24.png`} alt="Icon 1" /> */}
            <h4>FLORIDA JACKET</h4>
            <p>Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised</p>
            <span>$100</span>
          </div>
        </div>
        
        {/* Product 2 */}
        <div className="product-item">
          <img src={`${process.env.PUBLIC_URL}/images/zam-nungaray-acw3b7q6Ys0-unsplash.png`} alt="Product 1" />
          <div className="product-info">
            {/* <img src={`${process.env.PUBLIC_URL}/images/icons8-arrow-24.png`} alt="Icon 1" /> */}
            <h4>FLORIDA JACKET</h4>
            <p>Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised</p>
            <span>$100</span>
          </div>
        </div>

        <div className="product-item">
          <img src={`${process.env.PUBLIC_URL}/images/malicki-m-beser-PKMvkg7vnUo-unsplash.png`} alt="Product 1" />
          <div className="product-info">
            {/* <img src={`${process.env.PUBLIC_URL}/images/icons8-arrow-24.png`} alt="Icon 1" /> */}
            <h4>FLORIDA JACKET</h4>
            <p>Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised</p>
            <span>$100</span>
          </div>
        </div>

        <div className="product-item">
          <img src={`${process.env.PUBLIC_URL}/images/philipp-arlt-NmH9A0obon8-unsplash.png`} alt="Product 1" />
          <div className="product-info-l">
            {/* <img src={`${process.env.PUBLIC_URL}/images/icons8-arrow-24.png`} alt="Icon 1" /> */}
            <h4>FLORIDA</h4>
            <p>Suffered alteration in some form, </p>
            <span>$100</span>
          </div>
        </div>
        
        {/* Add more product items here as needed */}
      </div>
      
          </div>
          <div className="p-arrow-t">
              <img width="50" height="50" src="https://img.icons8.com/ios/50/long-arrow-left.png" alt="long-arrow-left" />
              <img width="50" height="50" src="https://img.icons8.com/ios/50/long-arrow-right--v1.png" alt="long-arrow-right--v1" />
            </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Product;
