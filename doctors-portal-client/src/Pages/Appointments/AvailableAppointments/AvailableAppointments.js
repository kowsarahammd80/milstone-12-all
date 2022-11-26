import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingAppointModal from '../../BookingAppointModal/BookingAppointModal';
import Loading from '../../Sheard/Loading/Loading';
import AppointmentOptionCard from '../AppointmentOptionCard/AppointmentOptionCard';

const AvailableAppointments = ({ selectedDate }) => {

  // const [appointmentOptions, setAppointmentOptions] = useState([])
  const [treatment, setTreatment] = useState(null);

  // const {data: appointmentOptions = []} = useQuery({
  //   queryKey: ['appointmentOptions'],
  //   queryFn: () => fetch('https://doctors-portal-server-kowsarahammd80.vercel.app/appointmentOptions')
  //     .then(res => res.json())
  // })

  const date = format(selectedDate, 'PP');

  const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
    queryKey: ['appointmentOptions', date],
    queryFn: async () => {
      const res = await fetch(`https://doctors-portal-server-kowsarahammd80.vercel.app/appointmentOptions?date=${date}`);
      const data = await res.json();
      return data;
    }
  });

  if (isLoading) {
    return <Loading />
  }

  // useEffect(() => {
  //   fetch('https://doctors-portal-server-kowsarahammd80.vercel.app/appointmentOptions')
  //     .then(res => res.json())
  //     .then(data => setAppointmentOptions(data))
  // }, [])

  return (
    <section className='mt-16'>
      <p className='text-center text-secondary font-bold'>Available Appointments : {format(selectedDate, 'PP')}</p>

      <div className='grid grid-clos-1 lg:grid-cols-3 md:grid-cols-2 gap-4 my-10'>

        {
          appointmentOptions.map(appointmentOption => <AppointmentOptionCard
            key={appointmentOption._id}
            appointmentOption={appointmentOption}
            setTreatment={setTreatment}
          ></AppointmentOptionCard>)
        }

      </div>

      {
        treatment &&
        <BookingAppointModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingAppointModal>

      }


    </section>
  );
};

export default AvailableAppointments;