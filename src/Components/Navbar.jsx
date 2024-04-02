import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { toast } from 'react-toastify';
const Navbar = ({email}) => {
    const [showAdminButton, setShowAdminButton] = useState(true);
    const navigate = useNavigate()

    const handleView = () => {
        navigate(`/dashboard/${email}`);
        // console.log(email);
        setShowAdminButton(false);
    };

    const handleNavigate = () => {
        navigate('/welcome');
        setShowAdminButton(true);
    };

    const handleLogout = async () => {

        try {
            // const res = await axios.get('http://localhost:8000/emailapi/user/logout');
            const res = await axios.get('https://bulk-email-tool-backend-iazh.onrender.com/emailapi/user/logout');
            // Clear Cookies related to authentication
            Cookies.remove('token')
            // Clear LocalStorage items related to authentication
            localStorage.removeItem('email')
            localStorage.removeItem('username')
            toast.success(res.data.message)
            navigate('/login')

        } catch (error) {
            console.error('Error while logging out:', error);
        }
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* <a className="navbar-brand">URL-SHORTENER</a> */}
                <Link to="/welcome" className="navbar-brand">BULK EMAIL TOOL</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavDropdown" >
                    <div className="navbar-nav ms-auto" >
                        {showAdminButton && <button className='btn btn-primary mx-5 ' style={{ width: "auto" }} onClick={handleView}>Dashboard <i class="fa-solid fa-chart-simple mx-1"></i></button>}
                        {!showAdminButton && <button className='btn btn-primary mx-5' style={{ width: "auto" }}  onClick={handleNavigate}>Home <i class="fa-solid fa-house ms-1 me-1"></i></button>}
                    </div>
                    <div className='logout-btn-div'>
                    <button className='btn text-center logout-button' style={{ backgroundColor: "rgb(237, 57, 57)" }} onClick={handleLogout}><i className="fa-solid fa-power-off"></i></button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;