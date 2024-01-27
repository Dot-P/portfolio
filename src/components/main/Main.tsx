import React from 'react';
import './Main.css'
import SelfIntroduction from '../selfintro/SelfIntro'
import Certification from '../certification/Certification'
import Skillset from '../skillset/Skillset'
import Output from '../output/Output'

const Main: React.FC = () => {
    
  return (
    <div className="body-container">
        <SelfIntroduction />
        <Certification />
        {/* <Skillset /> */}
        <Output />
    </div>
  );
};

export default Main;
