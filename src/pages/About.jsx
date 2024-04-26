import React from 'react'

//COMPONENTS
import Header from '../components/Header'
import Footer from '../components/Footer'
//ASSETS
import boyImage from '../assets/about-main.jpg'
import jone from '../assets/jone.png'
import joe from '../assets/joe.png'
import sony from '../assets/sony.jpg'

//MUI ICONS 
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
//SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
const About = () => {

    var numberOfSlides = 3
    if (window.innerWidth <= 1000) {
        numberOfSlides = 1
    }

    return (
        <div className='w-full h-screen overflow-x-hidden'>
            <Header />
            <div className='w-full min-h-full pl-5 lg:pl-20 my-20 lg:my-48'>
                <h1 className='text-lg italic font-sans text-gray-500'>Home / <span className='text-black font-sans text-xl'> About</span></h1>
                <div className='my-28 flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between'>
                    <div className='min-w-96 lg:w-[50rem] h-96 px-20 lg:p-0'>
                        <h1 className='text-2xl lg:text-6xl font-sans mb-5'>Our Story</h1>
                        <p className='text-lg lg:text-xl font-sans pl-5 my-5'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p className='text-lg lg:text-xl font-sans pl-5 my-5'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                    <div className='w-96 mb-10 mx-auto lg:mb-0 lg:w-[50rem]'>
                        <img src={boyImage} alt="" className='w-96 lg:w-[50rem] lg:h-[50rem] object-cover' />
                    </div>
                </div>
            </div>
            <div className='mb-48 grid grid-cols-2 gap-20 lg:flex items-center justify-between px-20'>
                <div className='w-48 min-h-48 lg:w-96 lg:h-72 border-2 text-center px-5 border-gray-300 flex flex-col items-center justify-center gap-10 group hover:bg-[#DB4444] rounded-md'>
                    <div className='w-20 h-20 rounded-full flex items-center justify-center bg-gray-400 text-white group-hover:bg-slate-100'>
                        <div className='w-14 h-14 rounded-full flex items-center justify-center bg-black group-hover:bg-gray-300 group-hover:text-black'>
                            <StorefrontOutlinedIcon className='lg:scale-150' />
                        </div>
                    </div>
                    <h1 className='text-2xl font-sans font-extrabold group-hover:text-white'>10.5k</h1>
                    <h3 className='text-2xl font-sans font-extrabold group-hover:text-white'>Sallers active our site</h3>
                </div>
                <div className='w-48 min-h-48 lg:w-96 lg:h-72 border-2 text-center px-5 border-gray-300 flex flex-col items-center justify-center gap-10 group hover:bg-[#DB4444] rounded-md'>
                    <div className='w-20 h-20 rounded-full flex items-center justify-center bg-gray-400 text-white group-hover:bg-slate-100'>
                        <div className='w-14 h-14 rounded-full flex items-center justify-center bg-black group-hover:bg-gray-300 group-hover:text-black'>
                            <PaidOutlinedIcon className='scale-150' />
                        </div>
                    </div>
                    <h1 className='text-2xl font-sans font-extrabold group-hover:text-white'>33k</h1>
                    <h3 className='text-2xl font-sans font-extrabold group-hover:text-white'>Monpnthly Product Sale</h3>
                </div>
                <div className='w-48 min-h-48 lg:w-96 lg:h-72 border-2 text-center px-5 border-gray-300 flex flex-col items-center justify-center gap-10 group hover:bg-[#DB4444] rounded-md'>
                    <div className='w-20 h-20 rounded-full flex items-center justify-center bg-gray-400 text-white group-hover:bg-slate-100'>
                        <div className='w-14 h-14 rounded-full flex items-center justify-center bg-black group-hover:bg-gray-300 group-hover:text-black'>
                            <ShoppingBagOutlinedIcon className='scale-150' />
                        </div>
                    </div>
                    <h1 className='text-2xl font-sans font-extrabold group-hover:text-white'>45.5k</h1>
                    <h3 className='text-2xl font-sans font-extrabold group-hover:text-white'>Customer active in our site</h3>
                </div>
                <div className='w-48 min-h-48 lg:w-96 lg:h-72 border-2 text-center px-5 border-gray-300 flex flex-col items-center justify-center gap-10 group hover:bg-[#DB4444] rounded-md'>
                    <div className='w-20 h-20 rounded-full flex items-center justify-center bg-gray-400 text-white group-hover:bg-slate-100'>
                        <div className='w-14 h-14 rounded-full flex items-center justify-center bg-black group-hover:bg-gray-300 group-hover:text-black'>
                            <CurrencyBitcoinOutlinedIcon className='scale-150' />
                        </div>
                    </div>
                    <h1 className='text-2xl font-sans font-extrabold group-hover:text-white'>25k</h1>
                    <h3 className='text-2xl font-sans font-extrabold group-hover:text-white'>Anual gross sale in our site</h3>
                </div>

            </div>
            <div className='w-full items-center justify-center mb-48 px-20'>
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={numberOfSlides}
                    pagination={{ clickable: true }}
                    breakpoints
                >
                    <SwiperSlide className='flex items-center justify-center mb-16'>
                        <div >
                            <img src={joe} alt="" className='w-62 object-contain mb-5' />
                            <h1 className='text-xl font-sans'>Tom Cruise</h1>
                            <h1 className='text-xl font-sans'>Founder & Chariman</h1>
                            <div className='flex  gap-5 mt-5'>
                                <a href="#"><TwitterIcon /></a>
                                <a href="#"><InstagramIcon /></a>
                                <a href="#"><LinkedInIcon /></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center'>
                        <div >
                            <img src={jone} alt="" className='w-62 object-contain mb-5' />
                            <h1 className='text-xl font-sans'>Will Smith</h1>
                            <h1 className='text-xl font-sans'>Product Designer</h1>
                            <div className='flex  gap-5 mt-5'>
                                <a href="#"><TwitterIcon /></a>
                                <a href="#"><InstagramIcon /></a>
                                <a href="#"><LinkedInIcon /></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center'>
                        <div >
                            <img src={sony} alt="" className='w-62 object-contain mb-5' />
                            <h1 className='text-xl font-sans'>Sony Joe</h1>
                            <h1 className='text-xl font-sans'>Purchse Manager</h1>
                            <div className='flex  gap-5 mt-5'>
                                <a href="#"><TwitterIcon /></a>
                                <a href="#"><InstagramIcon /></a>
                                <a href="#"><LinkedInIcon /></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center mb-16'>
                        <div >
                            <img src={joe} alt="" className='w-62 object-contain mb-5' />
                            <h1 className='text-xl font-sans'>Tom Cruise</h1>
                            <h1 className='text-xl font-sans'>Founder & Chariman</h1>
                            <div className='flex  gap-5 mt-5'>
                                <a href="#"><TwitterIcon /></a>
                                <a href="#"><InstagramIcon /></a>
                                <a href="#"><LinkedInIcon /></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center'>
                        <div >
                            <img src={jone} alt="" className='w-62 object-contain mb-5' />
                            <h1 className='text-xl font-sans'>Will Smith</h1>
                            <h1 className='text-xl font-sans'>Product Designer</h1>
                            <div className='flex  gap-5 mt-5'>
                                <a href="#"><TwitterIcon /></a>
                                <a href="#"><InstagramIcon /></a>
                                <a href="#"><LinkedInIcon /></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center'>
                        <div >
                            <img src={sony} alt="" className='w-62 object-contain mb-5' />
                            <h1 className='text-xl font-sans'>Sony Joe</h1>
                            <h1 className='text-xl font-sans'>Purchse Manager</h1>
                            <div className='flex  gap-5 mt-5'>
                                <a href="#"><TwitterIcon /></a>
                                <a href="#"><InstagramIcon /></a>
                                <a href="#"><LinkedInIcon /></a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='w-full h-96 flex items-start lg:items-center justify-center gap-16 lg:gap-20 my-20'>
                <div className='w-28 lg:w-96 flex flex-col items-center'>
                    <div className='w-16 h-16 lg:w-24 lg:h-24 rounded-full  mb-5 flex items-center justify-center text-white bg-gray-400'>
                        <div className='w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-black'>
                            <AirportShuttleOutlinedIcon className='lg:scale-[150%]' />
                        </div>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-2xl mb-5 lg:text-3xl font-sans uppercase'> Free and fast delivery</h1>
                        <h4 className='text-md font-sans'>Free delivery for all orders ovr $140</h4>
                    </div>
                </div>
                <div className='w-28 lg:w-96 flex flex-col items-center'>
                    <div className='w-16 h-16 lg:w-24 lg:h-24 rounded-full  mb-5 flex items-center justify-center text-white bg-gray-400'>
                        <div className='w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center rounded-full  bg-black'>
                            <HeadsetMicOutlinedIcon className='lg:scale-[150%]' />
                        </div>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-2xl mb-5 lg:text-3xl font-sans uppercase'>24/7 customer service</h1>
                        <h4 className='text-md font-sans'>Friedly 24/7 customer support</h4>
                    </div>
                </div>
                <div className='w-28 lg:w-96 flex flex-col items-center'>
                    <div className='w-16 h-16 lg:w-24 lg:h-24 rounded-full  mb-5 flex items-center justify-center text-white bg-gray-400'>
                        <div className='w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center rounded-full  bg-black'>
                            <VerifiedUserOutlinedIcon className='lg:scale-[150%]' />
                        </div>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-2xl mb-5 lg:text-3xl font-sans uppercase'>Money back guarantee</h1>
                        <h4 className='text-md font-sans'>We return mney within 30 days</h4>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default About
