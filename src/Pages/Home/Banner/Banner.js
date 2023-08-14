import React from 'react';

import backvideo from '../../../assets/back/backvideo.mp4'

const Banner = () => {
    return (
        <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={backvideo}
        autoPlay
        loop
        muted
      />
      {/* <div className='absolute w-full h-full top-0 left-0  '></div> */}
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1 className='text-2xl'>Find your special tour today</h1>
        <h2 className='py-4 text-4xl'>With Mystic Travel</h2>
       
      </div>
      <div className=' absolute top-0 w-full items-center mt-20 h-full flex flex-col justify-center text-center   p-4'>
        <button className="btn btn-outline justify-center px-11 text-white">Default</button>
        </div>
    </div>
    );
};

export default Banner;