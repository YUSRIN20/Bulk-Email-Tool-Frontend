import React from 'react';
import './Style/HomePage.css'
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'


const WelcomePage = ({ username, email }) => {
    const navigate = useNavigate()
    const handleCLick = () => {
        navigate(`/home/${email}`)
    }
    return (
        <div className=' box-container d-flex justify-content-center'>
            <div class="card" style={{ width: "50rem" }}>
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div class="card-body">
                    <h1 class="card-title text-center">Hello {username} !</h1>
                    <p class="card-text text-center">Welcome to Bulk Email Tool Application</p>
                    <p class="card-text text-center" style={{fontSize:"larger", marginBottom:"0%"}}>Click here to go to Bulk Email Tool page</p>
                    <motion.div className='d-flex justify-content-center' 
                     initial={{ scale: 0 }}
                     animate={{ rotate: 360, scale: 1 }}
                     transition={{
                       type: "spring",
                       stiffness: 260,
                       damping: 20
                     }}>
                        <button className='btn btn-success' onClick={handleCLick}>Bulk Email Tool  <i class="fa-solid fa-arrow-right mx-2"></i></button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;