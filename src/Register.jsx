import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Count from './time/Count'
import axios from 'axios'; //เรียกใช้ API

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const RegisterSchema = z.object({
    username: z.string().min(6, { message: "Must have 6 characters" })
        .refine((val) => /[0-9]/g.test(val), { message: "Must have number" })
        .refine((val) => /[a-z]/g.test(val), { message: "Must have characters" }),
    //firstName: z.string(),
    //lastName: z.string(),

    email: z.string().email(),

    password: z.string().min(8, { message: "Must have 8 characters" })
        .refine((val) => /[0-9]/g.test(val), { message: "Must have number" })
        .refine((val) => /[a-z]/g.test(val), { message: "Must have characters" }),
})


function Register() {

    const [noTi, setNoTi] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(RegisterSchema),
    });

    const onSubmit = async (formData) => {
        try {
            const response = await axios.post('http://localhost:5000/auth/register', formData, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });
            console.log(response.data); // รับข้อมูลที่ส่งกลับมาจากเซิร์ฟเวอร์
            setNoTi('Registration successful. Please check your email to verify your account.')
            //ส่ง user id ไปที่หน้าโหวต
            // Redirect to the home page after successful registration


        } catch (error) {
            console.error(error);
            setNoTi('Register fail, Please inform data again ')
        }
    };

    /*const onSubmit = async (formData) => {
        console.log(formData);
    };*/



    useEffect(() => {
        console.log(errors);
    }, [errors]);

    const Input = ({ type, register, placeholder, shockName }) => {
        return (
            <div className="flex flex-col">
                <input type={type} placeholder={placeholder}
                    className='mt-[20px] md:hover:w-[403px] hover:w-[303px] hover:h-[41px]
                md:w-[400px] w-[300px] h-[40px] bg-white rounded-[5px] placeholder:italic  
                py-2 pl-2 pr-2 shadow-sm focus:outline-none  focus:ring-sky-500 focus:ring-1' {...register} />
                <div className="text-[15px] text-white ">{shockName}</div>
            </div>
        )

    }


    return (

        <div className='flex justify-center'>

            {/**เวลานับถอยหลัง */}
            <Count />

            {/**กรอบกล่องเพิ่มชื่อเพลง */}
            <div className='md:mt-[450px] mt-[550px] my-[50px] border-[2px] md:w-[700px] w-[400px] h-[450px] md:rounded-[100px] rounded-[50px] flex flex-col items-center  bg-black bg-opacity-[30%]'>

                <div className='mt-[30px] mb-[10px] text-[20px] text-[white]'>สมัครสมาชิก</div>
                <form action="#" onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                    {/*<form action="#" onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">*/}


                    <Input register={register("username")} placeholder={"username"} shockName={errors?.username?.message} />


                    <Input register={register("email")} placeholder={"email"} shockName={errors?.email?.message} type='email' />


                    <Input register={register("password")} placeholder={"password"} shockName={errors?.password?.message} type='password' />



                    {/**กรอบ ปุ่ม Register */}
                    <div className='mt-[20px] flex flex-col w-[105px] h-[40px] justify-center items-center'>
                        <button type='submit' className='w-[100px] h-[35px] hover:w-[105px] hover:text-yellow-300 hover:h-[40px] hover:bg-sky-500 bg-blue-200 rounded-[5px]'>Register</button>
                    </div>
                </form>

                <div className="text-white text-wrap px-[20px] md:text-[16px] text-[12px] hover:text-green-400">{noTi}</div>

            </div>


        </div >
    );
}
export default Register;