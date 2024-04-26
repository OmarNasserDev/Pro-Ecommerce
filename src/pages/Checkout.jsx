import React, { useContext } from 'react'

//COMPONENTS
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
//ASSETS
import paymethods from '../assets/paymethods.png'
//CONTEXT API
import { Cart } from '../App.jsx'

const Checkout = () => {

    const { cart } = useContext(Cart)

    let total = 0
    cart.map(product => total += parseInt(product.price))
    return (
        <div>
            <Header />
            <div className='w-full min-h-screen pl-5 lg:pl-20 my-20 lg:my-48'>
                <h1 className='text-lg italic font-sans text-gray-500 s'>Home / My Account / Product /  View Cart / <span className='text-black font-sans text-xl'> CheckOut</span></h1>
                <section className='w-full h-full mt-28 px-5 lg:px-28'>
                    <h1 className='text-4xl font-sans my-10 lg:my-28'>Billing Details</h1>
                    <div className='w-full flex flex-col lg:flex-row justify-between gap-20 lg:gap-0 '>
                        <div>
                            <form action="" className='flex flex-col'>
                                <label htmlFor="" className='text-xl font-thin text-gray-500 mt-5 pb-2'>First Name</label>
                                <input type="text" id='' className='w-96 h-10 rounded-sm px-2 outline-none text-lg bg-[#efeeee]' />
                                <label htmlFor="" className='text-xl font-thin text-gray-500 mt-5 pb-2'>Company Name</label>
                                <input type="text" id='' className='w-96 h-10 rounded-sm px-2 outline-none text-lg bg-[#efeeee]' />
                                <label htmlFor="" className='text-xl font-thin text-gray-500 mt-5 pb-2'>Street Address</label>
                                <input type="text" id='' className='w-96 h-10 rounded-sm px-2 outline-none text-lg bg-[#efeeee]' />
                                <label htmlFor="" className='text-xl font-thin text-gray-500 mt-5 pb-2'>Apartment,floor, etc. (optional)</label>
                                <input type="text" id='' className='w-96 h-10 rounded-sm px-2 outline-none text-lg bg-[#efeeee]' />
                                <label htmlFor="" className='text-xl font-thin text-gray-500 mt-5 pb-2'>Town/City</label>
                                <input type="text" id='' className='w-96 h-10 rounded-sm px-2 outline-none text-lg bg-[#efeeee]' />
                                <label htmlFor="" className='text-xl font-thin text-gray-500 mt-5 pb-2'>Phone Number</label>
                                <input type="text" id='' className='w-96 h-10 rounded-sm px-2 outline-none text-lg bg-[#efeeee]' />
                                <label htmlFor="" className='text-xl font-thin text-gray-500 mt-5 pb-2'>Email Adderss</label>
                                <input type="text" id='' className='w-96 h-10 rounded-sm px-2 outline-none text-lg bg-[#efeeee]' />
                                <div className='flex items-center gap-3 mt-8'>
                                    <input type="checkbox" checked className='w-6 h-6 accent-[#DB4444]' />
                                    <h1 className='text-lg font-black'>Save this information for faster check-out next time</h1>
                                </div>
                            </form>
                        </div>
                        <div>
                            <div>
                                <div className='h-[30rem] overflow-y-auto mb-10 lg:mb-24 p-5 no-scrollbar'>
                                    {
                                        cart.map(product =>
                                            <div className='w-full flex items-center justify-between mb-10'>
                                                <div className='flex items-center gap-5'>
                                                    <div className='w-10 lg:w-16'>
                                                        <img src={product.image || product.image_link} alt="" />
                                                    </div>
                                                    <h1 className='w-48 lg:w-96 text-lg font-black truncate'>{product.title || product.brand}</h1>
                                                </div>
                                                <h1 className='text-xl lining-nums font-black'>${product.price}</h1>
                                            </div>
                                        )
                                    }
                                </div>
                                <div>
                                    <h1 className='text-2xl font-sans mb-10'>Cart Total</h1>
                                    <div className='flex items-center justify-between mb-10 border-b-2 border-gray-500 pb-2 text-xl '>
                                        <h4 className='font-mono'>Subtotal:</h4>
                                        <h4 className='font-mono'>${total}</h4>
                                    </div>
                                    <div className='flex items-center justify-between mb-10 border-b-2 border-gray-500 pb-2 text-xl '>
                                        <h4 className='font-mono'>Shipping:</h4>
                                        <h4 className='font-mono'>Free</h4>
                                    </div>
                                    <div className='flex items-center justify-between mb-10 text-xl '>
                                        <h4 className='font-mono'>Total:</h4>
                                        <h4 className='font-mono'>${total}</h4>
                                    </div>
                                </div>
                                <div className='my-10'>
                                    <div className='w-full flex items-center justify-between'>
                                        <div className='flex gap-5'>
                                            <input type="radio" name='paymethod' className='w-8 h-8 accent-black' />
                                            <h1 className='text-xl font-sans italic'>Bank</h1>
                                        </div>
                                        <img src={paymethods} alt="" />
                                    </div>
                                    <div className='w-full flex items-center gap-5 my-2'>
                                        <input type="radio" name='paymethod' className='w-8 h-8 accent-black' />
                                        <h1 className='text-xl font-sans italic'>Cash on delivery</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-8 mb-20 lg:mb-0'>
                                <input type="text" placeholder='Coupon Code' className='w-96 h-14 rounded-md p-5 outline-none border-2 border-gray-500 text-lg mr-5 mb-5 lg:mb-0' />
                                <button className='w-60 h-14 bg-[#DB4444] rounded-lg text-white font-sans text-lg'>Apply Coupon</button>
                            </div>
                            <button className='w-60 h-14 bg-[#DB4444] rounded-lg text-white font-sans text-lg lg:mt-10'>Place Order</button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Checkout
