import React from 'react';
import img1 from '../../../assets/image/1.jpg'
import img2 from '../../../assets/image/2.jpg'
import img3 from '../../../assets/back/1.jpg'
import img4 from '../../../assets/image/3.jpg'
import img5 from '../../../assets/image/4.jpg'
const Discover = () => {
    return (
        <>
            <div className="hero my-20 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative w-1/2'>
                        <img src={img1} alt="" className="w-4/5 h-full rounded-lg shadow-2xl sm:w-96" />
                        <img src={img2} alt="" className="absolute right-5 top-1/2 w-3/5   rounded-lg shadow-2xl sm:w-96" />
                    </div>
                    <div className='w-1/2'>

                        <h1 className="my-5   font-bold md:text-2xl sm:text-sm md:my-10  ">
                            Traveling around,<br /> from place to place</h1>
                        <p className="py-4">A long journey including the visiting of a number of places in sequence, especially with an organized group led by a guide. </p>
                        <p className="py-2">one of tours are study purpose or can be helping events or family celebrating events. tour is kind of physical change in some favorite experience. </p>
                        <button className="btn btn-outline justify-center  mt-5  text-black">Get More Info</button>
                    </div>
                </div>
            </div>



            <div className="w-full h-[500px] pt-20 relative  ">
                <img
                    className="w-full h-full object-cover "
                    src={img3}
                    alt=""
                />
                <div className="w-full h-full absolute top-0 flex justify-center items-center">
                    <h1 className="text-4xl text-white font-bold px-5 py-2 border hover:text-amber-400 ">
                        View Details
                    </h1>
                </div>
            </div>



 









            <div className='grid  gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 container mx-auto mt-20 px-3.5'>
            <div className="card bg-none  selection: info w-full h-full" >
                  <img src={img4} alt="" />
                </div>

                <div className="card bg-none  info text-center" >
                    
                    <h2 className="md:text-3xl sm:text-base ">
                    Saint Martin Island
                    </h2>
                    <p className="md:text-base sm:text-xs mt-3">
                    Saint Martin Island has become a tourist spot, and Eight shipping liners run daily trips to the island. Nowadays, 
                    tourist has become friendly to Eco tourism. Consequently, eco friendly resort- Josnaloy Beach Resort has become popular to them. 
                    </p>
                    <button className="btn btn-outline justify-center mb-3 mt-5 mx-32  text-black">Booking Now</button>
                </div>
                <div className="card bg-none  info w-full h-full" >
                  <img src={img5} alt="" />
                </div>

            </div>


        </>
    );
};

export default Discover;