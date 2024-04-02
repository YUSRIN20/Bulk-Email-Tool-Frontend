import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Dailylist = ({ email, username }) => {
    const [dailyCounts, setDailyCounts] = useState([]);
    const [totalCounts, setTotalCounts] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make a GET request to fetch the Dailylist counts
                // const response = await axios.get(`http://localhost:8000/emailapi/user/getdailycounts/${email}`)
                const response = await axios.get(`https://bulk-email-tool-backend-iazh.onrender.com/emailapi/user/getdailycounts/${email}`)
                // console.log(response);
                // Extract the dailyCounts and totalCounts from the response.data
                const { dailyCounts } = response.data
                setDailyCounts(dailyCounts)
                setTotalCounts(response.data.totalEmailCount)
            } catch (error) {
                // Handle any errors
                console.error("Error fetching daily email counts:", error);
            }
        };
        fetchData();

    }, []) // Empty dependency array ensures that this effect runs only once
    return (
        <div>
            <h1 className='text-center  my-5'>Daily list</h1>
            <h2 className='text-center  mb-3'>Stats for {username}</h2>
            <h4 className='text-center  mt-4 mb-5'>Total mail sended today: {totalCounts}</h4>

            <div className='table-responsive'>
                <table class="table  table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            {/* <th scope="col">Username</th> */}
                            <th scope="col" className='text-center'>Subject</th>
                            <th scope="col" className='text-center'>Recipients</th>
                            <th scope="col" className='text-center'>Recipients Count</th>
                            <th scope="col" className='text-center'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dailyCounts.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td className='text-center'>{item._id.subject}</td>
                                    <td className='text-center'>{item._id.recipients}</td>
                                    <td className='text-center'>{item.recipientsCount}</td>
                                    <td className='text-center'>{item._id.date}</td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Dailylist;