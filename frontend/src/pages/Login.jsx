import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { publicRequest } from '../requestMethod';

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        emailOrMobile: "",
        password: ""
    })
    const onChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }
    const handleLoginFrom = async (e) => {
        e.preventDefault()
        try {
            const res = await publicRequest.post("/auth/login", loginData)

            localStorage.setItem("UserToken", res.data.accessToken)
            localStorage.setItem("UserId", res.data._id)
            navigate("/")
        } catch (error) {
            console.log(error.response.data)
        }
    }
    return (
        <div className='flex  flex-col  justify-between h-screen'>
            <Navbar />
            <section className='flex flex-col lg:flex-row  justify-center '>
                <div className='lg:w-1/2 lg:pl-12 flex flex-col '>
                    <div className='max-w-md mx-auto'>
                        <h1 className='text-4xl lg:text-5xl font-bold mb-6'>Log in to Exclusive</h1>
                        <form onSubmit={handleLoginFrom} method='POST'>
                            <div className='mb-6'>
                                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email or Phone Number</label>
                                <input type='text' id='email' name='emailOrMobile' onChange={onChange} className='mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200' placeholder='Enter your email or phone number' />
                            </div>
                            <div className='mb-6'>
                                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                                <input type='password' id='password' name='password' onChange={onChange} className='mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200' placeholder='Enter your password' />
                            </div>
                            <div className='mt-4 flex items-center justify-between'>
                                <button type='submit' className='primary-button'>Login</button>
                                <Link className='text-sm text-[#DB4444] hover:underline'>Forgot Password?</Link>
                            </div>

                        </form>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
