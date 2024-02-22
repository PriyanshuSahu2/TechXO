import React from 'react'
import Navbar from '../components/Navbar'
import CartItemCard from '../components/CartItemCard'

const Cart = () => {
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
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
        </section>

      </section>
    </section>
  )
}

export default Cart 