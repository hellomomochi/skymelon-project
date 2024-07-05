import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import Home from './PHome'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './PLayout'
import Profile from './Profile'
import First from './First'
import Vote from './Vote'
import Login from './Login'
import Logintoken from './Logintoken'
import Register from './Register'
import Result from './Result';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Count from './time/Count';
import CountdownTimer from './time/CountdownTimer';
import Googlelogin from './components/Googlelogin'
import Googlelogout from './components/Googlelogout'
import Setting from './Setting'

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
            <Route path="" element={<Layout />} >
              <Route path="" element={<Home />} />
              <Route path=":km" element={<First />} />{/**ปัก */}
              <Route path="vote" element={<Vote />} />
              <Route path="/login" element={<Login />} /> {/* สำหรับสมัครสมาชิกแล้ว login */}
              <Route path="/verify/:token" element={<Logintoken />} /> {/* สำหรับยืนยันตัวตนครั้งแรก */}
              <Route path="register" element={<Register />} />
              <Route path="result" element={<Result />} />
              <Route path="ForgotPassword" element={<ForgotPassword />} />
              <Route path="/reset/:token" element={<ResetPassword />} />
              <Route path="" element={<Count />} />
              <Route path="" element={<CountdownTimer />} />
              <Route path="login" element={<Googlelogin />} />
              <Route path="login" element={<Googlelogout />} />
              <Route path="setting" element={<Setting />} />
            </Route>
            <Route path="profile" element={<Profile />} />
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,

);