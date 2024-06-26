import React, { useEffect, useContext } from 'react'


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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';

//Context WishList
import { WishList } from '../App';

const OurProductsSlider = ({products}) => {


    const { wisharray, setWisharray } = useContext(WishList)
    const addToFavourit = (product) => {
        const test = wisharray.filter(item => item.id === product.id)
        if (!test.length > 0) {
            setWisharray([...wisharray, product])
        }
    }
    const handle = () => {
        const status = "Coming soon..."
        document.querySelector('.type-error').innerHTML = status
    }
    //I will dispatch this data from products page *****remmeber*****


    return (
        <>
            <h1 className='type-error w-96 text-2xl text-center text-blue-600 bg-gray-300 font-sans'></h1>
            <div className='min-w-full min-h-[104vh] py-3 lg:h-[95vh] mb-12 grid grid-cols-2 lg:grid-cols-4 gap-5  pr-5'>
                {
                    products.map(product =>

                        <Card sx={{ minWidth: { xs: 200, lg: 345 }, height: { xs: 300, lg: 470 }, boxShadow: 'none', position: 'relative' }} key={product.title} className='mx-5 ' onClick={handle}>
                            <div className='absolute top-5 right-5 flex flex-col gap-4 z-30'>
                                <div className='lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center'><button onClick={() => { addToFavourit(product) }}> <FavoriteBorderIcon /></button></div>
                                <div className='lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center z-50'><button onClick={handle}><VisibilityIcon /></button> </div>
                            </div>
                            <CardActionArea>
                                <div className='relative w-full h-44 lg:h-80 flex items-center bg-gray-100'>

                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image={product.image_link}
                                        alt={product.title}
                                        sx={{ width: { xs: 120, lg: 200 }, height: { xs: 120, lg: 200 }, marginX: 'auto', objectFit: 'contain' }}
                                    />
                                </div>

                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" className='line-clamp-2 h-5' sx={{ fontWeight: 'bold', lineHeight: 1, marginBottom: 2 }}>
                                        {product.name}
                                    </Typography>
                                    <Typography color='red' sx={{ fontWeight: 'bold', fontFamily: 'sans-serif', marginBottom: 2 }} className='lgflex' >
                                        ${product.price}
                                        <span className='line-through text-gray-600 ml-3 font-extrabold text-lg mr-5'> $150</span>
                                        <Typography className='text-gray-600'>
                                            {product.rating > 3 ?
                                                <div className='flex'>
                                                    <StarIcon className='text-yellow-500' />
                                                    <StarIcon className='text-yellow-500' />
                                                    <StarIcon className='text-yellow-500' />
                                                    <StarIcon className='text-yellow-500' />
                                                    <StarIcon className='text-yellow-500' />
                                                    ({product.rating})
                                                </div>
                                                :
                                                product.rating > 1 ?


                                                    <div>
                                                        <StarIcon className='text-yellow-500' />
                                                        <StarIcon className='text-yellow-500' />
                                                        <StarIcon className='text-yellow-500' />
                                                        <StarHalfIcon className='text-yellow-500' />
                                                        <StarOutlineIcon className='text-yellow-500' />
                                                        ({product.rating})
                                                    </div>
                                                    :
                                                    <div>
                                                        <StarBorderIcon className='text-yellow-500' />
                                                        <StarBorderIcon className='text-yellow-500' />
                                                        <StarBorderIcon className='text-yellow-500' />
                                                        <StarBorderIcon className='text-yellow-500' />
                                                        <StarBorderIcon className='text-yellow-500' />
                                                        ({product.rating})
                                                    </div>
                                            }
                                        </Typography>
                                    </Typography>
                                    <Typography className='w-full h-20 flex gap-5'>
                                        {product.product_colors.length > 0 ?


                                            product.product_colors.map(color =>
                                                <div className='w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center rounded-full hover:border-[3px] border-black'>
                                                    <button className='w-3 h-3 lg:w-5 lg:h-5 rounded-full' style={{ backgroundColor: color.hex_value }} ></button>
                                                </div>
                                            )



                                            :
                                            <></>
                                        }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    )
                }

            </div>
        </>
    )
}

export default OurProductsSlider
