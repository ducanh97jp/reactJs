import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from './reportWebVitals';
// import Profile_Card from './exercise/Profile_Card';
import SignInForm from './exercise/SignInForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <h4>Browser's details: {navigator.userAgent}</h4>
  // <Profile_Card/>
  <SignInForm/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
