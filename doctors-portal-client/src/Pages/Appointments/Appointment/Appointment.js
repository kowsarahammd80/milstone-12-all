import React, { useState } from 'react';
import AppointBanner from '../AppointBanner/AppointBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <AppointBanner 
       selectedDate={selectedDate}
       setSelectedDate={setSelectedDate}
      ></AppointBanner>
      <AvailableAppointments
        selectedDate={selectedDate}
      />
    </div>
  );

};

export default Appointment;