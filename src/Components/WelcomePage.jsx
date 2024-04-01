import React from 'react';
import './Style/HomePage.css'
import { useNavigate } from 'react-router-dom';


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
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-success' onClick={handleCLick}>Bulk Email Tool</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;