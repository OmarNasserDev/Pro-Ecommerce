import React, { useContext, useEffect, useRef, useState } from 'react';
import { Cart } from '../App.jsx';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../components/Footer'
import Header from '../components/Header'

const CartView = () => {
    const { cart } = useContext(Cart);
    const [counts, setCounts] = useState(new Array(cart.length).fill(1)); // State for counts of each product
    const quantitiesRef = useRef(new Array(cart.length).fill(null)); // Refs for quantity inputs

    // Function to update count for a specific product
    const updateCount = (index, newCount) => {
        const newCounts = [...counts];
        newCounts[index] = newCount;
        setCounts(newCounts);
    };
    let total = 0
    cart.map(product => total += parseInt(product.price))
    console.log(total)
    useEffect(() => {
        // Initialize counts state with default quantity from inputs
        const defaultCounts = quantitiesRef.current.map(input => input ? parseInt(input.value) || 1 : 1);
        setCounts(defaultCounts);
    }, [cart]);

    return (
        <>
            <div className='w-full h-screen'>
                <Header />
                <div className='px-5 lg:px-36 mb-20 py-20'>

                    <h1 className='w-96 flex gap-2 text-lg font-sans text-gray-500 italic mb-20'>Home / <span className='text-2xl font-sans text-black'> Cart</span></h1>
                    <div className='w-full min-h-[80%] flex flex-col items-center justify-start lg:px-48 '>
                        <table className='w-full table-fixed'>
                            <thead className='shadow-lg p-20 h-14'>
                                <tr>
                                    <th className='font-sans lg:text-2xl'>Product</th>
                                    <th className='font-sans lg:text-2xl'>Price</th>
                                    <th className='font-sans lg:text-2xl'>Quantity</th>
                                    <th className='font-sans lg:text-2xl'>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((product, index) => (
                                    <tr key={index} className='shadow-lg h-20'>
                                        <td className='font-sans text-lg ml-2 lg:ml-0 lg:text-2xl flex flex-col lg:flex-row items-center gap-5 overflow-hidden mb-20'>
                                            <img src={product.image_link || product.image} alt="" className='mt-5 w-20' />
                                            <h1 className='lg:truncate text-md'>{product.brand || product.title}</h1>
                                        </td>
                                        <td className='font-sans text-xl lg:text-2xl text-center'>${product.price}</td>
                                        <td className='font-sans text-xl lg:text-2xl relative'>
                                            <div className='relative flex flex-col items-center top-0 right-0'>
                                                <input type="text" className='w-20 lg:w-24 h-14 border-2 border-gray-600 rounded-lg text-center text-xl lg:text-4xl lining-nums' ref={el => quantitiesRef.current[index] = el} defaultValue={1} value={1} />
                                                <div className='absolute lg:top-[-5px] right-5 lg:right-32'>
                                                    <div><button onClick={() => updateCount(index, counts[index] + 1)}><ExpandLessIcon /></button></div>
                                                    <div><button onClick={() => updateCount(index, Math.max(1, counts[index] - 1))}><ExpandMoreIcon /></button></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='font-sans text-xl lg:text-2xl text-center'>${product.price * counts[index]}</td> {/* Subtotal based on product price and count */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='w-full h-16 mt-10 flex items-center justify-between gap-5'>
                            <a href="/" className='w-64 h-full border-2 border-gray-500 rounded-lg text-center content-center text-xl font-sans'>Return To Shop</a>
                            <button className='w-64 h-full border-2 border-gray-500 rounded-lg text-center content-center text-xl font-sans'>Update Cart</button>
                        </div>
                    </div>
                    <div className='w-full mt-28 flex flex-col lg:grid grid-cols-12'>
                        <div className='col-span-8 mb-20 lg:mb-0'>
                            <input type="text" placeholder='Coupon Code' className='w-96 h-14 rounded-md p-5 outline-none border-2 border-gray-500 text-lg mr-5 mb-5 lg:mb-0' />
                            <button className='w-60 h-14 bg-[#DB4444] rounded-lg text-white font-sans text-lg'>Apply Coupon</button>
                        </div>
                        <div className='w-[30rem] h-96 flex flex-col items-center justify-center border-2 border-gray-700 p-5'>
                            <div className='w-full'>
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
                            <button className='w-72 h-14 rounded-md text-white font-serif mx-auto bg-[#DB4444]'>Procees to checkout</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default CartView;
