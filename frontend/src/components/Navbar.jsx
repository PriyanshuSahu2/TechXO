import React, { useEffect, useMemo } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

// import { FaRegUser } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts } from "../redux/cartRedux";



const Navbar = () => {
    const dispatch = useDispatch()
    const cartQuantity = useSelector((state) => state.cart.products.length);
    const memoizedCartQuantity = useMemo(() => cartQuantity, [cartQuantity]);

    useEffect(() => {
        dispatch(getCartProducts())
    }, [dispatch])
    return (
        <div className="w-full p-4 mx-auto mt-2 h-14 flex items-center border-b">
            <div className="flex-1 flex justify-start">
                <div className=" flex gap-x-2 items-centr cursor-pointer">
                    <img className=" h-[36px] w-[36px]" src={"/assets/logo.png"} alt="Logo" />
                    <Link to={"/"} className="text-2xl text-slate-900 font-semibold tracking-tight capitalize ">TexhXO</Link>
                    {/* <AiFillHome className=" ml-2 text-xl"/> */}
                </div>
            </div>

            <div className="flex-1 flex justify-end gap-x-5 pr-4 items-center">
                <div className=" relative ">
                    <input type="text" className="pl-9 h-9 w-9 text-[15px] transition-all duration-500 bg-white border border-slate-200 focus-visible:outline-none focus:ring-0 focus:outline-slate-200 rounded-full cursor-pointer focus:w-[200px] focus:cursor-text " />
                    <HiOutlineSearch className=" absolute top-0 left-0 pointer-events-none h-9 w-9 p-2 text-xl " />
                </div>
                <Link to={"/Cart"} className="relative"><PiShoppingCartSimpleBold className="text-2xl cursor-pointer relative" /> {cartQuantity > 0 && <span className="absolute -top-1 -right-1 bg-[#DB4444] text-white rounded-full h-4 w-4 text-center text-xs">{memoizedCartQuantity}</span>} </Link>
               <FaRegUser className="text-2xl cursor-pointer" />
            </div>
        </div>
    );
}

export default Navbar