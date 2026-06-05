import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RelatedProducts from '../components/RelatedProducts'
import { useCart } from '../context/CartContext'

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [relatedPro, setRelatedPro] = useState([])
    const { addToCart, setIsOpen } = useCart()

    useEffect(() => {
        fetch("/db.json")
            .then(r => r.json())
            .then(data => {
                const found = data.products.find(p => String(p.id) === String(id))
                setProduct(found)
                if (found) {
                    setRelatedPro(data.products.filter(p => p.category === found.category && p.id !== found.id))
                }
            })
    }, [id])

    if (!product) return <h1 className='text-center mt-10 text-2xl font-bold'>Loading...</h1>

    return (
        <div className='container mx-auto px-4 py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg p-6'>
                <div className='flex justify-center items-center border-r-2 border-gray-200'>
                    <img className='w-full max-w-sm h-[350px] object-contain' src={product.image} alt={product.name} />
                </div>
                <div className='space-y-5'>
                    <h1 className='text-3xl md:text-4xl font-bold'>{product.name}</h1>
                    <p className='text-gray-500 text-lg'>{product.unit}</p>
                    <h2 className='text-3xl font-bold text-green-600'>₹{product.price}</h2>
                    <button
                        onClick={() => addToCart(product)}
                        className='bg-green-600 hover:bg-green-700 transition text-white px-8 py-3 rounded-xl text-lg font-semibold'
                    >
                        Add to Cart
                    </button>
                    <div className='pt-8 space-y-6'>
                        <div className='flex items-start gap-4'>
                            <div className='text-3xl'>⚡</div>
                            <div>
                                <h3 className='font-semibold text-lg'>Fast Delivery</h3>
                                <p className='text-gray-500'>Get your order delivered in 10 minutes.</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-4'>
                            <div className='text-3xl'>🥬</div>
                            <div>
                                <h3 className='font-semibold text-lg'>Fresh Products</h3>
                                <p className='text-gray-500'>Handpicked fresh grocery items everyday.</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-4'>
                            <div className='text-3xl'>💰</div>
                            <div>
                                <h3 className='font-semibold text-lg'>Best Price</h3>
                                <p className='text-gray-500'>Affordable prices with best quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProducts relatedPro={relatedPro} />
        </div>
    )
}

export default ProductDetails
