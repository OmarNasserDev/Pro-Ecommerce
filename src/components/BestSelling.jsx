import React, { useEffect, useState, useContext, memo } from 'react'
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
//Context WishList
import { WishList } from '../App';

const BestSelling = ({ products }) => {

    const filterData = () => {

        const filterdProducts = products.filter(product => product.rating.rate > 4.6)
        setBestProducts(filterdProducts)
    }
    const { wisharray, setWisharray } = useContext(WishList)
    const addToFavourit = (product) => {
        const test = wisharray.filter(item => item.id === product.id)
        if (!test.length > 0) {
            setWisharray([...wisharray, product])
        }
    }
    const [bestProducts, setBestProducts] = useState([])
    useEffect(() => {
        filterData()
    }, [products])


    return (
        <div className='mb-20'>
            <div className='w-full grid grid-cols-12 gap-12 lg:pr-52'>
                {
                    bestProducts.map(product =>

                        <Card sx={{ minWidth: { xs: 200, lg: 345 }, height: { xs: 300, lg: 450 }, boxShadow: 'none', position: 'relative' }} className='col-span-5 lg:m-0 lg:col-span-3' key={product.title}>
                            <CardActionArea>
                                <div className='absolute top-5 right-5 flex flex-col gap-4 z-30'>
                                    <div className='lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center'><button onClick={() => { addToFavourit(product) }}> <FavoriteBorderIcon /></button></div>
                                    <div className='lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center z-50'><button onClick={() => window.location.href = `/product/${product.id}`}><VisibilityIcon /></button> </div>
                                    <div className='lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center z-50'><button onClick={() => { addToCart(product) }}><ShoppingCartCheckoutOutlinedIcon /></button> </div>
                                </div>
                                <div className='relative w-full h-44 lg:h-80 flex items-center bg-gray-100'>

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

export default memo(BestSelling)
