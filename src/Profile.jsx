import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
//ติดตั้ง npm install @headlessui/react --legacy-peer-deps
import { Link } from 'react-router-dom';


function Fprofile() {


    const [darf1, setDarf1] = useState(false)
    //เคลื่อนที่เมื่อเลื่อน
    const [darf2, setDarf2] = useState(false)
    const [darf3, setDarf3] = useState(false)

    //เลื่อนแบบพิมพ์ดีด
    const dev = 'Beginning of </DEV> . . . .';
    const chars = dev.split('');
    const [currentDev, setCurrentDev] = useState(0);

    useEffect(() => {
        //ตั้งต้นให้ Darf1 เคลื่อนให้เป็น true
        setDarf1(true)

        //ตั้งต้นให้ Darf2 จับการเคลื่อนที่ของแกน Y
        const handleScrollslideWho = () => {
            const scrollTop = window.scrollY;
            if (scrollTop >= 500) { //ขยับแกน Y มากกว่า 500 จากบนสุดเคลื่อนให้เป็น true
                setDarf2(true);
            } else {
                setDarf2(false); //อื่นๆ อยู่ที่ตำแหน่งเดิม
            }
        };

        window.addEventListener('scroll', handleScrollslideWho);

        //ตั้งต้นให้ Darf3 จับการเคลื่อนที่ของแกน Y
        const handleScrollExperience = () => {
            const scrollTop = window.scrollY;
            if (scrollTop >= 800) { //ขยับแกน Y มากกว่า 800 จากบนสุดเคลื่อนให้เป็น true
                setDarf3(true);
            } else {
                setDarf3(false); //อื่นๆ อยู่ที่ตำแหน่งเดิม
            }
        };

        window.addEventListener('scroll', handleScrollExperience);

        //ตั้งค่าให้เลื่อนแบบพิมพ์ดีด
        const interval = setInterval(() => { //setInterval : คำสั่งวนซ้ำ
            setCurrentDev((prevChar) => (prevChar + 1) % chars.length);
        }, 200); //จะทำซ้ำๆทุกๆ 200ms

        return () => {
            window.removeEventListener('scroll', handleScrollslideWho)
            window.removeEventListener('scroll', handleScrollExperience);
            clearInterval(interval)
        }


    }, [])


    {/**คลิกเลื่อนหาหน้าที่ต้องการ */ }
    {/**WhoIsMe */ }
    const handleScrollToWhoIsMe = () => {
        const element = document.getElementById('who-is-me-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    {/**คลิกเลื่อนหาหน้าที่ต้องการ */ }
    {/**Experience */ }
    const handleScrollToExperience = () => {
        const element = document.getElementById('Experience-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    {/**คลิกเลื่อนหาหน้าที่ต้องการ */ }
    {/**DEV */ }
    const handleScrollToDEV = () => {
        const element = document.getElementById('DEV-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    {/**คลิกเลื่อนหาหน้าที่ต้องการ */ }
    {/**Skill */ }
    const handleScrollToSkill = () => {
        const element = document.getElementById('Skill-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    {/**คลิกเลื่อนหาหน้าที่ต้องการ */ }
    {/**Project */ }
    const handleScrollToProject = () => {
        const element = document.getElementById('Project-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    {/**คลิกเลื่อนหาหน้าที่ต้องการ */ }
    {/**Contact */ }
    const handleScrollToContact = () => {
        const element = document.getElementById('Contact-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (
        <div className='w-full flex flex-col'>

            {/**แถว1 */}
            <div className='h-[20px] bg-green-400'></div>
            <div className='h-[20px] bg-red-400'></div>
            <div className='w-[1200px] self-center'>
                <div className='flex flex-row items-end justify-end h-[60px] '>
                    <div className='w-[300px] flex justify-center text-[32px] transition duration-0 md:duration-150 text-[#C47CFF] font-Comfortaa'>Sirapassorn</div>

                    {/**ปุ่ม */}
                    <div className='flex justify-end w-[800px] flex-row mx-[20px]'>
                        <button className='mx-[10px] text-[20px] hover:text-[#C47CFF] font-Comfortaa' onClick={handleScrollToWhoIsMe}>Who is me ?</button>
                        <button className='mx-[10px] text-[20px] hover:text-[#C47CFF] font-Comfortaa' onClick={handleScrollToExperience}>Experience</button>
                        <button className='mx-[10px] text-[20px] hover:text-[#C47CFF] font-Comfortaa' onClick={handleScrollToDEV}>Beginning of DEV</button>
                        <button className='mx-[10px] text-[20px] hover:text-[#C47CFF] font-Comfortaa' onClick={handleScrollToSkill}>Skill</button>
                        <button className='mx-[10px] text-[20px] hover:text-[#C47CFF] font-Comfortaa' onClick={handleScrollToProject}>Project</button>
                        <button className='mx-[10px] text-[20px] hover:text-[#C47CFF] font-Comfortaa' onClick={handleScrollToContact}>Contact</button>
                    </div>
                </div>
            </div>


            {/**ดราฟ1 */}
            <div className='h-[460px] flex flex-row bg-red-200 justify-center items-center'>


                <div className='h-[440px] flex flex-row justify-center items-center bg-slate-400'>

                    <div className='flex flex-col items-center justify-center w-[300px] h-[400px] text-blue-200 text-[36px] bg-slate-500'>
                        {/**เลื่อน darf11 */}
                        <Transition
                            show={darf1}
          /**action */ enter="transition-transform duration-[1000ms] ease-out"
          /**ก่อน */ enterFrom="-translate-y-[60px]"
          /**หลัง */ enterTo="translate-y-0"
                            className="darf11" //กำหนด contrainer มาครอบ Transition
                        >
                            <div className='darf11'>
                                <div className=' text-red-200 text-[44px]'>It's</div>
                                <div className=' mt-[20px] text-red-200 text-[36px] font-Prompt'>My</div>
                                <div className=' mt-[20px] text-red-200 text-[46px] font-Prompt'>Personal</div>
                                <div className=' mt-[20px] text-red-200 text-[36px] font-Prompt'>Profile</div>
                            </div>
                        </Transition>
                    </div>
                    {/**รูปต้วเอง */}
                    <div className='bg-red-200 w-[300px] h-[400px] flex justify-center items-center'>

                        <div className='bg-red-200 w-[280px] h-[380px]'>
                            {/**เลื่อน darf12 */}
                            <Transition
                                show={darf1} /**action */ enter="transition-transform duration-[1000ms] ease-out"
                            /**ก่อน */ enterFrom="translate-y-[-50px]"
          /**หลัง */ enterTo="translate-y-[0px]"
                                className='darf12'>
                                <div className='darf12'>
                                    <img src='394251046_3783317581946539_7606980215029391644_no2.png'></img>
                                </div>
                            </Transition>
                        </div>

                    </div>
                    {/**กรอบ name */}
                    <div className='flex flex-col items-center justify-center w-[600px] h-[400px] bg-red-200'>

                        {/**name */}
                        <div className='scale-x-[100%]h-[320px] flex flex-col items-end '>

                            {/**เลื่อน darf13 */}
                            <Transition
                                show={darf1} /**action */ enter="transition-transform"
                            /**ก่อน */ enterFrom="clip-path-start"
          /**หลัง */ enterTo="clip-path-end"
                                className='transition-name darf13'>
                                <div className='darf13'>
                                    <div className='mt-[10px] text-slate-500 text-[36px] bg-yellow-200 font-Prompt w-[450px]'>Sirapassorn</div>
                                    <div className='mt-[10px] text-slate-500 text-[36px] bg-yellow-200 font-Prompt w-[450px] flex flex-row items-end'>{`On-aun (Tangmo)`}</div>
                                </div>
                            </Transition>
                            {/**เลื่อน darf14 */}
                            <Transition
                                show={darf1} /**action */ enter="transition-transform duration-[1000ms] ease-out"
                            /**ก่อน */ enterFrom="translate-y-[70px]"
          /**หลัง */ enterTo="translate-y-[0px]"
                                className='darf14'>
                                <div className='darf14'>
                                    <div className='mx-[10px] mt-[20px] text-slate-500 text-[30px] w-[500px] h-[90px] bg-yellow-200 text-center font-Prompt'>“Time is limited, So don't waste it living an unhappy life.”</div>
                                    <div className='mx-[10px] text-red-500 text-[24px] w-[500px] h-[80px] bg-yellow-200 text-center font-Prompt'>“เวลามีจำกัด เพราะฉะนั้นอย่าเสียเวลาไปกับการใช้ชีวิตที่ไม่มีความสุข”</div>
                                </div>
                            </Transition>
                        </div>

                    </div>
                </div>
            </div>

            {/**ดราฟ2 */}
            <div id="who-is-me-section" className='flex  items-center h-[100px] bg-green-200 justify-center '>

                {/**เลื่อน darf21 */}
                <Transition
                    show={darf2} /**action */ enter="transition-transform"
                            /**ก่อน */ enterFrom="clip-path-start"
          /**หลัง */ enterTo="clip-path-end"
                    className='transition-name darf21'>
                    <div className='darf21'>
                        <div className='slideWho text-[46px] font-Prompt'>Who is me ?</div>
                    </div>
                </Transition>
            </div>
            {/**กรอบ education */}
            <div className='flex flex-row justify-center items-center h-[490px] bg-orange-200'>
                {/**รูปจบการศึกษา */}
                <div className='w-[480px] h-[450]'>
                    <img src='Untitled-2.png'></img>
                </div>
                <div className='ml-[30px] w-[570px] h-[450px] bg-sky-300 flex flex-col justify-center'>

                    {/**เลื่อน darf22 */}
                    <Transition
                        show={darf2} /**action */ enter="transition-transform duration-[1000ms] ease-out"
                            /**ก่อน */ enterFrom="translate-y-[550px] rotate-[25deg]"
          /**หลัง */ enterTo="translate-y-[0px] rotate-[0deg]"
                        className='darf22'>
                        <div className='darf22'>
                            <div className='mx-[10px] text-blue-200 text-[28px] w-[550px] h-[40px] bg-slate-500 font-Prompt'>I graduated from ..</div>
                            <div className='mx-[10px]  text-blue-200 text-[18px] w-[550px] h-[30px] bg-slate-600 text-center font-Prompt'>King Mongkut's University of Technology North Bangkok. </div>
                        </div>
                    </Transition>


                    {/**เลื่อน darf23 */}
                    <Transition
                        show={darf2} /**action */ enter="transition-transform delay-300 duration-[1000ms] ease-out"
                            /**ก่อน */ enterFrom="translate-y-[350px] rotate-[25deg]"
          /**หลัง */ enterTo="translate-y-[0px] rotate-[0deg]"
                        className='darf23'>
                        <div className='darf23'>
                            <div className='mx-[10px] mt-[20px] text-blue-200 text-[24px] w-[550px] h-[40px] bg-slate-500 font-Prompt'>Belong to the College of </div>
                            <div className='mx-[10px] text-blue-200 text-[28px] w-[550px] h-[40px] bg-slate-600 text-center font-Prompt'>Industrial Technology</div>
                        </div>
                    </Transition>

                    {/**เลื่อน darf24 */}
                    <Transition
                        show={darf2} /**action */ enter="transition-transform delay-700 duration-[1000ms] ease-out"
                            /**ก่อน */ enterFrom="translate-y-[250px] rotate-[25deg]"
          /**หลัง */ enterTo="translate-y-[0px] rotate-[0deg]"
                        className='darf24'>
                        <div className='darf24'>
                            <div className='mx-[10px] text-blue-200 text-[24px] w-[550px] h-[40px] bg-slate-500 font-Prompt'>Branch about</div>
                            <div className='mx-[10px] text-blue-200 text-[28px] w-[550px] h-[40px] bg-slate-600 text-center font-Prompt'>Industrial Engineering.</div>
                        </div>
                    </Transition>

                    {/**เลื่อน darf25 */}
                    <Transition
                        show={darf2} /**action */ enter="transition-transform delay-1000 duration-[400ms] ease-out"
                            /**ก่อน */ enterFrom="text-slate-600 scale-[80%]"
          /**หลัง */ enterTo="text-white scale-[100%]"
                        className='darf25'>
                        <div className='darf25'>
                            <div className='mx-[10px] mt-[30px] text-[28px] w-[550px] h-[50px] text-center font-Prompt'>This is the beginning of adulthood !</div>
                            <div className='mx-[10px] text-[22px] w-[550px] h-[40px] text-center font-Prompt'>นี่คือจุดเริ่มต้นการเป็นผู้ใหญ่ !</div>
                        </div>
                    </Transition>
                </div>
            </div>

            {/**ดราฟ3 */}
            <div className=' bg-yellow-200 flex flex-col items-center'>
                <div id="Experience-section" className='flex  items-end text-[46px] h-[80px] bg-yellow-200 justify-center font-Prompt'>Experience</div>

                {/**เลื่อน darf31 */}
                <div className='h-[500px] bg-yellow-200 '>
                    <Transition
                        show={darf3} /**action */ enter="transition-transform duration-[1300ms] ease-out"
                            /**ก่อน */ enterFrom="translate-y-[450px]"
          /**หลัง */ enterTo="translate-y-[0px]"
                        className='flex flex-row justufy-center items-center darf31'>
                        {/**Tab1 */}
                        <div className='darf31'>
                            <div className='flex flex-col items-center m-[20px] bg-white bg-opacity-[45%] w-[400px] h-[430px] rounded-[15px]'>
                                {/**รูป1 */}
                                <div className='m-[30px] w-[300px] h-[180px]'>
                                    <img src='hand-drawn-food-manufacturing-illustration_23-2149519154.jpg'></img>
                                </div>
                                <div className='text-[18px] mx-[30px] text-justify font-Prompt'>Create a production process for employees to produce products according to specifications and with good quality as specified.</div>
                            </div>

                            {/**Tab2 */}
                            <div className='flex flex-col m-[20px] bg-white bg-opacity-[45%] w-[400px] h-[430px] rounded-[15px]'>
                                <div className='m-[30px] w-[300px] h-[180px]'>
                                    <img src='business-woman-business-man-with-clock-coins-with-suitcase_24640-45233.jpg'></img>
                                </div>
                                <div className='text-[18px] mx-[30px] text-justify font-Prompt'>Increase profits for the company by increasing production capacity with the same manpower or the same production capacity but using fewer operators.</div>
                            </div>
                            {/**Tab3 */}
                            <div className='flex flex-col m-[20px] bg-white bg-opacity-[45%] w-[400px] h-[430px] rounded-[15px]'>
                                <div className=' m-[30px] w-[300px] h-[180px]'>
                                    <img src='live-collaboration-concept-illustration_114360-2514.jpg'></img>
                                </div>
                                <div className='text-[18px] mx-[30px] text-justify font-Prompt'>Coordinate with production-related departments or personnel from foreign parent companies such as Chinese and Japanese to increase production quality.</div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>

            {/**ดราฟ4 */}
            <div className='flex flex-row justify-center bg-purple-200 '>
                <div id="DEV-section" className='flex flex-row h-[570px]'>
                    {/**tab start DEV */}
                    <div className='flex flex-col items-center justify-center w-[700px] h-[570px] bg-slate-600'>
                        <div className=' text-purple-200 text-[32px] font-Prompt'>

                            {/**element,                    index,                    array */}
                            {/** (ข้อมูลของarray ณ ปัจจุบัน) (ตำแหน่งของ array ณ ปัจจุบัน) (array ต้นฉบับที่จะวนทำซ้ำ) */}
                            {chars.map((char, index) => (
                                <span
                                    key={index}
                                    /**chars[i] < dev.length มั้ย  ยังไม่ถึงทึบ 100%  ถึงแล้วใส 100%  */
                                    className={`relative overflow-hidden whitespace-nowrap ${index < currentDev ? 'opacity-100' : 'opacity-0'
                                        } transition ease-in-out duration-[0.2ms] transform translate-x-full`}
                                >
                                    {char}{/**ข้อมูลของ char(chars) ณ ปัจจุบัน */}
                                </span>
                            ))}

                        </div>
                        <div className='text-[20px] m-[40px] text-justify text-white font-Prompt'>Working with many types of people requires cooperation from all parties. It is necessary to have technology or systems in place for efficient work. Most of the working systems in Thailand still lack and still overlook this, making working together difficult. The path to becoming a DEV is the answer and it is the answer to working with many groups of people, making them more connected and efficient.</div>
                    </div>

                    {/**tab รูป */}
                    <div className='flex justify-center items-center w-[600px] h-[570px] bg-purple-200 '>
                        {/**รูป */}
                        <div className='w-[380px] h-[480px]'>
                            <img src='440024444_3260170910952328_9170959272674622266_n2.png'></img>
                        </div>
                    </div>
                </div>
            </div>

            {/**ดราฟ5 */}
            <div className='flex flex-col h-[570px] bg-red-400'>
                <div id="Skill-section" className='flex  items-end text-[46px] h-[80px] justify-center text-black font-Prompt'>SKILL</div>
                <div className='mt-[30px] flex flex-row justify-center h-[460px]'>
                    {/**tab1 */}
                    <div className='flex flex-col items-center text-[32px] w-[340px]'>
                        <div className='text-[32px] text-black font-Prompt'>Frontend</div>
                        {/**basic */}
                        <div className='mt-[20px] w-[180px] h-[30px] bg-black shadow-md self-start'>
                            <div className='text-[20px] ml-[10px] text-white w-[120px] h-[30px] flex items-center  font-Prompt'>Basic</div>
                        </div>
                        {/**icon skill 1 */}
                        <div className='flex flex-row'>
                            <div className='m-[10px] w-[90px] h-[40px] bg-blue-600 rounded-[10px] shadow-md'>
                                <div className='text-[16px] text-white w-[90px] h-[40px] flex justify-center items-center '>HTML</div>
                            </div>
                            <div className='m-[10px] w-[90px] h-[40px] bg-orange-600 rounded-[10px] shadow-md'>
                                <div className='text-[16px] text-white w-[90px] h-[40px] flex justify-center items-center '>CSS</div>
                            </div>
                            <div className='m-[10px] w-[90px] h-[40px] bg-yellow-300 rounded-[10px] shadow-md'>
                                <div className='text-[13px] text-black w-[90px] h-[40px] flex justify-center items-center '>JAVASCRIPT</div>
                            </div>
                        </div>

                        <div className='flex flex-row'>
                            {/**framework */}
                            <div className='flex flex-col'>
                                <div className='mt-[20px] w-[140px] h-[30px] bg-black shadow-md self-start'>
                                    <div className='text-[20px] ml-[10px] text-white w-[120px] h-[30px] flex items-center  font-Prompt'>Framework</div>
                                </div>
                                {/**icon skill 1 */}
                                <div className='flex flex-row'>
                                    <div className='mt-[10px] w-[90px] h-[40px] bg-blue-900 rounded-[10px] shadow-md'>
                                        <div className='text-[16px] text-white w-[90px] h-[40px] flex justify-center items-center '>REACT</div>
                                    </div>
                                </div>
                            </div>

                            {/**Style */}
                            <div className='ml-[60px] flex flex-col'>
                                <div className='mt-[20px] w-[140px] h-[30px] bg-black shadow-md self-start'>
                                    <div className='text-[20px] ml-[10px] text-white w-[120px] h-[30px] flex items-center  font-Prompt'>Style</div>
                                </div>
                                {/**icon skill 1 */}
                                <div className='flex flex-row'>
                                    <div className='mt-[10px] w-[90px] h-[40px bg-slate-400 rounded-[10px] shadow-md'>
                                        <div className='text-[16px] text-white w-[90px] h-[40px] flex justify-center items-center '>TAILWIND</div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        {/**tool */}
                        <div className='mt-[20px] w-[180px] h-[30px] bg-black shadow-md self-start'>
                            <div className='text-[20px] ml-[10px] text-white w-[120px] h-[30px] flex items-center  font-Prompt'>Tool</div>
                        </div>
                        {/**icon skill 1 */}
                        <div className='flex flex-row'>
                            <div className='m-[10px] w-[90px] h-[40px] bg-sky-400 rounded-[10px] shadow-md'>
                                <div className='text-[16px] text-white w-[90px] h-[40px] flex justify-center items-center '>VS CODE</div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-[30px] flex flex-col bg-black justify-center items-center text-[32px] w-[5px]'></div>

                    {/**tab2 */}
                    <div className='flex flex-col items-center text-[32px] w-[340px]'>
                        <div className='text-[32px] text-black font-Prompt'>Backend</div>
                        {/**tech */}
                        <div className='mt-[20px] w-[180px] h-[30px] bg-black shadow-md self-start'>
                            <div className='text-[20px] ml-[10px] text-white w-[120px] h-[30px] flex items-center  font-Prompt'>Technology</div>
                        </div>
                        {/**icon skill 1 */}
                        <div className='flex flex-row'>
                            <div className='m-[10px] w-[90px] h-[40px] bg-green-600 rounded-[10px] shadow-md'>
                                <div className='text-[16px] text-white w-[90px] h-[40px] flex justify-center items-center '>NODE JS</div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-[30px] flex flex-col bg-black justify-center items-center text-[32px] w-[5px]'></div>

                    {/**tab3 */}
                    <div className='flex flex-col items-center text-[32px] w-[340px]'>
                        <div className='text-[32px] text-black font-Prompt'>Database</div>
                        {/**rdbms */}
                        <div className='mt-[20px] w-[180px] h-[30px] bg-black shadow-md self-start'>
                            <div className='text-[20px] ml-[10px] text-white w-[120px] h-[30px] flex items-center  font-Prompt'>RDBMS</div>
                        </div>
                        {/**icon skill 1 */}
                        <div className='flex flex-row self-end'>
                            <div className='m-[10px] w-[90px] h-[40px] bg-[#02344C] rounded-[10px] shadow-md'>
                                <div className='text-[12px] text-white w-[90px] h-[40px] flex justify-center items-center '>POSTGRES SQL</div>
                            </div>
                        </div>

                        {/**tool */}
                        <div className='mt-[20px] w-[180px] h-[30px] bg-black shadow-md self-start'>
                            <div className='text-[20px] ml-[10px] text-white w-[120px] h-[30px] flex items-center  font-Prompt'>Tool</div>
                        </div>
                        {/**icon skill 1 */}
                        <div className='flex flex-row self-end'>
                            <div className='m-[10px] w-[90px] h-[40px] bg-slate-500 rounded-[10px] shadow-md'>
                                <div className='text-[16px] text-white w-[90px] h-[40px] flex justify-center items-center '>PRISMA</div>
                            </div>
                        </div>

                        {/**vitualization */}
                        <div className='mt-[20px] w-[180px] h-[30px] bg-black shadow-md self-start'>
                            <div className='text-[20px] ml-[10px] text-white w-[120px] h-[30px] flex items-center  font-Prompt'>Vitualization</div>
                        </div>
                        {/**icon skill 1 */}
                        <div className='flex flex-row self-end'>
                            <div className='m-[10px] w-[90px] h-[40px] bg-sky-500 rounded-[10px] shadow-md'>
                                <div className='text-[16px] text-white w-[90px] h-[40px] flex justify-center items-center '>DOCKER</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/**ดราฟ6 */}
            <div className='flex flex-col items-center h-[350px] bg-red-400'>
                <div id="Project-section" className='flex flex-row items-end text-[46px] h-[80px] text-black font-Prompt'>PROJECT</div>
                <Link to='/'>
                    <div className='mt-[10px] mb-[40px] w-[700px] h-[230px] shadow-[10px_10px_rgba(0,0,0,0.2)] hover:shadow-[10px_10px_30px_rgb(229,242,5)] flex self-center'>
                        <img src='project.jpg'></img>
                    </div>
                </Link>
            </div>

            {/**ดราฟ7 */}
            <div className='flex flex-col items-center justify-center h-[70px] bg-red-900'>
                <div id="Contact-section" className='text-white text-[16px]'>Contact Detail | Sirapassorn On-aun |
                    Phone : 0838513805 |
                    Email : tangmo.conan@gmail.com: |
                    Location : 90/275 Bangrakyai,
                    Bangbuathong, Nonthburi 11110</div>
            </div>
        </div >
    )
}
export default Fprofile;