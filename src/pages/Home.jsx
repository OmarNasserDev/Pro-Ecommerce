import React, { useEffect, memo, useCallback } from 'react'
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories, getAllProducts } from '../Api-redux-toolkit/actions'
import Countdown from 'react-countdown'

import style from '../styles/Home.module.css'
import MainSlider from '../components/MainSlider'
import ProductsSlider from '../components/ProductsSlider';
import CategoryCard from '../components/CategoryCard';
import BestSelling from '../components/BestSelling';

const Home = () => {

    const dispatch = useDispatch()
    const categoriesData = useSelector(state => state.category.data)
    const productsData = useSelector(state => state.products.data)
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

    }, [dispatch])

    return (
        <div className='w-full min-h-full pr-0 lg:p-0 '>
            <section className='w-full min-h-96 grid grid-cols-12'>
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
                        <Countdown date={new Date('2024-4-25')} renderer={date} />
                    </div>
                    <ProductsSlider products={productsData} />
                </div>
                <h1 className='w-[85%] border-b-4 mx-auto'></h1>
            </section>

            <section className='w-full min-h-[50vh] mt-20 pl-5 lg:pl-48 overflow-clip'>
                <div className='flex gap-5 mb-10 items-center'>
                    <span className='w-6 h-12 rounded-md  bg-[#DB4444]'></span>
                    <h3 className='text-2xl font-semibold text-[#DB4444]'>Categories</h3>
                </div>
                <h3 className='text-4xl font-sans capitalize mb-20'>Borwse by category</h3>
                <div className='w-full '>
                    <CategoryCard type={categoriesData} />
                </div>
                <h1 className='w-[85%] border-b-4 mx-auto'></h1>
            </section>
            <section className='w-full min-h-[50vh] mb-20 mt-20 lg:pl-48 overflow-hidden'>
                <div className='flex gap-5 mb-10 items-center pl-5 lg:pl-0'>
                    <span className='w-6 h-12 rounded-md  bg-[#DB4444]'></span>
                    <h3 className='text-2xl font-semibold text-[#DB4444]'>This Month</h3>
                </div>
                <h3 className='text-4xl font-sans capitalize mb-20 pl-5 lg:pl-0'>Best selling products</h3>
                <BestSelling products={productsData} />
                <h1 className='w-[85%] border-b-4 mx-auto'></h1>
            </section>

        </div >
    )
}

export default memo(Home)
