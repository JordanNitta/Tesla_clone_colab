import React from 'react'
import ShopNavbar from '../../components/ShopNavbar/ShopNavbar'
import CarouselShop from '../../components/ShopLanding/CarouselShop'
import Apparel from '../../components/ShopLanding/Apparel'
import CarAccessories from '../../components/ShopLanding/CarAccessories'
import Wrapper from '../../components/wrappers/ScrollSnap'

const ShopLanding = () => {
    return (
        <>
            <ShopNavbar />
            <Wrapper>
                <CarouselShop />
                <CarAccessories />
                <Apparel />
            </Wrapper>
        </>
    )
}

export default ShopLanding
