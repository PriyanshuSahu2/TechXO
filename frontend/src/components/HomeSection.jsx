import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import { IoMdStar } from 'react-icons/io'
import { Link } from 'react-router-dom'

const HomeSection = ({ title, items }) => {
    return (
        <section className='px-8 my-2 h-fit flex flex-col gap-4 items-center w-full'>
            <div className='flex justify-between items-center w-full'>
                <div className='cursor-pointer flex items-center gap-2'>
                    <div className='w-5 h-10 bg-[#DB4444] rounded'></div>
                    <h3 className='text-[#393B3A] text-left font-semibold text-base py-0.5 z-10 relative ms-2 rounded '>
                        {title}
                    </h3>
                    {/* <div className='absolute inset-0 bg-gray-600 bg-headings-pattern bg-cover opacity-20 z-0 w-32 rounded-sm'></div> */}
                </div>
                <div className='flex gap-2 '>
                    <div className='p-2 rounded-full bg-[#F5F5F5] hover:bg-[#DB4444] cursor-pointer hover:scale-125 transition-all hover:text-white'><ArrowLeft size={16} /></div>
                    <div className='p-2 rounded-full bg-[#F5F5F5] hover:bg-[#DB4444] cursor-pointer hover:scale-125 transition-all hover:text-white'><ArrowRight size={16} /></div>
                </div>
            </div>
            <div className='flex gap-5 w-full'>
                {items?.map((item, index) => {
                    return (<Link to={"/product"} className='flex flex-col items-center w-[200px] h-[200px]'>
                        <figure className='bg-[#F5F5F5] w-full p-5'>  <img src={item.image} className='object-fill w-[150px] h-[100px]' alt="Television" /></figure>
                        <figcaption className='flex flex-col flex-wrap gap-0.5 justify-between w-full px-2 mt-2'>
                            <span className='text-xs overflow-clip'>
                                {item.title}
                            </span>
                            <span className='text-xs font-semibold text-[#DB4444]'>
                                ${item.price}
                            </span>
                            <section className="flex text-center items-center gap-2 py-1">
                                <div className="flex ">
                                    <IoMdStar color="#FFAD33" />
                                    <IoMdStar color="#FFAD33" />
                                    <IoMdStar color="#FFAD33" />
                                    <IoMdStar color="#FFAD33" />
                                    <IoMdStar color="#BFBFBF" />
                                </div>

                                <div>
                                    <span className="text-xs  text-[#7F7F7F]">(150)</span>
                                </div>

                            </section>
                        </figcaption>
                    </Link>)
                })}
            </div>
            <button className='bg-[#DB4444] text-white p-2 rounded mt-10'>View All Products</button>
        </section>
    )
}

export default HomeSection



// <div className='flex justify-between'>
// <div className='relative cursor-pointer'>
//     <h3 className='text-[#393B3A] text-left font-semibold text-base py-0.5 z-10 relative ms-2 rounded '>
//         {title}
//     </h3>
//     <div className='absolute inset-0 bg-gray-600 bg-headings-pattern bg-cover opacity-20 z-0 w-32 rounded-sm'></div>
// </div>
// <h3 className='text-[#393B3A] text-left font-semibold text-base py-0.5 z-10 relative ms-2 rounded cursor-pointer hover:text-blue-400 hover:scale-125 transition-all'>
//     View All
// </h3>
// </div>