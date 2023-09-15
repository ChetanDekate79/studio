import React from "react";
import '../style/form.css';

const Form = () => {
  return (
    <div>
    <div className="Form-main">
      <div className="Form-content">
        <div className="f-title">
          <div className="f-top">
          <div>
            <h2>Newslletter</h2>
            <div className='f-star'>
            <p>
Get news about articles and updates in your inbox.</p>
          </div> </div>
            <div className="f-arrow">
            <div>
          <p>NAME</p>
          <hr className="form-line" />
          <p>EMAIL</p>
          <hr className="form-line" />
          <p>MESSAGE</p>
          <hr className="form-line" />
          </div></div>
          </div>
         
          <div className="f-middle">
          
          {/* Form details section */}
    
          </div>
        </div>
      </div>
      <div className="f-circle">
        <h2>SEND </h2></div>

      <div className="get">
        <h2>GET </h2></div>
        <div className="in">
        <h2 >IN </h2></div>

        <div className="touch">
        <h2 >TOUCH</h2></div>
    </div>
    <div className="bar">
    <p >Copyright 2022 All Right Reserved By SG</p></div>
    </div>
  );
};

export default Form;
