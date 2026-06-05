import React from 'react'
import ProductCard from './ProductCard'

const RelatedProducts = ({ relatedPro }) => {
    return (
        <>
            <div className='mt-17'>
                <h3 className='border-b-2 border-green-400 font-bold text-2xl w-60 pb-2'>Related Products</h3>
                <div className='mt-10 grid grid-cols-2 md:grid-cols-5 gap-6'>
                    {relatedPro.map((val) => (
                        <ProductCard key={val.id}
                            item={val} />
                    )

                    )}

                </div>
            </div>



        </>
    )
}

export default RelatedProducts
