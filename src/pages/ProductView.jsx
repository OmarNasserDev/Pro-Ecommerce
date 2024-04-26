import React, { useEffect, memo, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
//Actions
import { getSingleProduct } from '../Api-redux-toolkit/actions'
//MUI
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
//COMPONENT
import OurProductsSlider from '../components/OurProductsSlider';
import Header from '../components/Header';
import Footer from '../components/Footer';
//CONTEXT API
import { WishList } from '../App.jsx'
const ProductView = () => {

    const [count, setCount] = useState(1)

    const dispatch = useDispatch()
    const dataToView = useSelector(state => state.singleProduct.data)


    //Add to favourit
    const { wisharray, setWisharray } = useContext(WishList)
    const addToFavourit = (product) => {
        const test = wisharray.filter(item => item.id === product.id)
        if (!test.length > 0) {
            setWisharray([...wisharray, product])
        }
    }


    const { id } = useParams()

    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [dataToView])

    return (
        <div className='w-full h-full'>
            <Header />
            <div className='lg:px-48 lg:mt-56'>
                <div className='flex my-20 px-5 lg:px-0 text-lg lg:text-xl gap-x-5 text-gray-500 font-sans italic'>
                    <h1>Account</h1>
                    /
                    <h1>{dataToView.category}</h1>
                    /
                    <h1 className='text-black not-italic'>{dataToView.title}</h1>
                </div>
                <div className='w-full lg:grid grid-cols-2 mb-48 px-5'>
                    <div className='w-full flex flex-col lg:grid grid-cols-12 mr-10'>
                        <div className='flex col-span-2 gap-10 p-0 mr-5'>
                            <div className='h-28 lg:h-48 mb-2 bg-slate-300 flex items-center justify-center'><img src={dataToView.image} alt="" className='w-20 lg:w-28 h-44 object-contain' /></div>
                            <div className='h-28 lg:h-48 mb-2 bg-slate-300 flex items-center justify-center'><img src={dataToView.image} alt="" className='w-20 lg:w-28 h-44 object-contain' /></div>
                            <div className='h-28 lg:h-48 mb-2 bg-slate-300 flex items-center justify-center'><img src={dataToView.image} alt="" className='w-20 lg:w-28 h-44 object-contain' /></div>
                            <div className='h-28 lg:h-48 mb-2 bg-slate-300 flex items-center justify-center'><img src={dataToView.image} alt="" className='w-20 lg:w-28 h-44 object-contain' /></div>
                        </div>
                        <div className='col-span-8 bg-gray-200 p-28 lg:p-16'><img src={dataToView.image} alt="" /></div>
                    </div>
                    <div className='w-full lg:pr-64 flex flex-col items-center lg:items-start'>
                        <h1 className=' mt-10 lg:text-3xl font-sans'>{dataToView.title}</h1>
                        <div className='flex items-center text-2xl my-5'>
                            <h1>

                                {dataToView?.rating?.rate > 3 ?
                                    <div className='flex'>
                                        <StarIcon className='text-yellow-500' />
                                        <StarIcon className='text-yellow-500' />
                                        <StarIcon className='text-yellow-500' />
                                        <StarIcon className='text-yellow-500' />
                                        <StarIcon className='text-yellow-500' />
                                    </div>
                                    :
                                    <div>
                                        <StarIcon className='text-yellow-500' />
                                        <StarIcon className='text-yellow-500' />
                                        <StarIcon className='text-yellow-500' />
                                        <StarHalfIcon className='text-yellow-500' />
                                        <StarOutlineIcon className='text-yellow-500' />
                                    </div>
                                }
                            </h1>
                            <h1 className='text-gray-500 mr-5'>({dataToView?.rating?.count})</h1>
                            |
                            <h1 className='text-lg text-[#00FF66] ml-5'>In Stock</h1>
                        </div>
                        <h1 className='text-4xl my-5 font-sans'>${dataToView.price}</h1>
                        <div>
                            <p className='font-sans'>{dataToView.description}</p>
                            <h1 className='w-full border-b-2 border-gray-400 my-10'></h1>
                        </div>
                        <div className='flex gap-5 text-xl'>
                            <h1 className='font-sans'>Colours: </h1>
                            {
                                dataToView.colours ?
                                    data.colours.map((color) =>
                                        <span></span>
                                    )
                                    :
                                    <h1>No Colours Avilable </h1>
                            }
                        </div>
                        <div className='flex flex-col lg:flex-row items-center gap-5 my-5'>
                            <div className='min-w-28 h-14 border-2 border-gray-300 flex items-center justify-center text-center'>
                                <button className='w-16 h-full border-r-2 border-gray-300 text-3xl hover:bg-[#DF4444] hover:text-white' onClick={() => { if (count > 1) { setCount(count - 1) } }}>-</button>
                                <input type="text" value={count} className='text-center w-28 text-3xl font-sans outline-none' />
                                <button className='w-16 h-full border-l-2 border-gray-300 text-3xl hover:bg-[#DF4444] hover:text-white' onClick={() => { setCount(count + 1) }}>+</button>
                            </div>
                            <div>
                                <button className='w-52 h-16 text-white font-sans text-xl bg-[#DB4444] rounded-md'>Buy Now</button>
                            </div>
                            <div className='w-16 h-16 border-2 border-gray-400 flex items-center justify-center rounded-md hover:bg-[#DB4444] hover:border-0 hover:text-white'>
                                <button onClick={() => { addToFavourit(dataToView) }}>
                                    <FavoriteBorderIcon />
                                </button>
                            </div>
                        </div>
                        <div className='w-full  lg:mr-96 border-2 border-gray-400 rounded-md'>
                            <div className='w-full flex items-center justify-start gap-5 h-20 '>
                                <div className='w-16 flex items-center justify-center scale-150'><AirportShuttleIcon /></div>
                                <div>
                                    <h1>Free Delivery</h1>
                                    <h6 className='underline'>Enter your postal code for Delivary Availabilit</h6>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-start gap-5 h-20 border-t-2 border-gray-400'>
                                <div className='w-16 flex items-center justify-center scale-150'>
                                    <RestartAltIcon />
                                </div>
                                <div>
                                    <h1>Return Delivery</h1>
                                    <h6>
                                        Free 30 Days Delivery Returns. Details
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col h-[125vh] mb-20 lg:mb-0 overflow-auto'>
                    <div className='flex gap-5 mb-10 items-center'>
                        <span className='w-6 h-12 rounded-md  bg-[#DB4444]'></span>
                        <h3 className='text-2xl font-semibold text-[#DB4444]'>Related Items</h3>
                    </div>
                    <OurProductsSlider />
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default memo(ProductView)
