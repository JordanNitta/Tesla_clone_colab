import React, { useState } from 'react'
import FloorMats from '../../images/shopImages/Floormats_Banner_web.avif'
import WallConnector from '../../images/shopImages/wall-connector-banner_web.avif'
import Clothes from '../../images/shopImages/clothe-banner-web.avif'
import MobileClothes from '../../images/shopImages/clothe_banner_mobile.avif'
const CarouselShop = () => {

    const slides = [
        {
            image: `${WallConnector}`,
            // Need to add images into this
            
        },
        {
            image: `${Clothes}`,
            srcSet: `${MobileClothes} 480w, ${Clothes} 1024w`
        },
        {
            image: `${FloorMats}`
        }
    ]
    const [currentIndex, setCurrentIndex] = useState(0)


    const prevImage = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex
        setCurrentIndex(newIndex)
    }
    
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div className='h-screen w-full'>
            <div className='h-screen snap-start'>
                <img src={slides[currentIndex].image} alt="" className='h-full duration-500 bg-cover bg-center' />
            </div>
            <div className='flex gap-5 items-center relative bottom-10 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer'>
                <div className='w-3 h-3 rounded-full bg-gray-500' onClick={nextSlide}></div>
                <div className='w-3 h-3 rounded-full bg-gray-500' onClick={nextSlide}></div>
                <div className='w-3 h-3 rounded-full bg-gray-500' onClick={nextSlide}></div>
            </div>
        </div>
    )
}

export default CarouselShop
