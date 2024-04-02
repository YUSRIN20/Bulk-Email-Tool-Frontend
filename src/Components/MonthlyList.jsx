import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Style/MonthlyPage.css'
import { motion } from 'framer-motion'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
}


const MonthlyList = ({ username, email }) => {
    const [monthlyCounts, setMonthlyCounts] = useState([])
    const [totalMailCount, setTotalMailCounts] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make a GET request to fetch the monthlyEmail counts
                // const response = await axios.get(`http://localhost:8000/emailapi/user/getmonthlycounts/${email}`)
                const response = await axios.get(`https://bulk-email-tool-backend-iazh.onrender.com/emailapi/user/getmonthlycounts/${email}`)
                // Extract the monthlyEmailCounts from the response.data
                const { monthlyCounts } = response.data
                setTotalMailCounts(response.data.totalEmailCount)
                setMonthlyCounts(monthlyCounts)
            } catch (error) {
                // Handle any errors
                console.log("Error fetching monthly email counts:", error);
            }
        };
        fetchData()
    }, []) // Empty dependency array ensures that this effect runs only once
    return (
        <div>
            <h1 className='text-center my-5'>Monthly List</h1>
            <h2 className='text-center mb-3'>Stats for {username}</h2>
            <h4 className='text-center mt-4 mb-5'>Total mail sended: {totalMailCount}</h4>

            <motion.div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-5 justify-content-center"
                variants={textVariants}
                initial="initial"
                animate="animate" >

                {monthlyCounts.map((item, index) => {
                    return (
                        <motion.div  variants={textVariants} key={index}>
                            <motion.div   variants={textVariants}class="card" id='cards-w'>
                                <motion.div  variants={textVariants} class="card-body">
                                    <h3   variants={textVariants}class="card-title text-center">{item.month}</h3>
                                    <p  variants={textVariants} class="card-text text-center mt-4">Email Count: {item.count}</p>
                                </motion.div>
                            </motion.div>

                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    );
};

export default MonthlyList;