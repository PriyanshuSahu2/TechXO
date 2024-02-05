import React from 'react'
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeSection from "../components/HomeSection";
const Home = () => {
    const dummyItems = [
        {
            image: "/assets/Ps5Controller.png",
            title: "HAVIT HV-G92 Gamepad",
            description: "High-quality sound system",
            price: "599",
        },
        {
            image: "/assets/TV2.png",
            title: "Wireless Bluetooth Speaker",
            description: "Portable and durable",
            price: "299",
        },
        {
            image: "/assets/TV1.png",
            title: "Zebronics ZEB-JUKE BAR DOLBY",
            description: "High-quality sound system",
            price: "599",
        },
        {
            image: "/assets/TV2.png",
            title: "Wireless Bluetooth Speaker",
            description: "Portable and durable",
            price: "299",
        },
        // Add more items as needed
        {
            image: "/assets/Ps5Controller.png",
            title: "HAVIT HV-G92 Gamepad",
            description: "High-quality sound system",
            price: "599",
        },
        {
            image: "/assets/Ps5Controller.png",
            title: "HAVIT HV-G92 Gamepad",
            description: "High-quality sound system",
            price: "599",
        }
        // Add more items as needed
    ];

    const images = [
        "/assets/mbanner1.jpg",
        "/assets/mbanner1.jpg",
    ]
    return (
        <div className="flex flex-col font-[Inter]">
            <Navbar />
            <HeroSection images={images} />
            <HomeSection title={"Today's Deal"} items={dummyItems} />
            <HomeSection title={"Today's Deal"} items={dummyItems} />
        </div>
    )
}

export default Home