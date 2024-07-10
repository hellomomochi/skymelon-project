import { Link, useNavigate } from "react-router-dom";
import Layout from './PLayout'
import { useParams, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; //เรียกใช้ API

import { setUserid } from "./slice/user";
import { useDispatch, useSelector } from 'react-redux'
import Login from "./Login";
//Selector : อ่านค่า //Dispatch: เขียนค่า


function Vote() {
    //สร้างก่อน useSate
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user) //สำหรับเรียกใช้ค่า

    const [isLoggedIn, setIsLoggedIn] = useState(!!user.userId); // กำหนดค่าเริ่มต้นของ isLoggedIn จาก user


    const navigate = useNavigate();



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
    const branchName = state?.branchName
    const [choice, setChoice] = useState(artistName);
    const [classvote, setClassvote] = useState(branchName);
    const [votetmrr, setVotetmrr] = useState(false) //โหวตได้วันละ 1 ครั้ง

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {

            //พอ classvote ผ่านก็จะได้ id ของ classvote มาสร้างตัวแปรชื่อเดียวกับ schema มาเก็บค่า id มา
            const classvote = branchName
            console.log('classvoteId', classvote)

            const choice = artistName
            console.log('choicevoteId', choice)

            // ดึงข้อมูล userId จาก localStorage
            const userId = user.userId
            console.log('userId', userId)
            console.log('countvoteB', countvote)

            //3.API classvote
            const response3 = await axios.post('http://localhost:5000/auth/vote', {
                userId, classvote, choice, countvote
            }, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });

            console.log('countVote OK', response3.data);

            navigate("/result");
            // Redirect to the home page after successful registration
        } catch (error) {
            // แสดงข้อความแจ้งเตือนเมื่อเข้าสู่ระบบไม่สำเร็จ
            console.error('Vote error:', error);
            setVotetmrr(true) //แสดงข้อความโหวตได้ใหม่พรุ่งนี้

        }
    };






    return (

        <div className='flex justify-center'>

            {/**กรอบส่งคะแนนโหวต */}
            {isLoggedIn ? <div className='bg-[#ff5b56] h-[500px] mb-[30px] mt-[50px] md:w-[550px] w-[470] md:rounded-[30px] rounded-[20px] shadow-[4px_4px_rgba(0,0,0,0.6)] flex flex-col items-center bg-opacity-[80%]'>
                <div className='mt-[10px] md:text-[18px] text-[15px] mx-[70px] font-Mitr'>ร่วมส่งคะแนนโหวตศิลปินในสาขาที่คุณชื่นชอบ</div>

                <form action='#' onSubmit={handleSubmit} className="flex flex-col">
                    <div className='mt-[30px] text-white ml-[150px] italic font-Mitr'>สาขา</div>
                    <input value={classvote} key='classvote' required className='self-center mt-[3px] w-[200px] h-[40px] bg-white outline-none px-[15px] hover:outline-[#6B201E] rounded-[20px] shadow-[3px_4px_rgba(0,0,0,0.5)] font-Mitr'></input>

                    <div className='mt-[30px] text-white ml-[150px] italic font-Mitr'>ศิลปิน</div>


                    <input key='choice' required className='self-center mt-[3px] w-[200px] h-[40px] bg-white outline-none px-[15px] hover:outline-[#6B201E] rounded-[20px] shadow-[3px_4px_rgba(0,0,0,0.5)] font-Mitr'
                        value={choice || ''} />

                    <div className='mt-[30px] text-white ml-[70px] italic font-Mitr'>จำนวน</div>

                    {/**กำหนด min ของ type number ให้เริ่มต้นที่ 1 ส่วน value ให้อ่านค่าในอีเว้น*/}
                    <input type='number' key='countvote' min="1" value={countvote}
                        onChange={handleVoteChange}
                        className='self-center mt-[3px] w-[100px] h-[40px] bg-white outline-none hover:outline-[#6B201E] px-[15px] rounded-[20px] shadow-[3px_4px_rgba(0,0,0,0.5)] font-Mitr'></input>
                </form>

                <div className='flex flex-col mt-[20px] items-center'>
                    {(votetmrr == true) && <div className=" text-white text-[11px]">เงื่อนไขในการโหวต : 1 วัน ต่อ 1 คะแนน</div>}
                    {(votetmrr == true) && <div className="mb-[2px] text-white text-[11px]">สามารถส่งคะแนนได้อีกครั้งในวันพรุ่งนี้</div>}
                    <div className='w-[210px] h-[70px] flex justify-center items-center'>
                        <button type='submit' onClick={!!isLoggedIn ? handleSubmit : navigate('/login')} className='w-[200px] h-[60px] hover:w-[210px] hover:h-[70px] hover:text-black bg-[#7D2D2A] border-black rounded-[50px] text-white shadow-[3px_4px_rgba(0,0,0,0.5)] drop-shadow-[3px_4px_rgba(0,0,0,0.5)] text-[20px] hover:text-[25px] font-Mitr'>VOTE</button>
                    </div>
                </div>
            </div> : <div className="mt-[450px] mb-[50px] text-[32px]">Please Loggin</div>}
        </div>
    );
}
export default Vote;