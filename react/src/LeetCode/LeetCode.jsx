import React, { useState } from 'react';

const LeetCode = () => {
    const [studentCode, setStudentCode] = useState('');
    const [data, setData] = useState([] || null)
    const [username, setUsername] = useState({})
    const userNamesList = ['vishaal351', 'ankitkumar-tech', "arajAnkit", "mideasy2"];

    async function fetchLeetCode(userName) {
        try {
            const res = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${userName}`);
            const val = await res.json();
            setData(prevData => [...prevData, val]);
            // setData([...data, val])
            console.log(val, "val");
        } catch (error) {
            console.log(error);
        }
    }



    function handleSearch() {
        console.log(studentCode);
        if (studentCode) {
            fetchLeetCode(studentCode);
        }
    }

    function handleAutoSearch() {
        userNamesList.forEach((userName) => {
            fetchLeetCode(userName);
        });
    }
    console.log(data, "data")
    return (
        <div>
            {/* LeetCode */}
            <input
                type="text"
                value={studentCode}
                onChange={(e) => setStudentCode(e.target.value)}
                placeholder="Enter LeetCode username"
            />
            <button>Sort</button>
            <button onClick={handleSearch}>Search</button>
            <button onClick={handleAutoSearch}>Auto Search</button>
            {data.map((e) =>
                <div>{e?.totalSolved}</div>
            )}
        </div>
    );
};

export default LeetCode;