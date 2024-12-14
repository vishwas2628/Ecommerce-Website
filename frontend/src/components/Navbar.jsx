import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import {Link, NavLink } from "react-router-dom";
import { ShopContext} from "../context/ShopContext";

function Navbar() {
  const [visible, setVisible] =useState(false)
  const {setShowSearch,getCartCount,navigate, token, setToken , setCartItems} = useContext(ShopContext);

  const logout = ()=>{
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }
  return (
    <div className="flex items-center py-5 justify-between font-medium ">

       <Link to='/'> <img src={assets.clicknext2} alt="" className="w-36" /></Link>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to='/' className='flex flex-col items-center  gap-1'>
              <p>HOME</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to='/collection' className='flex flex-col items-center  gap-1 '>
              <p>COLLECTION</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to='/about' className='flex flex-col items-center  gap-1'>
              <p>ABOUT</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to='/contact' className='flex flex-col items-center  gap-1'>
              <p>CONTACT</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-6">
          <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

          <div className="group relative">
            <img onClick={()=> token ? null : navigate('/login')} className="w-5 cursor-pointer" src={assets.profile_icon} alt="" />
            {token && 
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
                <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>}
          </div>
          <Link to={'/cart'}  className="relative" >
             <img src={assets.cart_icon}  className=" w-5 min-w-5" alt="" />
             <p className="absolute right-[-5px] botto-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
          </Link>
          <img src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="" />


        </div>

    </div>
  ); 
}

export default Navbar;