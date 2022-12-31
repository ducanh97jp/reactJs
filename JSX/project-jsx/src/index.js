import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile_Card from './exercise/Profile_Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <h4>Browser's details: {navigator.userAgent}</h4>
  <Profile_Card/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
