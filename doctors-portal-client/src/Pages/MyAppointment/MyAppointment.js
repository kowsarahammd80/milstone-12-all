import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyAppointmentTabel from './MyAppointmentTabel';

const MyAppointment = () => {

  const { user } = useContext(AuthContext)

  const url = `https://doctors-portal-server-kowsarahammd80.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    }
  })



  return (
    <div>
      <h3 className='text-2xl'>My Appointments</h3>

      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>

            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>date</th>
              <th>Time</th>
              <th>Price</th>
            </tr>

          </thead>
          <tbody>

            {
              bookings.map((booking, index) => <MyAppointmentTabel
                key={index}

                booking={booking}

              ></MyAppointmentTabel>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;