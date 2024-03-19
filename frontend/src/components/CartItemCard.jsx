import React, { useState } from 'react'
import { PiCaretUpLight, PiCaretDown } from "react-icons/pi";
import { useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from '../redux/cartRedux';
import { MdDelete } from "react-icons/md";
const CartItemCard = ({ data, index }) => {
    const [itemCount, setItemCount] = useState(data.quantity);
    const dispatch = useDispatch()

    const onItemIncrement = () => {
        setItemCount(itemCount + 1);
        dispatch(updateProduct({ itemIdx: index, method: "ADD" }))
    }
    const onItemDecrement = () => {
        if (itemCount > 1) {
            setItemCount(itemCount - 1)
        }
        dispatch(updateProduct({ itemIdx: index, method: "DEC" }))
    }

    const deleteCartItem = () => {
        dispatch(deleteProduct({ itemIdx: index }))
    }
    return (
        <div className='flex px-8  py-4 items-center text-base shadow relative'>
            <MdDelete className='absolute top-3 right-3 text-red-500' fontSize={20} onClick={deleteCartItem} />
            <div className='flex-1 text-center  border-red-100 flex items-center gap-5 text-base'>
                <figure className='max-h-24 max-w-28'><img src={data?.productId?.image?.[0]} className='w-full h-full' alt="" /></figure>
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
            <div className='flex-1 text-center  border-red-100'>${Number(data?.productId?.varient?.[data?.varient]?.price) * Number(data?.quantity)}</div>
        </div>
    )
}

export default CartItemCard