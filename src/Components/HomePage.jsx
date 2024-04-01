import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup'
import './Style/ToolPage.css'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

const HomePage = ({ email }) => {
    // const [auth,setAuth] = useState(false)
    // const [responseMsg,SetResponseMsg] = useState('')
    // useEffect(()=>{
    //     axios.get('http://localhost:8000')
    //     .then(res =>{
    //         if(res.data.Status === 'Success'){
    //             setAuth(true)
    //         }else{
    //             setAuth(false)
    //             SetResponseMsg(res.data.message)
    //         }
    //     })
    // },[])
    const [responseMsg, setResponseMsg] = useState('');
    const navigate = useNavigate()

    // formik 
    const initialValues = { subject: '', recipients: '', message: '' }

    const validationSchema = Yup.object({
        subject: Yup.string().required('Subject is Required'),
        recipients: Yup.string().matches(/^[\w\.-]+@([\w\.-]+\.)+[\w-]{2,4}(?:,\s*[\w\.-]+@([\w\.-]+\.)+[\w-]{2,4})*$/g, 'Invalid email address').required('Recipients is required: you need to enter the comma between recipients'),
        message: Yup.string().required('Message is Required')
    })

    const onSubmit = async (values) => {
        try {
            const res = await axios.post(`http://localhost:8000/emailapi/user/sendmultiplemail/${email}`, values)
            setResponseMsg(res.data.message)
            toast.success(res.data.message)
        } catch (error) {
            console.log(error)
            setResponseMsg(error.response.data.message);
            toast.error(error.response.data.message)
        }
    }
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })
    return (
        <div className='container-lg'>
            {/* {
                auth?
                <div>
                    <h3>You are Authorized</h3>
                </div>
                :
                <div>
                    <h3>{responseMsg}</h3>
                    <h3>Login now</h3>
                    <button className='btn btn-primary'>Login</button>
                </div>
            } */}
            <h1 className='text-center'>Bulk Email Tool</h1>
            <div className='my-5'>
                <form onSubmit={formik.handleSubmit}>
                    <label for="exampleFormControlTextarea1" class="form-label d-flex align-self-start">Subject:</label>
                    <input type="text" class="form-control inputs" id='subject' placeholder="Enter your mail subject" value={formik.values.subject} onChange={formik.handleChange}/>
                    <div className='errors' class="form-label d-flex align-self-start">
                        <span className="text-danger">{formik.errors.subject}</span>
                    </div>
                    <label for="exampleFormControlTextarea1" class="form-label d-flex align-self-start">To:</label>
                    <textarea class="form-control inputs" id='recipients' rows="3" placeholder="Enter your recipients here" value={formik.values.recipients} onChange={formik.handleChange}></textarea>
                    <div className='errors' class="form-label d-flex align-self-start">
                        <span className="text-danger">{formik.errors.recipients}</span>
                    </div>
                    <label for="exampleFormControlTextarea1" class="form-label d-flex align-self-start">Message:</label>
                    <textarea class="form-control inputs" id='message' rows="3" placeholder="Enter your message here" values={formik.values.message} onChange={formik.handleChange}></textarea>
                    <div className='errors' class="form-label d-flex align-self-start">
                        <span className="text-danger">{formik.errors.message}</span>
                    </div>

                    <button type="submit" className="btn solid"><i class="fa-solid fa-paper-plane"></i> Send Mail</button>
                </form>
            </div>

        </div>
    );
};

export default HomePage;