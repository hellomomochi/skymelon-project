import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
    const { token } = useParams(); // เข้าถึง token จาก URL params
    const [verificationStatus, setVerificationStatus] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            console.log("token", token)
            try {
                const response = await axios.post(`http://localhost:5000/auth/verify/${token}`, { token });
                setVerificationStatus(response.data.message);
                navigate('/login'); // นำทางไปยังหน้า '/login'
            } catch (error) {
                console.error('Email verification error:', error);
                setVerificationStatus('Error verifying email');
            }
        };

        verifyEmail(); // เรียกฟังก์ชัน verifyEmail ทันทีเมื่อ component ถูก mount

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate, token]);

    return (
        <div className='mb-[70px] mt-[50px]'>
            <div className='w-[1000px] h-[100px] flex flex-col justify-center items-center bg-gray-400'>
                <h1>Email Verification</h1>
                <p className='text-[28px]'>{verificationStatus}</p>
            </div>
        </div>
    );
};

export default VerifyEmail;
