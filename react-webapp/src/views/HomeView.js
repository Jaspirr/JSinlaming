import React, { useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'



const HomeView = () => {
    window.top.document.title = 'Fixxo.'

    const [featuredProducts, setFeaturedProducts] = useState([
        { id: 1, name : "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9558593/pexels-photo-9558593.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
        { id: 2, name : "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9558570/pexels-photo-9558570.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
        { id: 3, name : "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9558232/pexels-photo-9558232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
        { id: 4, name : "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/4109755/pexels-photo-4109755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
      ])
    const [topProducts, setTopProducts] = useState([
        { id: 1, name : "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/12039633/pexels-photo-12039633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
        { id: 2, name : "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9558604/pexels-photo-9558604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
        { id: 3, name : "modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1398037/pexels-photo-1398037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
      ])

    return (
        <>
            <MainMenuSection />
            <ProductGridSection title="Featured Products" products={featuredProducts}/>
            <ProductGridSection title="Top Products" products={topProducts}/>
            <FooterSection />
        </>
    )
}

export default HomeView