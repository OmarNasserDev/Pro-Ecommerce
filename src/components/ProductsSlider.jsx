import React, { useRef, useState, useContext, memo } from 'react'
//MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
//Context
import { WishList, Cart } from '../App.jsx'


const ProductsSlider = (props) => {

    //Get Products As Props Form Home Page
    const products = props.products
    //Slide Cards
    const container = useRef(null)
    const scrollValue = 1000
    const handlePrev = () => {
        container.current.scrollBy({ left: -scrollValue })
    }
    const handleNext = () => {
        container.current.scrollBy({ left: scrollValue })
    }
    //Add to favourit
    const { wisharray, setWisharray } = useContext(WishList)
    const addToFavourit = (product) => {
        const test = wisharray.filter(item => item.id === product.id)
        if (!test.length > 0) {
            setWisharray([...wisharray, product])
        }
    }
    const { cart, setCart } = useContext(Cart)
    const addToCart = (product) => {
        const test = cart.filter(item => item.id === product.id)
        if (!test.length > 0) {
            setCart([...cart, product])
        }
    }
    console.log(cart);

    return (
        <div className='min-w-full h-full relative'>
            <div className='absolute top-[-5rem] right-20 hidden lg:flex gap-5 '>
                <div className='w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full p-7 cursor-pointer'><ArrowBackIcon className='scale-125 ' onClick={handlePrev} /></div>
                <div className='w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full p-7 cursor-pointer'><ArrowForwardIcon className='scale-125 ' onClick={handleNext} /></div>
            </div>

            <div className='flex gap-5 mb-20 overflow-x-auto no-scrollbar scroll-smooth' ref={container}>

                {
                    products.map(product =>

                        <Card sx={{ minWidth: { xs: 200, lg: 345 }, height: { xs: 300, lg: 450 }, boxShadow: 'none', position: 'relative' }} key={product.title}>
                            <div className='absolute top-5 right-5 flex flex-col gap-4 z-30'>
                                <div className='lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center z-50'><button onClick={() => addToFavourit(product)}> <FavoriteBorderIcon /></button></div>
                                <div className='lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center z-50'><button onClick={() => window.location.href = `/product/${product.id}`}><VisibilityIcon /></button> </div>
                                <div className='lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center z-50'><button onClick={() => { addToCart(product) }}><ShoppingCartCheckoutOutlinedIcon /></button> </div>
                            </div>
                            <CardActionArea href={'/product/' + product.id}>
                                <div className='relative w-full h-44 lg:h-80 flex items-center bg-gray-100'>
                                    {product.rating.rate >= 3 ?
                                        <h1 className='absolute top-2 left-2 lg:top-5 lg:left-5 bg-[#DB4444]  w-14 h-7 lg:w-20 lg:h-8 lg:text-lg  text-white font-sans text-center rounded-md '>-45%</h1>
                                        : <h1 className='absolute top-2 left-2 lg:top-5 lg:left-5 bg-[#DB4444]  w-14 h-7 lg:w-20 lg:h-8 lg:text-lg  text-white font-sans text-center rounded-md '>-35%</h1>}

                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image={product.image}
                                        alt={product.title}
                                        sx={{ width: { xs: 120, lg: 200 }, height: { xs: 120, lg: 200 }, marginX: 'auto', objectFit: 'contain' }}
                                    />
                                </div>

                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" className='line-clamp-2 h-5' sx={{ fontWeight: 'bold', lineHeight: 1, marginBottom: 2 }}>
                                        {product.title}
                                    </Typography>
                                    <Typography color='red' sx={{ fontWeight: 'bold', fontFamily: 'sans-serif', marginBottom: 2 }} >
                                        ${product.price}
                                        <span className='line-through text-gray-600 ml-3 font-extrabold text-lg'> $150</span>
                                    </Typography>
                                    <Typography>
                                        {product.rating.rate > 3 ?
                                            <div className='flex'>
                                                <StarIcon className='text-yellow-500' />
                                                <StarIcon className='text-yellow-500' />
                                                <StarIcon className='text-yellow-500' />
                                                <StarIcon className='text-yellow-500' />
                                                <StarIcon className='text-yellow-500' />
                                                ({product.rating.rate})
                                            </div>
                                            :
                                            <div>
                                                <StarIcon className='text-yellow-500' />
                                                <StarIcon className='text-yellow-500' />
                                                <StarIcon className='text-yellow-500' />
                                                <StarHalfIcon className='text-yellow-500' />
                                                <StarOutlineIcon className='text-yellow-500' />
                                                ({product.rating.rate})
                                            </div>
                                        }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    )
                }
            </div>


        </div>
    )
}

export default memo(ProductsSlider)
