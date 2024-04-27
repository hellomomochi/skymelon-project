import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import Home from './PHome'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './PLayout'
import First from './First'
import Second from './Second'
import Tird from './Tird'
import Fourth from './Fourth'
import Votekm1 from './Votekm1'
import Votekm2 from './Votekm2'
import Votekm3 from './Votekm3'
import Login from './Login'
import Register from './Register'
import Result from './Result';

const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="" element = {<Home />} />
      <Route path="" element = {<Layout />} />
      <Route path="km1" element = {<First />} />
      <Route path="km2" element = {<Second />} />
      <Route path="km3" element = {<Tird />} />
      <Route path="km4" element = {<Fourth />} />
      <Route path="votekm1" element = {<Votekm1 />} />
      <Route path="votekm2" element = {<Votekm2 />} />
      <Route path="votekm3" element = {<Votekm3 />} />
      <Route path="login" element = {<Login />} />
      <Route path="register" element = {<Register />} />
      <Route path="result" element = {<Result />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,

);