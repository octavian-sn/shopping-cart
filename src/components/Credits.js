import React from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import '../styles/credits.css';

function Credits() {
  return (
    <div className="credits">
      <p>Designed & Crafted</p>
      <p>by</p>
      <p>Octavian Şulic</p>
      <div>
        <a href="https://github.com/octavian-sn/shopping-cart">
          <img src={github} alt="git hub icon"></img>
        </a>
        <a href="https://www.linkedin.com/in/octavian-%C8%99ulic-944090118/">
          <img src={linkedin} alt="linkedin hub icon"></img>
        </a>
      </div>
    </div>
  );
}

export default Credits;
