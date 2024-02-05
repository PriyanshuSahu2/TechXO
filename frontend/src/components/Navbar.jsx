import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

// import { FaRegUser } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className="w-full p-4 mx-auto mt-2 h-14 flex items-center border-b">
            <div className="flex-1 flex justify-start">
                <div className=" flex gap-x-2 items-centr cursor-pointer">
                    <img className=" h-[36px] w-[36px]" src={"/assets/logo.png"} alt="Logo" />
                    <h1 className="text-2xl text-slate-900 font-semibold tracking-tight capitalize ">TexhXO</h1>
                    {/* <AiFillHome className=" ml-2 text-xl"/> */}
                </div>
            </div>

            <div className="flex-1 flex justify-end gap-x-5 pr-4 items-center">
                <div class=" relative ">
                    <input type="text" className="pl-9 h-9 w-9 text-[15px] transition-all duration-500 bg-white border border-slate-200 focus-visible:outline-none focus:ring-0 focus:outline-slate-200 rounded-full cursor-pointer focus:w-[200px] focus:cursor-text " />
                    <HiOutlineSearch className=" absolute top-0 left-0 pointer-events-none h-9 w-9 p-2 text-xl " />
                </div>
                <PiShoppingCartSimpleBold className="text-2xl cursor-pointer " />
                <FaRegUser className="text-2xl cursor-pointer" />
            </div>
        </div>
    );
}

export default Navbar