import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
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

const Dashboard = () => {
    const navigate = useNavigate();
    const [isLoadingDaily, setIsLoadingDaily] = useState(false);
    const [isLoadingMonthly, setIsLoadingMonthly] = useState(false);

    const handleDailyView = async () => {
        setIsLoadingDaily(true);
        navigate(`dailylist`);
        setTimeout(()=>{
            setIsLoadingDaily(false) // Set loading back to false after navigation
        },500)
    }

    const handleMonthlyView = async () => {
        setIsLoadingMonthly(true);
        navigate('monthlylist');
        setTimeout(() => {
            setIsLoadingMonthly(false); // Set loading back to false after navigation
        }, 500);
    }

    return (
        <div className='container-lg'>
            <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate" >
                <motion.h1 variants={textVariants} className='text-center mt-5'>Dashboard</motion.h1>
                <motion.div variants={textVariants} className='d-flex justify-content-center mt-3'>
                    <motion.div variants={textVariants} className='mx-4'>
                        <motion.button  variants={textVariants}className='btn' onClick={handleDailyView}>
                            {isLoadingDaily ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Daily List'}
                        </motion.button>
                    </motion.div>
                    <motion.div variants={textVariants} className='mx-4'>
                        <motion.button variants={textVariants} className='btn' onClick={handleMonthlyView}>
                            {isLoadingMonthly ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Monthly List'}
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
            <Outlet />
        </div>
    );
};

export default Dashboard;
