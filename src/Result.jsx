import React from 'react';
import { Link } from "react-router-dom";
import Layout from './PLayout'


function Result() {

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

                    {/**กรอบสรุปผลทั้งหมด*/}
                    <div className='mt-[50px] flex flex-col items-center'>

                        {/**กรอบชื่อสรุปผลสาขา1*/}
                        <div className='text-blue-300 text-[32px] font-bold drop-shadow-[3px_3px_rgba(0,0,0,0.6)]'>KM1</div>

                        {/**กรอบสรุปผลสาขา1*/}
                        <div className='flex flex-col items-center rounded-[10px] md:h-[240px] md:w-[720px] w-[460px] h-[280px] bg-red-500 bg-opacity-[55%] shadow-[4px_4px_rgba(0,0,0,0.6)]'>
                            {/**กรอบสรุปผลสาขา1 คนที่1*/}
                            <div className='m-[5px] flex flex-row items-center md:h-[50px] md:w-[700px] w-[440px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                {/**กรอบรูปสรุปผลสาขา1 คนที่1*/}
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>1</div>
                                <div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>คะแนนโหวต</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center justify-center md:w-[250px] h-[35px] w-[125px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>คะแนน</div>
                            </div>

                            {/**กรอบสรุปผลสาขา1 คนที่2*/}
                            <div className='m-[5px] flex flex-row items-center md:h-[50px] md:w-[700px] w-[440px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                {/**กรอบรูปสรุปผลสาขา1 คนที่2*/}
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>2</div>
                                <div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>คะแนนโหวต</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center justify-center md:w-[250px] h-[35px] w-[125px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>คะแนน</div>
                            </div>

                            {/**กรอบสรุปผลสาขา1 คนที่3*/}
                            <div className='m-[5px] flex flex-row items-center md:h-[50px] md:w-[700px] w-[440px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                {/**กรอบรูปสรุปผลสาขา1 คนที่3*/}
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>3</div>
                                <div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>คะแนนโหวต</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center justify-center md:w-[250px] h-[35px] w-[125px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>คะแนน</div>
                            </div>

                            {/**กรอบสรุปผลสาขา1 คนที่4*/}
                            <div className='m-[5px] flex flex-row items-center md:h-[50px] md:w-[700px] w-[440px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                {/**กรอบรูปสรุปผลสาขา1 คนที่4*/}
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>4</div>
                                <div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>คะแนนโหวต</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center justify-center md:w-[250px] h-[35px] w-[125px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>คะแนน</div>
                            </div>
                        </div>


                        {/**กรอบชื่อสรุปผลสาขา2*/}
                        <div className='text-blue-300 text-[32px] font-bold drop-shadow-[3px_3px_rgba(0,0,0,0.6)]'>KM2</div>

                        {/**กรอบสรุปผลสาขา2*/}
                        <div className='flex flex-col items-center rounded-[10px] md:h-[240px] md:w-[720px] w-[460px] h-[280px] bg-red-500 bg-opacity-[55%] shadow-[4px_4px_rgba(0,0,0,0.6)]'>
                            {/**กรอบสรุปผลสาขา2 คนที่1*/}
                            <div className='m-[5px] flex flex-row items-center md:h-[50px] md:w-[700px] w-[440px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                {/**กรอบรูปสรุปผลสาขา2 คนที่1*/}
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>1</div>
                                <div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>คะแนนโหวต</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center justify-center md:w-[250px] h-[35px] w-[125px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>คะแนน</div>
                            </div>

                            {/**กรอบสรุปผลสาขา2 คนที่2*/}
                            <div className='m-[5px] flex flex-row items-center md:h-[50px] md:w-[700px] w-[440px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                {/**กรอบรูปสรุปผลสาขา2 คนที่2*/}
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>2</div>
                                <div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>คะแนนโหวต</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center justify-center md:w-[250px] h-[35px] w-[125px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>คะแนน</div>
                            </div>

                            {/**กรอบสรุปผลสาขา2 คนที่3*/}
                            <div className='m-[5px] flex flex-row items-center md:h-[50px] md:w-[700px] w-[440px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                {/**กรอบรูปสรุปผลสาขา2 คนที่3*/}
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>3</div>
                                <div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>คะแนนโหวต</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center justify-center md:w-[250px] h-[35px] w-[125px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>คะแนน</div>
                            </div>

                            {/**กรอบสรุปผลสาขา2 คนที่4*/}
                            <div className='m-[5px] flex flex-row items-center md:h-[50px] md:w-[700px] w-[440px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                {/**กรอบรูปสรุปผลสาขา2 คนที่4*/}
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>4</div>
                                <div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>คะแนนโหวต</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center justify-center md:w-[250px] h-[35px] w-[125px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>คะแนน</div>
                            </div>
                        </div>

                        {/**กรอบชื่อสรุปผลสาขา3*/}
                        <div className='text-blue-300 text-[32px] font-bold drop-shadow-[3px_3px_rgba(0,0,0,0.6)]'>KM3</div>

                        {/**กรอบสรุปผลสาขา3*/}
                        <div className='flex flex-col items-center rounded-[10px] md:h-[240px] md:w-[720px] w-[460px] h-[280px] bg-red-500 bg-opacity-[55%] shadow-[4px_4px_rgba(0,0,0,0.6)]'>
                            {/**กรอบสรุปผลสาขา3 คนที่1*/}
                            <div className='m-[5px] flex flex-row items-center md:h-[50px] md:w-[700px] w-[440px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                {/**กรอบรูปสรุปผลสาขา3 คนที่1*/}
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>1</div>
                                <div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>คะแนนโหวต</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center justify-center md:w-[250px] h-[35px] w-[125px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>คะแนน</div>
                            </div>

                            {/**กรอบสรุปผลสาขา3 คนที่2*/}
                            <div className='m-[5px] flex flex-row items-center md:h-[50px] md:w-[700px] w-[440px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                {/**กรอบรูปสรุปผลสาขา3 คนที่2*/}
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>2</div>
                                <div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>คะแนนโหวต</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center justify-center md:w-[250px] h-[35px] w-[125px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>คะแนน</div>
                            </div>

                            {/**กรอบสรุปผลสาขา3 คนที่3*/}
                            <div className='m-[5px] flex flex-row items-center md:h-[50px] md:w-[700px] w-[440px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                {/**กรอบรูปสรุปผลสาขา3 คนที่3*/}
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>3</div>
                                <div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>คะแนนโหวต</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center justify-center md:w-[250px] h-[35px] w-[125px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>คะแนน</div>
                            </div>

                            {/**กรอบสรุปผลสาขา3 คนที่4*/}
                            <div className='m-[5px] flex flex-row items-center md:h-[50px] md:w-[700px] w-[440px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                {/**กรอบรูปสรุปผลสาขา3 คนที่4*/}
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>4</div>
                                <div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>คะแนนโหวต</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center justify-center md:w-[250px] h-[35px] w-[125px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>คะแนน</div>
                            </div>
                        </div>

                        {/**กรอบชื่อสรุปผลสาขา4*/}
                        <div className='text-blue-300 text-[32px] font-bold drop-shadow-[3px_3px_rgba(0,0,0,0.6)]'>KM4</div>

                        {/**กรอบสรุปผลสาขา4*/}
                        <div className='flex flex-col items-center rounded-[10px] md:h-[240px] md:w-[720px] w-[460px] h-[280px] bg-red-500 bg-opacity-[55%] shadow-[4px_4px_rgba(0,0,0,0.6)]'>
                            {/**กรอบสรุปผลสาขา4 คนที่1*/}
                            <div className='m-[5px] flex flex-row items-center md:h-[50px] md:w-[700px] w-[440px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                {/**กรอบรูปสรุปผลสาขา4 คนที่1*/}
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>1</div>
                                <div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>คะแนนโหวต</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center justify-center md:w-[250px] h-[35px] w-[125px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>คะแนน</div>
                            </div>

                            {/**กรอบสรุปผลสาขา4 คนที่2*/}
                            <div className='m-[5px] flex flex-row items-center md:h-[50px] md:w-[700px] w-[440px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                {/**กรอบรูปสรุปผลสาขา4 คนที่2*/}
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>2</div>
                                <div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>คะแนนโหวต</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center justify-center md:w-[250px] h-[35px] w-[125px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>คะแนน</div>
                            </div>

                            {/**กรอบสรุปผลสาขา4 คนที่3*/}
                            <div className='m-[5px] flex flex-row items-center md:h-[50px] md:w-[700px] w-[440px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                {/**กรอบรูปสรุปผลสาขา4 คนที่3*/}
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>3</div>
                                <div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>คะแนนโหวต</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center justify-center md:w-[250px] h-[35px] w-[125px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>คะแนน</div>
                            </div>

                            {/**กรอบสรุปผลสาขา4 คนที่4*/}
                            <div className='m-[5px] flex flex-row items-center md:h-[50px] md:w-[700px] w-[440px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                {/**กรอบรูปสรุปผลสาขา4 คนที่4*/}
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>4</div>
                                <div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center md:w-[100px] md:h-[35px] w-[70px]'>คะแนนโหวต</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white flex items-center justify-center md:w-[250px] h-[35px] w-[125px]'>XXXXX</div>
                                <div className='md:ml-[20px] ml-[10px] md:text-[14px] text-[12px] text-white'>คะแนน</div>
                            </div>
                        </div>
                    </div>





                </div>
            </div >
        </>
    );
}
export default Result;