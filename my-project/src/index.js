import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import BasicForm from './Form/BasicForm';
// import SignupForm from './Form/SignupForm';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import StudentList from './exerciseJsx/StudentList';

// const element = <h1>Xin chao</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);


// const root = ReactDOM.createRoot(document.getElementById("root"));

// const tick = () => {
//   root.render(
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// };

// setInterval(tick, 1000);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <SignupForm/>
  // <StudentList/>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
