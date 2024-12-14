import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from '../context/ShopContext'
import { assets } from "../assets/assets";

const Product = () => {
  const { productId } = useParams();
  const { products ,currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size , setSize] = useState('')

  

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);        
        return null;
      }
    });
  }

  useEffect(() => {
    fetchProductData();
    // console.log("Product ID:", productId);
    // console.log("Products:", products);
  }, [productId,products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img onClick={()=>setImage(item)}
                src={item}
                alt=""
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* ------- Product Info ----------*/}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <img src={assets.star_icon} className="w-3.5" alt="" />
            <p className="pl-2">{122}</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-4 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">{productData.sizes.map((item,index)=>(
              <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size? 'border-orange-500':''}`} key={index}>{item}</button>
            ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white px-3 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5"/>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% original product</p>
            <p> cash on delivery on this product</p>
            <p> easy refund and exchange policy within 7 days </p>
          </div>
        </div>
      </div>
      {/* Review section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-6 py-3 text-sm">Review(122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">      
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea animi dignissimos natus accusantium maiores quia non dolorum ab, incidunt consequuntur, suscipit possimus deleniti sit? Recusandae ipsa, autem repellat reiciendis sint eos sit dignissimos illo modi iusto, tenetur voluptatem officia vitae?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea animi dignissimos natus accusantium maiores quia non dolorum ab, incidunt consequuntur, suscipit possimus deleniti sit? Recusandae ipsa, autem repellat reiciendis sint eos sit dignissimos illo modi iusto, tenetur voluptatem officia vitae?</p>
        </div>
      </div>

    </div>
  ) : (
    <div className="text-center py-10">Product not found</div>
  );
};


export default Product;
