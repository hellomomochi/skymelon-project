import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import TabEnd from './TabEnd';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { useSelector } from 'react-redux';

function Result() {
    // Get user ID from Redux state
    const user = useSelector((state) => state.user);
    const [checkAdmin, setCheckAdmin] = useState(user.userId);

    // State variables for data
    const [sumVoteClassvote, setSumVoteClassvote] = useState([]);
    const [sumVoteCandidate, setSumVoteCandidate] = useState([]);

    // Chart settings
    const chartSetting = {
        yAxis: [
            {
                label: 'ผล vote (คะแนน)',
            },
        ],
        width: 500,
        height: 300,
        sx: {
            [`.${axisClasses.left} .${axisClasses.tickLabel}`]: {
                display: 'none',
            },
        },
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data for sumVote
                const voteResponse = await axios.get('http://localhost:5000/auth/sumvote', {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                console.log('Fetch sumVote response:', voteResponse.data);

                // Separate votes by classvote for different rendering
                const groupedVotes = voteResponse.data.reduce((acc, vote) => {
                    const existingGroup = acc.find(group => group.classvote === vote.classvote);
                    if (existingGroup) {
                        existingGroup.votes.push(vote);
                    } else {
                        acc.push({ classvote: vote.classvote, votes: [vote] });
                    }
                    return acc;
                }, []);

                // Set state for sumVoteClassvote and sumVoteCandidate
                setSumVoteClassvote(groupedVotes.flatMap(group => group.classvote === user.userId ? group.votes : []));
                setSumVoteCandidate(groupedVotes.filter(group => group.classvote !== user.userId));

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [user.userId]); // Include user.userId as dependency for useEffect

    // Function to generate random color
    const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    return (
        <div className='w-full mt-[450px] flex flex-col justify-center'>
            <div className='flex flex-col items-center'>
                <div className='my-[10px]'>
                    <div className='flex flex-row flex-wrap'>
                        {sumVoteCandidate.map((group, groupIndex) => (
                            <BarChart
                                key={groupIndex}
                                series={[
                                    {
                                        data: group.votes.map(vote => vote.countvote),
                                        label: group.classvote, // แก้ไขตรงนี้เป็น group.classvote แทน
                                        type: 'bar',
                                        color: getRandomColor()
                                    }
                                ]}
                                xAxis={[{ scaleType: 'band', data: group.votes.map(vote => `${vote.choice}`) }]}
                                axisHighlight={{
                                    x: 'none',
                                    y: 'none',
                                }}
                                {...chartSetting}
                            />
                        ))}
                    </div>

                </div>

                <div className='flex md:flex-row flex-col flex-wrap justify-center m-[30px]'>
                    {checkAdmin === 1 && sumVoteCandidate.map((group, groupIndex) => (
                        <div className='flex flex-col mx-[30px] mb-[100px] items-center' key={groupIndex}>
                            <div className='text-blue-300 text-[32px] font-bold drop-shadow-[3px_3px_rgba(0,0,0,0.6)]'>{group.classvote}</div>
                            <div className='flex flex-col items-center rounded-[10px] md:w-[390px] w-[315px] h-[280px] bg-red-500 bg-opacity-[55%] shadow-[4px_4px_rgba(0,0,0,0.6)]'>
                                {group.votes.map((vote, index) => (
                                    <div className='flex flex-col items-center mx-[5px]' key={index}>
                                        <div className='m-[5px] flex flex-row items-center md:w-[370px] w-[305px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                            <div className=' ml-[10px] text-[12px] text-white'>{index + 1}</div>
                                            <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>{vote.choice}</div>
                                            <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>คะแนนโหวต</div>
                                            <div className='ml-[5px] text-[12px] text-white flex items-center justify-center h-[35px] w-[80px] md:w-[125px]'>{vote.countvote}</div>
                                            <div className='ml-[5px] text-[12px] text-white'>คะแนน</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mb-[100px] w-[210px] h-[70px] flex justify-center items-center'>
                    <Link to='/'>
                        <button className='mt-[80px] w-[200px] h-[60px] hover:w-[210px] hover:h-[70px] hover:text-black bg-[#7D2D2A] border-black rounded-[50px] text-white shadow-[3px_4px_rgba(0,0,0,0.5)] drop-shadow-[3px_4px_rgba(0,0,0,0.5)] text-[20px] hover:text-[25px] font-Mitr'>VOTE</button>
                    </Link>
                </div>
            </div>

            <div className='mt-[50px]'><TabEnd /></div>
        </div>
    );
}

export default Result;
