import React from 'react'

//ASSETS 
import loginImage from '../assets/loginImage.png'
import { FcGoogle } from "react-icons/fc";
//COMPONENTS 
import Header from '../components/Header'
import Footer from '../components/Footer'
const Register = () => {
    return (
        <div className='w-full h-[100vh]  '>
            <Header />
            <div className='my-48 grid grid-rows-4 ml-20 lg:flex items-center justify-between gap-28'>
                <div className='hidden lg:flex w-80 lg:w-full row-span-1 mt-48 lg:mt-0 p-10 lg:p-0 '>
                    <img src={loginImage} alt="Login Side Image" />
                </div>
                <div className='w-full h-full mt-48 lg:mt-0 flex flex-col items-start justify-center gap-10 row-span-3'>
                    <div>
                        <h1 className='text-xl lg:text-5xl font-serif mb-5'>Create an account</h1>
                        <h6 className='text-mdlg:text-xl font-serif'>Enter your details below</h6>
                    </div>
                    <form action="" className='w-full lg:w-[60%] flex flex-col gap-10 mt-0 lg:mt-10 '>
                        <input type="text" placeholder='Name' required className='w-full border-b-2 text-xl outline-none p-3' />
                        <input type="email" placeholder='Email or Phone Number' required className='w-full border-b-2 text-xl outline-none p-3' />
                        <input type="password" placeholder='Password' required className='w-full border-b-2 text-xl outline-none p-3' />
                        <div className='flex flex-col items-center justify-between gap-5'>
                            <button className='w-full h-16 bg-[#DB4444] rounded-md text-white text-xl font-thin'>Log in</button>
                            <button className='w-full h-16 bg-transparent rounded-md text-xl font-sans flex items-center justify-center px-5 lg:p-0  gap-5 border-2 border-black'><FcGoogle size={40} /> Sign up with Google</button>
                            <h1 className='font-thin text-xl'>Already have account? <a href="/login" className='underline text-lg'>Log in</a></h1>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register
