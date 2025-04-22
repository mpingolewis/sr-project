// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { TrainingProvider } from './context/TrainingContext'; // ✅ CORRECT path

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TrainingProvider>
        <App />
      </TrainingProvider>
    </BrowserRouter>
  </React.StrictMode>
);