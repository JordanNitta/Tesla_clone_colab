import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import MensMobile from '../../images/shopImages/men_mobile.avif'
import MensDesktop from '../../images/shopImages/men_web.avif'

import WomanMobile from '../../images/shopImages/women_mobile.avif'
import WomanDesktop from '../../images/shopImages/women_web.avif'

import KidMobile from '../../images/shopImages/Kids_mobile.avif'
import KidDesktop from '../../images/shopImages/kids_web.avif'

import PrimaryButton from '../btn/LargePrimaryBtn'

const Apparel = () => {
    const [,setBgImage] = useState(null)

    const apparelData = [
        {
            id: 1,
            mobileImg: MensMobile,
            desktopImg: MensDesktop,
            title: "Men's Apparel",
            path: "/category/apparel/men",
            btn: "Shop Now",
        },
        {
            id: 2,
            mobileImg: WomanMobile,
            desktopImg: WomanDesktop,
            title: "Men's Apparel",
            path: "/category/apparel/woman",
            btn: "Shop Now",
        },
        {
            id: 3,
            mobileImg: KidMobile,
            desktopImg: KidDesktop,
            title: "Kid's Apparel",
            path: "/category/apparel/kid",
            btn: "Shop Now",
        }
    ]

    const imageChange = (mobileImg, desktopImg) => {
        return window.innerWidth <= 600 ? mobileImg : desktopImg
    }

    useEffect(() => {
        const handleResize = () => {
            const newBgImage = imageChange(apparelData[0].mobileImg, apparelData[0].desktopImg)
            setBgImage(newBgImage)
        }
        // Add a event which is resize that takes a callback function which will handle the resize
        window.addEventListener('resize', handleResize)

        // Clean up function to unmount 
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])
    return (
        <>
            <div className='sm:hidden'>
                {
                    apparelData.map(({ title, mobileImg, btn, path }, id) => {
                        return (
                            <div key={id} style={{ backgroundImage: `url(${mobileImg})` }} className='h-screen bg-cover bg-center flex flex-col justify-between snap-start'>
                                <div className='relative text-center'>
                                    {/* <p className='underline underline-offset-4 pt-2 text-sm font-light'>{price}</p>
                                    <p className='text-sm'>{subTitle}</p> */}
                                </div>
                                <div className='flex flex-col items-center gap-5 justify-end text-sm relative mb-10'>
                                    <h1 className='text-4xl text-center font-bold w-96 mt-2 h-10 text-black top-[20%] p-2 text-[22px]'>{title}</h1>
                                    <PrimaryButton>
                                        <Link to={path}>{btn}</Link>
                                        {btn}
                                    </PrimaryButton>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='hidden sm:grid grid-cols-3 gap-5'>
                {
                    apparelData.map(({ title, desktopImg, btn, path }, id) => {
                        return (
                        <div key={id} style={{ 
                            backgroundImage: `url(${desktopImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat', 
                            }} className='h-screen  flex flex-col justify-between snap-start'>
                            <div className='relative text-center'>
                                {/* <p className='underline underline-offset-4 pt-2 text-sm font-light'>{price}</p>
                                <p className='text-sm'>{subTitle}</p> */}
                            </div>
                            <div className='flex flex-col items-center gap-5 justify-end text-sm relative mb-10'>
                                <h1 className='text-4xl text-center font-bold w-96 mt-2 h-10 text-black top-[20%] p-2 text-[22px]'>{title}</h1>
                                <PrimaryButton>
                                    <Link to={path}>{btn}
                                        {btn}
                                    </Link>
                                </PrimaryButton>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Apparel
