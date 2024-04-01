import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate()

    const handleDailyView = async ()=>{
        navigate('dailylist')
    }
    const handleMonthlyView = async ()=>{
        navigate('monthlylist')
    }
    return (
        <div className='container-lg'>
            <h1 className='text-center'>Dashboard</h1>
            <div className='d-flex justify-content-center'>
                <div  className='mx-4'>
                    <button className='btn' onClick={handleDailyView}>Daily List</button>
                </div>
                <div  className='mx-4'>
                    <button className='btn' onClick={handleMonthlyView}>Monthly List</button>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Dashboard;