import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CartItemCard from '../components/CartItemCard'
import { useDispatch, useSelector } from 'react-redux'
import { getCartProducts } from '../redux/cartRedux'

const Cart = () => {

   const cartProducts = useSelector((state) => state.cart.products)

  return (
    <section >
      <Navbar />
      <section className='px-24 py-12 flex flex-col gap-4'>
        <section >
          <div className='flex text-center justify-center items-center px-8 h-10 pb-0 shadow'>
            <div className='flex-1'>Product</div>
            <div className='flex-1'>Price</div>
            <div className='flex-1'>Quantity</div>
            <div className='flex-1'>Subtotal</div>
          </div>
        </section>
        <section>

          {cartProducts.map((data) => {
           return <CartItemCard data={data}/>
          })}
        </section>

      </section>
      <section className='flex px-24 '>
        <div className='flex flex-1 gap-4 h-fit'>
          <input type="text" placeholder='Coupon Code' className='border rounded px-2' />
          <button className='bg-[#DB4444] text-white p-2 rounded  px-8'>Apply Coupon</button>
        </div>
        <div className='flex-1'>
          <div className='w-[480px] border-[#000] border-2 h-52 rounded-lg'>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Cart 