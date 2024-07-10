import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import TabEnd from './TabEnd';
import { useSelector } from 'react-redux';
import axios from 'axios';

function PHome() {
  const user = useSelector((state) => state.user);
  const [checkAdmin, setCheckAdmin] = useState(user.userId);

  const [dataRoom, setDataRoom] = useState([]);
  const [getError, setGetError] = useState(null);
  const branchNameRefs = useRef([]);

  const adjustFontSize = (element) => {
    if (element) {
      const parent = element.parentNode;
      const maxWidth = parent.clientWidth;
      const maxHeight = parent.clientHeight;
      let fontSize = 34;

      element.style.fontSize = `${fontSize}px`;
      while (
        (element.scrollWidth > maxWidth || element.scrollHeight > maxHeight) && fontSize > 5
      ) {
        fontSize -= 1;
        element.style.fontSize = `${fontSize}px`;
      }
      element.style.whiteSpace = 'normal';
    }
  };

  useEffect(() => {
    const getRoom = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/homeroom', {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
            "Content-Type": "application/json",
          }
        });

        console.log('Fetch data response:', response.data);

        if (response.data && response.data.homeroomData) {
          let formattedData = response.data.homeroomData.map(item => ({
            id: item.id,
            code: item.code,
            recode: Number(item.code.slice(2)),
            branchName: item.branch,
            imageBranch: item.image ? { name: item.image } : null,
          }));

          formattedData.sort((a, b) => a.recode - b.recode);
          console.log('sortedData', formattedData);
          setDataRoom(formattedData);
        } else {
          setGetError('Invalid data format from API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setGetError('Error fetching data from server');
      }
    };

    getRoom();
  }, []);

  useEffect(() => {
    branchNameRefs.current.forEach(ref => {
      if (ref) adjustFontSize(ref);
    });
  }, [dataRoom]);

  return (
    <div className='w-full flex justify-center '>
      <div className='flex flex-col items-center '>
        <div className='w-[1198px] flex md:flex-row flex-col flex-wrap justify-center mb-[50px]'>

          {dataRoom.map((item, index) => (
            <div className='flex md:flex-row md:justify-center flex-col items-center m-[30px]' key={item.id}>
              <div className='flex flex-col items-center'>

                <div className='items-center justify-center w-[400px] h-[300px] my-[20px] '>
                  <div className='absolute w-[400px] h-[300px] '>
                    <img src='cloud-153992_1280.png' className='w-[400px] h-[300px]' alt="Cloud background" />
                    {/**แสดงรูป */}
                    <div className='absolute top-[20px] left-[85px] w-[130px] h-[130px] rounded-[100%]'>
                      {item.imageBranch && (
                        <img src={item.imageBranch.name} alt="Branch" className="w-[130px] h-[130px] rounded-[100%]" />
                      )}
                    </div>
                    {/**แสดงชื่อสาขา */}
                    <div className='absolute top-[140px] left-[70px] w-[280px] h-[100px] flex items-center justify-center'>
                      <div ref={el => branchNameRefs.current[index] = el} className='nameStroke text-center text-[rgb(255,207,237)] tracking-wider font-Mitr font-extrabold overflow-hidden'>
                        {item.branchName}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Generate KM link based on initialIndex */}
                <Link to={`/${item.code}`}>
                  <button className="tracking-wider not-italic w-[190px] h-[90px] py-2.5 px-5 text-[35px] font-extrabold font-Mitr text-gray-900 focus:outline-none bg-white rounded-[50%] border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    {item.code}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className='mb-[30px]  w-[230px] h-[80px] flex justify-center items-center '>
          <Link to='/result'>
            <button className=' w-[220px] h-[80px] hover:w-[230px] hover:h-[90px] hover:text-black bg-[#FA0487] border-black rounded-[50px] text-white shadow-[3px_4px_rgba(0,0,0,0.5)] drop-shadow-[3px_4px_rgba(0,0,0,0.5)] text-[30px] hover:text-[35px] font-Mitr'>ดูผลคะแนน</button>
          </Link>
        </div>

        <div className='mt-[30px] mx-[10px] text-wrap'>กติกาในการโหวต : ผู้เข้าร่วมโหวตสามารถโหวตได้ทุกสาขาซึ่งในแต่ละสาขาจะสามารถโหวตเพียง 1 คะแนนโหวต ต่อ 1 บัญชี ต่อ 1 วัน เท่านั้น
          และสามารถโหวตได้อีกครั้งในวันถัดไป</div>

        <div className='mt-[30px]'><TabEnd /></div>
      </div>
    </div>
  );
}

export default PHome;
