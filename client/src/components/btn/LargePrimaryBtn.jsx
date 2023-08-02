import React from 'react'

// Button for mobile
// Only use this button on design where its needed
// The button is defaulted to white and on hover text inside will change to white and bg will be black
const LargePrimaryBtn = ({ children }) => {
    return (
        <button className='bg-white border-black border-[3px] w-[90%] sm:w-64 rounded-md font-bold md:w-64 lg:mx-4 mt-2 h-10 top-[40%] p-2 hover:bg-black hover:text-white'>
            {children}
        </button>
    )
}

export default LargePrimaryBtn
