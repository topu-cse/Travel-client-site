// import React from 'react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// // import { BsPerson } from 'react-icons/bs';
// // import { BiSearch } from 'react-icons/bi';
// import { AiOutlineClose } from 'react-icons/ai';
// import { HiOutlineMenuAlt4 } from 'react-icons/hi';
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaPinterest,
//   FaYoutube,
// } from 'react-icons/fa';

const Navber = () => {
   
        
  // const [nav, setNav] = useState(false);
  // const [logo, setLogo] = useState(false)
  // const handleNav = () => {
  //   setNav(!nav);
  //   setLogo(!logo)
  // };
     

  return (
    // <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white '>
    //   <div>
    //     <Link to={'/'}><h1   className='text-2xl '>Mystic Travel</h1></Link>
    //   </div>
    //   <ul className='hidden md:flex justify-center items-center'>
          
    //   <li className="text-white  hover:text-amber-400 px-3"> <Link to={'/'}>Home</Link></li>
    //     <li className="text-white  hover:text-amber-400 px-3"> <Link to={'/about'}>About</Link></li>
    //     <li className="text-white  hover:text-amber-400 px-3"> <Link to={'/contact'}>Contact</Link></li>
    //     <li className="text-white  hover:text-amber-400 px-3"> <Link to={'login'}>Login</Link></li>
    //   </ul>
      

    //   {/* Hamburger */}
    //   <div onClick={handleNav} className='md:hidden z-10'>
    //     {nav ? <AiOutlineClose className='text-white ' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
    //   </div>

    //   {/* Mobile menu dropdown */}
    //   <div onClick={handleNav} className={nav ? 'absolute text-white  left-0 top-0 w-full px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
    //     <ul className='mt-10'>
          
          
    //   <li className="text-white  hover:text-amber-400"> <Link to={'/'}>Home</Link></li>
    //     <li className="text-white hover:text-amber-400"> <Link to={'/about'}>About</Link></li>
    //     <li className="text-white    hover:text-amber-400"> <Link to={'/contact'}>Contact</Link></li>
    //     <li className="text-white  hover:text-amber-400"> <Link to={'login'}>Login</Link></li>
        
    //       <div className='flex justify-between my-6 text-xl'>
    //         <FaFacebook className='icon' />
    //         <FaTwitter className='icon' />
    //         <FaYoutube className='icon' />
    //         <FaPinterest className='icon' />
    //         <FaInstagram className='icon' />
    //       </div>
    //     </ul>
    //   </div>
    // </div>
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
<div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className=" lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
        
        <li className="text-white  hover:text-amber-400"> <Link to={'/'}>Home</Link></li>
       <li className="text-white hover:text-amber-400"> <Link to={'/about'}>About</Link></li>
        <li className="text-white    hover:text-amber-400"> <Link to={'/contact'}>Contact</Link></li>
        <li className="text-white  hover:text-amber-400"> <Link to={'login'}>Login</Link></li>
       </ul>
    </div>
    <Link className="p-2 ml-5 md:text-center  normal-case text-xl text-white hover:text-amber-400" to={'/'}>Mystic Travel</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
   
    <ul className="menu menu-horizontal px-1">
     
       <li className="text-white  hover:text-amber-400"> <Link to={'/'}>Home</Link></li>
         <li className="text-white hover:text-amber-400"> <Link to={'/about'}>About</Link></li>
         <li className="text-white    hover:text-amber-400"> <Link to={'/contact'}>Contact</Link></li>
         <li className="text-white  hover:text-amber-400"> <Link to={'login'}>Login</Link></li>
    </ul>
  </div>
  
</div>




          

        </div>
       
    );
};

export default Navber;