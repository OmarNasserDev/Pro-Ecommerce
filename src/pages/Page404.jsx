import React from 'react'

const Page404 = () => {
    return (
        <div className='w-full h-[80vh] p-20'>
            <h1 className='text-lg italic font-sans text-gray-500'>Home / <span className='text-black font-sans text-xl'> 404 Error</span></h1>
            <div className='w-full h-full flex flex-col items-center justify-center gap-y-16'>
                <h1 className='font-sans text-9xl'>404 Not Found</h1>
                <h6 className='font-sans text-xl'>Your visited page not found. you may go home page</h6>
                <a href='/' className='w-96 h-16 content-center bg-[#DB4444] text-white text-xl rounded-md text-center'>Back to home page</a>
            </div>
        </div>
    )
}

export default Page404
