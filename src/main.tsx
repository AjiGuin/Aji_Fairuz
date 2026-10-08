import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/variables/variables.css';
import './styles/glass/glass.css';
import './styles/animations/animations.css';
import './styles/globals/global.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element #root not found');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
