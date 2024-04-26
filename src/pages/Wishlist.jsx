import React, { memo, useContext, useEffect } from 'react'

//MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarBorderIcon from '@mui/icons-material/StarBorder';

//REACT ICONS 
import { FaRegTrashAlt } from "react-icons/fa";
//COMPONENT
import ProductsSlider from '../components/ProductsSlider';
import Header from '../components/Header';
import Footer from '../components/Footer';
//CONTEXT API
import { WishList } from '../App';
//API
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../Api-redux-toolkit/actions'


const Wishlist = () => {

    const GETDATA_WISHLIST = localStorage.getItem('wishlist')
    const PARSE_DATA = JSON.parse(GETDATA_WISHLIST)
    const { setWisharray } = useContext(WishList)
    const addToFavourit = (product) => {
        const test = PARSE_DATA.filter(item => item.id === product.id)
        const index = PARSE_DATA.indexOf(test)
        PARSE_DATA.splice(index, 1)
        setWisharray(PARSE_DATA)
    }

    const dispatch = useDispatch()
    const productsData = useSelector(state => state.products.data)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    return (
        <div className='w-full min-h-full '>
            <Header />
            <div className='mt-20 px-10 lg:px-44 lg:mt-56'>

                <div className='w-full flex items-center justify-between mb-28'>
                    <h1 className='text-3xl font-sans'>Wishlist ({PARSE_DATA.length})</h1>
                    <button className='w-40 lg:w-72 h-20 mr-10 lg:mr-0 border-2 border-gray-300 p-4 lg:p-0text-xl font-sans rounded-md'>Move All To Bag </button>
                </div>
                <div className='w-full max-h-[50vh] py-3 lg:h-[95vh] mb-12 lg:gap-0 grid grid-cols-2 lg:grid-cols-5 pr-5 overflow-x-hidden'>
                    {
                        PARSE_DATA.map(product =>


                            <Card sx={{ minWidth: { xs: 150, lg: 300 }, height: { xs: 300, lg: 470 }, boxShadow: 'none', position: 'relative' }} key={product.title} className='mx-5 '>
                                <CardActionArea>
                                    <div className='absolute top-5 right-5 flex flex-col gap-4 z-30'>
                                        <div className='lg:w-8 lg:h-8 rounded-full bg-white flex items-center justify-center scale-150'><button onClick={() => { addToFavourit(product) }}> <FaRegTrashAlt /></button></div>
                                    </div>
                                    <div className='relative w-full h-44 lg:h-80 flex items-center bg-gray-100'>

                                        <CardMedia
                                            component="img"
                                            height="100"
                                            image={product.image_link || product.image}
                                            alt={product.title}
                                            sx={{ width: { xs: 130, lg: 200 }, height: { xs: 120, lg: 200 }, marginX: 'auto', objectFit: 'contain' }}
                                        />
                                    </div>

                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" className='line-clamp-2 h-5' sx={{ fontWeight: 'bold', lineHeight: 1, marginBottom: 2 }}>
                                            {product.name}
                                        </Typography>
                                        <Typography color='red' sx={{ fontWeight: 'bold', fontFamily: 'sans-serif', marginBottom: 2 }} className='lgflex' >
                                            ${product.price}
                                            <span className='line-through text-gray-600 ml-3 font-extrabold text-lg mr-5'> $150</span>
                                            <Typography className='text-gray-600 scale-90 lg:scale-110'>
                                                {
                                                    product.rating ?

                                                        product.rating.rate || product.rating > 3 ?
                                                            <div className='flex'>
                                                                <StarIcon className='text-yellow-500' />
                                                                <StarIcon className='text-yellow-500' />
                                                                <StarIcon className='text-yellow-500' />
                                                                <StarIcon className='text-yellow-500' />
                                                                <StarIcon className='text-yellow-500' />
                                                                ({product.rating.rate || product.rating})
                                                            </div>
                                                            :
                                                            product.rating.rate || product.rating > 1 ?


                                                                <div>
                                                                    <StarIcon className='text-yellow-500' />
                                                                    <StarIcon className='text-yellow-500' />
                                                                    <StarIcon className='text-yellow-500' />
                                                                    <StarHalfIcon className='text-yellow-500' />
                                                                    <StarOutlineIcon className='text-yellow-500' />
                                                                    ({product.rating.rate || product.rating})
                                                                </div>
                                                                :
                                                                <div>
                                                                    <StarBorderIcon className='text-yellow-500' />
                                                                    <StarBorderIcon className='text-yellow-500' />
                                                                    <StarBorderIcon className='text-yellow-500' />
                                                                    <StarBorderIcon className='text-yellow-500' />
                                                                    <StarBorderIcon className='text-yellow-500' />
                                                                    (0)
                                                                </div>
                                                        :
                                                        <>
                                                            <div>
                                                                <StarBorderIcon className='text-yellow-500' />
                                                                <StarBorderIcon className='text-yellow-500' />
                                                                <StarBorderIcon className='text-yellow-500' />
                                                                <StarBorderIcon className='text-yellow-500' />
                                                                <StarBorderIcon className='text-yellow-500' />
                                                                (0)
                                                            </div></>
                                                }
                                            </Typography>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        )
                    }

                </div>
                <section className='mt-20 lg:mt-48'>
                    <div className='flex gap-5 mb-10 items-center justify-between'>
                        <div>
                            <span className='w-6 h-12 rounded-md  bg-[#DB4444]'></span>
                            <h3 className='text-2xl lg:text-4xl font-sans '>Just For You</h3>
                        </div>
                        <button className='w-64 h-14 border-2 border-gray-300 text-xl font-sans rounded-md'>See All</button>

                    </div>
                    <div className='w-full flex flex-col mt-48'>
                        <ProductsSlider products={productsData} />
                    </div>

                </section>
            </div>
            <Footer />
        </div>
    )
}

export default memo(Wishlist)
