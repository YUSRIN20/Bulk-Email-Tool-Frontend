import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup'
import Cookies from 'js-cookie';
import './Style/Register&LoginForm.css'

const LoginPage = ({setEmail,setUserName}) => {
    const [responseMsg, SetResponseMsg] = useState('')
    const navigate = useNavigate()

    // formik
    const initialValues = { email: '', password: '' };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Invalid email address').required('Email is Required'),
        password: Yup.string().min(8).required('Password is Required')
    });

    const onSubmit = async (values) => {
        try {
            // const res = await axios.post('http://localhost:8000/emailapi/user/login', values);
            const res = await axios.post('https://bulk-email-tool-backend-iazh.onrender.com/emailapi/user/login', values);
 
            SetResponseMsg(res.data.message);
            setUserName(res.data.data.lastname); // for displaying user name in home page
            // SetToken(res.data.token)
            setEmail(values.email)
            toast.success(res.data.message)
            Cookies.set('token',res.data.token)
            setTimeout(() => {
                navigate('/welcome')
            }, 500);
        } catch (error) {
            SetResponseMsg(error.response.data.message)
            toast.error(error.response.data.message);

        }
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });
    const [signUpMode, setSignUpMode] = useState(false)
    const toggleMode = () => {
        setSignUpMode(prevMode => !prevMode);
        navigate('/register')
    };

    return (
        <div class={`container ${signUpMode ? 'sign-up-mode' : ''}`}>
            <div class="forms-container">
                <div class="signin-signup">
                    <form onSubmit={formik.handleSubmit} class="sign-in-form">
                        <h2 class="title">Sign in</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email" value={formik.values.email} onChange={formik.handleChange} />
                            <div className='errors'>
                                <span className="text-danger">{formik.errors.email}</span>
                            </div>
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" className="form-control" id="password" placeholder="Enter your Password" value={formik.values.password} onChange={formik.handleChange} />
                            <div className='errors'>
                                <span className="text-danger">{formik.errors.password}</span>
                            </div>
                        </div>
                        <button type="submit" className="btn solid">Login</button>
                        <div>
                            <Link to="/forgot" className='text-danger'>Forgot Password?</Link>
                        </div>
                        <p class="social-text">Or Sign in with social platforms</p>
                        <div class="social-media">
                            <a href="#" class="social-icon">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div class="panels-container">
                <div class="panel left-panel">
                    <div class="content">
                        <h3>New here ?</h3>
                        <p>
                            Create an account to access exclusive features and content.
                        </p>
                        <button class="btn transparent" id="sign-up-btn" onClick={toggleMode}>
                            Sign up
                        </button>
                    </div>
                    <img src="/log.svg" class="image" alt="" />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;