// src/CountdownTimer.js
import React, { useState, useEffect } from 'react';


const CountdownTimer = ({ initialSeconds }) => {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        setSeconds(initialSeconds);
    }, [initialSeconds]);

    useEffect(() => {

        if (seconds > 0) {
            const timerId = setTimeout(() => setSeconds(seconds - 1), 1000); //นับถอยหลังด้วยความเร็วเลขละ 1 วินาที
            return () => clearTimeout(timerId);
        }

    }, [seconds]);

    const formatTime = (seconds) => {
        const days = Math.floor(seconds / (24 * 60 * 60));
        const hours = Math.floor((seconds % (24 * 60 * 60)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return <div className='flex w-[300px] justify-center items-center h-[110px] bg-black bg-opacity-[25%] rounded-[6px]'>
            <div className='flex flex-col items-center m-[10px]'>
                <div className=' text-[14px]  text-white'>days</div>
                <div className='m-[2px] p-[5px] flex flex-col justify-center items-center text-[32px] shadow-[7px_7px_rgba(0,0,0,0.2)] text-yellow-300 bg-black bg-opacity-[65%] rounded-[4px]'>{days}</div>
            </div>
            <div className='flex flex-col items-center m-[10px]'>
                <div className=' text-[14px]  text-white'>hours</div>
                <div className='m-[2px] p-[5px] flex flex-col justify-center items-center text-[32px] shadow-[7px_7px_rgba(0,0,0,0.2)] text-white bg-black bg-opacity-[65%] rounded-[4px]'>{hours}</div>
            </div>
            <div className='flex flex-col items-center m-[10px]'>
                <div className='text-[14px]  text-white'>minutes</div>
                <div className='m-[2px] p-[5px] flex flex-col justify-center items-center text-[32px] shadow-[7px_7px_rgba(0,0,0,0.2)] text-white bg-black bg-opacity-[65%] rounded-[4px]'>{minutes < 10 ? '0' : ''}{minutes}</div>
            </div>
            <div className='flexh-[110px] px-[5px] pt-[14px] text-[32px] justify-center items-center '>:</div>
            <div className='flex flex-col items-center m-[10px]'>
                <div className='text-[14px]  text-white'>seconds</div>
                <div className='m-[2px] p-[5px] flex flex-col justify-center items-center text-[32px] shadow-[7px_7px_rgba(0,0,0,0.2)] text-white bg-black bg-opacity-[65%] rounded-[4px]'>{remainingSeconds < 10 ? '0' : ''}{remainingSeconds}</div>
            </div>
        </div>
    };

    return (
        <div className='mt-[10px] mb-[30px] flex flex-col items-center'>

            <div> Will END within...</div>
            <div className='text-[24px]'>{formatTime(seconds)}</div>

        </div>
    );
};

export default CountdownTimer;
