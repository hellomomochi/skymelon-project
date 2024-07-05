import React, { useState } from 'react';
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
            {/*กรอบงานทั้งหมด*/}
            <div className='w-full md:h-[1820px] h-[2900px]'>
                <div className='flex flex-col items-center '>

                    {/**กรอบกล่อง*/}
                    <div className='md:mt-[450px] mb-[50px] mt-[550px] border-[2px] md:w-[700px] w-[400px] h-[300px] md:rounded-[100px] rounded-[50px] flex flex-col items-center  bg-black bg-opacity-[30%]'>
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
