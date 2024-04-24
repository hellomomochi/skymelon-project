import Layout from './PLayout'
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';



function Tird() {


    //ตั้งตัวแปรโดยใช้ useNavigate เพื่อลิ้งค์เข้าสู่ในการใส่ข้อความอัตโนมัติที่ช่อง Input ศิลปิน ที่หน้าเพจ vote
    const [artistName, setArtistName] = useState('');
    const navigate = useNavigate(); // Import useNavigate

    const handleArtistClick = (artist) => {
        setArtistName(artist);
        navigate('/votekm3', { state: { artistName: artist } }); // Pass artist name using useNavigate
    };

    const [selectedImage, setSelectedImage] = useState(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setSelectedImage(e.target.result);
        };
        reader.readAsDataURL(file);
    };



    const [selectedImage2, setSelectedImage2] = useState(null);
    const handleFileChange2 = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setSelectedImage2(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const [selectedImage3, setSelectedImage3] = useState(null);
    const handleFileChange3 = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setSelectedImage3(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const [selectedImage4, setSelectedImage4] = useState(null);
    const handleFileChange4 = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setSelectedImage4(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const [artistName2, setArtistName2] = useState('')
    const [artistName3, setArtistName3] = useState('')
    const [artistName4, setArtistName4] = useState('')
    const [artistName5, setArtistName5] = useState('')





    return (

        <>
            <div className='absolute'>
                <Layout />
            </div>
            {/*กรอบงานทั้งหมด*/}
            <div className='absolute w-full md:h-[1920px] h-[2900px]'>
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


                    {/**กรอบแถวสาขา */}
                    <div className='flex flex-row '>

                        {/**กรอบรหัสสาขา */}
                        <div className='w-[300px] h-[300px]'>
                            {/**ข้างในสาขา */}
                            <div className='absolute w-[300px] h-[300px]'>
                                <img className='w-[300px] h-[300px] ' src='lightning-and-blue-rain-cloud-16533.svg'></img>
                                <div className='absolute top-[70px] left-[100px] text-[50px] font-semibold '>KM3</div>
                            </div>
                        </div>

                        {/**กรอบชื่อสาขา */}
                        <div className='w-[300px] h-[300px]'>
                            {/**ข้างในชื่อสาขา */}
                            <div className='absolute md:top-[450px] top-[550px] w-[350px] h-[300px]'>
                                <div className='text-[40px]  text-black drop-shadow-[2px_1px_rgba(0,0,0,0.2)]'>
                                    ภาพยนตร์ยอดนิยม</div>
                            </div>
                        </div>
                    </div>

                    {/**กรอบรูปผู้เข้าชิงแถว 1 */}
                    <div className='flex md:flex-row mt-[30px] flex-col'>

                        {/**กรอบผู้เข้าชิงแถว 1 คนที่ 1 */}
                        <div className='md:mr-[140px] flex flex-col'>


                            {/**กรอบรูปผู้เข้าชิงคนที่ 1 */}
                            <div className='mb-[40px] w-[300px] h-[400px]'>
                                {/**ข้างในรูปผู้เข้าชิงแถว 1 คนที่ 1 */}
                                <div className='mt-[2px] w-[300px] h-[400px] shadow-[10px_10px_rgba(0,0,0,0.2)] hover:shadow-[10px_10px_30px_rgb(229,242,5)]'>
                                    {selectedImage && <img className='bg-cover' src={selectedImage} alt='รูปภาพที่เลือก' />}
                                </div>
                            </div>

                            {/**เลือกไฟล์รูป 1 */}
                            <input type='file' onChange={handleFileChange} className='w-[150px] h-[23px] text-[8px]'></input>
                            <div className='flex flex-row self-start'>
                                <input type='text' className='border-none w-[70px] h-[20px] px-[2px] mr-[5px]' value={artistName2} onChange={(event) => setArtistName2(event.target.value)}></input>
                                <button id="addButton" className='self-start w-[50px] h-[23px] rounded-[18px] bg-red-500 flex justify-center items-center text-white text-[10px]'>Change</button>
                            </div>


                            {/**ปุ่ม ผู้เข้าชิงคนที่ 1 */}

                            <button className='mb-[40px] w-[300px] h-[60px] bg-none opacity-100 border-black border-[2px] rounded-[30px] hover:bg-black hover:opacity-25 hover:text-white hover:border-white'
                                onClick={() => handleArtistClick(artistName2)}
                            >{artistName2}</button>


                        </div>

                        {/**กรอบผู้เข้าชิงแถว 1 คนที่ 2 */}
                        <div className='flex flex-col'>

                            {/**กรอบรูปผู้เข้าชิงคนที่ 2 */}
                            <div className='mb-[40px] w-[300px] h-[400px]flex flex-col'>
                                {/**ข้างในรูปผู้เข้าชิงคนที่ 2 */}
                                <div className='mt-[2px] w-[300px] h-[400px] shadow-[10px_10px_rgba(0,0,0,0.2)] hover:shadow-[10px_10px_30px_rgb(229,242,5)]'>
                                    {selectedImage2 && <img className='bg-cover' src={selectedImage2} alt='รูปภาพที่เลือก' />}
                                </div>
                            </div>

                            {/**เลือกไฟล์รูป 2 */}
                            <input type='file' onChange={handleFileChange2} className='w-[150px] h-[23px] text-[8px]'></input>
                            <div className='flex flex-row self-start'>
                                <input type='text' className='border-none w-[70px] h-[20px] px-[2px] mr-[5px]' value={artistName3} onChange={(event) => setArtistName3(event.target.value)}></input>
                                <button id="addButton" className='self-start w-[50px] h-[23px] rounded-[18px] bg-red-500 flex justify-center items-center text-white text-[10px]'>Change</button>
                            </div>

                            {/** ปุ่ม ผู้เข้าชิงคนที่ 2 */}

                            <button className='mb-[40px] w-[300px] h-[60px] bg-none border-black border-[2px] rounded-[30px] hover:bg-black hover:opacity-25 hover:text-white hover:border-white'
                                onClick={() => handleArtistClick(artistName3)}
                            >{artistName3}</button>

                        </div>
                    </div>



                    {/**กรอบรูปผู้เข้าชิงแถว 2 */}
                    <div className='flex md:flex-row flex-col'>

                        {/**กรอบผู้เข้าชิงแถว 2 คนที่ 3 */}
                        <div className='md:mr-[140px] flex flex-col'>

                            {/**กรอบรูปผู้เข้าชิงคนที่ 3 */}
                            <div className='mb-[40px] w-[300px] h-[400px]'>
                                {/**ข้างในรูปผู้เข้าชิงคนที่ 3 */}
                                <div className='mt-[2px] w-[300px] h-[400px] shadow-[10px_10px_rgba(0,0,0,0.2)] hover:shadow-[10px_10px_30px_rgb(229,242,5)]'>
                                    {selectedImage3 && <img className='bg-cover' src={selectedImage3} alt='รูปภาพที่เลือก' />}
                                </div>
                            </div>

                            {/**เลือกไฟล์รูป 3 */}
                            <input type='file' onChange={handleFileChange3} className='w-[150px] h-[23px] text-[8px]'></input>
                            <div className='flex flex-row self-start'>
                                <input type='text' className='border-none w-[70px] h-[20px] px-[2px] mr-[5px]' value={artistName4} onChange={(event) => setArtistName4(event.target.value)}></input>
                                <button id="addButton" className='self-start w-[50px] h-[23px] rounded-[18px] bg-red-500 flex justify-center items-center text-white text-[10px]'>Change</button>
                            </div>

                            {/**ปุ่ม ผู้เข้าชิงคนที่ 3 */}

                            <button className='mb-[40px] w-[300px] h-[60px] bg-none border-black border-[2px] rounded-[30px] hover:bg-black hover:opacity-25 hover:text-white hover:border-white'
                                onClick={() => handleArtistClick(artistName4)}
                            >{artistName4}</button>

                        </div>

                        {/**กรอบผู้เข้าชิงแถว 2 คนที่ 4 */}
                        <div className='flex flex-col'>


                            {/**กรอบรูปผู้เข้าชิงคนที่ 4 */}
                            <div className='mb-[40px] w-[300px] h-[400px]flex flex-col'>
                                {/**ข้างในรูปผู้เข้าชิงคนที่ 4 */}
                                <div className='mt-[2px] w-[300px] h-[400px] shadow-[10px_10px_rgba(0,0,0,0.2)] hover:shadow-[10px_10px_30px_rgb(229,242,5)]'>
                                    {selectedImage4 && <img className='bg-cover' src={selectedImage4} alt='รูปภาพที่เลือก' />}
                                </div>
                            </div>

                            {/**เลือกไฟล์รูป 4 */}
                            <input type='file' onChange={handleFileChange4} className='w-[150px] h-[23px] text-[8px]'></input>
                            <div className='flex flex-row self-start'>
                                <input type='text' className='border-none w-[70px] h-[20px] px-[2px] mr-[5px]' value={artistName5} onChange={(event) => setArtistName5(event.target.value)}></input>
                                <button id="addButton" className='self-start w-[50px] h-[23px] rounded-[18px] bg-red-500 flex justify-center items-center text-white text-[10px]'>Change</button>
                            </div>

                            {/** ปุ่ม ผู้เข้าชิงคนที่ 4 */}

                            <button className='mb-[40px] w-[300px] h-[60px] bg-none border-black border-[2px] rounded-[30px] hover:bg-black hover:opacity-25 hover:text-white hover:border-white'
                                onClick={() => handleArtistClick(artistName5)}
                            >{artistName5}</button>

                        </div>


                    </div>


                </div>
            </div>
        </>
    );
}
export default Tird;