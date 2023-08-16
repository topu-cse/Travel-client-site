import React from 'react';

const Service = ({service}) => {
    const {img,tittle,info}=service;
    return (
        <div className="card bg-none  hover:shadow-xl">
        <figure   >
            <img  src={img} alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{tittle}</h2>
           
            <p>{info}</p>
        </div>
    </div>
    );
};

export default Service;