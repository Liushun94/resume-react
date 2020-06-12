import React from 'react';
import Router from './router'
import './index.css';

function App() {
  return (
    <div className="app">
      <div id="background"></div>
      <div className="container">
        <Router />
      </div>
    </div>
  );
}

export default App;
