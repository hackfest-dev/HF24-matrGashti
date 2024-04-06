import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './pages/Signup'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  </React.StrictMode>
);
