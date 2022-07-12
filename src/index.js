import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Navbar from './components/Navbar'
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);


