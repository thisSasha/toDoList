import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

export function mainRender(){
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
mainRender()

reportWebVitals();
