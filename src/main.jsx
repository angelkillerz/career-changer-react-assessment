import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import OwnerPage from './pages/OwnerPage';
import './Home.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/career-changer-react-assessment/',
    element: <Home />
  },
  {
    path: '/career-changer-react-assessment/owner',
    element: <OwnerPage />
  },
 
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
