import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Showtime from 'C:/Users/ASUS/mochi-frontend/src/time/Showtime'

function First() {
  const { km } = useParams();
  const [getError, setGetError] = useState(null);
  const [dataCandidate, setDataCandidate] = useState([]);
  const [branchName, setBranchName] = useState('');

  const user = useSelector((state) => state.user);
  const [isLoggedIn, setIsLoggedIn] = useState(!!user.userId);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/testhm', {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
            "Content-Type": "application/json",
          }
        });

        console.log('Fetch data response:', response.data);

        if (response.data && response.data.testhmData) {
          const matchingData = response.data.testhmData.find(item => item.code === km);

          if (matchingData) {
            const formattedData = matchingData.Testcd.map(candidate => ({
              candidateName: candidate.candidateName,
              imageCandidate: candidate.imageCandidates ? { name: candidate.imageCandidates } : null
            }));
            setDataCandidate(formattedData);
            setBranchName(matchingData.branch);
          } else {
            setGetError('No data matching the provided code');
          }
        } else {
          setGetError('Invalid data format from API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setGetError('Error fetching data from server');
      }
    };

    fetchCandidates();
  }, [km]);

  const handleArtistClick = (artist, branch) => {
    navigate('/vote', { state: { artistName: artist, branchName: branch } });
  };

  return (
    <div className='flex justify-center'>
      <div className='w-full flex flex-col items-center'>
        <div className='md:mt-[460px] mt-[520px] w-[450px] h-[200px]  flex items-center'>
          <div className='justify-center w-[230px] h-[300px]'>
            <div className='w-[200px] h-[200px] flex justify-center items-center'>
              <img className='absolute z-[1] w-[200px] h-[200px]' src='sunny-and-rainy-day-16467.svg' alt='Sunny and Rainy Day' />
              <div className='text-[44px] z-[2] font-semibold font-Mitr'>{km}</div>
            </div>
          </div>
          <div className=' w-[250px] h-[200px] '>
            {branchName && (
              <div className='text-[36px] text-black drop-shadow-[2px_1px_rgba(0,0,0,0.2)] font-Mitr'>
                {branchName}
              </div>
            )}
          </div>
        </div>

        <Showtime />

        <div className='m-[30px] w-[1198px] flex md:flex-row flex-col flex-wrap justify-center items-center'>
          {dataCandidate.map((candidate, index) => (
            <div className='md:mx-[70px] flex flex-col' key={index}>
              <div className='mb-[40px] w-[300px] h-[400px]'>
                <div className='mt-[2px] w-[300px] h-[400px] shadow-[10px_10px_rgba(0,0,0,0.2)] hover:shadow-[10px_10px_30px_rgb(229,242,5)]'>
                  <img className='bg-cover' src={candidate.imageCandidate ? candidate.imageCandidate.name : ''} alt='' />
                </div>
              </div>
              <button
                className='font-Mitr text-[22px] mb-[40px] w-[300px] h-[60px] bg-none opacity-100 border-black border-[2px] rounded-[30px] hover:bg-black hover:opacity-25 hover:text-white hover:border-white'
                onClick={() => isLoggedIn ? handleArtistClick(candidate.candidateName, branchName) : navigate('/login')}
              >
                {candidate.candidateName}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default First;
