import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointBanner = ({selectedDate, setSelectedDate}) => {
   
  

  return (
    <div className="hero my-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl " alt='' />
        <div className=''>
           <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
           />
        </div>
      </div>
    </div>

  );
};

export default AppointBanner;