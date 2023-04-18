import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import OwnerPage from './pages/OwnerPage';
import './Home.css'

import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

const router = (
  <Routes>
    <Route exact path="/" element={Home} />
    <Route exact path="/owner" element={OwnerPage} />
  </Routes>
)

ReactDOM.render(
  <BrowserRouter>
    {router}
  </BrowserRouter>,
  document.getElementById('root')
);