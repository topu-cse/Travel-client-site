import React from 'react';
import img1 from '../../../assets/serviceimg/s1.svg'
import img2 from '../../../assets/serviceimg/s2.svg'
import img3 from '../../../assets/serviceimg/s3.svg'
import Service from './Service';

const Services = () => {
    const sevices=[
        {
            id:1,
            img:img1,
            tittle:"Best Price Guarantee",
            info:'you can be sure of booking at the best rate.'
        },
        {
            id:2,
            img:img2,
            tittle:"Easy & Quick Booking",
            info:'Find out more and make your booking at timesplus.'
        },
        {
            id:3,
            img:img3,
            tittle:"Customer Care 24/7",
            info:'This is the support that is available 24 hours a day .'
        },

    ]
    return (
       
        <div className='mt-16 mx-2.5'>
             <div className='grid  gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto mt-16'>
             {
               sevices.map(service=><Service 
               key={service.id}
               service={service}></Service>) 
            }
             </div>
        </div>
    );
};

export default Services;