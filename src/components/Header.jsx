import React, { useState, useContext, memo } from 'react'

//MUI 

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

import { IconButton, Menu, MenuItem, Typography, FormControl, NativeSelect, Button } from '@mui/material';
//Context WishList
import { WishList, Cart } from '../App.jsx'
const Header = () => {
    const { wisharray } = useContext(WishList)
    const { cart } = useContext(Cart)
    const [lang, setLang] = useState('Languagee')
    const navItems = [{ type: 'Home', ref: '' }, { type: 'Contact', ref: '/contact' }, { type: 'About', ref: '/about' }, { type: 'Sign Up', ref: '/register' }]


    const handlechange = (data) => {
        setLang(data.target.value)
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const [popup, setPopUp] = useState('none');
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handlePopUp = () => {
        setAnchorEl(null);
        setPopUp('absolute')
    }

    return (
        <div className='w-full shadow-lg bg-white shadow-gray-300 fixed top-0 z-50'>
            <Box className='w-full h-12 grid grid-cols-12 bg-black text-gray-100 content-center' sx={{ display: { xs: 'none', md: 'grid' } }}>
                <p className='col-span-10 text-center text-lg'>Summer Sale For All Swim Suits Free Express Delivery - OFF 50%! <a href="#" className='text-white underline font-extrabold text-xl'> ShopNow</a></p>
                <Box sx={{ minWidth: 120, display: "flex", alignItems: "center" }}>
                    <FormControl fullWidth>
                        <NativeSelect id='menu' name='language' value={lang} onChange={handlechange} sx={{ color: "white" }}>
                            <option value="English" className='text-black' >English</option>
                            <option value="Arabic" className='text-black'>Arabic</option>
                        </NativeSelect>
                    </FormControl>
                    <ArrowDropDownIcon htmlFor='menu' />
                </Box>
            </Box>


            <Box className='w-full flex items-center justify-between px-20 border-b-4 sm:h-16 md:h-20'>
                <Typography variant='h5' sx={{ fontWeight: "bold", fontSize: { xs: '20px', md: '23px' } }} onClick={() => { window.location.href = '/' }} className='hover:cursor-pointer'>Exculsive</Typography>
                <Box className="flex items-center gap-80" sx={{ display: { xs: 'none', lg: 'flex' }, gap: { lg: '2rem', xl: '20rem' } }}>
                    <div className='flex gap-5'>
                        {
                            navItems.map(item =>
                                <a href={item.ref} key={item.type}>  <Typography variant='h5' className='hover:underline'>{item.type}</Typography></a>)
                        }
                    </div>
                    <div className='flex items-center justify-between gap-5'>
                        <div className='search w-[30rem] h-12 relative'>
                            <input type="text" placeholder="What are you looking for?" id='search' className='w-full h-full px-5 text-lg rounded-md bg-gray-100 outline-none' />
                            <SearchIcon className='absolute top-2 right-3 w-10 h-10' sx={{ fontSize: "2rem" }} />
                        </div>
                        <div className='relative w-10 h-12 flex items-center justify-center'>
                            <h1 className='absolute top-1 right-0 w-6 h-6 rounded-full text-lg bg-[#DB4444] text-white pb-2 flex place-items-center justify-center'>{wisharray.length}</h1>
                            <a href="/wishlist"> <FavoriteBorderIcon sx={{ fontSize: "2rem" }} /></a>
                        </div>
                        <div className='relative w-10 h-12 flex items-center justify-center'>
                            <h1 className='absolute top-1 right-0 w-6 h-6 rounded-full text-lg bg-[#DB4444] text-white pb-2 flex place-items-center justify-center'>{cart.length}</h1>
                            <a href="/cart">  <ShoppingCartIcon sx={{ fontSize: "2rem" }} /></a>
                        </div>

                        <div className='relative w-10 h-10 bg-[#DB4444] rounded-full text-center text-white border-none outline-none'>
                            <button> <PersonOutlineOutlinedIcon sx={{ fontSize: "2rem" }} onClick={() => { document.querySelector('#controller').classList.toggle('grid') }} /></button>
                            <div className='z-50 w-64 hidden grid-rows-5 absolute top-10 right-10  px-5 py-2 min-h-20 bg-gray-950/30 backdrop-blur-xl text-2xl rounded-md ' id='controller'>
                                <a href="#" className='font-black flex justify-start items-center gap-2 mb-5'><PersonOutlineOutlinedIcon sx={{ fontSize: "2rem" }} /> Manage My Account</a>
                                <a href="#" className='font-black flex justify-start items-center gap-2 mb-5'><ShoppingCartIcon /> My Order</a>
                                <a href="#" className='font-black flex justify-start items-center gap-2 mb-5'><CancelOutlinedIcon /> My Cancellations</a>
                                <a href="#" className='font-black flex justify-start items-center gap-2 mb-5'><StarBorderOutlinedIcon /> My Reviews</a>
                                <a href="#" className='font-black flex justify-start items-center gap-2'><LogoutOutlinedIcon /> Logout</a>
                            </div>
                        </div>
                    </div>
                </Box>


                <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ display: { xs: 'flex', lg: 'none' } }}
                >
                    <IconButton >
                        <DehazeIcon sx={{ fontSize: '30px' }} />
                    </IconButton>
                </Button>
                <Menu
                    id="fade-menu"

                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}

                >
                    <a href="/contact"><MenuItem onClick={handleClose} sx={{ gap: '10px' }}><EmailIcon /> Contact</MenuItem></a>
                    <a href=""><MenuItem onClick={handleClose} sx={{ gap: '10px' }}><HomeIcon /> Home</MenuItem></a>
                    <a href="/about"><MenuItem onClick={handleClose} sx={{ gap: '10px' }}><ImportContactsIcon /> About</MenuItem></a>
                    <a href="/register"><MenuItem onClick={handleClose} sx={{ gap: '10px' }}><ExitToAppIcon /> Sign UP</MenuItem></a>
                    <a href="/cart">
                        <MenuItem onClick={handleClose} sx={{ gap: '10px' }}>
                            <div className='relative w-10 h-12 flex items-center justify-center'>
                                <h1 className='absolute top-1 right-0 w-6 h-6 rounded-full text-lg bg-[#DB4444] text-white pb-2 flex place-items-center justify-center'>{cart.length}</h1>
                                <a href="/cart">  <ShoppingCartIcon sx={{ fontSize: "2rem" }} /></a>
                            </div>
                            Favourit
                        </MenuItem>
                    </a>
                    <a href="/wishlist">
                        <MenuItem onClick={handleClose} sx={{ gap: '10px' }}>
                            <div className='relative w-10 h-12 flex items-center justify-center'>
                                <h1 className='absolute top-1 right-0 w-6 h-6 rounded-full text-lg bg-[#DB4444] text-white pb-2 flex place-items-center justify-center'>{wisharray.length}</h1>
                                <a href="/wishlist"> <FavoriteBorderIcon sx={{ fontSize: "2rem" }} /></a>
                            </div>
                            Cart
                        </MenuItem>
                    </a>
                    <a href="/contact">  <MenuItem onClick={handleClose} sx={{ gap: '10px' }}><CallOutlinedIcon sx={{ fontSize: "2rem" }} /> Contact </MenuItem></a>
                    <MenuItem onClick={handlePopUp} sx={{ gap: '10px' }}> <SearchIcon className='w-10 h-10' sx={{ fontSize: "2rem" }} />Search</MenuItem>
                </Menu>
            </Box >
            <Box className="w-full h-72 top-[-300px] absolute bg-gray-900 opacity-50 flex items-center justify-center text-white z-20" sx={{ display: popup, top: '0px' }}>
                <Button className='absolute bottom-28 left-[28rem]' sx={{ color: "white" }} onClick={() => { setPopUp('none') }}>
                    <CloseIcon />
                </Button>
                <div className='search w-[30rem] h-12 relative mr-20'>
                    <input type="text" placeholder="What are you looking for?" className='w-full h-full p-2 text-md rounded-md bg-inherit border-2  outline-none' />
                    <SearchIcon className='absolute top-2 right-3 w-10 h-10' sx={{ fontSize: "2rem" }} />
                </div>
            </Box>
        </div >
    )
}

export default memo(Header)
