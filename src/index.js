import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import "remixicon/fonts/remixicon.css"
import reportWebVitals from './reportWebVitals';
import "./index.css"
import {ChakraProvider} from "@chakra-ui/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <App />
 
  </React.StrictMode>
);
