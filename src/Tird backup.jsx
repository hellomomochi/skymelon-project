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
            <form action="/profilekm11" method="post" enctype="multipart/form-data" onSubmit={handleClickChange1}>
                <input type='file' onChange={handleFileChange1} name="avatarkm11" key='avatarkm11' className='w-[150px] h-[23px] text-[8px]'></input></form>
        }

        <div className='flex flex-row self-start'>
            {/**ให้ input แล้วเก็บค่าให้ให้ปุ่ม change ตอนเปลี่ยน */}
            {/**เฉพาะแอดมินหรือ userid == 1 ถึงจะเห็นและเปลี่ยนรูป/ข้อความได้ */}
            {(checkAddmin == 1) &&
                //เก็บ ชื่อศิลปินเข้า backend schema
                <form action='#' onSubmit={setArtistName2} >
                    <input type='text' key='candidateNamekm31' required className='border-none w-[70px] h-[20px] px-[2px] mr-[5px]'
                        value={candidateNamekm31} onChange={(event) => setArtistName2(event.target.value)}></input></form>}
            {/**ปุ่ม change คลิกแล้วจะเปลี่ยนรูปและชื่อศิลปิน*/}
            {(checkAddmin == 1) && <button id="addButton" type='submit' onClick={handleClickChange1} className='self-start w-[50px] h-[23px] rounded-[18px] bg-red-500 flex justify-center items-center text-white text-[10px]'>Change</button>}
        </div>


        {/**ปุ่ม ผู้เข้าชิงคนที่ 1 */}
        <button className='mb-[40px] w-[300px] h-[60px] bg-none opacity-100 border-black border-[2px] rounded-[30px] hover:bg-black hover:opacity-25 hover:text-white hover:border-white'
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
            <form action="/profilekm32" method="post" enctype="multipart/form-data" onSubmit={handleClickChange2}>
                <input type='file' onChange={handleFileChange2} name="avatarkm32" key='avatarkm32' className='w-[150px] h-[23px] text-[8px]'></input></form>}
        <div className='flex flex-row self-start'>
            {/**ให้ input แล้วเก็บค่าให้ให้ปุ่ม change ตอนเปลี่ยน */}
            {/**เฉพาะแอดมินหรือ userid == 1 ถึงจะเห็นและเปลี่ยนรูป/ข้อความได้ */}
            {(checkAddmin == 1) &&
                //เก็บ ชื่อศิลปินเข้า backend schema
                <form action='#' onSubmit={setArtistName3} >
                    <input type='text' key='candidateNamekm32' required className='border-none w-[70px] h-[20px] px-[2px] mr-[5px]'
                        value={candidateNamekm32} onChange={(event) => setArtistName3(event.target.value)}></input></form>}
            {/**ปุ่ม change คลิกแล้วจะเปลี่ยนรูปและชื่อศิลปิน*/}
            {(checkAddmin == 1) && <button id="addButton" onClick={handleClickChange2} className='self-start w-[50px] h-[23px] rounded-[18px] bg-red-500 flex justify-center items-center text-white text-[10px]'>Change</button>}
        </div>

        {/** ปุ่ม ผู้เข้าชิงคนที่ 2 */}
        <button className='mb-[40px] w-[300px] h-[60px] bg-none border-black border-[2px] rounded-[30px] hover:bg-black hover:opacity-25 hover:text-white hover:border-white'
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
            <form action="/profilekm33" method="post" enctype="multipart/form-data" onSubmit={handleClickChange3}>
                <input type='file' onChange={handleFileChange3} name="avatarkm33" key='avatarkm33' className='w-[150px] h-[23px] text-[8px]'></input></form>}
        <div className='flex flex-row self-start'>
            {/**ให้ input แล้วเก็บค่าให้ให้ปุ่ม change ตอนเปลี่ยน */}
            {/**เฉพาะแอดมินหรือ userid == 1 ถึงจะเห็นและเปลี่ยนรูป/ข้อความได้ */}
            {(checkAddmin == 1) &&
                //เก็บ ชื่อศิลปินเข้า backend schema
                <form action='#' onSubmit={setArtistName4} >
                    <input type='text' key='candidateNamekm33' required className='border-none w-[70px] h-[20px] px-[2px] mr-[5px]'
                        value={candidateNamekm33} onChange={(event) => setArtistName4(event.target.value)}></input></form>}
            {/**ปุ่ม change คลิกแล้วจะเปลี่ยนรูปและชื่อศิลปิน*/}
            {(checkAddmin == 1) && <button id="addButton" onClick={handleClickChange3} className='self-start w-[50px] h-[23px] rounded-[18px] bg-red-500 flex justify-center items-center text-white text-[10px]'>Change</button>}
        </div>

        {/**ปุ่ม ผู้เข้าชิงคนที่ 3 */}
        <button className='mb-[40px] w-[300px] h-[60px] bg-none border-black border-[2px] rounded-[30px] hover:bg-black hover:opacity-25 hover:text-white hover:border-white'
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
            <form action="/profilekm34" method="post" enctype="multipart/form-data" onSubmit={handleClickChange4}>
                <input type='file' onChange={handleFileChange4} name="avatarkm34" key='avatarkm34' className='w-[150px] h-[23px] text-[8px]'></input></form>}
        <div className='flex flex-row self-start'>
            {/**ให้ input แล้วเก็บค่าให้ให้ปุ่ม change ตอนเปลี่ยน */}
            {/**เฉพาะแอดมินหรือ userid == 1 ถึงจะเห็นและเปลี่ยนรูป/ข้อความได้ */}
            {(checkAddmin == 1) &&
                //เก็บ ชื่อศิลปินเข้า backend schema
                <form action='#' onSubmit={setArtistName5} >
                    <input type='text' key='candidateNamekm34' required className='border-none w-[70px] h-[20px] px-[2px] mr-[5px]'
                        value={candidateNamekm34} onChange={(event) => setArtistName5(event.target.value)}></input></form>}
            {/**ปุ่ม change คลิกแล้วจะเปลี่ยนรูปและชื่อศิลปิน*/}
            {(checkAddmin == 1) && <button id="addButton" onClick={handleClickChange4} className='self-start w-[50px] h-[23px] rounded-[18px] bg-red-500 flex justify-center items-center text-white text-[10px]'>Change</button>}
        </div>

        {/** ปุ่ม ผู้เข้าชิงคนที่ 4 */}

        <button className='mb-[40px] w-[300px] h-[60px] bg-none border-black border-[2px] rounded-[30px] hover:bg-black hover:opacity-25 hover:text-white hover:border-white'
            onClick={() => !!isLoggedIn ? handleArtistClick(reartistName5) : navigate('/login')}
        >{reartistName5}</button>{/**เมื่อคลิกปุ่ม change จะเปลี่ยนข้อความของปุ่มนี้ด้วย */}

    </div>
</div>
