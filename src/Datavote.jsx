import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function DataVote() {
    const user = useSelector((state) => state.user);
    const [isLoggedIn, setIsLoggedIn] = useState(!!user.userId);
    const [dataVote, setDataVote] = useState([]);
    const [getError, setGetError] = useState('');

    useEffect(() => {
        const getSumvote = async () => {
            try {
                const response = await axios.get('http://localhost:5000/auth/vote', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                console.log('Fetch data response:', response.data);

                if (response.data && response.data.voters) {
                    const formattedData = response.data.voters.map(item => ({
                        username: item.userid.username,
                        email: item.userid.email,
                        classvote: item.classvote,
                        choice: item.choice,
                        countvote: item.countvote,
                        createdAt: item.createdAt,
                    }));
                    setDataVote(formattedData);
                    console.log('formattedData', formattedData)
                } else {
                    setGetError('Invalid data format from API');
                }

            } catch (error) {
                console.error('Error fetching data:', error);
                setGetError('Error fetching data from server');
            }
        };

        getSumvote();
    }, []);

    return (
        <div className="flex flex-col items-center m-10">
            {getError && <p className="text-red-500">{getError}</p>}
            {(dataVote.length > 0) && (user.userId == 1) ? (
                <table className="min-w-full border-collapse block md:table">
                    <thead className="block md:table-header-group">
                        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">No.</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Username</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Class Vote</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Choice</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Count Vote</th>
                            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Created At</th>
                        </tr>
                    </thead>
                    <tbody className="block md:table-row-group">
                        {dataVote.map((vote, index) => (
                            <tr key={index} className="bg-gray-300 border border-grey-500 md:border-none block md:table-row ">
                                <td className="p-2 md:border md:border-grey-500 text-center text-[12px] block md:table-cell">{index + 1}</td>
                                <td className="p-2 md:border md:border-grey-500 text-center text-[12px] block md:table-cell">{vote.username}</td>
                                <td className="p-2 md:border md:border-grey-500 text-center text-[12px] block md:table-cell">{vote.email}</td>
                                <td className="p-2 md:border md:border-grey-500 text-center text-[12px] block md:table-cell">{vote.classvote}</td>
                                <td className="p-2 md:border md:border-grey-500 text-center text-[12px] block md:table-cell">{vote.choice}</td>
                                <td className="p-2 md:border md:border-grey-500 text-center text-[12px] block md:table-cell">{vote.countvote}</td>
                                <td className="p-2 md:border md:border-grey-500 text-center text-[12px] block md:table-cell">{new Date(vote.createdAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default DataVote;
