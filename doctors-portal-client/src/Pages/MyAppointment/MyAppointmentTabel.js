import React from 'react';
import { Link } from 'react-router-dom';

const MyAppointmentTabel = ({booking}) => {

  const {patient, treatment, appointmentDate, slots, price } = booking
        
  return (

    <tr>
      <th></th>
      <td>{patient}</td>
      <td>{treatment}</td>
      <td>{appointmentDate}</td>
      <td>{slots}</td>
      <td>

        {
          booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
           <button className='btn btn-primary'>Pay</button>
          </Link>
        }
        {
          booking.price && booking.paid && <span className='text-green-500'>Paid</span>
        }

      </td>
    </tr>

  );

};

export default MyAppointmentTabel;