import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import for routing
import App from './App'; // Import your App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Target root div from index.html
root.render(
  <BrowserRouter> 
    <App />
  </BrowserRouter>
);