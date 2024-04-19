import React, { useRef } from 'react'
import CableIcon from '@mui/icons-material/Cable';
import DiamondIcon from '@mui/icons-material/Diamond';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GirlIcon from '@mui/icons-material/Girl';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const CategoryCard = (props) => {
    const categories = props.type
    const slideCategories = useRef()
    const handlePrev = () => {
        slideCategories.current.scrollBy({ left: -200 })
    }
    const handleNext = () => {
        slideCategories.current.scrollBy({ left: 200 })
    }

    return (
        <div className='relative w-full min-h-full lg:mb-10'>
            <div className='absolute top-[-5rem] right-20 hidden lg:flex gap-5 '>
                <div className='w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full p-7 cursor-pointer'><ArrowBackIcon className='scale-125 ' onClick={handlePrev} /></div>
                <div className='w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full p-7 cursor-pointer'><ArrowForwardIcon className='scale-125 ' onClick={handleNext} /></div>
            </div>
            <div className='w-full h-96 flex items-center justify-center gap-5 lg:gap-10 overflow-x-auto no-scrollbar scroll-smooth pl-48 pr-5 lg:p-0' ref={slideCategories}>
                <div className='min-w-32 lg:min-w-48 h-32 lg:w-56 lg:h-56 border-2 pb-5 flex flex-col items-center justify-center gap-5 text-2xl font-thin hover:bg-[#DB4444] hover:text-white hover:transition-all hover:duration-1000 smooth-duration cursor-pointer '>
                    <CableIcon className='mt-10 lg:mt-2' sx={{ scale: { xs: '150%', lg: '400%' }, marginBottom: { xs: '0px', lg: '25px' } }} />
                    <h1 className='text-lg font-bold text-center lg:text-2xl'>{categories[0]}</h1>
                </div>
                <div className=' min-w-32 lg:min-w-48 h-32 lg:w-56 lg:h-56 border-2 pb-5 flex flex-col items-center justify-center gap-5 text-2xl font-thin hover:bg-[#DB4444] hover:text-white hover:transition-all hover:duration-1000 smooth-duration cursor-pointer '>
                    <DiamondIcon className='mt-10 lg:mt-2' sx={{ scale: { xs: '150%', lg: '400%' }, marginBottom: { xs: '0px', lg: '25px' } }} />
                    <h1 className='text-lg font-bold text-center lg:text-2xl'>{categories[1]}</h1>
                </div>
                <div className='min-w-32 lg:min-w-48 h-32 lg:w-56 lg:h-56 border-2 pb-5 flex flex-col items-center justify-center gap-5 text-2xl font-thin hover:bg-[#DB4444] hover:text-white hover:transition-all hover:duration-1000 smooth-duration cursor-pointer '>
                    <CheckroomIcon className='mt-10 lg:mt-2' sx={{ scale: { xs: '150%', lg: '400%' }, marginBottom: { xs: '0px', lg: '25px' } }} />
                    <h1 className='text-lg font-bold text-center lg:text-2xl'>{categories[2]}</h1>
                </div>
                <div className='min-w-32 lg:min-w-48 h-32 lg:w-56 lg:h-56 border-2 pb-5 flex flex-col items-center justify-center gap-5 text-2xl font-thin hover:bg-[#DB4444] hover:text-white hover:transition-all hover:duration-1000 smooth-duration cursor-pointer '>
                    <GirlIcon className='mt-10 lg:mt-2' sx={{ scale: { xs: '150%', lg: '400%' }, marginBottom: { xs: '0px', lg: '25px' } }} />
                    <h1 className='text-lg font-bold text-center lg:text-2xl'>{categories[3]}</h1>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
