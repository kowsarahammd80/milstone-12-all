
import React from 'react';

const AppointmentOptionCard = ({ appointmentOption, setTreatment }) => {

  const { name, slots, price } = appointmentOption;

  

  return (

    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-xl  text-secondary  text-center">{name}</h2>
        <p className='text-center'>{slots.length > 0? slots[0] : 'Try another day'}</p>
        <p>{slots.length} {slots.length > 1 ? 'spaces' : "space"} available</p>
        <p>Price ${price}</p>
        <div className="card-actions justify-center">
          <label onClick={() => setTreatment(appointmentOption)} appointmentOption={appointmentOption} htmlFor="Booking-modal" className="btn btn-primary text-white " disabled={slots.length === 0}>Booking Appointment</label>
         
        </div>
      </div>
    </div>

  );

};

export default AppointmentOptionCard;