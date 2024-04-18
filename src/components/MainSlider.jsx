import React, { memo } from 'react'
import style from '../styles/MainSlider.module.css'


import iphone from '../assets/iphone.png'
import potle from '../assets/potle.jpg'
import car from '../assets/car.jpg'
import shoes from '../assets/shoes.jpg'
import headphones from '../assets/headphones.jpg'


const MainSlider = () => {

    const slider = [
        { image: iphone, title: 'iphone 14 Series' },
        { image: potle, title: 'Safe wate hot' },
        { image: car, title: 'Decorate your disk' },
        { image: shoes, title: 'Suitable shoes for most events' },
        { image: headphones, title: 'Be calm and be in isolation' },
    ]

    var count = 1
    setInterval(() => {
        if (count <= 5) {
            document.getElementById('radio' + count).checked = true
            count++
        } else {
            count = 1
        }

    }, 5000)


    return (
        <div className={style.container}>
            <div className={style.swiper}>
                {
                    slider.map(slide => (
                        <div className={style.imgView} id='first' key={slide.title}>
                            <img src={slide.image} alt="" />
                            <div className={style.content}>
                                <h1 className='mb-5 text:6xl lg:text-3xl font-thin'>{slide.title}</h1>
                                <p className='flex flex-col font-extrabold lg:text-6xl'>Up to 10% <span className='lg:text-6xl mt-3 mb-20'>off Voucher</span></p>
                                <h1 className='underline lg:text-2xl font-thin'>Shop Now </h1>
                            </div>
                        </div>
                    ))
                }

                <div className={style.pagination}>
                    <input type='radio' name='pagination' id='radio1' value='1' />
                    <input type='radio' name='pagination' id='radio2' value='2' />
                    <input type='radio' name='pagination' id='radio3' value='3' />
                    <input type='radio' name='pagination' id='radio4' value='4' />
                    <input type='radio' name='pagination' id='radio5' value='5' />
                </div>
            </div>

        </div>
    )
}

export default memo(MainSlider)
