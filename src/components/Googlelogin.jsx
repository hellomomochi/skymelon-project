import React, { useState } from 'react';
import axios from 'axios'; //เรียกใช้ API
import { GoogleLogin } from 'react-google-login';
//ติดตั้ง npm install react-google-login --legacy-peer-deps
//ติดตั้ง Google People API ใน google dev
import { useNavigate } from "react-router-dom";
import { setUserid } from "C:/Users/ASUS/mochi-frontend/src/slice/user";
import { useDispatch, useSelector } from 'react-redux'
//Selector : อ่านค่า //Dispatch: เขียนค่า

const clientId = '989711806113-lh64qbra7rv02ut7f6hh8r3dm2f1u60h.apps.googleusercontent.com'; // แทนที่ด้วย Client ID ที่ได้จาก Google Developer Console

function Googlelogin() {

    //สร้างก่อน useSate
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user) //สำหรับเรียกใช้ค่า ในหน้านี้จะเช็ค userId ว่ามีมั้ยถ้าไม่มีให้ login

    const [isLoggedIn, setIsLoggedIn] = useState(!!user.userId); // กำหนดค่าเริ่มต้นของ isLoggedIn จาก user


    const onSuccess = async (response) => {
        console.log('Login Success:', response.profileObj);
        console.log('email:', response.profileObj.email);
        console.log('googleId:', response.googleId);
        const username = response.profileObj.givenName
        const email = response.profileObj.email
        const password = response.profileObj.googleId
        try {
            const responseGoogle = await axios.post('http://localhost:5000/auth/register', { username, email, password }, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });
            console.log('googleRegis successful', responseGoogle.data.emailVerificationToken);

            const GoogleToken = responseGoogle.data.emailVerificationToken

            const response = await axios.post(`http://localhost:5000/auth/verify/${GoogleToken}`, { GoogleToken });
            console.error('goole account verification successful', response);

        } catch (error) {
            console.error(error);
            console.log('googleRegis error');
        }



        try {
            const responseGoogleLogin = await axios.post('http://localhost:5000/auth/login', {
                email,
                password
            }, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });

            const data = responseGoogleLogin.data;

            // เก็บ token ใน local storage
            // ส่วนของการเข้าสู่ระบบสำเร็จ
            console.log('LoginGoogle successful');
            const tokenG = data.token
            console.log('TokenG:', tokenG);

            // Set Authorization header for subsequent requests
            axios.defaults.headers.common['Authorization'] = tokenG;

            const response2 = await axios.get('http://localhost:5000/user/profile', {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": tokenG // เพิ่ม Authorization header ด้วย Token
                }
            });

            const data2 = response2.data;
            console.log('TokenG:', data2.token);
            console.log('UserG ID:', data2.id);
            const userID = data2.id

            // dispatch action เพื่อบันทึก userID ลงใน state
            dispatch(setUserid({ userId: userID ,token: tokenG}));
            // Redirect to the home page after successful registration
            setIsLoggedIn(true) // เปลี่ยนสถานะการ login เป็น true
            window.location.href = '/' //ให้ refesh ทั้งหน้าเพื่อให้ profile

        } catch (error) {
            // แสดงข้อความแจ้งเตือนเมื่อเข้าสู่ระบบไม่สำเร็จ
            console.error('Login Google error:', error);

        }
    };

    const onFailure = (response) => {
        console.log('Login Failed:', response);
        // handle failed login here
    };

    return (

        <div>
            <div className='flex flex-col items-center '>
                <div className='mb-[10px] text-white text-[12px]'> Or </div>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
        </div>
    )
};

export default Googlelogin;