import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { IoMdStar, IoIosHeartEmpty } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import { useParams } from "react-router-dom";
import { publicRequest } from "../requestMethod";
import { useDispatch } from "react-redux";
import { addCartProduct } from "../redux/cartRedux";
const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const onItemIncrement = () => {

    setQuantity(quantity + 1);
  }
  const onItemDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const { id } = useParams();
  const [product, setProduct] = useState({})
  const [varients, setVarients] = useState([])
  const [selectedVarient, setSelectedVarient] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)

  const fetchProduct = async (id) => {
    try {
      setLoading(true)
      const res = await publicRequest.get(`/product/${id}`)
      setProduct(res.data)
      setVarients(res.data.varient)
      setLoading(false)
      // console.table(res.data.varient)

    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }
  // const userId = localStorage.getItem("UserId")
  const handleAddToCart = async () => {

    try {
      const cartData = {
        productId: id,
        quantity: quantity,
        varient: selectedVarient
      }

      dispatch(addCartProduct(cartData))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchProduct(id)
  }, [id])

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const emptyStars = 5 - filledStars;
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<IoMdStar key={i} color="#FFAD33" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<IoMdStar key={filledStars + i} color="#BFBFBF" />);
    }

    return stars;
  };

  return (
    <main>
      <Navbar />
      {!loading && <div className=" flex justify-center">
        <section className="flex px-24 ">
          <section className=" m-2 flex-[1] flex gap-2" >
            <section className="flex flex-col ">
              {/* <figure className="border-1 bg-[#f5f5f5] w-[150px] h-[120px] flex justify-center items-center p-6">
                <img src="/assets/PsC1.png" alt="Psc1" />
              </figure>
              <figure className="border-1 bg-[#f5f5f5] w-[150px] h-[120px] flex justify-center items-center mt-2 p-6">
                <img src="/assets/Psc2.png" alt="Psc2" />
              </figure>
              <figure className="border-1 bg-[#f5f5f5] w-[150px] h-[120px] flex justify-center items-center mt-2 p-6">
                <img src="/assets/Psc3.png" alt="Psc3" />
              </figure> */}
              {product?.image?.map((data, index) => {
                return <figure onClick={() => setSelectedImage(index)} className=" cursor-pointer border-1 bg-[#f5f5f5] w-[150px] h-[120px] flex justify-center items-center mt-2 p-6">
                  <img src={data} alt="Psc4" />
                </figure>
              })}
            </section>
            <figure className="max-w-[500px] max-h-[600px] w-[500px] bg-[#f5f5f5] flex items-center justify-center">
              <img
                src={product?.image?.[selectedImage]}
                className="object-contain  w-[300px]"
                alt={product.name}
              />
            </figure>

          </section>
          <section className="flex-[1] m-2 ">
            {/* <h6 className="text-red-600 text-[10px] font-semibold uppercase ms-1 tracking-[2px] py-2">
              Recent Products
            </h6> */}

            <h1 className="text-2xl font-semibold py-2">
              {product.name}
            </h1>

            <section className="flex text-center items-center gap-2 py-1">
              <div className="flex ">
                {renderStars(product.rating)}
              </div>

              <div>
                <span className="text-sm  text-[#7F7F7F]">({product.totalReviews} reviews)</span>
              </div>
              <span>|</span>
              <span className="text-green-500 text-sm">In Stock</span>

            </section>

            <section className=" py-2">
              <span className="font-normal text-2xl">Rs. {varients[selectedVarient]?.price} </span>
              <span className="text-xs text-gray-400 mx-1">/</span>
              <span className="font-normal text-gray-400 text-xs ">
                <strike>$ 259.99</strike>
              </span>
            </section>

            <article className="py-2 pe-4">
              {/* <h5 className="text-xs font-semibold py-2">Details:</h5> */}
              <p className="text-sm text-justify  leading-5 font-normal ">
                {product.description}
              </p>
            </article>

            <div className="w-full border my-2 border-gray-400"></div>

            <section className="flex gap-4 items-center py-2">
              <span className="text-sm">Colors:</span>
              <div className="flex gap-2">
                <div className="rounded-full cursor-pointer p-[2px] border border-black flex justify-center items-center">
                  <div className=" bg-slate-500 w-4 h-4 rounded-full"></div>
                </div>
                <div className="rounded-full cursor-pointer p-[2px] hover:border border-black flex justify-center items-center">
                  <div className=" bg-red-500 w-4 h-4 rounded-full"></div>
                </div>

              </div>
            </section>
            <section className="flex gap-4 items-center py-2">
              <span className="text-sm">Varients:</span>
              <div className="flex gap-2">
                {product.varient?.map((data, index) => {
                  return <button onClick={() => setSelectedVarient(index)} className={`cursor-pointer rounded p-2 border  hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white border-black flex justify-center items-center ${selectedVarient === index ? ("bg-[#DB4444] border-[#DB4444] text-white") : ("")}`}>
                    {data.size}
                  </button>
                })}
                {/* <div className="cursor-pointer rounded p-2 border  hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white border-black flex justify-center items-center">
                  <span>16 + 256 GB</span>
                </div> */}
              </div>
            </section>

            <section className="py-2 flex gap-4">
              <section className="flex items-center gap-4 ">
                <span className="text-sm">Quantity: </span>
                <section className="flex rounded border">
                  <button className="h-10 px-2 border-e rounded-s text-center hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white " onClick={onItemDecrement}><FiMinus /></button>
                  <button className="h-10 px-4  text-center hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white">{quantity}</button>
                  <button className="h-10 px-3 rounded-e border-s text-center hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white" onClick={onItemIncrement}>+</button>
                </section>
              </section>
              <section className="flex gap-4">
                {/* <button className="uppercase custom-button">Whislist</button> */}
                <button onClick={handleAddToCart} className="uppercase text-xs rounded  border px-6 border-[#DB4444] bg-[#DB4444] text-white">Add TO CArt</button>
                <button className="rounded border p-2 hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white"><IoIosHeartEmpty size={24} /></button>
              </section>
            </section>


            <section className="border py-1">
              <section className="border-b flex p-2">
                <div className="p-2">
                  <TbTruckDelivery size={30} />
                </div>
                <div className="ms-2">
                  <p className="text-base font-medium">Free Delivery</p>
                  <p className=" text-xs font-medium">Free 30 Days Delivery Returns.</p>
                </div>
              </section>
              <section className="flex p-2">
                <div className="p-2">
                  <TfiReload size={28} />
                </div>
                <div className="ms-2">
                  <p className="text-base font-medium">Return Delivery</p>
                  <p className=" text-xs font-medium">Free 30 Days Delivery Returns.</p>
                </div>
              </section>
            </section>
          </section>
        </section>
      </div>}
    </main>
  );
};

export default Product;
