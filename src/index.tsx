import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/styles/tailwind.css";
import { BrowserRouter} from 'react-router-dom';
import AppRoutes from './routes/routes';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 
  <React.StrictMode>
  <AppRoutes />
  </React.StrictMode>
 
);

