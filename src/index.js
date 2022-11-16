import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductContext from './components/context/ProductContext'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductContext>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ProductContext>
  </React.StrictMode>
);

