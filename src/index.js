import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './Register';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Login from './Login';
import Profile from './Profile';
import Dashboard from './Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  [
    { path: "/register", element: <Register /> },
    { path: "/", element: <App /> },
    { path: "/login", element: <Login /> },
    { path: "/profile", element: <Profile /> },
    { path: "/dashboard", element: <Dashboard /> }]
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
