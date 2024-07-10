import React, { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs from 'dayjs';
import axios from 'axios';

function Count() {

  const [fixtime, setFixtime] = useState([{ selectedDates: [dayjs(), dayjs()], code: '' }]); // Initialize with default dates and empty code for each calendar
  const [error, setError] = useState('');
  const [noTi, setNoti] = useState('');
  const [loading, setLoading] = useState('');

  const handleDateChange = (newDates, fixtimeIndex) => {
    setFixtime(prevFixtime => {
      const updatedFixtime = [...prevFixtime];
      updatedFixtime[fixtimeIndex].selectedDates = newDates;
      return updatedFixtime;
    });
  };

  const handleChangeCode = (e, fixtimeIndex) => {
    const { value } = e.target;
    setFixtime(prevFixtime => {
      const updatedFixtime = [...prevFixtime];
      updatedFixtime[fixtimeIndex].code = value;
      return updatedFixtime;
    });
  };

  const submitClick = async (event) => {
    event.preventDefault();
    setLoading('Loading...')
    try {
      const fixtimeData = fixtime.map(item => ({
        initialSeconds: Math.abs(item.selectedDates[1] - item.selectedDates[0]) / 1000,
        startTime: Math.abs(item.selectedDates[0]) / 1000,
        endTime: Math.abs(item.selectedDates[1]) / 1000,
        branchtime: item.code // Sending code along with time data
      }));

      console.log('fixtimeData', fixtimeData)
      if (fixtimeData != 0) {
        const response = await axios.post('http://localhost:5000/auth/keeptime', fixtimeData);

        const updatedFixtime = response.data.map(data => ({
          selectedDates: [dayjs(data.startTime * 1000), dayjs(data.endTime * 1000)],
          code: data.code // Updating code received from server
        }));

        setFixtime(updatedFixtime);
        setNoti('Save Due Date Time Successful')
        setError('');
        setLoading('')
      }
    } catch (error) {
      console.error('Error while fetching data:', error);
      setError('Error while fetching data. Please clear data and try again.');
    }
  };

  const addtimeClick = () => {
    const updatedFixtime = [...fixtime];
    updatedFixtime.push({ selectedDates: [dayjs(), dayjs()], code: '' }); // Add an empty fixtime object with empty code
    setFixtime(updatedFixtime);
  };

  const deleteTimeClick = (fixtimeIndex) => {
    const updatedFixtime = [...fixtime];
    updatedFixtime.splice(fixtimeIndex, 1); // Remove fixtime at fixtimeIndex
    setFixtime(updatedFixtime);
  };

  const clearClick = async () => {
    try {
      await axios.delete('http://localhost:5000/auth/keeptime', {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Accept": "application/json",
          "Content-Type": "application/json",
        }
      });
      setFixtime([{ selectedDates: [dayjs(), dayjs()], code: '' }]); // Reset fixtime to default empty values
      setError(''); // Clear any existing error message
      setNoti('')
    } catch (error) {
      console.error('Error deleting data:', error);
      setError('Error deleting data. Please try again.');
    }
  };

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
        console.log('getkeeptime',getkeeptime.data)

        const { Keeptime } = getkeeptime.data; // Extract Keeptime array from the response
        const updatedFixtime = Keeptime.map(data => ({
          selectedDates: [dayjs(data.startTime * 1000), dayjs(data.endTime * 1000)],
          code: data.code // Updating code received from server
        }));
        console.log('timedata', updatedFixtime);

        if (updatedFixtime.length != 0) {
          setFixtime(updatedFixtime);
          setNoti('Save Due Date Time Successful, Clear for Reset New Due Date');
        }

        if (updatedFixtime.length == 0) {
          setFixtime(fixtime);
          setNoti('');
        }

      } catch (error) {
        console.error('Error get time:', error);
      }
    };

    fetchgettime();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center my-[30px]'>
      <div className='my-[10px]'>ส่วนที่ 2 กำหนดช่วงเวลาโหวต</div>

      <div className='flex md:flex-row md:flex-wrap flex-col'>
        {!noTi ? (fixtime.map((fixtime, fixtimeIndex) => (
          <div key={fixtimeIndex}>
            <div className='flex flex-col m-[20px]'>
              <input
                type='text'
                className='w-[100px] px-[5px] text-[14px] bg-green-100 focus:outline-none focus:ring-sky-500 focus:ring-1'
                placeholder='รหัสสาขา'
                value={fixtime.code}
                onChange={(e) => handleChangeCode(e, fixtimeIndex)}
              />

              <div className='flex flex-row items-center justify-center mt-[10px] bg-white bg-opacity-[35%] rounded-[10px]'>
                <div className='flex flex-col m-[20px] w-[200px] h-[65px]'>
                  <div className='text-[9px] mb-[10px] italic'>กำหนดช่วงเวลาโหวต</div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div style={{ maxWidth: '220px', fontSize: '9px' }}>
                      <DateRangePicker
                        calendars={2}
                        value={fixtime.selectedDates}
                        onChange={(newDates) => handleDateChange(newDates, fixtimeIndex)}
                        sx={{
                          '& .MuiInputBase-input': { fontSize: '8px' },
                          '& .MuiTypography-root': { fontSize: '8px' }
                        }}
                      />
                    </div>
                  </LocalizationProvider>
                </div>

              </div>

              <div className='flex flex-row justify-end mt-[5px] mb-[20px]'>
                <button
                  onClick={() => addtimeClick()}
                  className='mr-[5px] w-[50px] h-[23px] rounded-[18px] bg-green-500 hover:bg-green-600 flex justify-center items-center text-white text-[10px]'>Add</button>
                <button
                  onClick={() => deleteTimeClick(fixtimeIndex)}
                  className='w-[50px] h-[23px] rounded-[18px] bg-red-500 hover:bg-red-600 flex justify-center items-center text-white text-[10px]'>Delete</button>
              </div>

            </div>
          </div>

        ))) : <div className='text-green-900 text-[24px]'>{noTi}</div>}


      </div>

      {error && <div>{error}</div>}
      {!noTi && <div>{loading}</div>}

      <div className='flex flex-row '>
        <button
          onClick={clearClick}
          className='m-[10px] w-[60px] h-[33px] rounded-[18px] bg-sky-200 hover:bg-red-500 flex justify-center items-center text-black hover:text-white text-[12px]'>Clear</button>

        {!noTi ? (<button
          onClick={submitClick}
          className='m-[10px] w-[60px] h-[33px] rounded-[18px] bg-green-600 hover:bg-green-900 flex justify-center items-center text-white text-[12px]'>Set Time</button>
        ) : ''}
      </div>

    </div>
  );
}

export default Count;
