import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import Home from './PHome'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './PLayout'
import Profile from './Profile'
import First from './First'
import Second from './Second'
import Tird from './Tird'
import Fourth from './Fourth'
import Votekm1 from './Votekm1'
import Votekm2 from './Votekm2'
import Votekm3 from './Votekm3'
import Votekm4 from './Votekm4'
import Login from './Login'
import Register from './Register'
import Result from './Result';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Count from './time/Count';
import CountdownTimer from './time/CountdownTimer';
import Googlelogin from './components/Googlelogin'
import Googlelogout from './components/Googlelogout'

import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="" element={<Layout />} />
            <Route path="km1" element={<First />} />
            <Route path="km2" element={<Second />} />
            <Route path="km3" element={<Tird />} />
            <Route path="km4" element={<Fourth />} />
            <Route path="votekm1" element={<Votekm1 />} />
            <Route path="votekm2" element={<Votekm2 />} />
            <Route path="votekm3" element={<Votekm3 />} />
            <Route path="votekm4" element={<Votekm4 />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="result" element={<Result />} />
            <Route path="ForgotPassword" element={<ForgotPassword />} />
            <Route path="/reset/:token" element={<ResetPassword />} />
            <Route path="" element={<Count />} />
            <Route path="" element={<CountdownTimer />} />
            <Route path="login" element={<Googlelogin />} />
            <Route path="login" element={<Googlelogout />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,

);