import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './pages/Signup'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Signup /> */}

      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
