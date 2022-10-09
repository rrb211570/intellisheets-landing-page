import React from 'react';
import ReactDOM from 'react-dom/client';
import { choreograph } from './animationScripts/scrollEffects.js';
import './index.css';
import LandingPage from './pages/LandingPage/LandingPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);

window.addEventListener('scroll', choreograph);