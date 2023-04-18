import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import OwnerPage from './pages/OwnerPage';
import './Home.css'

import {
  createBrowserRouter,
  RouterProvider,
  HashRouter
} from "react-router-dom";

const router =  createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/owner',
    element: <OwnerPage />
  },
 
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
  
)
