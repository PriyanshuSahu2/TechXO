import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeSection from "../components/HomeSection";
import { publicRequest } from '../requestMethod';
import { getCartProducts } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
const Home = () => {
  

    const images = [
        "/assets/mbanner1.jpg",
        "/assets/mbanner1.jpg",
    ]

    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        try {
            const res = await publicRequest.get("/product")
            setProducts(res.data)
            console.table(res.data)
        } catch (error) {
            console.error(error)
        }
    }
   
    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div className="flex flex-col font-[Inter]">
            <Navbar />
            <HeroSection images={images} />
            <HomeSection title={"Today's Deal"} items={products} />
            {/* <HomeSection title={"Today's Deal"} items={dummyItems} /> */}
        </div>
    )
}

export default Home