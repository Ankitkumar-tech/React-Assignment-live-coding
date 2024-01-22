import React, { useEffect, useState } from 'react';

const LeetCode = () => {
    const [studentCode, setStudentCode] = useState('');
    let [data, setData] = useState([] || null)
    const [username, setUsername] = useState({})
    const userNamesList = ['vishaal351', 'ankitkumar-tech', "arajAnkit", "mideasy2"];
    const [filterdata, setFilterData] = useState([] || null)

    // useEffect(()=>{
    //     fetchLeetCode()
    // },[])
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

    // function 

    function handleAutoSearch() {
        userNamesList.forEach((userName) => {
            fetchLeetCode(userName);
        });
    }

    function filtermintomax() {
        let sortedData = [...data];
        sortedData.sort((a, b) => b.totalSolved - a.totalSolved);
        setData(sortedData);
    }
    function filtermaxtomin() {
        let sortedData = [...data];
        sortedData.sort((a, b) => a.totalSolved - b.totalSolved);
        setData(sortedData);
    }

    function formatTimestamp(timestamp) {
        const date = new Date(timestamp * 1000);
        // console.log(data.getFullYear())
        return date.getFullYear(); // Adjust the format as needed
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
            <input type="date" />
            <button onClick={handleAutoSearch}>Auto Search</button>
            <button onClick={filtermintomax}>Ghatte se badhte huye </button>
            <button onClick={filtermaxtomin}>Badhte se ghatte huye</button>
            {data.map((e) =>
                <>
                    <div>{e?.totalSolved}</div>
                    {e?.recentSubmissions.map((z) => <> <p>{z.title}</p>

                        <p>{formatTimestamp(z?.timestamp)}</p>
                        <p>{z?.name}</p>
                    </>)}
                </>
            )}
        </div>
    );
};

export default LeetCode;