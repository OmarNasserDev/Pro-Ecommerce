import React from 'react'

//COMPONENTS
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
//MUI ICONS 
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';


const Contact = () => {
    return (
        <div>
            <Header />
            <div className='w-full min-h-screen pl-5 lg:pl-20 my-20 lg:my-48'>
                <h1 className='text-lg italic font-sans text-gray-500'>Home / <span className='text-black font-sans text-xl'> Contact</span></h1>
                <section className='w-full h-full flex flex-col lg:flex-row items-center justify-center gap-36 lg:gap-96'>
                    <div className='mt-28 lg:mt-0 w-72 h-72 lg:w-96 lg:h-96 flex items-center lg:items-start justify-center gap-20 lg:gap-0 lg:flex-col '>
                        <div className='lg:border-b-2 border-gray-400 pb-10'>
                            <div className='flex items-center gap-5 text-xl'>
                                <div className='w-14 h-14 rounded-full bg-[#DB4444] content-center text-center text-white'>
                                    <CallOutlinedIcon className='  scale-150' />
                                </div>
                                <h1 className='font-sans'>Call To Us</h1>
                            </div>
                            <h3 className='font-sans text-lg lg:text-xl mt-5'>We are available 24/7, 7 days a week.</h3>
                            <h3 className='font-sans text-lg lg:text-xl mt-5'>Phone: +8801611112222</h3>
                        </div>
                        <div>
                            <div className='flex items-center gap-5 text-xl mt-10'>
                                <div className='w-14 h-14 rounded-full bg-[#DB4444] content-center text-center text-white'>
                                    <MailOutlineOutlinedIcon className='  scale-150' />
                                </div>
                                <h1 className='font-sans'>Write To Us</h1>
                            </div>
                            <h3 className='font-sans text-lg lg:text-xl mt-8'>Fill out our form and we will contact you within 24 hours.</h3>
                            <h3 className='font-sans text-lg lg:text-xl mt-5'>Emails: customer@exclusive.com</h3>
                            <h3 className='font-sans text-lg lg:text-xl mt-5'>Emails: support@exclusive.com</h3>
                        </div>
                    </div>
                    <div>
                        <form action="">
                            <div className='flex gap-5 items-center justify-center flex-wrap'>
                                <input type="text" placeholder='Your Name *' required className='w-72 h-14 rounded-md px-2 text-lg font-sans bg-[#efeeee] outline-none' />
                                <input type="email" placeholder='Your Email *' required className='w-72 h-14 rounded-md px-2 text-lg font-sans bg-[#efeeee] outline-none' />
                                <input type="text" placeholder='Your Phone *' required className='w-72 h-14 rounded-md px-2 text-lg font-sans bg-[#efeeee] outline-none' />
                            </div>
                            <div>
                                <textarea name="" id="" cols="40" rows="10" placeholder='Your Message' className='lg:w-full mt-10 p-5 text-lg font-sans outline-none bg-[#efeeee]'></textarea>
                            </div>
                            <div className='w-full flex items-center justify-end mt-5 pr-9 lg:pr-0'>
                                <button className='w-56 h-16 bg-[#DB4444] rounded-md text-white text-xl font-sans'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default Contact
