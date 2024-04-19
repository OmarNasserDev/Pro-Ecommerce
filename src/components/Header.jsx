import React, { useState, memo } from 'react'

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
import { IconButton, Menu, MenuItem, Typography, FormControl, NativeSelect, Button } from '@mui/material';

const Header = () => {

    const [lang, setLang] = useState('Languagee')
    const navItems = ['Home', 'Contact', 'About', 'Sign Up']

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
        <div className='shadow-lg bg-white shadow-gray-300 sticky top-0 z-50'>
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
                <Typography variant='h5' sx={{ fontWeight: "bold", fontSize: { xs: '20px', md: '23px' } }}>Exculsive</Typography>
                <Box className="flex items-center gap-80" sx={{ display: { xs: 'none', lg: 'flex' }, gap: { lg: '2rem', xl: '20rem' } }}>
                    <div className='flex gap-5'>
                        {
                            navItems.map(item =>
                                <a href="#" key={item}>  <Typography variant='h5' className='hover:underline'>{item}</Typography></a>)
                        }
                    </div>
                    <div className='flex items-center justify-between gap-5'>
                        <div className='search w-[30rem] h-12 relative'>
                            <input type="text" placeholder="What are you looking for?" id='search' className='w-full h-full px-5 text-lg rounded-md bg-gray-100 outline-none' />
                            <SearchIcon className='absolute top-2 right-3 w-10 h-10' sx={{ fontSize: "2rem" }} />
                        </div>
                        <FavoriteBorderIcon sx={{ fontSize: "2rem" }} />
                        <ShoppingCartIcon sx={{ fontSize: "2rem" }} />
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
                    <MenuItem onClick={handleClose} sx={{ gap: '10px' }}><EmailIcon /> Contact</MenuItem>
                    <MenuItem onClick={handleClose} sx={{ gap: '10px' }}><HomeIcon /> Home</MenuItem>
                    <MenuItem onClick={handleClose} sx={{ gap: '10px' }}><ImportContactsIcon /> About</MenuItem>
                    <MenuItem onClick={handleClose} sx={{ gap: '10px' }}><ExitToAppIcon /> Sign UP</MenuItem>
                    <MenuItem onClick={handlePopUp} sx={{ gap: '10px' }}> <SearchIcon className='w-10 h-10' sx={{ fontSize: "2rem" }} />Search</MenuItem>
                </Menu>
            </Box>
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
