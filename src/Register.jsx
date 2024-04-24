import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from './PLayout'
import PHome from './PHome'


import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const RegisterSchema = z.object({
    username: z.string().min(6, { message: "Must have 6 characters" })
        .refine((val) => /[0-9]/g.test(val), { message: "Must have number" })
        .refine((val) => /[a-z]/g.test(val), { message: "Must have characters" }),
    firstName: z.string(),
    lastName: z.string(),

    email: z.string().email(),

    password: z.string().min(8, { message: "Must have 8 characters" })
        .refine((val) => /[0-9]/g.test(val), { message: "Must have number" })
        .refine((val) => /[a-z]/g.test(val), { message: "Must have characters" }),
})

function Register() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(RegisterSchema),
    });

    const onSubmit = async (formData) => {
        console.log(formData);
    }

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



                    {/**กรอบกล่องเพิ่มชื่อเพลง */}
                    <div className='mt-[60px] border-[2px] md:w-[700px] w-[400px] h-[450px] md:rounded-[100px] rounded-[50px] flex flex-col items-center  bg-black bg-opacity-[30%]'>

                        <div className='mt-[30px] mb-[10px] text-[20px] text-[white]'>สมัครสมาชิก</div>
                        <form action="#" onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">


                            <Input register={register("username")} placeholder={"username"} shockName={errors?.username?.message} />


                            <Input register={register("email")} placeholder={"email"} shockName={errors?.email?.message} type='email' />


                            <Input register={register("password")} placeholder={"password"} shockName={errors?.password?.message} type='password' />

                            {/**กรอบ ปุ่ม Register */}
                            <div className='mt-[10px] flex flex-col w-[110px] h-[110px]'>

                                <button>
                                    {/**กรอบรูปเมฆ */}
                                    <div className='flex flex-col justify-center items-center w-[110px] h-[110px]'>
                                        <img className='absolute hover:w-[110px] hover:h-[110px] w-[100px] h-[100px]' src='clouds-svgrepo-com.svg' />
                                        <div className='mt-[18px] drop-shadow-md'>
                                            Register
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </form>

                    </div>




                </div >
            </div >
        </>
    );
}
export default Register;