import React, { useContext, useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import ProductCard from '../components/ProductCard'
import { SearchContext } from '../context/SearchContext'

const Home = () => {
    const [products, setProducts] = useState([])
    const { search } = useContext(SearchContext)

    useEffect(() => {
        fetch("/db.json")
            .then(r => r.json())
            .then(data => setProducts(data.products || []))
    }, [])

    const filteredProducts = products.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <Banner />
            <Categories />
            <div className='container mx-auto px-4 py-10'>
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold whitespace-nowrap">Products</h2>
                    <div className="h-[1px] w-full bg-green-500 rounded-full"></div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                    {filteredProducts.map(item => <ProductCard key={item.id} item={item} />)}
                </div>
            </div>
        </>
    )
}

export default Home
