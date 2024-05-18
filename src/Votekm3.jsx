import { Link, useNavigate } from "react-router-dom";
import Layout from './PLayout'
import { useParams, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; //เรียกใช้ API

import { setUserid } from "./slice/user";
import { useDispatch, useSelector } from 'react-redux'
//Selector : อ่านค่า //Dispatch: เขียนค่า


function Vote() {
    //สร้างก่อน useSate
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user) //สำหรับเรียกใช้ค่า

    const [isLoggedIn, setIsLoggedIn] = useState(!!user.userId); // กำหนดค่าเริ่มต้นของ isLoggedIn จาก user


    const navigate = useNavigate();

    const [classvote, setClassvote] = useState('ภาพยนตร์ยอดนิยม');

    //ใช้ useState เพื่อกำหนดการเลือกของจำนวนโหวต
    const [countvote, setCountvote] = useState(1);
    // const [voteCount, setVoteCount] = useState(1); // Initialize voteCount state with 1

    const handleVoteChange = (event) => {
        const newVoteCount = parseInt(event.target.value);
        //บังคับให้โหวตได้ 1 คะแนน
        if (newVoteCount == 1) {
            setCountvote(newVoteCount);
        }
    };

    const [error, setError] = useState('');

    //ตั้งตัวแปรโดยใช้ useLocation เพื่อในการใส่ข้อความที่ช่อง Input ศิลปิน
    const { state } = useLocation(); // Access artist name from state passed using useNavigate
    const artistName = state?.artistName
    const [choice, setChoice] = useState(artistName);

    /*const handleClassvoteChange = (event) => {
        setClassvote(event.target.value);
    };*/

    /*const handleChoiceChange = (event) => {
        setChoice(event.target.value);
    };

    const handleCountvoteChange = (event) => {
        setCountvote(event.target.value);
    };*/

    const handleSubmit = async (event) => {
        console.log('classvote', classvote)
        console.log('choice', choice)
        event.preventDefault();
        try {
            //1.API classvote
            const response1 = await axios.post('http://localhost:5000/auth/classvote', {
                classvote
            }, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });

            console.log('classvote OK', response1.data);


            //พอ classvote ผ่านก็จะได้ id ของ classvote มาสร้างตัวแปรชื่อเดียวกับ schema มาเก็บค่า id มา
            const classvoteId = response1.data.id
            console.log('classvoteId', classvoteId)

            //2.API choice
            const response2 = await axios.post('http://localhost:5000/auth/choice', {
                classvoteId, choice
            }, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });

            console.log('choice OK', response2.data);

            const choicevoteId = response2.data.id
            console.log('choicevoteId', choicevoteId)

            // ดึงข้อมูล userId จาก localStorage
            const userId = user.userId
            console.log('userId', userId)
            console.log('countvoteB', countvote)

            //3.API classvote
            const response3 = await axios.post('http://localhost:5000/auth/vote', {
                userId, choicevoteId, countvote
            }, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });

            console.log('countVote OK', response3.data);

            navigate("/");
            // Redirect to the home page after successful registration
        } catch (error) {
            // แสดงข้อความแจ้งเตือนเมื่อเข้าสู่ระบบไม่สำเร็จ
            console.error('Vote error:', error);

        }
    };






    return (

        <>
            <div className='absolute'>
                <Layout />
            </div>
            {/*กรอบงานทั้งหมด*/}
            <div className='absolute w-full md:h-[1820px] h-[2900px]'>
                <div className='flex flex-col items-center'>

                    {/**กรอบ home/login */}
                    <div className='flex flex-row self-start'>

                        {/**กรอบ Home */}
                        <div className='md:mt-[300px] mt-[400px] self-start w-[200px] h-[30px]'>
                            <Link to="/">
                                <button className='w-[250px] h-[70px] bg-[#2267D1] shadow-md text-white text-[30px] hover:translate-x-[20px]'>HOME</button>
                            </Link>
                        </div>

                        {/*กรอบ login*/}
                        <Link to="/login">
                            <button className='md:mt-[340px] mt-[440px] ml-[100px] w-[100px] h-[30px] bg-white shadow-[4px_4px_rgba(0,0,0,0.6)] hover:duration-100 hover:animate-bounce'>เข้าสู่ระบบ</button>
                        </Link>

                    </div>

                    {/**กรอบส่งคะแนนโหวต */}
                    <div className='mt-[100px] bg-[#ff5b56] h-[500px] md:w-[550px] w-[470] md:rounded-[30px] rounded-[20px] shadow-[4px_4px_rgba(0,0,0,0.6)] flex flex-col items-center bg-opacity-[80%]'>
                        <div className='mt-[10px] md:text-[18px] text-[15px] mx-[70px]'>ร่วมส่งคะแนนโหวตศิลปินในสาขาที่คุณชื่นชอบ</div>

                        <form action='#' onSubmit={handleSubmit} className="flex flex-col">
                            <div className='mt-[30px] text-white md:ml-[60px] ml-[30px] italic'>สาขา</div>
                            <input value={classvote} key='classvote' required className='self-center mt-[3px] w-[200px] h-[40px] bg-white outline-none px-[15px] hover:outline-[#6B201E] rounded-[20px] shadow-[3px_4px_rgba(0,0,0,0.5)]'></input>

                            <div className='mt-[30px] text-white md:ml-[60px] ml-[30px] italic'>ศิลปิน</div>


                            <input key='choice' required className='self-center mt-[3px] w-[200px] h-[40px] bg-white outline-none px-[15px] hover:outline-[#6B201E] rounded-[20px] shadow-[3px_4px_rgba(0,0,0,0.5)]'
                                value={choice || ''} />

                            <div className='mt-[30px] text-white ml-[70px] italic'>จำนวน</div>

                            {/**กำหนด min ของ type number ให้เริ่มต้นที่ 1 ส่วน value ให้อ่านค่าในอีเว้น*/}
                            <input type='number' key='countvote' min="1" value={countvote}
                                onChange={handleVoteChange}
                                className='self-center mt-[3px] w-[100px] h-[40px] bg-white outline-none hover:outline-[#6B201E] px-[15px] rounded-[20px] shadow-[3px_4px_rgba(0,0,0,0.5)]'></input>
                        </form>

                        <div className='w-[210px] h-[70px] flex justify-center items-center'>
                            <button type='submit' onClick={!!isLoggedIn ? handleSubmit : navigate('/login')} className='mt-[80px] w-[200px] h-[60px] hover:w-[210px] hover:h-[70px] hover:text-black bg-[#7D2D2A] border-black rounded-[50px] text-white shadow-[3px_4px_rgba(0,0,0,0.5)] drop-shadow-[3px_4px_rgba(0,0,0,0.5)] text-[20px] hover:text-[25px]'>VOTE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Vote;