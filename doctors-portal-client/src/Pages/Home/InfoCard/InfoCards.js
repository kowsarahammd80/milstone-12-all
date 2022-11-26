import React from 'react';

const InfoCards = ({card}) => {
   
  const {name, description, icon, bgClass} = card

  return (
    <div className={`card md:card-side bg-base-100 shadow-xl ${bgClass} p-4 text-white mt-6`} >
      <figure><img src={icon} alt="Movie" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
         
        </div>
      </div>
    </div>
  );
};

export default InfoCards;