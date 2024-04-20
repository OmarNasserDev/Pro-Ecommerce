import React from 'react'

//ASSETS 
import loginImage from '../assets/loginImage.png'
const Login = () => {
    return (
        <div className='w-full h-[100vh] grid grid-rows-4 ml-20 lg:flex items-center justify-between gap-28 '>
            <div className='w-80 lg:w-full row-span-1 mt-48 lg:mt-0 p-10 lg:p-0 '>
                <img src={loginImage} alt="Login Side Image" />
            </div>
            <div className='w-full h-full mt-20 lg:mt-0 flex flex-col items-start justify-center gap-10 row-span-3'>
                <div>
                    <h1 className='text-xl lg:text-5xl font-serif mb-5'>Log in to Exculsive</h1>
                    <h6 className='text-mdlg:text-xl font-serif'>Enter your details below</h6>
                </div>
                <form action="" className='w-full lg:w-[60%] flex flex-col gap-10 mt-5 lg:mt-10 '>
                    <input type="email" placeholder='Email or Phone Number' required className='w-full border-b-2 text-xl outline-none p-3' />
                    <input type="password" placeholder='Password' required className='w-full border-b-2 text-xl outline-none p-3' />
                    <div className='flex items-center justify-between'>
                        <button className='w-36 h-14 lg:w-44 lg:h-16 bg-[#DB4444] rounded-md text-white text-xl font-thin'>Log in</button>
                        <a href='#' className='text-[#DB4444] text-lg lg:text-xl'>Forgot Password?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
