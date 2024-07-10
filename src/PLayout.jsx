import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import { useSelector } from 'react-redux';

function PLayout() {
    const [myProfile, setMyProfile] = useState(null);
    const user = useSelector((state) => state.user);
    const token = user.token;
    const [isLoggedIn, setIsLoggedIn] = useState(!!user.userId);

    useEffect(() => {
        const fetchMyProfile = async () => {
            try {
                const response = await axios.get('http://localhost:5000/user/profile', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": token
                    }
                });

                console.log('profile data response:', response.data);

                if (response.data) {
                    setMyProfile(response.data); // อัปเดตข้อมูลโพรไฟล์ทันทีหลังจาก fetch
                    console.log('profile', response.data);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (isLoggedIn) {
            fetchMyProfile();
        } else {
            setMyProfile(null);
        }
    }, [isLoggedIn, token]);

    return (
        <div className="w-full  bg-gradient-to-r from-sky-200 to-[#17468E] border-indigo-100 flex flex-col items-center">
            <div className='w-full flex justify-center md:h-[400px] h-[500px] '>
                <img className="w-[1198px] md:h-[400px] h-[500px]" src='https://folder1234and5678.blob.core.windows.net/home/cloud-8348531_1281.png' alt="cloud-background" />
            </div>

            {isLoggedIn && myProfile && (
                <div className='absolute z-[2] top-[1px] bg-slate-300 bg-opacity-[40%] w-full md:h-[30px]  h-[20px] '>
                    <div className='flex flex-row pl-[10px] justify-center '>
                        {user.userId == 1 && <div className='md:text-[16px] text-[12px] underline font-Sarabunthin'>Admin</div>}
                        <div className='ml-[5px] md:text-[16px] text-[12px] font-Sarabunthin'>Username: {myProfile.username}</div>
                        <div className='ml-[5px] md:text-[16px] text-[12px] font-Sarabunthin'>| Email: {myProfile.email}</div>
                    </div>
                </div>
            )}

           
                <div className="absolute wm top-[120px] z-[3] right-[80px] drop-shadow-md">
                    <div className="wmStone">
                        {[...Array(9)].map((_, index) => (
                            <div key={index} className="wmStone__item"></div>
                        ))}
                    </div>
                </div>
           

            <Link to="/">
                <div className="absolute z-[4] top-[30px] right-[80px] text-[130px] text-[white] drop-shadow-[10px_10px_30px_rgb(229,242,5)] hover:drop-shadow-[10px_10px_rgba(0,0,0,0.2)] font-bold sans-serif">SKY MELON</div>
                <div className="absolute z-[5] top-[180px] right-[50px] text-[60px] text-[white] font-bold sans-serif drop-shadow-[4px_4px_1px_rgba(0,0,0,0.4)]">1st AWARD</div>
            </Link>

            <Link to="/login">
                <div className="absolute z-[6] md:top-[350px] top-[400px] right-[80px] hover:text-slate-700 text-[21px] text-black underline font-Mitr">{!isLoggedIn ? 'เข้าสู่ระบบ' : 'ออกจากระบบ'}</div>
            </Link>

            <Outlet />
        </div >
    );
}

export default PLayout;
