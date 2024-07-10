import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for API requests
import { FaMinusCircle } from 'react-icons/fa'
import Count from '../time/Count';

function App() {
    const [branchq, setBranch] = useState([
        { code: '', branchName: '', imageBranch: null, candidates: [{ candidateName: '', imageCandidate: null }] }
    ]);
    const [allBranch, setAllBranch] = useState([]);
    const [showBranch, setShowBranch] = useState([]);
    const [error, setError] = useState('');
    const [getError, setGetError] = useState('');
    const [loading, setLoading] = useState('');

    const base64ToBlob = (base64) => {
        const byteString = atob(base64.split(',')[1]);
        const mimeString = base64.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    };

    const submitClick = async () => {
        setLoading('Loading...')
        if (showBranch.length > 0) {
            setError('please clear or input data');
            return;
        }

        console.log('showBranch.length', showBranch.length);

        if (showBranch.length === 0) {
            try {
                const formattedData = await Promise.all(branchq.map(async (item) => {
                    let image = null;
                    if (item.imageBranch) {
                        const formData = new FormData();
                        const imageBlob = base64ToBlob(item.imageBranch);
                        formData.append('image', imageBlob, 'image.png');
                        console.log('Uploading image:', formData.get('image'));

                        const response = await axios.post('http://localhost:5000/auth/imageroom', formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        });
                        console.log('Image upload response:', response.data);
                        image = response.data.url;
                        console.log('Image', response.data.url);
                    }

                    return {
                        code: item.code,
                        branch: item.branchName,
                        image: image,
                        candidates: await Promise.all(item.candidates.map(async (candidate) => {
                            let imageCandidate = null;
                            if (candidate.imageCandidate) {
                                const formData = new FormData();
                                const imageBlob = base64ToBlob(candidate.imageCandidate);
                                formData.append('imagec', imageBlob, 'imagec.png');
                                console.log('Uploading image:', formData.get('imagec'));

                                const responseCandidate = await axios.post('http://localhost:5000/auth/imagechoiceroom', formData, {
                                    headers: {
                                        'Content-Type': 'multipart/form-data'
                                    }
                                });
                                console.log('Image upload response:', responseCandidate.data);
                                imageCandidate = responseCandidate.data.url;
                                console.log('ImageCandidate', responseCandidate.data.url);
                            }

                            return {
                                candidateName: candidate.candidateName,
                                imageCandidate: imageCandidate
                            };
                        }))
                    };
                }));

                console.log('showBranch.length', showBranch.length);

                const response = await axios.post('http://localhost:5000/auth/homeroom', formattedData, {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                console.log('Backend response:', response.data.createData);
                console.log('testhmData:', response.data.createData);

                try {
                    const response = await axios.get('http://localhost:5000/auth/homeroom', {
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                        }
                    });

                    console.log('Fetch data response:', response.data);
                    const { homeroomData } = response.data

                    if (response.data && homeroomData) {
                        const formattedData = homeroomData.map(item => ({
                            id: item.id,
                            code: item.code,
                            branchName: item.branch,
                            imageBranch: item.image ? { name: item.image } : null,
                            candidates: item.Candidateroom.map(candidate => ({
                                candidateName: candidate.candidateName,
                                imageCandidate: candidate.imageCandidates ? { name: candidate.imageCandidates } : null
                            }))
                        }));

                        setAllBranch(formattedData);
                        setShowBranch(formattedData);
                        setLoading('')
                    } else {
                        setGetError('Invalid data format from API');
                    }

                } catch (error) {
                    console.error('Error fetching data:', error);
                    setGetError('Error fetching data from server');
                }

            } catch (error) {
                console.error('Error updating index in backend:', error);
                setError('Incomplete data clear and input again');
            }

        }
    };


    const clearClick = async () => {
        try {
            await axios.delete('http://localhost:5000/auth/homeroom', {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });
            setShowBranch([]); // Clear showBranch on successful delete
            setAllBranch([]);
            setError('');
        } catch (error) {
            console.error('Error updating index in backend:', error);
        }
    };

    const addBranchClick = () => {
        const newBranch = { code: '', branchName: '', imageBranch: null, candidates: [{ candidateName: '', imageCandidate: null }] };
        setBranch([...branchq, newBranch]);
    };

    const minusBranchClick = (branchIndex) => {
        const updatedBranch = [...branchq];
        updatedBranch.pop();
        setBranch(updatedBranch);
    }

    const addCandidateClick = (branchIndex) => {
        const updatedBranch = [...branchq];
        updatedBranch[branchIndex].candidates.push({ candidateName: '', imageCandidate: null });
        setBranch(updatedBranch);
    };

    const deleteCandidateClick = (branchIndex) => {
        const updatedBranch = [...branchq];
        updatedBranch[branchIndex].candidates.pop();
        setBranch(updatedBranch);
    };

    const handleInputChange = (event, branchIndex, candidateIndex, fieldName) => {
        const updatedBranch = [...branchq];
        if (candidateIndex === null) {
            updatedBranch[branchIndex][fieldName] = event.target.value;
        } else {
            updatedBranch[branchIndex].candidates[candidateIndex][fieldName] = event.target.value;
        }
        setBranch(updatedBranch);
    };

    const handleFileChange = (event, branchIndex, candidateIndex, fieldName) => {
        const updatedBranch = [...branchq];
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            if (candidateIndex === null) {
                updatedBranch[branchIndex][fieldName] = reader.result;
            } else {
                updatedBranch[branchIndex].candidates[candidateIndex][fieldName] = reader.result;
            }
            setBranch(updatedBranch);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/auth/homeroom', {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                console.log('Fetch data response:', response.data);
                const { homeroomData } = response.data
                console.log('homeroomData:',  homeroomData );

                if (response.data && homeroomData) {
                    const formattedData = homeroomData.map(item => ({
                        id: item.id,
                        code: item.code,
                        branchName: item.branch,
                        imageBranch: item.image ? { name: item.image } : null,
                        candidates: item.Candidateroom.map(candidate => ({
                            candidateName: candidate.candidateName,
                            imageCandidate: candidate.imageCandidates ? { name: candidate.imageCandidates } : null
                        }))
                    }));

                    setAllBranch(formattedData);
                    setShowBranch(formattedData);
                } else {
                    setGetError('Invalid data format from API');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setGetError('Error fetching data from server');
            }
        };

        fetchData();
    }, []);

    return (
        <div className='flex flex-col items-center m-[10px]'>
            <div className='flex flex-col items-center'>
                <div>ส่วนที่ 1 กำหนดรายละเอียดสาขาโหวต</div>
                <div className='flex md:flex-row md:justify-center items-center md:flex-wrap flex-col'>
                    {showBranch && showBranch.length > 0 && showBranch.map((branch, branchIndex) => (
                        <div key={branchIndex} className='border w-[350px] p-2 m-[10px]'>
                            <p>{branchIndex + 1}</p>
                            <p>รหัสสาขา: {branch.code}</p>
                            <p>ชื่อสาขา: {branch.branchName}</p>
                            <p>ผู้เข้าชิง:</p>
                            <ul>
                                {branch.candidates && branch.candidates.map((candidate, idx) => (
                                    <li className='ml-[20px]' key={idx}>{`${idx + 1}. ${candidate.candidateName}`}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {allBranch.length === 0 && branchq.map((item, branchIndex) => (
                    <div key={branchIndex}>
                        <div className='flex flex-row md:m-[10px] ml-[40px] mt-[10px]'>

                            {allBranch.length === 0 &&
                                <div className='mx-[5px] flex justify-center items-center'
                                >
                                    <FaMinusCircle className="text-red-600 hover:text-red-500" onClick={() => minusBranchClick(branchIndex)} />
                                </div>}

                            <input
                                type='text'
                                className='md:w-[100px] w-[70px] px-[5px] md:text-[14px] text-[12px] bg-green-100 focus:outline-none focus:ring-sky-500 focus:ring-1'
                                placeholder='รหัสสาขา'
                                value={item.code}
                                onChange={(e) => handleInputChange(e, branchIndex, null, 'code')}
                            />
                            <input
                                type='text'
                                className='mx-[10px] md:w-[300px] w-[200px] px-[5px] md:text-[14px] text-[12px] bg-green-100 focus:outline-none focus:ring-sky-500 focus:ring-1'
                                placeholder='ชื่อสาขา'
                                value={item.branchName}
                                onChange={(e) => handleInputChange(e, branchIndex, null, 'branchName')}
                            />
                            <input
                                type='file'
                                name='imageBranch'
                                className='mx-[10px] md:text-[14px] text-[9px]'
                                onChange={(e) => handleFileChange(e, branchIndex, null, 'imageBranch')}
                            />
                        </div>

                        {item.candidates.map((candidate, candidateIndex) => (
                            <div key={candidateIndex} className='flex flex-row md:m-[10px] ml-[40px] mt-[5px]'>
                                <input
                                    type='text'
                                    className='mx-[10px] md:w-[300px] w-[250px] px-[5px] nd:text-[14px] text-[12px] bg-orange-100 focus:outline-none focus:ring-sky-500 focus:ring-1'
                                    placeholder='ชื่อผู้เข้าชิง'
                                    value={candidate.candidateName}
                                    onChange={(e) => handleInputChange(e, branchIndex, candidateIndex, 'candidateName')}
                                />
                                <input
                                    type='file'
                                    name='imageCandidate'
                                    className='mx-[10px] md:text-[14px] text-[9px]'
                                    onChange={(e) => handleFileChange(e, branchIndex, candidateIndex, 'imageCandidate')}
                                />
                            </div>
                        ))}

                        <div className='flex flex-row md:m-[10px] ml-[50px] mt-[5px]'>
                            <button
                                onClick={() => addCandidateClick(branchIndex)}
                                className='mr-[5px] w-[50px] h-[23px] rounded-[18px] bg-green-500 hover:bg-green-600 flex justify-center items-center text-white text-[10px]'>Add</button>
                            <button
                                onClick={() => deleteCandidateClick(branchIndex)}
                                className='w-[50px] h-[23px] rounded-[18px] bg-red-500 hover:bg-red-600 flex justify-center items-center text-white text-[10px]'>Delete</button>
                        </div>


                    </div>
                ))}
            </div>

            <>{error}</>
            <div>{loading}</div>

            <div className='flex flex-row'>
                {allBranch.length === 0 && <button
                    onClick={addBranchClick}
                    className='m-[10px] w-[60px] h-[33px] rounded-[18px] bg-slate-500 hover:bg-slate-600 flex justify-center items-center text-white text-[12px]'>เพิ่มสาขา</button>}

                {allBranch.length === 0 && <button
                    onClick={submitClick}
                    className='m-[10px] w-[60px] h-[33px] rounded-[18px] bg-blue-600 hover:bg-blue-900 flex justify-center items-center text-white text-[12px]'>Submit</button>}

                <button
                    onClick={clearClick}
                    className='m-[10px] w-[60px] h-[33px] rounded-[18px] bg-sky-200 hover:bg-red-500 flex justify-center items-center text-black hover:text-white text-[12px]'>Clear</button>
            </div>
        </div>
    )
}

export default App;
