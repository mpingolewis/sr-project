import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ THIS IS CRITICAL
import App from './App';
import { TrainingProvider } from './context/TrainingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Provides routing context to all children */}
      <TrainingProvider>
        <App /> {/* ✅ Now everything (including <Routes>) has routing */}
      </TrainingProvider>
    </BrowserRouter>
  </React.StrictMode>
);
