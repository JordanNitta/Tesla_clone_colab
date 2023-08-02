import React, { useEffect, useState } from 'react'
import LightBtn from '../btn/LargeLightBtn'
import { Link } from 'react-router-dom'
import MSMobile from '../../images/shopImages/car-1-mobile.avif'
import MSDesktop from '../../images/shopImages/MS-web.avif'

import M3Mobile from '../../images/shopImages/M3-mobile.avif'
import M3Desktop from '../../images/shopImages/M3-web.avif'

import MxMobile from '../../images/shopImages/MX-mobile.avif'
import MxDesktop from '../../images/shopImages/MX-web.avif'

import MyMobile from '../../images/shopImages/MY-mobile.avif'
import MyDesktop from '../../images/shopImages/MY-web.avif'

import WallConnectorMobile from '../../images/shopImages/charging-mobile.avif'
import WallConnectorDesktop from '../../images/shopImages/charging-web.avif'
// Images for car accesories page
const CarAccessories = () => {
    const [, setBgImage] = useState('')

    const carData = [
        {
            id: 0,
            mobileImg: MSMobile,
            desktopImg: MSDesktop,
            title: "Model S Accessories",
            path: "/category/vehicle-accessories/model-s",
            btn: "Shop Now",
        },
        {
            id: 1,
            mobileImg: M3Mobile,
            desktopImg: M3Desktop,
            title: "Model 3 Accessories",
            path: "/category/vehicle-accessories/model-3",
            btn: "Shop Now",
        },
        {
            id: 2,
            mobileImg: MxMobile,
            desktopImg: MxDesktop,
            title: "Model X Accessories",
            path: "/category/vehicle-accessories/model-x",
            btn: "Shop Now",
        },
        {
            id: 3,
            mobileImg: MyMobile,
            desktopImg: MyDesktop,
            title: "Model Y Accessories",
            path: "/category/vehicle-accessories/model-y",
            btn: "Shop Now",
        },
        {
            id: 4,
            mobileImg: WallConnectorMobile,
            desktopImg: WallConnectorDesktop,
            title: "Charging",
            path: "/category/chargin",
            btn: "Shop Now",
        }
    ]

    // Checks to see if the inner width of window and change images based on the size
    const imageChange = (mobileImg, desktopImg) => {
        return window.innerWidth <= 600 ? mobileImg : desktopImg
    }


    // 
    useEffect(() => {
        const handleResize = () => {
            const newBgImage = imageChange(carData[0].mobileImg, carData[0].desktopImg)
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
            <div>
                {
                    carData.map(({ title, mobileImg, desktopImg, btn, path }, id) => {
                        return (
                        <div key={id} style={{backgroundImage: `url(${imageChange(mobileImg, desktopImg)})`}} 
                            className='h-screen bg-cover bg-center flex flex-col justify-between snap-start'>
                            <div className='relative'>
                                {/* <p className='underline underline-offset-4 pt-2 text-sm font-light'>{price}</p>
                                <p className={`${id % 2 === 0 ? 'text-white text-sm ' : 'text-black text-sm '}`}>{subTitle}</p> */}
                            </div>
                            <div className='flex flex-col items-center gap-5 justify-end text-sm lg:flex-col relative mb-10'>
                                <h1 
                                    className={`text-[24px] text-center font-bold w-96 lg:mx-4 mt-2 h-10 top-[20%] p-2 sm:text-[34px] md:w-full ${id % 2 === 0 ? 'text-white' : 'text-black'}`}
                                    >{title}</h1>
                                <LightBtn>
                                    <Link to={path}>
                                            {btn}
                                    </Link>
                                </LightBtn>
                            </div>
                        </div>
                        )
                    })
                    //      <div key={id} style={{ backgroundImage: `url(${bgImg})` }} className='h-screen bg-cover bg-center flex flex-col justify-between snap-start'>
                    //      <div className='relative text-center'>
                    //          {/* <p className='underline underline-offset-4 pt-2 text-sm font-light'>{price}</p>
                    //          <p className={`${id % 2 === 0 ? 'text-white text-sm ' : 'text-black text-sm '}`}>{subTitle}</p> */}
                    //      </div>
                    //      <div className='flex flex-col items-center gap-5 justify-end text-sm lg:flex-row md:flex-row relative mb-10'>
                    //          <h1 
                    //              className={`text-4xl text-center font-bold w-96 md:w-64 lg:mx-4 mt-2 h-10 top-[20%] p-2 text-[22px] ${id % 2 === 0 ? 'text-white' : 'text-black'}`}
                    //              >{title}</h1>
                    //          <LightBtn>
                    //              <Link to={path}>
                    //                      {btn}
                    //              </Link>
                    //          </LightBtn>
                    //      </div>
                    //  </div>
                }
            </div>
        </>
    )
}

export default CarAccessories
