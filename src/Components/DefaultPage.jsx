import React from 'react';
import './Style/DefaultPage.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

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
const DefaultPage = () => {
    const navigate = useNavigate()

    const handleSignup = () =>{
        navigate('/register')
    }

    const handleSignin =() =>{
        navigate('/login')
    }

    return (
        <div className='container-lg'>
            <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate" >
                <motion.div className='mt-5 text-center'>
                    <motion.h1 >Welcome to Bulk Email Tool</motion.h1>
                </motion.div>

                <motion.div className='section mt-5'>
                    <motion.div variants={textVariants} className='about-section' >
                        <motion.h4  variants={textVariants}class='title' >About us</motion.h4>
                        <motion.p variants={textVariants} className='text-secondary'>Welcome to our Bulk Email tool! We are dedicated to simplifying your email marketing efforts and helping you reach your audience effectively.
                            This Bulk Email tool web-based application is designed to streamline and automate the process of sending mass emails to a large number of recipients. This tool is particularly useful for businesses, organizations, and individuals who need to communicate important information, promotions, newsletters, or updates to a large audience efficiently.
                        </motion.p>
                    </motion.div>
                    <motion.div  variants={textVariants}className='started-section mt-5'>
                        <motion.h4  variants={textVariants}class='title'>Get Started Today</motion.h4>
                        <motion.p  variants={textVariants}className='text-secondary'>Ready to take your email marketing to the next level? Sign up now and experience the power of our Bulk Email tool for yourself. If you have any questions or need assistance, our team is here to help.</motion.p>
                        <motion.div variants={textVariants} className='d-flex justify-content-center'>
                            <motion.div variants={textVariants} className='me-5'>
                                <motion.button  variants={textVariants}className='btn btn-primary' onClick={handleSignup}>Sign up</motion.button>
                            </motion.div>
                            <motion.div variants={textVariants}>
                                <motion.button  variants={textVariants}className='btn btn-primary' onClick={handleSignin} >Sign in</motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default DefaultPage;