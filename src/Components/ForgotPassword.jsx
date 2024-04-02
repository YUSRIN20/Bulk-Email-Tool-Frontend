import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup'
import './Style/Register&LoginForm.css'

const ForgotPassword = () => {
    const [responseMsg, setResponseMsg] = useState('');
    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()
    // formik
    const initialValues = { email: '' };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Invalid email address').required('Email is Required'),
    });

    const onSubmit = async (values) => {
        try {
            setIsLoading(true)
            // const res = await axios.post('http://localhost:8000/emailapi/user/forgotpassword', values);
            const res = await axios.post('https://bulk-email-tool-backend-iazh.onrender.com/emailapi/user/forgotpassword', values);
          

            setResponseMsg(res.data.message);
            toast.success(res.data.message)
            setTimeout(() => {
                navigate('/login')
            }, 3000);

        } catch (error) {
            console.log(error)
            setResponseMsg(error.response.data.message);
            toast.error(error.response.data.message)
        }finally{
            setIsLoading(false)
        }
    }
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });
    const handleClick = () => {
        navigate('/login')
    }
    const SignupClick = () => {
        navigate('/register')
    }
    return (
        <div class="container ">
            <div className="forms-container">
                <div class="signin-signup">
                    <form onSubmit={formik.handleSubmit} class="sign-in-form">
                        <h2 class='title'>Forget Password</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required value={formik.values.email} onChange={formik.handleChange} placeholder="Enter your email" />
                            <div className='errors'>
                                <span className="text-danger">{formik.errors.email}</span>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">{isLoading?<span className="spinner-border " role="status" aria-hidden="true"></span>:'Submit'}</button>
                        {/* <Link to='/'>Register</Link> 
                    <Link to='/login'>Login</Link> */}
                        {/* <Link to='/resetpassword'>reset</Link> */}
                        <p class="social-text">Or Reset Password with social platforms</p>
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
                <div className='panels-container'>
                    <div className='panel left-panel'>
                        <div class='content'>
                            <h3>Forgot Password?</h3>
                            <p>
                                Enter your email-id to reset your password. We'll send you a password reset link to your email.
                            </p>
                            <div class="d-flex justify-content-evenly">
                                <button class="btn transparent" id="sign-in-btn" onClick={handleClick} >
                                    Sign In
                                </button>
                                <button class="btn transparent" id="sign-up-btn" onClick={SignupClick} >
                                    Sign up
                                </button>
                            </div>
                        </div>
                        <img src="/forgot.svg" class="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;