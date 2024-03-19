import React from 'react'
import Navbar from '../components/Navbar'
import CartItemCard from '../components/CartItemCard'
import { useSelector } from 'react-redux'


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
        <section className='flex flex-col gap-4'>

          {cartProducts.map((data, index) => {
            return <CartItemCard data={data} index={index} key={data._id} />
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