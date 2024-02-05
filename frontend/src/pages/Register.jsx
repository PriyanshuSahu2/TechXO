import React, { useState } from 'react'
import { publicRequest } from '../requestMethod';

const Register = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
    });
    const onRegister = async (e) => {
        e.preventDefault();
         console.log(userData)

        // Basic form validation
        if (!userData.firstName || !userData.lastName || !userData.email || !userData.password || !userData.confirmPassword) {
            console.log('Form validation failed. Please fill in all required fields.');
            return;
        }
        if (userData.password !== userData.confirmPassword) {
            console.log('Form Validation Failed. Please enter Similar Password.')
            return;
        }

        try {
            const response = await publicRequest.post("/auth/register", userData)
            console.log(response)
        } catch (error) {
            console.log(error)
        }

    };
    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <main className='flex flex-row rounded-lg shadow-sm'>
            <section className='flex-[1] flex flex-col justify-center items-center text-lg text-white'>
                {/* <img src="" alt="" /> */}
            </section>
            <section className='flex-[2] flex flex-col justify-center '>
                <form action="" className='p-8 flex flex-col' onSubmit={onRegister}>
                    <h2 className='text-4xl font-bold'>Register</h2>
                    <input value={userData.firstName} onChange={handleInputChange} type="text" name="firstName" id="fName" placeholder='First Name' />
                    <input value={userData.lastName} onChange={handleInputChange} type="text" name="lastName" id="lName" placeholder='Last Name' />
                    <input value={userData.mobileNumber} onChange={handleInputChange} type="tel" name="mobileNumber" id="mNumber" placeholder='Mobile Number' />
                    <input value={userData.email} onChange={handleInputChange} type="email" name="email" id="email" placeholder='Email' />
                    <input value={userData.password} onChange={handleInputChange} type="password" name="password" id="password" placeholder='Password' />
                    <input value={userData.confirmPassword} onChange={handleInputChange} type="password" name="confirmPassword" id="cPassword" placeholder='Confirm Password' />
                    <button type="submit" className='border border-black'>Submit</button>
                </form>
            </section>

        </main>
    )
}

export default Register