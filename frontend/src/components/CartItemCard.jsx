import React, { useState } from 'react'
import { PiCaretUpLight, PiCaretDown } from "react-icons/pi";
const CartItemCard = ({ data }) => {
    const [itemCount, setItemCount] = useState(1);
    const onItemIncrement = () => {

        setItemCount(itemCount + 1);
    }
    const onItemDecrement = () => {
        if (itemCount > 1) {
            setItemCount(itemCount - 1)
        }
    }

    return (
        <div className='flex px-8  py-4 items-center text-base shadow'>
            <div className='flex-1 text-center  border-red-100 flex items-center gap-5 text-base'>
                <figure className='max-h-24 max-w-28'><img src="/assets/TV1.png" className='w-full h-full' alt="" /></figure>
                {data.productId.name}
            </div>
            <div className='flex-1 text-center  border-red-100'>${data?.productId?.varient?.[data.varient].price}</div>
            <div className='flex-1 text-center  flex items-center gap-3  justify-center'>
                <div className=' flex items-center  rounded-md w-20 py-1 border-[#999] border-[1.5px]'>
                    <span className='flex-1' >{itemCount}</span>
                    <div className='flex flex-1 flex-col justify-center items-center gap-[1px]'>
                        <button className='cursor-pointer' onClick={onItemIncrement}> <PiCaretUpLight /></button>
                        <button className='cursor-pointer' onClick={onItemDecrement}>   <PiCaretDown /></button>
                    </div>
                </div>
            </div>
            <div className='flex-1 text-center  border-red-100'>${Number(data.productId.varient[data.varient].price) * Number(data.quantity)}</div>
        </div>
    )
}

export default CartItemCard