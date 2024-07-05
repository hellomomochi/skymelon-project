import React, { useState } from 'react';
//import axios from 'axios'; //เรียกใช้ API
import { GoogleLogout } from 'react-google-login';
//ติดตั้ง npm install react-google-login --legacy-peer-deps
//ติดตั้ง Google People API ใน google dev

import { clearUserid } from "C:/Users/ASUS/mochi-frontend/src/slice/user";
import { useDispatch, useSelector } from 'react-redux'
//Selector : อ่านค่า //Dispatch: เขียนค่า

const clientId = '989711806113-lh64qbra7rv02ut7f6hh8r3dm2f1u60h.apps.googleusercontent.com'; // แทนที่ด้วย Client ID ที่ได้จาก Google Developer Console

function Googlelogout() {

    //สร้างก่อน useSate
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user) //สำหรับเรียกใช้ค่า ในหน้านี้จะเช็ค userId ว่ามีมั้ยถ้าไม่มีให้ login
    const [isLoggedIn, setIsLoggedIn] = useState(!!user.userId); // กำหนดค่าเริ่มต้นของ isLoggedIn จาก user


    const onSuccess = () => {
        console.log("Log out successfull")
        // ทำการออกจากระบบ โดยรีเซ็ตค่าการเข้าสู่ระบบเป็น false
        setIsLoggedIn(false);
        dispatch(clearUserid())
        window.location.href = '/' //ให้ refesh ทั้งหน้าเพื่อให้ profile
    }

    return (
        <div className='flex'>
            <div id="signOutButton">
                <GoogleLogout
                    clientId={clientId}
                    buttonText={"Logout"}
                    onLogoutSuccess={onSuccess}
                />
            </div>
        </div>

    )
};

export default Googlelogout;