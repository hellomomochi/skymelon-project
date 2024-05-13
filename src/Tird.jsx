import Layout from './PLayout'
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';



function Tird() {


    //ตั้งตัวแปรโดยใช้ useNavigate เพื่อลิ้งค์เข้าสู่ในการใส่ข้อความอัตโนมัติที่ช่อง Input ศิลปิน ที่หน้าเพจ vote
    const [artistName, setArtistName] = useState('');
    const navigate = useNavigate(); // Import useNavigate
    //ตั้งตัวแปรโดยใช้ useNavigate เพื่อลิ้งค์เข้าสู่ในการใส่ข้อความอัตโนมัติที่ช่อง Input ศิลปิน ที่หน้าเพจ vote
    const handleArtistClick = (artist) => {
        setArtistName(artist);
        navigate('/votekm3', { state: { artistName: artist } }); // Pass artist name using useNavigate
    };

    //ให้รูปภาพโชว์เมื่อคลิก Change
    const [selectedImage1, setSelectedImage1] = useState(null);
    const [reselectedImage1, resetSelectedImage1] = useState(null);
    const handleFileChange1 = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setSelectedImage1(e.target.result);
        };
        reader.readAsDataURL(file);
    };
    //ให้รูปภาพโชว์เมื่อคลิก Change
    const [selectedImage2, setSelectedImage2] = useState(null);
    const [reselectedImage2, resetSelectedImage2] = useState(null);
    const handleFileChange2 = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setSelectedImage2(e.target.result);
        };
        reader.readAsDataURL(file);
    };
    //ให้รูปภาพโชว์เมื่อคลิก Change
    const [selectedImage3, setSelectedImage3] = useState(null);
    const [reselectedImage3, resetSelectedImage3] = useState(null);
    const handleFileChange3 = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setSelectedImage3(e.target.result);
        };
        reader.readAsDataURL(file);
    };
    //ให้รูปภาพโชว์เมื่อคลิก Change
    const [selectedImage4, setSelectedImage4] = useState(null);
    const [reselectedImage4, resetSelectedImage4] = useState(null);
    const handleFileChange4 = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setSelectedImage4(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    {/**text ปุ่ม ศิลปิน */ }
    const [artistName2, setArtistName2] = useState('')
    const [reartistName2, resetArtistName2] = useState('') //เมื่อคลิก ปุ่ม change
    const [artistName3, setArtistName3] = useState('')
    const [reartistName3, resetArtistName3] = useState('') //เมื่อคลิก ปุ่ม change
    const [artistName4, setArtistName4] = useState('')
    const [reartistName4, resetArtistName4] = useState('') //เมื่อคลิก ปุ่ม change
    const [artistName5, setArtistName5] = useState('')
    const [reartistName5, resetArtistName5] = useState('') //เมื่อคลิก ปุ่ม change

    //event handleClick เมื่อคลิกปุ่ม change จะเปลี่ยนข้อความและรูปภาพ
    const handleClickChange1 = () => {
        resetArtistName2(artistName2)
        if (selectedImage1) {
            resetSelectedImage1(selectedImage1); // เปลี่ยนรูปภาพโดยใช้ URL ที่เก็บไว้
        }
    }
    //event handleClick เมื่อคลิกปุ่ม change จะเปลี่ยนข้อความและรูปภาพ
    const handleClickChange2 = () => {
        resetArtistName3(artistName3)
        if (selectedImage2) {
            resetSelectedImage2(selectedImage2); // เปลี่ยนรูปภาพโดยใช้ URL ที่เก็บไว้
        }
    }
    //event handleClick เมื่อคลิกปุ่ม change จะเปลี่ยนข้อความและรูปภาพ
    const handleClickChange3 = () => {
        resetArtistName4(artistName4)
        if (selectedImage3) {
            resetSelectedImage3(selectedImage3); // เปลี่ยนรูปภาพโดยใช้ URL ที่เก็บไว้
        }
    }
    //event handleClick เมื่อคลิกปุ่ม change จะเปลี่ยนข้อความและรูปภาพ
    const handleClickChange4 = () => {
        resetArtistName5(artistName5)
        if (selectedImage4) {
            resetSelectedImage4(selectedImage4); // เปลี่ยนรูปภาพโดยใช้ URL ที่เก็บไว้
        }
    }





    useEffect(() => {
        // โหลดรูปภาพจาก localStorage เมื่อโหลดหน้าเพจ
        const storedImage1 = localStorage.getItem('selectedImage1');
        const storedImage2 = localStorage.getItem('selectedImage2');
        const storedImage3 = localStorage.getItem('selectedImage3');
        const storedImage4 = localStorage.getItem('selectedImage4');

        if (storedImage1) {
            setSelectedImage1(storedImage1);
        }

        if (storedImage2) {
            setSelectedImage2(storedImage2);
        }

        if (storedImage3) {
            setSelectedImage3(storedImage3);
        }

        if (storedImage4) {
            setSelectedImage4(storedImage4);
        }
    }, []);

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
                                    <img className='bg-cover' src={reselectedImage1} alt='รูปภาพที่เลือก' />
                                </div>
                            </div>

                            {/**เลือกไฟล์รูป 1 */}
                            <input type='file' onChange={handleFileChange1} className='w-[150px] h-[23px] text-[8px]'></input>
                            <div className='flex flex-row self-start'>
                                {/**ให้ input แล้วเก็บค่าให้ให้ปุ่ม change ตอนเปลี่ยน */}
                                <input type='text' className='border-none w-[70px] h-[20px] px-[2px] mr-[5px]'
                                    value={artistName2} onChange={(event) => setArtistName2(event.target.value)}></input>
                                {/**ปุ่ม change */}
                                <button id="addButton" onClick={handleClickChange1} className='self-start w-[50px] h-[23px] rounded-[18px] bg-red-500 flex justify-center items-center text-white text-[10px]'>Change</button>
                            </div>


                            {/**ปุ่ม ผู้เข้าชิงคนที่ 1 */}
                            <button className='mb-[40px] w-[300px] h-[60px] bg-none opacity-100 border-black border-[2px] rounded-[30px] hover:bg-black hover:opacity-25 hover:text-white hover:border-white'
                                onClick={() => handleArtistClick(reartistName2)}
                            >{reartistName2}</button> {/**เมื่อคลิกปุ่ม change จะเปลี่ยนข้อความของปุ่มนี้ด้วย */}


                        </div>

                        {/**กรอบผู้เข้าชิงแถว 1 คนที่ 2 */}
                        <div className='flex flex-col'>

                            {/**กรอบรูปผู้เข้าชิงคนที่ 2 */}
                            <div className='mb-[40px] w-[300px] h-[400px]flex flex-col'>
                                {/**ข้างในรูปผู้เข้าชิงคนที่ 2 */}
                                <div className='mt-[2px] w-[300px] h-[400px] shadow-[10px_10px_rgba(0,0,0,0.2)] hover:shadow-[10px_10px_30px_rgb(229,242,5)]'>
                                    <img className='bg-cover' src={reselectedImage2} alt='รูปภาพที่เลือก' />
                                </div>
                            </div>

                            {/**เลือกไฟล์รูป 2 */}
                            <input type='file' onChange={handleFileChange2} className='w-[150px] h-[23px] text-[8px]'></input>
                            <div className='flex flex-row self-start'>
                                {/**ให้ input แล้วเก็บค่าให้ให้ปุ่ม change ตอนเปลี่ยน */}
                                <input type='text' className='border-none w-[70px] h-[20px] px-[2px] mr-[5px]'
                                    value={artistName3} onChange={(event) => setArtistName3(event.target.value)}></input>
                                {/**ปุ่ม change */}
                                <button id="addButton" onClick={handleClickChange2} className='self-start w-[50px] h-[23px] rounded-[18px] bg-red-500 flex justify-center items-center text-white text-[10px]'>Change</button>
                            </div>

                            {/** ปุ่ม ผู้เข้าชิงคนที่ 2 */}
                            <button className='mb-[40px] w-[300px] h-[60px] bg-none border-black border-[2px] rounded-[30px] hover:bg-black hover:opacity-25 hover:text-white hover:border-white'
                                onClick={() => handleArtistClick(reartistName3)}
                            >{reartistName3}</button>{/**เมื่อคลิกปุ่ม change จะเปลี่ยนข้อความของปุ่มนี้ด้วย */}

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
                                    <img className='bg-cover' src={reselectedImage3} alt='รูปภาพที่เลือก' />
                                </div>
                            </div>

                            {/**เลือกไฟล์รูป 3 */}
                            <input type='file' onChange={handleFileChange3} className='w-[150px] h-[23px] text-[8px]'></input>
                            <div className='flex flex-row self-start'>
                                {/**ให้ input แล้วเก็บค่าให้ให้ปุ่ม change ตอนเปลี่ยน */}
                                <input type='text' className='border-none w-[70px] h-[20px] px-[2px] mr-[5px]'
                                    value={artistName4} onChange={(event) => setArtistName4(event.target.value)}></input>
                                {/**ปุ่ม change */}
                                <button id="addButton" onClick={handleClickChange3} className='self-start w-[50px] h-[23px] rounded-[18px] bg-red-500 flex justify-center items-center text-white text-[10px]'>Change</button>
                            </div>

                            {/**ปุ่ม ผู้เข้าชิงคนที่ 3 */}
                            <button className='mb-[40px] w-[300px] h-[60px] bg-none border-black border-[2px] rounded-[30px] hover:bg-black hover:opacity-25 hover:text-white hover:border-white'
                                onClick={() => handleArtistClick(reartistName4)}
                            >{reartistName4}</button>{/**เมื่อคลิกปุ่ม change จะเปลี่ยนข้อความของปุ่มนี้ด้วย */}

                        </div>

                        {/**กรอบผู้เข้าชิงแถว 2 คนที่ 4 */}
                        <div className='flex flex-col'>


                            {/**กรอบรูปผู้เข้าชิงคนที่ 4 */}
                            <div className='mb-[40px] w-[300px] h-[400px]flex flex-col'>
                                {/**ข้างในรูปผู้เข้าชิงคนที่ 4 */}
                                <div className='mt-[2px] w-[300px] h-[400px] shadow-[10px_10px_rgba(0,0,0,0.2)] hover:shadow-[10px_10px_30px_rgb(229,242,5)]'>
                                    <img className='bg-cover' src={reselectedImage4} alt='รูปภาพที่เลือก' />
                                </div>
                            </div>

                            {/**เลือกไฟล์รูป 4 */}
                            <input type='file' onChange={handleFileChange4} className='w-[150px] h-[23px] text-[8px]'></input>
                            <div className='flex flex-row self-start'>
                                {/**ให้ input แล้วเก็บค่าให้ให้ปุ่ม change ตอนเปลี่ยน */}
                                <input type='text' className='border-none w-[70px] h-[20px] px-[2px] mr-[5px]'
                                    value={artistName5} onChange={(event) => setArtistName5(event.target.value)}></input>
                                {/**ปุ่ม change */}
                                <button id="addButton" onClick={handleClickChange4} className='self-start w-[50px] h-[23px] rounded-[18px] bg-red-500 flex justify-center items-center text-white text-[10px]'>Change</button>
                            </div>

                            {/** ปุ่ม ผู้เข้าชิงคนที่ 4 */}

                            <button className='mb-[40px] w-[300px] h-[60px] bg-none border-black border-[2px] rounded-[30px] hover:bg-black hover:opacity-25 hover:text-white hover:border-white'
                                onClick={() => handleArtistClick(reartistName5)}
                            >{reartistName5}</button>{/**เมื่อคลิกปุ่ม change จะเปลี่ยนข้อความของปุ่มนี้ด้วย */}

                        </div>


                    </div>


                </div>
            </div>
        </>
    );
}
export default Tird;