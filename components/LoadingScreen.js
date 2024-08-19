import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="ui-abstergo">
      <div className="abstergo-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="ui-text">
        Synchronization
        <div className="ui-dot"></div>
        <div className="ui-dot"></div>
        <div className="ui-dot"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
