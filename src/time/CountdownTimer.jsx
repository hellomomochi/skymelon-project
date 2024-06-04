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
        return `${days} days ${hours} hours ${minutes < 10 ? '0' : ''}${minutes} minutes ${remainingSeconds < 10 ? '0' : ''}${remainingSeconds} seconds`;
    };

    return (
        <div className='flex flex-col items-center mt-[20px]'>

            <div> จะสิ้นสุดภายใน</div>
            <div className='text-[24px]'>{formatTime(seconds)}</div>

        </div>
    );
};

export default CountdownTimer;
