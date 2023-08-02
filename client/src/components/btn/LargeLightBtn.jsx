import React from 'react'

const LargeLightBtn = ({ children }) => {
    return (
        <button className='bg-white w-[90%] sm:w-64 rounded-md font-bold md:w-64 lg:mx-4 mt-2 h-10 top-[40%] p-2'>
            {children}
        </button>
    )
}

export default LargeLightBtn
