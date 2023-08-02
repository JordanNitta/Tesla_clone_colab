import MS from './images/model-s.jpg'
import M3 from './images/model-3.jpg'
import MX from './images/model-x.jpg'
import MY from './images/model-y.jpg'
import SP from './images/solar-panel.jpg'
import SR from './images/solar-roof.jpg'
// import AC from './images/accessories.jpg'

export const links = [
    {
        id: 1,
        bgImg: `${MS}`,
        title: 'Model S',
        price: "",
        subTitle: 'View Inventory',
        path:"/models",
        leftBtn: "Order Now",
        rightBtn: "Demo Drive",
    },
    {
        id: 2,
        bgImg: `${M3}`,
        title: 'Model 3',
        price: "Starting at $32,740",
        subTitle: 'View Inventory',
        path:"/model3",
        leftBtn: "Order Now",
        rightBtn: "Demo Drive",
    },
    {
        id: 3,
        bgImg: `${MX}`,
        title: 'Model X',
        price: "",
        subTitle: 'View Inventory',
        path:"/modelx",
        leftBtn: "Order Now",
        rightBtn: "Demo Drive",
    },
    {
        id: 4,
        bgImg: `${MY}`,
        title: 'Model Y',
        price: "Starting at $39,990",
        subTitle: 'View Inventory',
        path:"/modely",
        leftBtn: "Order Now",
        rightBtn: "Demo Drive",
    },
    {
        id: 5,
        bgImg: `${SP}`,
        title: 'Solar Panel',
        price: "",
        subTitle: 'Schedule a Virtual Consultation',
        path:"/solarpanel",
        leftBtn: "Order Now",
        rightBtn: "Learn More",
    },
    {
        id: 6,
        bgImg: `${SR}`,
        title: 'Solar Roof',
        price: "",
        subTitle: 'Produce Clean Energy From Your Roof',
        path:"/solarroof",
        leftBtn: "Order Now",
        rightBtn: "Learn More",
    },
    // {
    //     id: 7,
    //     bgImg: `${AC}`,
    //     title: 'Accessories',
    //     price: "",
    //     subTitle: '',
    //     path:"/models"
    // },
]

export const mainImg = [
    {
        id: 1,
        bgdrop: `${M3}`
    },
    {
        id: 2,
        bgdrop: `${MY}`
    },
    {
        id: 3,
        bgdrop: `${MS}`
    },
    {
        id: 4,
        bgdrop: `${MX}`
    },
    {
        id: 5,
        bgdrop: `${SP}`
    },
    {
        id: 6,
        bgdrop: `${SR}`
    },
    {
        id: 7,
        bgdrop: `${MX}`
    },
]




export const menuList = [
    {
        title: "Shop",
        path:"/account",
        list: "",
    },
    {
        title: "Account",
        path:"/account",
        list: "",
    },
    {
        title: "Menu",
        path:"/menu",
        list: [
            {}
        ],
    },
    
]

export const solarRoofLink = [
    {
        title: 'Schedule a Callback',
        path: "/callback"
    },
    {
        title: "Support",
        path: "/support/energy"
    },
    {
        title: "Order Solar Roof",
        path: "/energy/design"
    }
]

// Shop Links
export const shopLinks = [
    {
        id: 1,
        title: 'Charging',
        path:"/category/charging",
    },
    {
        id: 2,
        title: 'Vehicle Accessories',
        path:"/category/vehicle-accessories",
    },
    {
        id: 3,
        title: 'Apparel',
        path:'/category/apparel',
    },
    {
        id: 4,
        title: 'Lifestyle',
        path:"/category/lifestyle",
    },
]

// Shop icons for shop nav bar
export const shopIcons = [
    {
        title: "Shop",
        path:"/account",
        list: "",
    },
    {
        title: "Account",
        path:"/account",
        list: "",
    },
    {
        title: "Menu",
        path:"/menu",
        list: [
            {}
        ],
    },
    
]