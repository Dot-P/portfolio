import React from 'react';
import twitterLogo from '../../assets/images/twitter-logo.png'
import githubLogo from '../../assets/images/github-logo.png'
import title from '../../assets/images/title.png'
import './Header.css'

const Header: React.FC = () => {
    
    const reloadPages = () => {
        window.location.reload();
    }

  return (
    <header>
      <div className="header-container">
        <div className="header-container-left">
          <span onClick={reloadPages} className="logo">Naoki Araake</span>
          <a href="#target-self" className="skip-btn">自己紹介</a>
          <a href="#target-certi" className="skip-btn">経歴</a>
          <a href="#target-skill" className="skip-btn">スキル</a>
          <a href="#target-output" className="skip-btn">制作物</a>
        </div>
        <div className="header-container-right">
          <a href="https://twitter.com/DotP_engineer">
              <img src={twitterLogo} />
          </a>
          <a href="https://github.com/Dot-P">
              <img src={githubLogo} />
          </a>
        </div>
      </div>
      <div className="title-image">
        <h1>Welcome to my portfolio!</h1>
        <img src={title} />
      </div>
    </header>
  );
};

export default Header;
