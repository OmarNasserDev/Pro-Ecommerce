import React, { useEffect, memo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories, getAllProducts, getAllOurProducts } from '../Api-redux-toolkit/actions'
//CountDown Component
import Countdown from 'react-countdown'
//Mui
import Box from '@mui/material/Box';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

//Assets
import speaker from '../assets/speaker.png'
import ps5 from '../assets/ps5.png'
import woman from '../assets/woman.png'
import threespeakers from '../assets/threespeakers.png'
import frame from '../assets/Frame.png'
//Components
import style from '../styles/Home.module.css'
import MainSlider from '../components/MainSlider'
import ProductsSlider from '../components/ProductsSlider';
import CategoryCard from '../components/CategoryCard';
import BestSelling from '../components/BestSelling';
import OurProductsSlider from '../components/OurProductsSlider';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {

    const dispatch = useDispatch()

    const categoriesData = useSelector(state => state.category.data)
    const productsData = useSelector(state => state.products.data)
    const ourProducts = useSelector(state => state.ourProducts.data)
    const Completionist = () => <span className='text-2xl font-extrabold uppercase text-[#DB4444] bg-slate-900 rounded-xl p-5'>Expired Offer</span>

    const date = useCallback(({ days, hours, minutes, seconds, completed }) => {

        if (completed) {
            return <Completionist />
        } else {
            return <div className='flex gap-2 lg:gap-5 mr-10'>
                <div className='lg:text-xl font-black text-center'>
                    <h6>Days</h6>
                    <h1 className='text-3xl lg:text-5xl font-mono'>{days}</h1>
                </div>
                <span className='text-3xl lg:text-6xl font-sans text-center text-[#DB4444]'>:</span>
                <div className='lg:text-xl font-black text-center'>
                    <h6>Hours</h6>
                    <h1 className='text-3xl lg:text-5xl font-mono'>{hours}</h1>
                </div>
                <span className='text-3xl lg:text-6xl font-sans text-center text-[#DB4444]'>:</span>
                <div className='lg:text-xl font-black text-center'>
                    <h6>Minutes</h6>
                    <h1 className='text-3xl lg:text-5xl font-mono'>{minutes}</h1>
                </div>
                <span className='text-3xl lg:text-6xl font-sans text-center text-[#DB4444]'>:</span>
                <div className='lg:text-xl font-black text-center'>
                    <h6>Seconds</h6>
                    <h1 className='text-3xl lg:text-5xl font-mono'>{seconds}</h1>
                </div>
            </div>

        }
    }, [])


    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(getAllProducts())
        dispatch(getAllOurProducts())

    }, [dispatch])

    return (
        <div className='w-full min-h-full pr-0 lg:p-0 scroll-smooth'>
            <Header />
            <section className='w-full min-h-96 grid grid-cols-12 mt-32'>
                <Box className='w-96 h-full col-span-4 text-center border-r-4 border-slate-300 mx-auto py-10' sx={{ display: { xs: 'none', lg: 'grid' } }}>
                    {categoriesData.map((item) => (
                        <a className={style.category} key={item} href='#'>{item}</a>
                    ))}
                </Box>
                <Box className='w-[140%] col-span-8 bg-slate-800 mt-10 mr-48 h-[30rem] ' sx={{ marginLeft: "1rem", width: { xs: '140%', lg: '97%' }, height: { xs: '25rem', lg: '30rem' } }}>
                    <MainSlider />
                </Box>
            </section>
            <section className='w-full min-h-[50vh] mt-20 pl-5 lg:pl-48 overflow-hidden'>
                <div className='flex gap-5 mb-10 items-center'>
                    <span className='w-6 h-12 rounded-md  bg-[#DB4444]'></span>
                    <h3 className='text-2xl font-semibold text-[#DB4444]'>Today's</h3>
                </div>
                <div className='flex flex-col'>
                    <div className='flex text-2xl lg:text-5xl gap-20 lg:gap-32 mb-20 '>
                        <h1 className='font-sans'>Flash Sales</h1>
                        <Countdown date={new Date('2024-5-25')} renderer={date} />
                    </div>
                    <ProductsSlider products={productsData} />
                </div>
                <h1 className='w-[85%] border-b-4 mx-auto'></h1>
            </section>
            <section className='w-full min-h-[50vh] mt-20 pl-5 lg:pl-48 overflow-clip'>
                <div className='flex gap-5 mb-5 lg:mb-10 items-center'>
                    <span className='w-6 h-12 rounded-md  bg-[#DB4444]'></span>
                    <h3 className='text-2xl font-semibold text-[#DB4444]'>Categories</h3>
                </div>
                <h3 className='text-4xl font-sans capitalize lg:mb-20'>Borwse by category</h3>
                <div className='w-full'>
                    <CategoryCard type={categoriesData} />
                </div>
                <h1 className='w-[85%] border-b-4 mx-auto'></h1>
            </section>
            <section className='w-full min-h-[50vh] mb-20 mt-20 lg:pl-48 overflow-hidden'>
                <div className='flex gap-5 mb-10 items-center pl-5 lg:pl-0'>
                    <span className='w-6 h-12 rounded-md  bg-[#DB4444]'></span>
                    <h3 className='text-2xl font-semibold text-[#DB4444]'>This Month</h3>
                </div>
                <div className='w-full flex items-center justify-between pr-44 mb-20'>
                    <h3 className='text-2xl lg:text-4xl font-sans capitalize  pl-5 lg:pl-0'>Best selling products</h3>
                    <button className='w-4/6 h-12  lg:w-48 lg:h-16 rounded-md bg-[#DB4444] text-white capitalize text-lg lg:text-xl '>View all</button>
                </div>
                <BestSelling products={productsData} />
                <div className='max-w-[90%] h-[20rem] mx-auto lg:mx-0 lg:h-[35rem] grid grid-cols-12 lg:flex items-center justify-between lg:p-5 bg-black'>


                    <div className='text-white font-serif col-span-7 flex flex-col gap-5 ml-5 lg:ml-16'>
                        <h5 className='text-xl text-[#00FF66]'>Categories</h5>
                        <h1 className='flex flex-col text-2xl lg:text-6xl capitalize'>Enhance your <span className='text-2xl lg:text-6xl'>music experience</span></h1>
                        <div className='flex items-center gap-2 text-center mt-8'>
                            <div className='w-14 h-14 lg:w-20 lg:h-20 bg-white text-black font-black p-[1.9rem] lg:p-[2.8rem] text-sm lg:text-2xl flex flex-col items-center justify-center rounded-full lining-nums'><h1>23</h1><span className='text-sm lg:text-lg font-black'>Hours</span></div>
                            <div className='w-14 h-14 lg:w-20 lg:h-20 bg-white text-black font-black p-[1.9rem] lg:p-[2.8rem] text-sm lg:text-2xl flex flex-col items-center justify-center rounded-full lining-nums'><h1>05</h1><span className='text-sm lg:text-lg font-black'>Days</span></div>
                            <div className='w-14 h-14 lg:w-20 lg:h-20 bg-white text-black font-black p-[1.9rem] lg:p-[2.8rem] text-sm lg:text-2xl flex flex-col items-center justify-center rounded-full lining-nums'><h1>59</h1><span className='text-sm lg:text-lg font-black'>Minutes</span></div>
                            <div className='w-14 h-14 lg:w-20 lg:h-20 bg-white text-black font-black p-[1.9rem] lg:p-[2.8rem] text-sm lg:text-2xl flex flex-col items-center justify-center rounded-full lining-nums'><h1>35</h1><span className='text-sm lg:text-lg font-black'>Seconds</span></div>
                        </div>
                        <button className='w-28 h-10 lg:w-56 lg:h-16 mt-5 rounded-md bg-[#00FF66]'>Buy now!</button>
                    </div>
                    <div className='relative w-full lg:w-[50%] mb-20 lg:m-0 flex col-span-5'>
                        <span className='w-28 h-48 top-[-3rem] right-10 lg:w-80 lg:h-72 absolute lg:top-0 lg:right-48 blur-[8rem] lg:blur-[13rem] bg-gray-100 '></span>
                        <img src={speaker} alt="" className='z-30 ' />
                    </div>
                </div>
            </section>
            <section className='w-full min-h-[50vh] mt-20 pl-5 lg:pl-48 overflow-hidden mb-10'>
                <div className='flex gap-5 mb-10 items-center'>
                    <span className='w-6 h-12 rounded-md  bg-[#DB4444]'></span>
                    <h3 className='text-2xl font-semibold text-[#DB4444]'>Our Products</h3>
                </div>
                <div className='flex flex-col h-[120vh] overflow-hidden'>
                    <div className='flex text-2xl lg:text-5xl gap-20 lg:gap-32 mb-20 '>
                        <h1 className='font-sans capitalize'>Explore our products</h1>
                    </div>
                    <OurProductsSlider products={ourProducts} />
                </div>
                <div className='w-full flex items-center justify-center pr-5'>
                    <button className='w-28 h-10 lg:w-64 lg:h-16 lg:text-xl mt-5 rounded-md bg-[#DB4444] text-white'>View All</button>
                </div>
            </section>
            <section className='relative w-full min-h-[50vh] mt-20 pl-5 lg:pl-48 overflow-hidden mb-10'>
                <div className='flex gap-5 mb-10 items-center'>
                    <span className='w-6 h-12 rounded-md  bg-[#DB4444]'></span>
                    <h3 className='text-2xl font-semibold text-[#DB4444]'>Featured</h3>
                </div>
                <div className='flex flex-col'>
                    <div className='flex text-2xl lg:text-5xl gap-20 lg:gap-32 mb-20 '>
                        <h1 className='font-sans capitalize'>New arrival</h1>
                    </div>
                    <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2  '>
                        <div className='relative bg-black py-20 mr-20 mb-5 lg:mb-0 flex items-center justify-center'>
                            <img src={ps5} alt="" />
                            <div className='absolute w-56 left-10 bottom-10 text-white'>
                                <h1 className='text-3xl font-sans mb-5'>PlayStation 5</h1>
                                <p className='text-gray-300 mb-5'>Black and White vertion of the PS5 coming out on sale.</p>
                                <a href="#" className='border-b-2 font-mono text-xl border-gray-400 '>Shop Now</a>
                            </div>
                        </div>
                        <div className='mr-20'>
                            <div className='relative bg-[#0D0D0D] flex flex-row-reverse'>
                                <img src={woman} alt="" />
                                <div className='absolute w-64 left-10 bottom-10 text-white'>
                                    <h1 className='text-3xl font-sans mb-5'>Women's Collections</h1>
                                    <p className='text-gray-300 mb-5'>Featured Woman collections that give you another vibe.</p>
                                    <a href="#" className='border-b-2 font-mono text-xl border-gray-400 '>Shop Now</a>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 mt-5 gap-5'>
                                <div className='relative h-96 flex items-center justify-center bg-black'>
                                    <span className='w-56 h-56 absolute rounded-full blur-[8rem] bg-gray-200'></span>
                                    <img className='z-20 w-48 ' src={threespeakers} alt="" />
                                    <div className='absolute w-56 left-2 lg:left-10 bottom-10 text-white z-30'>
                                        <h1 className='text-3xl font-sans lg:mb-5'>Speakers</h1>
                                        <p className='text-gray-300 lg:mb-5 text-sm lg:text-lg'>Amazon wireless speackers</p>
                                        <a href="#" className='border-b-2 font-mono text-xl border-gray-400 '>Shop Now</a>
                                    </div>
                                </div>
                                <div className='relative h-96 flex items-center justify-center bg-black'>
                                    <span className='w-56 h-56 absolute rounded-full blur-[8rem] bg-gray-200'></span>
                                    <img className='z-20 w-48' src={frame} alt="" />
                                    <div className='absolute w-56 left-2 lg:left-10 bottom-10 z-30 text-white'>
                                        <h1 className='text-3xl font-sans lg:mb-5'>Perfume</h1>
                                        <p className='text-gray-300 lg:mb-5 uppercase text-sm lg:text-lg'>Gucci intense oud edp</p>
                                        <a href="#" className='border-b-2 font-mono text-xl border-gray-400 '>Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                <div className='w-14 h-14 absolute bottom-0 right-20 flex items-center justify-center rounded-full bg-slate-200 scroll-smooth'>
                    <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}><ArrowUpwardOutlinedIcon /></button>
                </div>
            </section>
            <Footer />
        </div >
    )
}

export default memo(Home)
