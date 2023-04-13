import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import BookingContext from './Context/BookingContext'
import { StoreProvide } from './Context/Store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookingContext>
      <StoreProvide>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </StoreProvide>
    </BookingContext>
  </React.StrictMode>
);

