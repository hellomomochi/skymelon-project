import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CountdownTimer from 'C:/Users/ASUS/mochi-frontend/src/time/CountdownTimer';

import dayjs from 'dayjs';
import axios from 'axios';

function Count() {
  const { km } = useParams();

  const [selectedDates, setSelectedDates] = useState([null, null]);
  const [timeSec, setTimeSec] = useState(null);
  const [showSeconds, setShowSeconds] = useState(false);

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);


  useEffect(() => {
    const fetchgettime = async () => {
      try {
        const getkeeptime = await axios.get('http://localhost:5000/auth/keeptime', {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
            "Content-Type": "application/json",
          }
        });

        console.log('Time get successfully:', getkeeptime.data);

        if (getkeeptime.data && getkeeptime.data.Keeptime) {
          const matchingData = getkeeptime.data.Keeptime.find(item => item.branchtime === km);

          if (matchingData) {
            setTimeSec(matchingData.initialSeconds);
            setStartTime(matchingData.startTime);
            setEndTime(matchingData.endTime * 1000);

            setSelectedDates([dayjs(matchingData.startTime * 1000), dayjs(matchingData.endTime * 1000)]);
          }
        }
      } catch (error) {
        console.error('Error get time:', error);
      }
    };

    fetchgettime();
  }, [km]);

  const calculateSeconds = () => {
    const currentDate = new Date();
    const currentTimestampInMilliseconds = currentDate.getTime();
    const currentTimestampInSeconds = Math.round(currentTimestampInMilliseconds / 1000);

    if (startTime && endTime && currentTimestampInSeconds > startTime && currentTimestampInSeconds < endTime) {
      if (timeSec !== null && startTime !== null) {
        const elapsedSeconds = Math.round((new Date() / 1000) - startTime);
        if (timeSec - elapsedSeconds < 0) { return 0; }
        return timeSec - elapsedSeconds;
      }

      if (selectedDates[0] && selectedDates[1] && selectedDates[0] <= new Date()) {
        console.log('selectedDates[0]', selectedDates[0]);
        console.log('selectedDates[1]', selectedDates[1]);
        return Math.abs(selectedDates[1] - selectedDates[0]) / 1000;
      }
      return 0;
    }

    return 0; // Default return value if conditions are not met
  };

  return (
    <div className='flex flex-col items-center'>
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
