import React from 'react';
import { Link } from "react-router-dom";
import Layout from './PLayout'
import Count from "./time/Count";
import { useState, useEffect } from 'react';
import axios from 'axios'; //เรียกใช้ API

import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

import { useSelector } from 'react-redux'


function Result() {

    //เรียกใช้ redux เรียก userid มา
    const user = useSelector((state) => state.user) //สำหรับเรียกใช้ค่า
        //ตัวแปรรับ userId มาจาก redux
        const [checkAddmin, setAddmin] = useState(user.userId);

    const [sumvotekm11, setSumvotekm11] = useState('')
    const [reartistNamekm11, resetArtistNamekm11] = useState('')
    const [sumvotekm12, setSumvotekm12] = useState('')
    const [reartistNamekm12, resetArtistNamekm12] = useState('')
    const [sumvotekm13, setSumvotekm13] = useState('')
    const [reartistNamekm13, resetArtistNamekm13] = useState('')
    const [sumvotekm14, setSumvotekm14] = useState('')
    const [reartistNamekm14, resetArtistNamekm14] = useState('')

    const [sumvotekm21, setSumvotekm21] = useState('')
    const [reartistNamekm21, resetArtistNamekm21] = useState('')
    const [sumvotekm22, setSumvotekm22] = useState('')
    const [reartistNamekm22, resetArtistNamekm22] = useState('')
    const [sumvotekm23, setSumvotekm23] = useState('')
    const [reartistNamekm23, resetArtistNamekm23] = useState('')
    const [sumvotekm24, setSumvotekm24] = useState('')
    const [reartistNamekm24, resetArtistNamekm24] = useState('')

    const [sumvotekm31, setSumvotekm31] = useState('')
    const [reartistNamekm31, resetArtistNamekm31] = useState('')
    const [sumvotekm32, setSumvotekm32] = useState('')
    const [reartistNamekm32, resetArtistNamekm32] = useState('')
    const [sumvotekm33, setSumvotekm33] = useState('')
    const [reartistNamekm33, resetArtistNamekm33] = useState('')
    const [sumvotekm34, setSumvotekm34] = useState('')
    const [reartistNamekm34, resetArtistNamekm34] = useState('')

    const [sumvotekm41, setSumvotekm41] = useState('')
    const [reartistNamekm41, resetArtistNamekm41] = useState('')
    const [sumvotekm42, setSumvotekm42] = useState('')
    const [reartistNamekm42, resetArtistNamekm42] = useState('')
    const [sumvotekm43, setSumvotekm43] = useState('')
    const [reartistNamekm43, resetArtistNamekm43] = useState('')
    const [sumvotekm44, setSumvotekm44] = useState('')
    const [reartistNamekm44, resetArtistNamekm44] = useState('')

    const chartSettingkm1 = {
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
    const datasetkm1 = [
        sumvotekm11, sumvotekm12, sumvotekm13, sumvotekm14,
    ];
    const xLabelskm1 = [
        reartistNamekm11, reartistNamekm12, reartistNamekm13, reartistNamekm14,
    ];

    const chartSettingkm2 = {
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
    const datasetkm2 = [
        sumvotekm21, sumvotekm22, sumvotekm23, sumvotekm24,
    ];
    const xLabelskm2 = [
        reartistNamekm21, reartistNamekm22, reartistNamekm23, reartistNamekm24,
    ];

    const chartSettingkm3 = {
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
    const datasetkm3 = [
        sumvotekm31, sumvotekm32, sumvotekm33, sumvotekm34,
    ];
    const xLabelskm3 = [
        reartistNamekm31, reartistNamekm32, reartistNamekm33, reartistNamekm34,
    ];

    const chartSettingkm4 = {
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
    const datasetkm4 = [
        sumvotekm41, sumvotekm42, sumvotekm43, sumvotekm44
    ];
    const xLabelskm4 = [
        reartistNamekm41, reartistNamekm42, reartistNamekm43, reartistNamekm44
    ];


    useEffect(() => {

        const fetchImagekm11 = async () => {

            try {

                const getresponseNamekm11 = await axios.get('http://localhost:5000/getcandidatekm11', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                // Handle successful response
                console.log('Name get successfully:', getresponseNamekm11.data.latestCandidateId);
                resetArtistNamekm11(getresponseNamekm11.data.latestCandidateId)

                try {

                    console.log('choiceReartistNamekm11', getresponseNamekm11.data.latestCandidateId)
                    const choice = getresponseNamekm11.data.latestCandidateId
                    console.log('reartistNamekm11', getresponseNamekm11.data.latestCandidateId)
                    if (choice) {
                        const getsumVotekm11 = await axios.post('http://localhost:5000/sumvote', { choice }, {
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            }
                        });

                        // Handle successful response
                        console.log('getsumVotekm11 successfully:', getsumVotekm11.data.sumVote);
                        setSumvotekm11(getsumVotekm11.data.sumVote)
                    }

                } catch (error) {
                    // Handle errors
                    console.error('Error get sumVotekm12:', error);
                }

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }

        };

        const fetchImagekm12 = async () => {

            try {

                const getresponseNamekm12 = await axios.get('http://localhost:5000/getcandidatekm12', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                // Handle successful response
                console.log('Name get successfully:', getresponseNamekm12.data.latestCandidateId);
                resetArtistNamekm12(getresponseNamekm12.data.latestCandidateId)

                try {

                    console.log('choiceReartistNamekm12', getresponseNamekm12.data.latestCandidateId)
                    const choice = getresponseNamekm12.data.latestCandidateId
                    console.log('reartistNamekm12', getresponseNamekm12.data.latestCandidateId)
                    if (choice) {
                        const getsumVotekm12 = await axios.post('http://localhost:5000/sumvote', { choice }, {
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            }
                        });

                        // Handle successful response
                        console.log('getsumVotekm12 successfully:', getsumVotekm12.data.sumVote);
                        setSumvotekm12(getsumVotekm12.data.sumVote)
                    }

                } catch (error) {
                    // Handle errors
                    console.error('Error get sumVotekm12:', error);
                }

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }


        };

        const fetchImagekm13 = async () => {

            try {

                const getresponseNamekm13 = await axios.get('http://localhost:5000/getcandidatekm13', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                // Handle successful response
                console.log('Name get successfully:', getresponseNamekm13.data.latestCandidateId);
                resetArtistNamekm13(getresponseNamekm13.data.latestCandidateId)

                try {

                    console.log('choiceReartistNamekm13', getresponseNamekm13.data.latestCandidateId)
                    const choice = getresponseNamekm13.data.latestCandidateId
                    console.log('reartistNamekm13', getresponseNamekm13.data.latestCandidateId)
                    if (choice) {
                        const getsumVotekm13 = await axios.post('http://localhost:5000/sumvote', { choice }, {
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            }
                        });

                        // Handle successful response
                        console.log('getsumVotekm13 successfully:', getsumVotekm13.data.sumVote);
                        setSumvotekm13(getsumVotekm13.data.sumVote)
                    }

                } catch (error) {
                    // Handle errors
                    console.error('Error get sumVotekm13:', error);
                }

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }
        };

        const fetchImagekm14 = async () => {

            try {

                const getresponseNamekm14 = await axios.get('http://localhost:5000/getcandidatekm14', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                // Handle successful response
                console.log('Name get successfully:', getresponseNamekm14.data.latestCandidateId);
                resetArtistNamekm14(getresponseNamekm14.data.latestCandidateId)

                try {

                    console.log('choiceReartistNamekm14', getresponseNamekm14.data.latestCandidateId)
                    const choice = getresponseNamekm14.data.latestCandidateId
                    console.log('reartistNamekm14', getresponseNamekm14.data.latestCandidateId)
                    if (choice) {
                        const getsumVotekm14 = await axios.post('http://localhost:5000/sumvote', { choice }, {
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            }
                        });

                        // Handle successful response
                        console.log('getsumVotekm14 successfully:', getsumVotekm14.data.sumVote);
                        setSumvotekm14(getsumVotekm14.data.sumVote)
                    }

                } catch (error) {
                    // Handle errors
                    console.error('Error get sumVotekm14:', error);
                }

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }
        };

        const fetchImagekm21 = async () => {

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
                resetArtistNamekm21(getresponseNamekm21.data.latestCandidateId)

                try {

                    console.log('choiceReartistNamekm21', getresponseNamekm21.data.latestCandidateId)
                    const choice = getresponseNamekm21.data.latestCandidateId
                    console.log('reartistNamekm21', getresponseNamekm21.data.latestCandidateId)
                    if (choice) {
                        const getsumVotekm21 = await axios.post('http://localhost:5000/sumvote', { choice }, {
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            }
                        });

                        // Handle successful response
                        console.log('getsumVotekm11 successfully:', getsumVotekm21.data.sumVote);
                        setSumvotekm21(getsumVotekm21.data.sumVote)
                    }

                } catch (error) {
                    // Handle errors
                    console.error('Error get sumVotekm21:', error);
                }

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }
        };

        const fetchImagekm22 = async () => {

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
                resetArtistNamekm22(getresponseNamekm22.data.latestCandidateId)

                try {

                    console.log('choiceReartistNamekm22', getresponseNamekm22.data.latestCandidateId)
                    const choice = getresponseNamekm22.data.latestCandidateId
                    console.log('reartistNamekm22', getresponseNamekm22.data.latestCandidateId)
                    if (choice) {
                        const getsumVotekm22 = await axios.post('http://localhost:5000/sumvote', { choice }, {
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            }
                        });

                        // Handle successful response
                        console.log('getsumVotekm22 successfully:', getsumVotekm22.data.sumVote);
                        setSumvotekm22(getsumVotekm22.data.sumVote)
                    }

                } catch (error) {
                    // Handle errors
                    console.error('Error get sumVotekm22:', error);
                }

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }
        };

        const fetchImagekm23 = async () => {

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
                resetArtistNamekm23(getresponseNamekm23.data.latestCandidateId)

                try {

                    console.log('choiceReartistNamekm23', getresponseNamekm23.data.latestCandidateId)
                    const choice = getresponseNamekm23.data.latestCandidateId
                    console.log('reartistNamekm23', getresponseNamekm23.data.latestCandidateId)
                    if (choice) {
                        const getsumVotekm23 = await axios.post('http://localhost:5000/sumvote', { choice }, {
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            }
                        });

                        // Handle successful response
                        console.log('getsumVotekm23 successfully:', getsumVotekm23.data.sumVote);
                        setSumvotekm23(getsumVotekm23.data.sumVote)
                    }

                } catch (error) {
                    // Handle errors
                    console.error('Error get sumVotekm23:', error);
                }

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }
        };

        const fetchImagekm24 = async () => {

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
                resetArtistNamekm24(getresponseNamekm24.data.latestCandidateId)

                try {

                    console.log('choiceReartistNamekm24', getresponseNamekm24.data.latestCandidateId)
                    const choice = getresponseNamekm24.data.latestCandidateId
                    console.log('reartistNamekm24', getresponseNamekm24.data.latestCandidateId)
                    if (choice) {
                        const getsumVotekm24 = await axios.post('http://localhost:5000/sumvote', { choice }, {
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            }
                        });

                        // Handle successful response
                        console.log('getsumVotekm24 successfully:', getsumVotekm24.data.sumVote);
                        setSumvotekm24(getsumVotekm24.data.sumVote)
                    }

                } catch (error) {
                    // Handle errors
                    console.error('Error get sumVotekm24:', error);
                }

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }
        };

        //ให้โชว์รูปภาพและข้อความทุกครั้งเมื่อเปิดหน้าเพจ
        const fetchImagekm31 = async () => {

            try {

                const getresponseNamekm31 = await axios.get('http://localhost:5000/getcandidatekm31', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                // Handle successful response
                console.log('Name get successfully:', getresponseNamekm31.data.latestCandidateId);
                resetArtistNamekm31(getresponseNamekm31.data.latestCandidateId)

                try {

                    console.log('choiceReartistNamekm31', getresponseNamekm31.data.latestCandidateId)
                    const choice = getresponseNamekm31.data.latestCandidateId
                    console.log('reartistNamekm31', getresponseNamekm31.data.latestCandidateId)
                    if (choice) {
                        const getsumVotekm31 = await axios.post('http://localhost:5000/sumvote', { choice }, {
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            }
                        });

                        // Handle successful response
                        console.log('getsumVotekm31 successfully:', getsumVotekm31.data.sumVote);
                        setSumvotekm31(getsumVotekm31.data.sumVote)
                    }

                } catch (error) {
                    // Handle errors
                    console.error('Error get sumVotekm31:', error);
                }

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }

        };

        const fetchImagekm32 = async () => {

            try {

                const getresponseNamekm32 = await axios.get('http://localhost:5000/getcandidatekm32', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                // Handle successful response
                console.log('Name get successfully:', getresponseNamekm32.data.latestCandidateId);
                resetArtistNamekm32(getresponseNamekm32.data.latestCandidateId)

                try {

                    console.log('choiceReartistNamekm32', getresponseNamekm32.data.latestCandidateId)
                    const choice = getresponseNamekm32.data.latestCandidateId
                    console.log('reartistNamekm32', getresponseNamekm32.data.latestCandidateId)
                    if (choice) {
                        const getsumVotekm32 = await axios.post('http://localhost:5000/sumvote', { choice }, {
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            }
                        });

                        // Handle successful response
                        console.log('getsumVotekm32 successfully:', getsumVotekm32.data.sumVote);
                        setSumvotekm32(getsumVotekm32.data.sumVote)
                    }

                } catch (error) {
                    // Handle errors
                    console.error('Error get sumVotekm32:', error);
                }

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }
        };

        const fetchImagekm33 = async () => {

            try {

                const getresponseNamekm33 = await axios.get('http://localhost:5000/getcandidatekm33', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                // Handle successful response
                console.log('Name get successfully:', getresponseNamekm33.data.latestCandidateId);
                resetArtistNamekm33(getresponseNamekm33.data.latestCandidateId)

                try {

                    console.log('choiceReartistNamekm33', getresponseNamekm33.data.latestCandidateId)
                    const choice = getresponseNamekm33.data.latestCandidateId
                    console.log('reartistNamekm33', getresponseNamekm33.data.latestCandidateId)
                    if (choice) {
                        const getsumVotekm33 = await axios.post('http://localhost:5000/sumvote', { choice }, {
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            }
                        });

                        // Handle successful response
                        console.log('getsumVotekm33 successfully:', getsumVotekm33.data.sumVote);
                        setSumvotekm33(getsumVotekm33.data.sumVote)
                    }

                } catch (error) {
                    // Handle errors
                    console.error('Error get sumVotekm33:', error);
                }

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }
        };

        const fetchImagekm34 = async () => {

            try {

                const getresponseNamekm34 = await axios.get('http://localhost:5000/getcandidatekm34', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                // Handle successful response
                console.log('Name get successfully:', getresponseNamekm34.data.latestCandidateId);
                resetArtistNamekm34(getresponseNamekm34.data.latestCandidateId)

                try {

                    console.log('choiceReartistNamekm34', getresponseNamekm34.data.latestCandidateId)
                    const choice = getresponseNamekm34.data.latestCandidateId
                    console.log('reartistNamekm34', getresponseNamekm34.data.latestCandidateId)
                    if (choice) {
                        const getsumVotekm34 = await axios.post('http://localhost:5000/sumvote', { choice }, {
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            }
                        });

                        // Handle successful response
                        console.log('getsumVotekm34 successfully:', getsumVotekm34.data.sumVote);
                        setSumvotekm34(getsumVotekm34.data.sumVote)
                    }

                } catch (error) {
                    // Handle errors
                    console.error('Error get sumVotekm34:', error);
                }

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }
        };

        const fetchImagekm41 = async () => {

            try {

                const getresponseNamekm41 = await axios.get('http://localhost:5000/getcandidatekm41', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                // Handle successful response
                console.log('Name get successfully:', getresponseNamekm41.data.latestCandidateId);
                resetArtistNamekm41(getresponseNamekm41.data.latestCandidateId)

                try {

                    console.log('choiceReartistNamekm41', getresponseNamekm41.data.latestCandidateId)
                    const choice = getresponseNamekm41.data.latestCandidateId
                    console.log('reartistNamekm41', getresponseNamekm41.data.latestCandidateId)
                    if (choice) {
                        const getsumVotekm41 = await axios.post('http://localhost:5000/sumvote', { choice }, {
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            }
                        });

                        // Handle successful response
                        console.log('getsumVotekm41 successfully:', getsumVotekm41.data.sumVote);
                        setSumvotekm41(getsumVotekm41.data.sumVote)
                    }

                } catch (error) {
                    // Handle errors
                    console.error('Error get sumVotekm41:', error);
                }

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }


        };

        const fetchImagekm42 = async () => {

            try {

                const getresponseNamekm42 = await axios.get('http://localhost:5000/getcandidatekm42', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                // Handle successful response
                console.log('Name get successfully:', getresponseNamekm42.data.latestCandidateId);
                resetArtistNamekm42(getresponseNamekm42.data.latestCandidateId)

                try {

                    console.log('choiceReartistNamekm42', getresponseNamekm42.data.latestCandidateId)
                    const choice = getresponseNamekm42.data.latestCandidateId
                    console.log('reartistNamekm42', getresponseNamekm42.data.latestCandidateId)
                    if (choice) {
                        const getsumVotekm42 = await axios.post('http://localhost:5000/sumvote', { choice }, {
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            }
                        });

                        // Handle successful response
                        console.log('getsumVotekm42 successfully:', getsumVotekm42.data.sumVote);
                        setSumvotekm42(getsumVotekm42.data.sumVote)
                    }

                } catch (error) {
                    // Handle errors
                    console.error('Error get sumVotekm42:', error);
                }

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }
        };

        const fetchImagekm43 = async () => {

            try {

                const getresponseNamekm43 = await axios.get('http://localhost:5000/getcandidatekm43', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                // Handle successful response
                console.log('Name get successfully:', getresponseNamekm43.data.latestCandidateId);
                resetArtistNamekm43(getresponseNamekm43.data.latestCandidateId)

                try {

                    console.log('choiceReartistNamekm43', getresponseNamekm43.data.latestCandidateId)
                    const choice = getresponseNamekm43.data.latestCandidateId
                    console.log('reartistNamekm43', getresponseNamekm43.data.latestCandidateId)
                    if (choice) {
                        const getsumVotekm43 = await axios.post('http://localhost:5000/sumvote', { choice }, {
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            }
                        });

                        // Handle successful response
                        console.log('getsumVotekm43 successfully:', getsumVotekm43.data.sumVote);
                        setSumvotekm43(getsumVotekm43.data.sumVote)
                    }

                } catch (error) {
                    // Handle errors
                    console.error('Error get sumVotekm43:', error);
                }

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }
        };

        const fetchImagekm44 = async () => {

            try {

                const getresponseNamekm44 = await axios.get('http://localhost:5000/getcandidatekm44', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                // Handle successful response
                console.log('Name get successfully:', getresponseNamekm44.data.latestCandidateId);
                resetArtistNamekm44(getresponseNamekm44.data.latestCandidateId)

                try {

                    console.log('choiceReartistNamekm44', getresponseNamekm44.data.latestCandidateId)
                    const choice = getresponseNamekm44.data.latestCandidateId
                    console.log('reartistNamekm44', getresponseNamekm44.data.latestCandidateId)
                    if (choice) {
                        const getsumVotekm44 = await axios.post('http://localhost:5000/sumvote', { choice }, {
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            }
                        });

                        // Handle successful response
                        console.log('getsumVotekm44 successfully:', getsumVotekm44.data.sumVote);
                        setSumvotekm44(getsumVotekm44.data.sumVote)
                    }

                } catch (error) {
                    // Handle errors
                    console.error('Error get sumVotekm44:', error);
                }

            } catch (error) {
                // Handle errors
                console.error('Error get Name:', error);
            }
        };

        fetchImagekm11();
        fetchImagekm12();
        fetchImagekm13();
        fetchImagekm14();
        fetchImagekm21();
        fetchImagekm22();
        fetchImagekm23();
        fetchImagekm24();
        fetchImagekm31();
        fetchImagekm32();
        fetchImagekm33();
        fetchImagekm34();
        fetchImagekm41();
        fetchImagekm42();
        fetchImagekm43();
        fetchImagekm44();

    }, []); // ระบุว่า useEffect ควรถูกเรียกใช้เฉพาะครั้งแรกเท่านั้น

    return (

        <div className='flex justify-center'>
            <div className='absolute md:w-[1240px] w-[800px]'>
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

                    {/**เวลานับถอยหลัง */}
                    <Count />

                    {/**กรอบสรุปผลทั้งหมด*/}
                    <div className='mt-[20px] flex flex-col items-center'>

                        <div className='my-[10px]'>
                            <div className='flex flex-row'>
                                <BarChart
                                    series={[{ data: datasetkm1, label: 'สาขาคู่จิ้นชายยอดนิยม', type: 'bar' }]}
                                    xAxis={[{ scaleType: 'band', data: xLabelskm1 }]}
                                    axisHighlight={{
                                        x: 'none', // Or 'none', or 'band' or line
                                        y: 'none', // Or 'none' or line ปิด label ที่ชี้ๆแล้วขึ้นข้อมูล
                                    }}
                                    {...chartSettingkm1}

                                />
                                <BarChart
                                    series={[{ data: datasetkm2, label: 'สาขาคู่จิ้นหญิงยอดนิยม', type: 'bar', color: 'pink' }]}
                                    xAxis={[{ scaleType: 'band', data: xLabelskm2 }]}
                                    axisHighlight={{
                                        x: 'none', // Or 'none', or 'band' or line
                                        y: 'none', // Or 'none' or line ปิด label ที่ชี้ๆแล้วขึ้นข้อมูล
                                    }}
                                    {...chartSettingkm2}

                                />
                            </div>

                            <div className='flex flex-row'>
                                <BarChart
                                    series={[{ data: datasetkm3, label: 'สาขาภาพยนตร์ยอดนิยม', type: 'bar', color: 'brown' }]}
                                    xAxis={[{ scaleType: 'band', data: xLabelskm3 }]}
                                    axisHighlight={{
                                        x: 'none', // Or 'none', or 'band' or line
                                        y: 'none', // Or 'none' or line ปิด label ที่ชี้ๆแล้วขึ้นข้อมูล
                                    }}
                                    {...chartSettingkm3}

                                />
                                <BarChart
                                    series={[{ data: datasetkm4, label: 'สาขาเพลงฮิตติดหู', type: 'bar', color: 'gray' }]}
                                    xAxis={[{ scaleType: 'band', data: xLabelskm4 }]}
                                    axisHighlight={{
                                        x: 'none', // Or 'none', or 'band' or line
                                        y: 'none', // Or 'none' or line ปิด label ที่ชี้ๆแล้วขึ้นข้อมูล
                                    }}
                                    {...chartSettingkm4}

                                />
                            </div>

                        </div>

                        {(checkAddmin == 1) && <div className='flex flex-row items-center'>
                            <div className='flex flex-col items-center mx-[5px]'>
                                {/**กรอบชื่อสรุปผลสาขา1*/}
                                <div className='text-blue-300 text-[32px] font-bold drop-shadow-[3px_3px_rgba(0,0,0,0.6)]'>KM1</div>

                                {/**กรอบสรุปผลสาขา1*/}
                                <div className='flex flex-col items-center rounded-[10px] md:w-[390px] w-[315px] h-[280px] bg-red-500 bg-opacity-[55%] shadow-[4px_4px_rgba(0,0,0,0.6)]'>


                                    {/**กรอบสรุปผลสาขา1 คนที่1*/}
                                    <div className='m-[5px] flex flex-row items-center md:w-[370px] w-[305px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                        {/**กรอบรูปสรุปผลสาขา1 คนที่1*/}
                                        <div className=' ml-[10px] text-[12px] text-white'>1</div>
                                        {/**<div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div> */}
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>{reartistNamekm11}</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>คะแนนโหวต</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center justify-center h-[35px] w-[80px] md:w-[125px]'>{sumvotekm11}</div>
                                        <div className='ml-[5px] text-[12px] text-white'>คะแนน</div>
                                    </div>

                                    {/**กรอบสรุปผลสาขา1 คนที่2*/}
                                    <div className='m-[5px] flex flex-row items-center md:w-[370px] w-[305px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                        {/**กรอบรูปสรุปผลสาขา1 คนที่2*/}
                                        <div className='ml-[10px] text-[12px] text-white'>2</div>
                                        {/**<div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div> */}
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>{reartistNamekm12}</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>คะแนนโหวต</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center justify-center h-[35px] w-[80px] md:w-[125px]'>{sumvotekm12}</div>
                                        <div className='ml-[5px] text-[12px] text-white'>คะแนน</div>
                                    </div>

                                    {/**กรอบสรุปผลสาขา1 คนที่3*/}
                                    <div className='m-[5px] flex flex-row items-center md:w-[370px] w-[305px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                        {/**กรอบรูปสรุปผลสาขา1 คนที่3*/}
                                        <div className='ml-[10px] text-[12px] text-white'>3</div>
                                        {/**<div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div> */}
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>{reartistNamekm13}</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>คะแนนโหวต</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center justify-center h-[35px] w-[80px] md:w-[125px]'>{sumvotekm13}</div>
                                        <div className='ml-[5px] text-[12px] text-white'>คะแนน</div>
                                    </div>

                                    {/**กรอบสรุปผลสาขา1 คนที่4*/}
                                    <div className='m-[5px] flex flex-row items-center md:w-[370px] w-[305px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                        {/**กรอบรูปสรุปผลสาขา1 คนที่4*/}
                                        <div className='ml-[10px] text-[12px] text-white'>4</div>
                                        {/**<div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div> */}
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>{reartistNamekm14}</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>คะแนนโหวต</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center justify-center h-[35px] w-[80px] md:w-[125px]'>{sumvotekm14}</div>
                                        <div className='ml-[5px] text-[12px] text-white'>คะแนน</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center mx-[10px]">
                                {/**กรอบชื่อสรุปผลสาขา2*/}
                                <div className='text-blue-300 text-[32px] font-bold drop-shadow-[3px_3px_rgba(0,0,0,0.6)]'>KM2</div>

                                {/**กรอบสรุปผลสาขา2*/}
                                <div className='flex flex-col items-center rounded-[10px] md:w-[390px] w-[315px] h-[280px] bg-red-500 bg-opacity-[55%] shadow-[4px_4px_rgba(0,0,0,0.6)]'>
                                    {/**กรอบสรุปผลสาขา2 คนที่1*/}
                                    <div className='m-[5px] flex flex-row items-center md:w-[370px] w-[305px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                        {/**กรอบรูปสรุปผลสาขา2 คนที่1*/}
                                        <div className='ml-[10px] text-[12px] text-white'>1</div>
                                        {/**<div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div> */}
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>{reartistNamekm21}</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>คะแนนโหวต</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center justify-center h-[35px] w-[80px] md:w-[125px]'>{sumvotekm21}</div>
                                        <div className='ml-[5px] text-[12px] text-white'>คะแนน</div>
                                    </div>

                                    {/**กรอบสรุปผลสาขา2 คนที่2*/}
                                    <div className='m-[5px] flex flex-row items-center md:w-[370px] w-[305px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                        {/**กรอบรูปสรุปผลสาขา2 คนที่2*/}
                                        <div className='ml-[10px] text-[12px] text-white'>2</div>
                                        {/**<div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div> */}
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>{reartistNamekm22}</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>คะแนนโหวต</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center justify-center h-[35px] w-[80px] md:w-[125px]'>{sumvotekm22}</div>
                                        <div className='ml-[5px] text-[12px] text-white'>คะแนน</div>
                                    </div>

                                    {/**กรอบสรุปผลสาขา2 คนที่3*/}
                                    <div className='m-[5px] flex flex-row items-center md:w-[370px] w-[305px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                        {/**กรอบรูปสรุปผลสาขา2 คนที่3*/}
                                        <div className='ml-[10px] text-[12px] text-white'>3</div>
                                        {/**<div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div> */}
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>{reartistNamekm23}</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>คะแนนโหวต</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center justify-center h-[35px] w-[80px] md:w-[125px]'>{sumvotekm23}</div>
                                        <div className='ml-[5px] text-[12px] text-white'>คะแนน</div>
                                    </div>

                                    {/**กรอบสรุปผลสาขา2 คนที่4*/}
                                    <div className='m-[5px] flex flex-row items-center md:w-[370px] w-[305px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                        {/**กรอบรูปสรุปผลสาขา2 คนที่4*/}
                                        <div className='ml-[10px] text-[12px] text-white'>4</div>
                                        {/**<div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div> */}
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>{reartistNamekm24}</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>คะแนนโหวต</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center justify-center h-[35px] w-[80px] md:w-[125px]'>{sumvotekm24}</div>
                                        <div className='ml-[5px] text-[12px] text-white'>คะแนน</div>
                                    </div>
                                </div>
                            </div>
                        </div>}


                        {(checkAddmin == 1) && <div className='flex flex-row'>
                            <div className='flex flex-col items-center mx-[5px]'>
                                {/**กรอบชื่อสรุปผลสาขา3*/}
                                <div className='text-blue-300 text-[32px] font-bold drop-shadow-[3px_3px_rgba(0,0,0,0.6)]'>KM3</div>

                                {/**กรอบสรุปผลสาขา3*/}
                                <div className='flex flex-col items-center rounded-[10px] md:w-[390px] w-[315px] h-[280px] bg-red-500 bg-opacity-[55%] shadow-[4px_4px_rgba(0,0,0,0.6)]'>
                                    {/**กรอบสรุปผลสาขา3 คนที่1*/}
                                    <div className='m-[5px] flex flex-row items-center md:w-[370px] w-[305px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                        {/**กรอบรูปสรุปผลสาขา3 คนที่1*/}
                                        <div className='ml-[10px] text-[12px] text-white'>1</div>
                                        {/**<div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div> */}
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>{reartistNamekm31}</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>คะแนนโหวต</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center justify-center h-[35px] w-[80px] md:w-[125px]'>{sumvotekm31}</div>
                                        <div className='ml-[5px] text-[12px] text-white'>คะแนน</div>
                                    </div>

                                    {/**กรอบสรุปผลสาขา3 คนที่2*/}
                                    <div className='m-[5px] flex flex-row items-center md:w-[370px] w-[305px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                        {/**กรอบรูปสรุปผลสาขา3 คนที่2*/}
                                        <div className='ml-[10px] text-[12px] text-white'>2</div>
                                        {/**<div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div> */}
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>{reartistNamekm32}</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>คะแนนโหวต</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center justify-center h-[35px] w-[80px] md:w-[125px]'>{sumvotekm32}</div>
                                        <div className='ml-[5px] text-[12px] text-white'>คะแนน</div>
                                    </div>

                                    {/**กรอบสรุปผลสาขา3 คนที่3*/}
                                    <div className='m-[5px] flex flex-row items-center md:w-[370px] w-[305px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                        {/**กรอบรูปสรุปผลสาขา3 คนที่3*/}
                                        <div className='ml-[10px] text-[12px] text-white'>3</div>
                                        {/**<div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div> */}
                                        <div className='ml-[4px] text-[12px] text-white flex items-center md:w-[150px w-[70px]'>{reartistNamekm33}</div>
                                        <div className='ml-[4px] text-[12px] text-white flex items-center md:w-[100px w-[70px]'>คะแนนโหวต</div>
                                        <div className='ml-[4px] text-[12px] text-white flex items-center justify-center h-[35px] w-[80px] md:w-[125px]'>{sumvotekm33}</div>
                                        <div className='ml-[4px] text-[12px] text-white'>คะแนน</div>
                                    </div>

                                    {/**กรอบสรุปผลสาขา3 คนที่4*/}
                                    <div className='m-[5px] flex flex-row items-center md:w-[370px] w-[305px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                        {/**กรอบรูปสรุปผลสาขา3 คนที่4*/}
                                        <div className='ml-[10px] text-[12px] text-white'>4</div>
                                        {/**<div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div> */}
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>{reartistNamekm34}</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>คะแนนโหวต</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center justify-center h-[35px] w-[80px] md:w-[125px]'>{sumvotekm34}</div>
                                        <div className='ml-[5px] text-[12px] text-white'>คะแนน</div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col items-center  mx-[5px]'>
                                {/**กรอบชื่อสรุปผลสาขา4*/}
                                <div className='text-blue-300 text-[32px] font-bold drop-shadow-[3px_3px_rgba(0,0,0,0.6)]'>KM4</div>

                                {/**กรอบสรุปผลสาขา4*/}
                                <div className='flex flex-col items-center rounded-[10px] md:w-[390px] w-[315px] h-[280px] bg-red-500 bg-opacity-[55%] shadow-[4px_4px_rgba(0,0,0,0.6)]'>
                                    {/**กรอบสรุปผลสาขา4 คนที่1*/}
                                    <div className='m-[5px] flex flex-row items-center md:w-[370px] w-[305px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                        {/**กรอบรูปสรุปผลสาขา4 คนที่1*/}
                                        <div className='ml-[10px] text-[12px] text-white'>1</div>
                                        {/**<div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div> */}
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>{reartistNamekm41}</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>คะแนนโหวต</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center justify-center h-[35px] w-[80px] md:w-[125px]'>{sumvotekm41}</div>
                                        <div className='ml-[5px] text-[12px] text-white'>คะแนน</div>
                                    </div>

                                    {/**กรอบสรุปผลสาขา4 คนที่2*/}
                                    <div className='m-[5px] flex flex-row items-center md:w-[370px] w-[305px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                        {/**กรอบรูปสรุปผลสาขา4 คนที่2*/}
                                        <div className='ml-[10px] text-[12px] text-white'>2</div>
                                        {/**<div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div> */}
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>{reartistNamekm42}</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>คะแนนโหวต</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center justify-center h-[35px] w-[80px] md:w-[125px]'>{sumvotekm42}</div>
                                        <div className='ml-[5px] text-[12px] text-white'>คะแนน</div>
                                    </div>

                                    {/**กรอบสรุปผลสาขา4 คนที่3*/}
                                    <div className='m-[5px] flex flex-row items-center md:w-[370px] w-[305px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                        {/**กรอบรูปสรุปผลสาขา4 คนที่3*/}
                                        <div className='ml-[10px] text-[12px] text-white'>3</div>
                                        {/**<div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div> */}
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>{reartistNamekm43}</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>คะแนนโหวต</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center justify-center h-[35px] w-[80px] md:w-[125px]'>{sumvotekm43}</div>
                                        <div className='ml-[5px] text-[12px] text-white'>คะแนน</div>
                                    </div>

                                    {/**กรอบสรุปผลสาขา4 คนที่4*/}
                                    <div className='m-[5px] flex flex-row items-center md:w-[370px] w-[305px] h-[60px] border-[2px] border-white rounded-[10px]'>
                                        {/**กรอบรูปสรุปผลสาขา4 คนที่4*/}
                                        <div className='ml-[10px] text-[12px] text-white'>4</div>
                                        {/**<div className='md:mx-[20px] mx-[10px] w-[40px] h-[40px] border-[2px] border-white rounded-[100%]'></div> */}
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>{reartistNamekm44}</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center w-[70px]'>คะแนนโหวต</div>
                                        <div className='ml-[5px] text-[12px] text-white flex items-center justify-center h-[35px] w-[80px] md:w-[125px]'>{sumvotekm44}</div>
                                        <div className='ml-[5px] text-[12px] text-white'>คะแนน</div>
                                    </div>
                                </div>
                            </div>
                        </div>}

                        <div className='w-[210px] h-[70px] flex justify-center items-center'>
                            <Link to='/'>
                                <button className='mt-[80px] w-[200px] h-[60px] hover:w-[210px] hover:h-[70px] hover:text-black bg-[#7D2D2A] border-black rounded-[50px] text-white shadow-[3px_4px_rgba(0,0,0,0.5)] drop-shadow-[3px_4px_rgba(0,0,0,0.5)] text-[20px] hover:text-[25px] font-Mitr'>VOTE</button>
                            </Link>
                        </div>

                    </div>





                </div>
            </div >
        </div>
    );
}
export default Result;