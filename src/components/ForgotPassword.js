import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Layout from 'C:/Users/ASUS/mochi-frontend/src/PLayout'
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/forgotPassword', { email });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message || 'Error occurred');
        }
    };

    return (
        <div className='flex justify-center'>
            <div className='absolute'>
                <Layout />
            </div>
            {/*กรอบงานทั้งหมด*/}
            <div className='absolute w-full md:h-[1820px] h-[2900px]'>
                <div className='flex flex-col items-center'>

                    {/**กรอบ home/login */}
                    <div className='flex flex-row'>

                        {/**กรอบ Home */}
                        <div className='md:mt-[300px] mt-[400px] self-start w-[200px] h-[30px]'>
                            <Link to="/">
                                <button className='w-[250px] h-[70px] bg-[#2267D1] shadow-md text-white text-[30px] hover:translate-x-[20px] rounded-[100%]'>HOME</button>
                            </Link>
                        </div>

                        {/*กรอบ login*/}
                        <Link to="/login">
                            <button className='md:mt-[310px] mt-[410px] ml-[100px] w-[100px] h-[60px] border-gray border-[1px] bg-white shadow-[4px_4px_rgba(0,0,0,0.6)] hover:duration-100 hover:animate-bounce rounded-[100%]'>เข้าสู่ระบบ</button>
                        </Link>

                    </div>

                    {/**กรอบกล่อง*/}
                    <div className='mt-[60px] border-[2px] md:w-[700px] w-[400px] h-[300px] md:rounded-[100px] rounded-[50px] flex flex-col items-center  bg-black bg-opacity-[30%]'>
                        <div className='mt-[20px] mb-[10px] text-[24px]'>Forgot Password</div>
                        <div className="mt-[20px]">
                            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className='md:hover:w-[403px] hover:w-[303px] hover:h-[41px] mt-[2px] md:w-[400px] w-[300px] h-[40px] bg-white rounded-[5px] placeholder:italic  py-2 pl-2 pr-2 shadow-sm focus:outline-none  focus:ring-sky-500 focus:ring-1'
                                />
                                <div className='mt-[20px] flex w-[105px] h-[40px] justify-center items-center'>
                                    <button type="submit" className='w-[100px] h-[35px] hover:w-[105px] hover:text-yellow-300 hover:h-[40px] hover:bg-sky-500 bg-blue-200 rounded-[5px]'>Submit</button>
                                </div>
                            </form>
                        </div>
                        {message && <p>{message}</p>}
                    </div>






                </div >
            </div >
        </div>
    );
};

export default ForgotPassword;
