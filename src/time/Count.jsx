import React, { useState, useEffect } from 'react';
import CountdownTimer from 'C:/Users/ASUS/mochi-frontend/src/time/CountdownTimer';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs from 'dayjs';
//ติดตั้ง npm install @mui/x-date-pickers @mui/x-date-pickers-pro

import { useSelector } from 'react-redux'
import axios from 'axios'; //เรียกใช้ API

function Count() {

  //เรียกใช้ redux เรียก userid มา
  const user = useSelector((state) => state.user) //สำหรับเรียกใช้ค่า
  //ตัวแปรรับ userId มาจาก redux
  const [checkAddmin, setAddmin] = useState(user.userId);


  const [selectedDates, setSelectedDates] = useState([null, null]); // เก็บวันที่เริ่มต้นและสิ้นสุดที่เลือกไว้
  const [timeSec, setTimeSec] = useState(null); // เก็บวันที่เริ่มต้นและสิ้นสุดที่เลือกไว้
  const [showSeconds, setShowSeconds] = useState(false); // สถานะที่ใช้ในการแสดงจำนวนวินาที

  const [startTime, setStartTime] = useState(null); // วันที่ start
  const [endTime, setEndTime] = useState(null); // วันที่ end


  const handleDateChange = (newDates) => {
    setSelectedDates(newDates);
    setShowSeconds(false); // เมื่อเลือกวันใหม่เราจะซ่อนการแสดงจำนวนวินาที
  };

  const handleShowSeconds = async (event) => {
    setShowSeconds(true); // เมื่อคลิกปุ่มเราจะแสดงจำนวนวินาที

    event.preventDefault();
    try {
      //1.API classvote
      const initialSeconds = Math.abs(selectedDates[1] - selectedDates[0]) / 1000; //ช่วงเวลาโหวต(วิ)
      const startTime = Math.abs(selectedDates[0]) / 1000; //เวลาเริ่ม(วิ)
      const endTime = Math.abs(selectedDates[1]) / 1000; //เวลาสิ้นสุด(วิ)
      console.log('selectedDates[1]', Math.abs(selectedDates[1]) / 1000)
      console.log('selectedDates[0]', Math.abs(selectedDates[0]) / 1000)
      const response1 = await axios.post('http://localhost:5000/auth/keeptime', {
        initialSeconds, startTime, endTime
      }, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Accept": "application/json",
          "Content-Type": "application/json",
        }
      });

      console.log('initialSeconds OK', response1.data);
      setTimeSec(response1.data.initialSeconds)
      setStartTime(response1.data.startTime)
      setEndTime((response1.data.endTime) * 1000)

      // Update selectedDates with start and end times as Dayjs objects
      setSelectedDates([dayjs(response1.data.startTime * 1000), dayjs(response1.data.endTime * 1000)]);


    } catch (error) {
      // แสดงข้อความแจ้งเตือนเมื่อเข้าสู่ระบบไม่สำเร็จ
      console.error('initialSeconds error:', error);

    }
  };

  useEffect(() => {

    const fetchgettime = async () => {

      try {

        const getkeeptime = await axios.get('http://localhost:5000/getkeeptime', {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
            "Content-Type": "application/json",
          }
        });

        // Handle successful response
        console.log('Time get successfully:', getkeeptime.data.latestkeeptimeId);
        setTimeSec(getkeeptime.data.latestkeeptimeId)
        setStartTime(getkeeptime.data.latestkeeptimeStart)
        setEndTime((getkeeptime.data.latestkeeptimeEnd) * 1000)

        // Update selectedDates with start and end times as Dayjs objects
        setSelectedDates([dayjs(getkeeptime.data.latestkeeptimeStart * 1000), dayjs(getkeeptime.data.latestkeeptimeEnd * 1000)]);

      } catch (error) {
        // Handle errors
        console.error('Error get time:', error);
      }
    };

    fetchgettime();

  }, []);

  const calculateSeconds = () => {

    const currentDate = new Date();
    const currentTimestampInMilliseconds = currentDate.getTime();
    const currentTimestampInSeconds = Math.round(currentTimestampInMilliseconds / 1000) //เวลาปัจจุบัน

    if (currentTimestampInSeconds < (startTime)) { return 0 } //ถ้าวัน start ยังไม่ถึง ให้เป็น 0
    if (currentTimestampInSeconds > (endTime)) { return 0 } //ถ้าเลยเวลา end ไปแล้วให้เป็น 0

    if (timeSec !== null && startTime !== null) {
      const elapsedSeconds = Math.round((new Date() / 1000) - startTime);
      return timeSec - elapsedSeconds;
    }

    if (timeSec != timeSec) {
      if (selectedDates[0] && selectedDates[1] && selectedDates[0] <= new Date()) {
        console.log('selectedDates[0]', selectedDates[0])
        console.log('selectedDates[1]', selectedDates[1])
        return Math.abs(selectedDates[1] - selectedDates[0]) / 1000;
      }
    }
    return 0;

  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-row items-center'>

        {(checkAddmin == 1) && <div className='m-[20px] w-[300px] '>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateRangePicker']}>
              <DemoItem component="DateRangePicker">
                <DateRangePicker
                  calendars={2}
                  value={selectedDates}
                  onChange={handleDateChange}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>}
        {(checkAddmin == 1) && <div>
          <button onClick={handleShowSeconds} className='underline decoration-1 hover:text-green-500'>Change Time</button>
        </div>}
      </div>
      <div>
        {(timeSec || showSeconds) && <CountdownTimer initialSeconds={calculateSeconds()} />}
      </div>
      <div>
        {(timeSec || showSeconds) && selectedDates[1] && (
          <div className='text-[18px]'>ระยะเวลาในการโหวต: {selectedDates[1].toString()}</div>
        )}
      </div>
    </div>
  );
}

export default Count;
