import React from 'react';

import './NavigationBar.css';
import '../styles/NavigationBar_Style.css';

// Adjust paths based on your assets location
import problemsIcon from '../assests/problems.png';
import solutionsIcon from '../assests/solutions.png';
import langIcon from '../assests/lang.png';
import signInIcon from '../assests/signin.png';
import signUpIcon from '../assests/signup.png';

export default function NavigationBar({ handleNavigation }) {
  return (
    <div className="navbar">
      <div className="left-side">
        <button id="companyLogo" className="shine" onClick={() => handleNavigation('#')}>
          <span>GROOTS</span>
        </button>
        <button id="problems" onClick={() => handleNavigation('#problems')}>
          <img src={problemsIcon} alt="Problems Icon" className="button-icon" />
          <span>Problems</span>
        </button>
        <button id="solutions" onClick={() => handleNavigation('#solutions')}>
          <img src={solutionsIcon} alt="Solutions Icon" className="button-icon" />
          <span>Solutions</span>
        </button>
      </div>
      <div className="right-side">
        <button id="languageChange" onClick={() => handleNavigation('#language')}>
          <img src={langIcon} alt="Language Icon" className="button-icon" />
        </button>
        <button id="signIn" onClick={() => handleNavigation('#signin')}>
          <img src={signInIcon} alt="Sign In Icon" className="button-icon" />
        </button>
        <button id="signUp" onClick={() => handleNavigation('#signup')}>
          <img src={signUpIcon} alt="Sign Up Icon" className="button-icon" />
        </button>
      </div>
    </div>
  );
}
