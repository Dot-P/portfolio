import React from 'react';
import './SelfIntro.css'
import Me from '../../assets/images/Me.png'
import SNS from '../../assets/images/user.png'

const SelfIntro: React.FC = () => {
  return (
    <div className="selfIntro-container">
      <div className="selfIntro-container-left">
        <div className="pics">
        <img src={SNS} className="img-sns"/>
          <img src={Me} className="img-me" />
        </div>
        <div className="intro-brif">
          <div className="intro-brif-left">
            <p className="intro-brif-ans">TOKYO</p>
            <p className="intro-brif-que">活動拠点</p>
          </div>
          <div>
          <p className="vertical-line"></p>
          </div>
          <div className="intro-brif-right">
            <p className="intro-brif-ans">STUDENT</p>
            <p className="intro-brif-que">職業</p>
          </div>
        </div>
      </div>
      <div className="selfIntro-container-right">
        <h2 id="target-self">荒明 尚輝</h2>
        <h3>東京理科大学 工学部 情報工学科</h3>
        <div className="selfIntro-explanation">
          <p>こんにちは。東京理科大学、学部2年の荒明です。</p>
          <p>つよつよエンジニアになることを目指して、日々プログラミングをしています。フロントエンドからバックエンド、機械学習、競技プログラミングなど幅広い分野に関してコーディングをしています。</p>
          <p>何かご不明な点がありましたら、以下のメールアドレスにお問い合わせください。</p>
        </div>
        <h4>mail : metaalice01@gmail.com</h4>
      </div>
    </div>
  );
};

export default SelfIntro;
