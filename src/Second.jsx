import Layout from './PLayout'
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; //เรียกใช้ API

import { useDispatch, useSelector } from 'react-redux'

function Second() {
    //เรียกใช้ redux เรียก userid มา
    const user = useSelector((state) => state.user) //สำหรับเรียกใช้ค่า

    //ตัวแปรรับ userId มาจาก redux
    const [isLoggedIn, setIsLoggedIn] = useState(!!user.userId); // กำหนดค่าเริ่มต้นของ isLoggedIn จาก user
    const [checkAddmin, setAddmin] = useState(user.userId);

    //ตั้งตัวแปรโดยใช้ useNavigate เพื่อลิ้งค์เข้าสู่ในการใส่ข้อความอัตโนมัติที่ช่อง Input ศิลปิน ที่หน้าเพจ vote
    const [artistName, setArtistName] = useState('');
    const navigate = useNavigate(); // Import useNavigate
    //ตั้งตัวแปรโดยใช้ useNavigate เพื่อลิ้งค์เข้าสู่ในการใส่ข้อความอัตโนมัติที่ช่อง Input ศิลปิน ที่หน้าเพจ vote
    const handleArtistClick = (artist) => {
        setArtistName(artist);
        navigate('/votekm2', { state: { artistName: artist } }); // Pass artist name using useNavigate
    };

    //ให้รูปภาพโชว์เมื่อคลิก Change
    const [selectedImage1, setSelectedImage1] = useState(null);
    const [reselectedImage1, resetSelectedImage1] = useState(null);
    const handleFileChange1 = (e) => {
        if (e.target.files) {
            setSelectedImage1(e.target.files[0]);
        }
    };

    //ให้รูปภาพโชว์เมื่อคลิก Change
    const [selectedImage2, setSelectedImage2] = useState(null);
    const [reselectedImage2, resetSelectedImage2] = useState(null);
    const handleFileChange2 = (e) => {
        if (e.target.files) {
            setSelectedImage2(e.target.files[0]);
        }
    };
    //ให้รูปภาพโชว์เมื่อคลิก Change
    const [selectedImage3, setSelectedImage3] = useState(null);
    const [reselectedImage3, resetSelectedImage3] = useState(null);
    const handleFileChange3 = (e) => {
        if (e.target.files) {
            setSelectedImage3(e.target.files[0]);
        }
    };
    //ให้รูปภาพโชว์เมื่อคลิก Change
    const [selectedImage4, setSelectedImage4] = useState(null);
    const [reselectedImage4, resetSelectedImage4] = useState(null);
    const handleFileChange4 = (e) => {
        if (e.target.files) {
            setSelectedImage4(e.target.files[0]);
        }
    };

    {/**text ปุ่ม ศิลปิน */ }
    const [candidateNamekm21, setArtistName2] = useState('')
    const [reartistName2, resetArtistName2] = useState('') //เมื่อคลิก ปุ่ม change
    const [candidateNamekm22, setArtistName3] = useState('')
    const [reartistName3, resetArtistName3] = useState('') //เมื่อคลิก ปุ่ม change
    const [candidateNamekm23, setArtistName4] = useState('')
    const [reartistName4, resetArtistName4] = useState('') //เมื่อคลิก ปุ่ม change
    const [candidateNamekm24, setArtistName5] = useState('')
    const [reartistName5, resetArtistName5] = useState('') //เมื่อคลิก ปุ่ม change

    //event handleClick คนที่ 1 เมื่อคลิกปุ่ม change จะเปลี่ยนข้อความและรูปภาพ
    const handleClickChange1 = async (event) => {
        //ชื่อศิลปินที่จะลิ้งไปหน้าโหวต
        resetArtistName2(candidateNamekm21)
        if (selectedImage1) {
            resetSelectedImage1(selectedImage1); // เปลี่ยนรูปภาพโดยใช้ URL ที่เก็บไว้
        }

        //รูปศิลปินอัพโหวตเข้าเซิร์ฟเวอร์ backend
        event.preventDefault();
        try {

            const formData = new FormData();
            formData.append('avatarkm21', selectedImage1); // Append the selected image to the FormData object
            const response = await axios.post('http://localhost:5000/profilekm21', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (!selectedImage1) {
                console.log('please input File')
                return
            }

            // Handle successful response
            console.log('File uploaded successfully:', response.data);

        } catch (error) {
            // Handle errors
            console.error('Error uploading file:', error);
        }

        try {

            const responseNamekm21 = await axios.post('http://localhost:5000/auth/candidatekm21',
                { candidateNamekm21 }
                , {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

            if (!candidateNamekm21) {
                console.log('please input Name')
                return
            }

            // Handle successful response
            console.log('Name uploaded successfully:', responseNamekm21.data.candidateNamekm21);
            resetArtistName2(responseNamekm21.data.candidateNamekm21)

        } catch (error) {
            // Handle errors
            console.error('Error input Name:', error);
        }


        try {

            const getresponseNamekm21 = await axios.get('http://localhost:5000/getcandidatekm21', {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });

            // Handle successful response
            console.log('Name get successfully:', getresponseNamekm21.data.latestCandidateId);
            resetArtistName2(getresponseNamekm21.data.latestCandidateId)

        } catch (error) {
            // Handle errors
            console.error('Error get Name:', error);
        }

        try {

            const response2 = await axios.get('http://localhost:5000/profilekm21', {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });
            if (!response2.data.url) {
                console.log('No data');
            }
            // Handle successful response
            console.log('File uploaded successfully:', response2.data.url);
            resetSelectedImage1(response2.data.url)

        } catch (error) {
            // Handle errors
            console.error('Error showing file:', error);
        }



    }


    //event handleClick คนที่ 2 เมื่อคลิกปุ่ม change จะเปลี่ยนข้อความและรูปภาพ
    const handleClickChange2 = async (event) => {
        resetArtistName3(candidateNamekm22)
        if (selectedImage2) {
            resetSelectedImage2(selectedImage2); // เปลี่ยนรูปภาพโดยใช้ URL ที่เก็บไว้
        }

        //รูปศิลปินอัพโหวตเข้าเซิร์ฟเวอร์ backend
        event.preventDefault();
        try {

            const formData = new FormData();
            formData.append('avatarkm22', selectedImage2); // Append the selected image to the FormData object
            const response = await axios.post('http://localhost:5000/profilekm22', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (!selectedImage2) {
                console.log('please input File')
                return
            }

            // Handle successful response
            console.log('File uploaded successfully:', response.data);

        } catch (error) {
            // Handle errors
            console.error('Error uploading file:', error);
        }

        try {

            const response2 = await axios.get('http://localhost:5000/profilekm22', {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });
            if (!response2.data.url) {
                console.log('No data');
            }
            // Handle successful response
            console.log('File uploaded successfully:', response2.data.url);
            resetSelectedImage2(response2.data.url)

        } catch (error) {
            // Handle errors
            console.error('Error showing file:', error);
        }

        try {

            const responseNamekm22 = await axios.post('http://localhost:5000/auth/candidatekm22',
                { candidateNamekm22 }
                , {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

            if (!candidateNamekm22) {
                console.log('please input Name')
                return
            }

            // Handle successful response
            console.log('Name uploaded successfully:', responseNamekm22.data.candidateNamekm22);
            resetArtistName3(responseNamekm22.data.candidateNamekm22)

        } catch (error) {
            // Handle errors
            console.error('Error input Name:', error);
        }

        try {

            const getresponseNamekm22 = await axios.get('http://localhost:5000/getcandidatekm22', {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });

            // Handle successful response
            console.log('Name get successfully:', getresponseNamekm22.data.latestCandidateId);
            resetArtistName3(getresponseNamekm22.data.latestCandidateId)

        } catch (error) {
            // Handle errors
            console.error('Error get Name:', error);
        }
    }

    //event handleClick คนที่ 3 เมื่อคลิกปุ่ม change จะเปลี่ยนข้อความและรูปภาพ
    const handleClickChange3 = async (event) => {
        resetArtistName4(candidateNamekm23)
        if (selectedImage3) {
            resetSelectedImage3(selectedImage3); // เปลี่ยนรูปภาพโดยใช้ URL ที่เก็บไว้
        }
        //รูปศิลปินอัพโหวตเข้าเซิร์ฟเวอร์ backend
        event.preventDefault();
        try {

            const formData = new FormData();
            formData.append('avatarkm23', selectedImage3); // Append the selected image to the FormData object
            const response = await axios.post('http://localhost:5000/profilekm23', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (!selectedImage3) {
                console.log('please input File')
                return
            }

            // Handle successful response
            console.log('File uploaded successfully:', response.data);


        } catch (error) {
            // Handle errors
            console.error('Error uploading file:', error);
        }

        try {

            const response2 = await axios.get('http://localhost:5000/profilekm23', {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });
            if (!response2.data.url) {
                console.log('No data');
            }
            // Handle successful response
            console.log('File uploaded successfully:', response2.data.url);
            resetSelectedImage3(response2.data.url)

        } catch (error) {
            // Handle errors
            console.error('Error showing file:', error);
        }

        try {

            const responseNamekm23 = await axios.post('http://localhost:5000/auth/candidatekm23',
                { candidateNamekm23 }
                , {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

            if (!candidateNamekm23) {
                console.log('please input Name')
                return
            }

            // Handle successful response
            console.log('Name uploaded successfully:', responseNamekm23.data.candidateNamekm23);
            resetArtistName4(responseNamekm23.data.candidateNamekm23)

        } catch (error) {
            // Handle errors
            console.error('Error input Name:', error);
        }

        try {

            const getresponseNamekm23 = await axios.get('http://localhost:5000/getcandidatekm23', {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });

            // Handle successful response
            console.log('Name get successfully:', getresponseNamekm23.data.latestCandidateId);
            resetArtistName4(getresponseNamekm23.data.latestCandidateId)

        } catch (error) {
            // Handle errors
            console.error('Error get Name:', error);
        }
    }
    //event handleClick คนที่ 4 เมื่อคลิกปุ่ม change จะเปลี่ยนข้อความและรูปภาพ
    const handleClickChange4 = async (event) => {
        resetArtistName5(candidateNamekm24)
        if (selectedImage4) {
            resetSelectedImage4(selectedImage4); // เปลี่ยนรูปภาพโดยใช้ URL ที่เก็บไว้
        }
        //รูปศิลปินอัพโหวตเข้าเซิร์ฟเวอร์ backend
        event.preventDefault();
        try {

            const formData = new FormData();
            formData.append('avatarkm24', selectedImage4); // Append the selected image to the FormData object
            const response = await axios.post('http://localhost:5000/profilekm24', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (!selectedImage4) {
                console.log('please input File')
                return
            }

            // Handle successful response
            console.log('File uploaded successfully:', response.data);

        } catch (error) {
            // Handle errors
            console.error('Error uploading file:', error);
        }

        try {

            const response2 = await axios.get('http://localhost:5000/profilekm24', {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });
            if (!response2.data.url) {
                console.log('No data');
            }
            // Handle successful response
            console.log('File uploaded successfully:', response2.data.url);
            resetSelectedImage4(response2.data.url)

        } catch (error) {
            // Handle errors
            console.error('Error showing file:', error);
        }

        try {

            const responseNamekm24 = await axios.post('http://localhost:5000/auth/candidatekm24',
                { candidateNamekm24 }
                , {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

            if (!candidateNamekm24) {
                console.log('please input Name')
                return
            }

            // Handle successful response
            console.log('Name uploaded successfully:', responseNamekm24.data.candidateNamekm24);
            resetArtistName5(responseNamekm24.data.candidateNamekm24)

        } catch (error) {
            // Handle errors
            console.error('Error input Name:', error);
        }

        try {

            const getresponseNamekm24 = await axios.get('http://localhost:5000/getcandidatekm24', {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });

            // Handle successful response
            console.log('Name get successfully:', getresponseNamekm24.data.latestCandidateId);
            resetArtistName5(getresponseNamekm24.data.latestCandidateId)

        } catch (error) {
            // Handle errors
            console.error('Error get Name:', error);
        }
    }

    useEffect(() => {

        //ให้โชว์รูปภาพและข้อความทุกครั้งเมื่อเปิดหน้าเพจ
        const fetchImagekm21 = async () => {
            try {
                const response = await axios.get('http://localhost:5000/profilekm21', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                if (!response.data.url) {
                    console.log('No data');
                } else {
                    console.log('File uploaded successfully:', response.data.url);
                    resetSelectedImage1(response.data.url);
                }
            } catch (error) {
                console.error('Error showing file:', error);
            }

            try {

                const getresponseNamekm21 = await axios.get('http://localhost:5000/getcandidatekm21', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                // Handle successful response
                console.log('Name get successfully:', getresponseNamekm21.data.latestCandidateId);
                resetArtistName2(getresponseNamekm21.data.latestCandidateId)

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }
        };

        const fetchImagekm22 = async () => {
            try {
                const response = await axios.get('http://localhost:5000/profilekm22', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                if (!response.data.url) {
                    console.log('No data');
                } else {
                    console.log('File uploaded successfully:', response.data.url);
                    resetSelectedImage2(response.data.url);
                }
            } catch (error) {
                console.error('Error showing file:', error);
            }

            try {

                const getresponseNamekm22 = await axios.get('http://localhost:5000/getcandidatekm22', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                // Handle successful response
                console.log('Name get successfully:', getresponseNamekm22.data.latestCandidateId);
                resetArtistName3(getresponseNamekm22.data.latestCandidateId)

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }
        };

        const fetchImagekm23 = async () => {
            try {
                const response = await axios.get('http://localhost:5000/profilekm23', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                if (!response.data.url) {
                    console.log('No data');
                } else {
                    console.log('File uploaded successfully:', response.data.url);
                    resetSelectedImage3(response.data.url);
                }
            } catch (error) {
                console.error('Error showing file:', error);
            }

            try {

                const getresponseNamekm23 = await axios.get('http://localhost:5000/getcandidatekm23', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                // Handle successful response
                console.log('Name get successfully:', getresponseNamekm23.data.latestCandidateId);
                resetArtistName4(getresponseNamekm23.data.latestCandidateId)

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }
        };

        const fetchImagekm24 = async () => {
            try {
                const response = await axios.get('http://localhost:5000/profilekm24', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                if (!response.data.url) {
                    console.log('No data');
                } else {
                    console.log('File uploaded successfully:', response.data.url);
                    resetSelectedImage4(response.data.url);
                }
            } catch (error) {
                console.error('Error showing file:', error);
            }

            try {

                const getresponseNamekm24 = await axios.get('http://localhost:5000/getcandidatekm24', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                // Handle successful response
                console.log('Name get successfully:', getresponseNamekm24.data.latestCandidateId);
                resetArtistName5(getresponseNamekm24.data.latestCandidateId)

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }
        };

        fetchImagekm21();
        fetchImagekm22();
        fetchImagekm23();
        fetchImagekm24();
    }, []); // ระบุว่า useEffect ควรถูกเรียกใช้เฉพาะครั้งแรกเท่านั้น

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


                    {/**กรอบแถวสาขา */}
                    <div className='flex flex-row '>

                        {/**กรอบรหัสสาขา */}
                        <div className='w-[300px] h-[300px]'>
                            {/**ข้างในสาขา */}
                            <div className='absolute w-[300px] h-[300px]'>
                                <img className='w-[300px] h-[300px] ' src='rainy-night-and-clouds-with-moon-16539.svg'></img>
                                <div className='absolute top-[120px] left-[100px] text-[50px] font-semibold font-Mitr'>KM2</div>
                            </div>
                        </div>

                        {/**กรอบชื่อสาขา */}
                        <div className='w-[300px] h-[300px]'>
                            {/**ข้างในชื่อสาขา */}
                            <div className='absolute md:top-[500px] top-[600px] w-[320px] h-[300px]'>
                                <div className='text-[40px]  text-black drop-shadow-[2px_1px_rgba(0,0,0,0.2)] font-Mitr'>
                                    คู่จิ้นหญิงยอดนิยม</div>
                            </div>
                        </div>
                    </div>

                    {/**กรอบรูปผู้เข้าชิงแถว 1 */ }
<div className='flex md:flex-row mt-[30px] flex-col'>

{/**กรอบผู้เข้าชิงแถว 1 คนที่ 1 */}
<div className='md:mr-[140px] flex flex-col'>


    {/**กรอบรูปผู้เข้าชิงคนที่ 1 */}
    <div className='mb-[40px] w-[300px] h-[400px]'>
        {/**ข้างในรูปผู้เข้าชิงแถว 1 คนที่ 1 */}
        <div className='mt-[2px] w-[300px] h-[400px] shadow-[10px_10px_rgba(0,0,0,0.2)] hover:shadow-[10px_10px_30px_rgb(229,242,5)]'>
            {/**โชว์รูปที่ดึงมาจาก ไดร์ฟ */}
            {reselectedImage1 && <img className='bg-cover' src={reselectedImage1} alt='รูปภาพที่เลือก' />}
        </div>

    </div>

    {/**เลือกไฟล์รูป 1 */}

    {(checkAddmin == 1) &&
        //เก็บรูปเข้าไดร์ฟผ่าน backend multer
        <form action="/profilekm21" method="post" enctype="multipart/form-data" onSubmit={handleClickChange1}>
            <div className='flex flex-col'>
                                        <div className='text-[8px]'>image size : 300x400 px</div>
            <input type='file' onChange={handleFileChange1} name="avatarkm21" key='avatarkm21' className='w-[150px] h-[23px] text-[8px]'></input>
    </div></form>}

    <div className='flex flex-row self-start'>
        {/**ให้ input แล้วเก็บค่าให้ให้ปุ่ม change ตอนเปลี่ยน */}
        {/**เฉพาะแอดมินหรือ userid == 1 ถึงจะเห็นและเปลี่ยนรูป/ข้อความได้ */}
        {(checkAddmin == 1) &&
            //เก็บ ชื่อศิลปินเข้า backend schema
            <form action='#' onSubmit={setArtistName2} >
                <input type='text' key='candidateNamekm21' required className='border-none w-[70px] h-[20px] px-[2px] mr-[5px]'
                    value={candidateNamekm21} onChange={(event) => setArtistName2(event.target.value)}></input></form>}
        {/**ปุ่ม change คลิกแล้วจะเปลี่ยนรูปและชื่อศิลปิน*/}
        {(checkAddmin == 1) && <button id="addButton" type='submit' onClick={handleClickChange1} className='self-start w-[50px] h-[23px] rounded-[18px] bg-red-500 flex justify-center items-center text-white text-[10px]'>Change</button>}
    </div>


    {/**ปุ่ม ผู้เข้าชิงคนที่ 1 */}
    <button className='font-Mitr text-[22px] mb-[40px] w-[300px] h-[60px] bg-none opacity-100 border-black border-[2px] rounded-[30px] hover:bg-black hover:opacity-25 hover:text-white hover:border-white'
        onClick={() => !!isLoggedIn ? handleArtistClick(reartistName2) : navigate('/login')}
    >{reartistName2}</button> {/**เมื่อคลิกปุ่ม change จะเปลี่ยนข้อความของปุ่มนี้ด้วย */}


</div>

{/**กรอบผู้เข้าชิงแถว 1 คนที่ 2 */}
<div className='flex flex-col'>

    {/**กรอบรูปผู้เข้าชิงคนที่ 2 */}
    <div className='mb-[40px] w-[300px] h-[400px]flex flex-col'>
        {/**ข้างในรูปผู้เข้าชิงคนที่ 2 */}
        <div className='mt-[2px] w-[300px] h-[400px] shadow-[10px_10px_rgba(0,0,0,0.2)] hover:shadow-[10px_10px_30px_rgb(229,242,5)]'>
            {/**โชว์รูปที่ดึงมาจาก ไดร์ฟ */}
            {reselectedImage2 && <img className='bg-cover' src={reselectedImage2} alt='รูปภาพที่เลือก' />}
        </div>
    </div>

    {/**เลือกไฟล์รูป 2 */}
    {(checkAddmin == 1) &&
        //เก็บรูปเข้าไดร์ฟผ่าน backend multer
        <form action="/profilekm22" method="post" enctype="multipart/form-data" onSubmit={handleClickChange2}>
            <div className='flex flex-col'>
                                        <div className='text-[8px]'>image size : 300x400 px</div>
            <input type='file' onChange={handleFileChange2} name="avatarkm22" key='avatarkm22' className='w-[150px] h-[23px] text-[8px]'></input>
    </div></form>}
    <div className='flex flex-row self-start'>
        {/**ให้ input แล้วเก็บค่าให้ให้ปุ่ม change ตอนเปลี่ยน */}
        {/**เฉพาะแอดมินหรือ userid == 1 ถึงจะเห็นและเปลี่ยนรูป/ข้อความได้ */}
        {(checkAddmin == 1) &&
            //เก็บ ชื่อศิลปินเข้า backend schema
            <form action='#' onSubmit={setArtistName3} >
                <input type='text' key='candidateNamekm22' required className='border-none w-[70px] h-[20px] px-[2px] mr-[5px]'
                    value={candidateNamekm22} onChange={(event) => setArtistName3(event.target.value)}></input></form>}
        {/**ปุ่ม change คลิกแล้วจะเปลี่ยนรูปและชื่อศิลปิน*/}
        {(checkAddmin == 1) && <button id="addButton" onClick={handleClickChange2} className='self-start w-[50px] h-[23px] rounded-[18px] bg-red-500 flex justify-center items-center text-white text-[10px]'>Change</button>}
    </div>

    {/** ปุ่ม ผู้เข้าชิงคนที่ 2 */}
    <button className='font-Mitr text-[22px] mb-[40px] w-[300px] h-[60px] bg-none border-black border-[2px] rounded-[30px] hover:bg-black hover:opacity-25 hover:text-white hover:border-white'
        onClick={() => !!isLoggedIn ? handleArtistClick(reartistName3) : navigate('/login')}
    >{reartistName3}</button>{/**เมื่อคลิกปุ่ม change จะเปลี่ยนข้อความของปุ่มนี้ด้วย */}

</div>
</div>



{/**กรอบรูปผู้เข้าชิงแถว 2 */ }
<div className='flex md:flex-row flex-col'>

{/**กรอบผู้เข้าชิงแถว 2 คนที่ 3 */}
<div className='md:mr-[140px] flex flex-col'>

    {/**กรอบรูปผู้เข้าชิงคนที่ 3 */}
    <div className='mb-[40px] w-[300px] h-[400px]'>
        {/**ข้างในรูปผู้เข้าชิงคนที่ 3 */}
        <div className='mt-[2px] w-[300px] h-[400px] shadow-[10px_10px_rgba(0,0,0,0.2)] hover:shadow-[10px_10px_30px_rgb(229,242,5)]'>
            {/**โชว์รูปที่ดึงมาจาก ไดร์ฟ */}
            {reselectedImage3 && <img className='bg-cover' src={reselectedImage3} alt='รูปภาพที่เลือก' />}
        </div>
    </div>

    {/**เลือกไฟล์รูป 3 */}
    {(checkAddmin == 1) &&
        //เก็บรูปเข้าไดร์ฟผ่าน backend multer
        <form action="/profilekm23" method="post" enctype="multipart/form-data" onSubmit={handleClickChange3}>
            <div className='flex flex-col'>
                                        <div className='text-[8px]'>image size : 300x400 px</div>
            <input type='file' onChange={handleFileChange3} name="avatarkm23" key='avatarkm23' className='w-[150px] h-[23px] text-[8px]'></input>
    </div></form>}
    <div className='flex flex-row self-start'>
        {/**ให้ input แล้วเก็บค่าให้ให้ปุ่ม change ตอนเปลี่ยน */}
        {/**เฉพาะแอดมินหรือ userid == 1 ถึงจะเห็นและเปลี่ยนรูป/ข้อความได้ */}
        {(checkAddmin == 1) &&
            //เก็บ ชื่อศิลปินเข้า backend schema
            <form action='#' onSubmit={setArtistName4} >
                <input type='text' key='candidateNamekm23' required className='border-none w-[70px] h-[20px] px-[2px] mr-[5px]'
                    value={candidateNamekm23} onChange={(event) => setArtistName4(event.target.value)}></input></form>}
        {/**ปุ่ม change คลิกแล้วจะเปลี่ยนรูปและชื่อศิลปิน*/}
        {(checkAddmin == 1) && <button id="addButton" onClick={handleClickChange3} className='self-start w-[50px] h-[23px] rounded-[18px] bg-red-500 flex justify-center items-center text-white text-[10px]'>Change</button>}
    </div>

    {/**ปุ่ม ผู้เข้าชิงคนที่ 3 */}
    <button className='font-Mitr text-[22px] mb-[40px] w-[300px] h-[60px] bg-none border-black border-[2px] rounded-[30px] hover:bg-black hover:opacity-25 hover:text-white hover:border-white'
        onClick={() => !!isLoggedIn ? handleArtistClick(reartistName4) : navigate('/login')}
    >{reartistName4}</button>{/**เมื่อคลิกปุ่ม change จะเปลี่ยนข้อความของปุ่มนี้ด้วย */}

</div>

{/**กรอบผู้เข้าชิงแถว 2 คนที่ 4 */}
<div className='flex flex-col'>


    {/**กรอบรูปผู้เข้าชิงคนที่ 4 */}
    <div className='mb-[40px] w-[300px] h-[400px]flex flex-col'>
        {/**ข้างในรูปผู้เข้าชิงคนที่ 4 */}
        <div className='mt-[2px] w-[300px] h-[400px] shadow-[10px_10px_rgba(0,0,0,0.2)] hover:shadow-[10px_10px_30px_rgb(229,242,5)]'>
            {/**โชว์รูปที่ดึงมาจาก ไดร์ฟ */}
            {reselectedImage4 && <img className='bg-cover' src={reselectedImage4} alt='รูปภาพที่เลือก' />}
        </div>
    </div>

    {/**เลือกไฟล์รูป 4 */}
    {(checkAddmin == 1) &&
        //เก็บรูปเข้าไดร์ฟผ่าน backend multer
        <form action="/profilekm24" method="post" enctype="multipart/form-data" onSubmit={handleClickChange4}>
            <div className='flex flex-col'>
                                        <div className='text-[8px]'>image size : 300x400 px</div>
            <input type='file' onChange={handleFileChange4} name="avatarkm24" key='avatarkm24' className='w-[150px] h-[23px] text-[8px]'></input>
    </div></form>}
    <div className='flex flex-row self-start'>
        {/**ให้ input แล้วเก็บค่าให้ให้ปุ่ม change ตอนเปลี่ยน */}
        {/**เฉพาะแอดมินหรือ userid == 1 ถึงจะเห็นและเปลี่ยนรูป/ข้อความได้ */}
        {(checkAddmin == 1) &&
            //เก็บ ชื่อศิลปินเข้า backend schema
            <form action='#' onSubmit={setArtistName5} >
                <input type='text' key='candidateNamekm24' required className='border-none w-[70px] h-[20px] px-[2px] mr-[5px]'
                    value={candidateNamekm24} onChange={(event) => setArtistName5(event.target.value)}></input></form>}
        {/**ปุ่ม change คลิกแล้วจะเปลี่ยนรูปและชื่อศิลปิน*/}
        {(checkAddmin == 1) && <button id="addButton" onClick={handleClickChange4} className='self-start w-[50px] h-[23px] rounded-[18px] bg-red-500 flex justify-center items-center text-white text-[10px]'>Change</button>}
    </div>

    {/** ปุ่ม ผู้เข้าชิงคนที่ 4 */}

    <button className='font-Mitr text-[22px] mb-[40px] w-[300px] h-[60px] bg-none border-black border-[2px] rounded-[30px] hover:bg-black hover:opacity-25 hover:text-white hover:border-white'
        onClick={() => !!isLoggedIn ? handleArtistClick(reartistName5) : navigate('/login')}
    >{reartistName5}</button>{/**เมื่อคลิกปุ่ม change จะเปลี่ยนข้อความของปุ่มนี้ด้วย */}

</div>
</div>



                </div>
            </div>
        </div>
    );
}
export default Second;