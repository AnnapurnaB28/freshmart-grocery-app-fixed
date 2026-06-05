import React from 'react'

const Banner = () => {
    return (
        <div className='container mx-auto px-4 mt-5'>
            <div className='bg-green-400 rounded-2xl px-6 py-5 md:px-10 lg:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8 overflow-hidden'>
                <div className='md:w-1/2 text-center md:text-left'>

                    <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight'>
                        Fresh Groceries Delivered Fast
                    </h1>
                    <p className='text-white mt-3 text-sm sm:text-base md:text-lg'>
                        Get fruits, vegetables & daily essentials in minutes
                    </p>
                    <button className='mt-5 bg-white text-green-600 px-5 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300'>
                        Shop Now</button>
                </div>


                <div className='md:w-1/4 flex justify-center '>
                    <img src="https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=880&auto=format&fit=crop" alt="banner"
                        className='w-full max-w-[220px] sm:max-w-[300px] md:max-w-[380px] rounded-2xl object-cover shadow-lg' />
                </div>

            </div>

        </div>
    )
}

export default Banner