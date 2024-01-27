import React from 'react';
import './Footer.css'

const Footer: React.FC = () => {
    
  return (
    <div className="footer-container">
      <div className="border-line"></div>
      <div className="footer-container-up">
        <div className="footer-container-up-left">
          <span className="logo">Naoki Araake</span>
        </div>
        <div className="footer-container-up-right">
          <a href="#">
            <span className="footer-btn">トップ</span>
          </a>
          <a href="https://github.com/Dot-P">
            <span className="footer-btn">Github</span>
          </a>
        </div>
      </div>
      <div className="footer-container-down">
          <div className="footer-container-down-left">
            <span>© Naoki Araake</span>
          </div>
          <div className="footer-container-down-right">
            <span>Last Update : 2024/1/27</span>
          </div>
        </div>
    </div>
  );
};

export default Footer;
