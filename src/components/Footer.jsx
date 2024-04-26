import React, { memo } from 'react'
//MUI
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
//Assets 
import appsparcode from '../assets/AppsParCode.png'
//Component

const Footer = () => {
    return (
        <div className='w-full min-h-96 bg-black'>
            <div className='grid grid-cols-2 gap-16 lg:gap-0 lg:flex items-start justify-between p-5 lg:p-20 text-white flex-'>
                <div className='flex flex-col gap-5 lg:gap-10 text-lg lg:text-3xl font-medium'>
                    <h1>Exculsive</h1>
                    <h3>Subscribe</h3>
                    <div>
                        <h6 className='text-lg mb-3'>Get 10% off your first order</h6>
                        <div className='w-62 relative border-2 p-1'>
                            <input type="text" placeholder='Enter your email!' className='bg-transparent w-full placeholder-gray-300 overflow-clip outline-none px-3 mr-14' />
                            <SendOutlinedIcon className='absolute top-1 lg:top-2 right-2 scale-95 lg:scale-125 cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 text-lg lg:text-3xl font-medium'>
                    <h1>Support</h1>
                    <ul className='w-56'>
                        <li className='text-md lg:text-xl mb-7 font-thin lining-nums'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                        <li className='text-md lg:text-xl mb-7 font-thin'>exclusive@gmail.com</li>
                        <li className='text-md lg:text-xl mb-7 lining-nums font-thin'>+88015-88888-9999</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-5 text-lg lg:text-3xl font-medium'>
                    <h1>Account</h1>
                    <ul>
                        <li className=' mb-1'><a href="#" className='text-md lg:text-xl font-thin'>My Account</a></li>
                        <li className=' mb-1 text-md lg:text-xl font-thin'><a href="/Pro-Ecommerce/login" className='text-md lg:text-xl font-thin'>Login </a> / <a href="/Pro-Ecommerce/register" className='text-md lg:text-xl font-thin'> Register</a></li>
                        <li className=' mb-1'><a href="/Pro-Ecommerce/cart" className='text-md lg:text-xl font-thin'>Cart</a></li>
                        <li className=' mb-1'><a href="/Pro-Ecommerce/wishlist" className='text-md lg:text-xl font-thin'>Wishlist</a></li>
                        <li className=' mb-1'><a href="#" className='text-md lg:text-xl font-thin'>Shop</a></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-5 text-lg lg:text-3xl font-medium'>
                    <h1>Quick Link</h1>
                    <ul>
                        <li className=' mb-1'><a href="#" className='text-md lg:text-xl font-thin'>Privacy Policy</a></li>
                        <li className=' mb-1'><a href="#" className='text-md lg:text-xl font-thin'>Terms Of Use</a></li>
                        <li className=' mb-1'><a href="#" className='text-md lg:text-xl font-thin'>FAQ</a></li>
                        <li className=' mb-1'><a href="/Pro-Ecommerce/contact" className='text-md lg:text-xl font-thin'>Contact</a></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-5 text-lg lg:text-3xl font-medium'>
                    <h1>Download App</h1>
                    <div>
                        <p className='font-thin'>Save $3 with App New User Only</p>
                        <a href="#">
                            <img src={appsparcode} alt="appsparcode" />
                        </a>
                        <ul className='flex gap-8 mt-5'>
                            <li><a href="#"><FacebookSharpIcon /></a></li>
                            <li><a href="#"><TwitterIcon /></a></li>
                            <li><a href="#"><InstagramIcon /></a></li>
                            <li><a href="#"><LinkedInIcon /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-full h-16 lg:h-28 border-t-2 border-gray-900 text-[#404040] lining-nums font-serif text-lg lg:text-2xl flex items-center justify-center'>
                <h1>&copy; Rimel 2022. All right reserved</h1>
            </div>
        </div>
    )
}

export default memo(Footer)
