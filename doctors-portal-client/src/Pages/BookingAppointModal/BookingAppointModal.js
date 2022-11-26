import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const BookingAppointModal = ({ treatment, selectedDate, setTreatment, refetch }) => {

  const { name: treatemantName, slots, price } = treatment;

  const date = format(selectedDate, 'PP')

  const { user } = useContext(AuthContext)

  const handleBooking = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slots = form.slots.value;
    const date = form.date.value;

    const booking = {

      appointmentDate: date,
      treatment: treatemantName,
      patient: name,
      slots,
      email,
      phone,
      price

    }

    fetch('https://doctors-portal-server-kowsarahammd80.vercel.app/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          toast.success('Booking Confirm');
          refetch();
        }
        else {
          toast.error(data.message);
        }
        setTreatment(null)

      })





  }

  return (
    <>
      <input type="checkbox" id="Booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{treatemantName}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-10'>
            <input name='date' type="text" placeholder="Type here" disabled Value={date} className="input w-full " />
            <select name='slots' className="select select-bordered w-full ">

              {
                slots.map((slot, i) => <option key={i} value={slot} selected>{slot}</option>)
              }

            </select>
            <input name='name' type="text" defaultValue={user?.displayName} readOnly placeholder="your name" className="input w-full input-bordered" />
            <input name='email' type="text" defaultValue={user?.email} disabled placeholder="email address" className="input w-full input-bordered" />
            <input name='phone' type="text" placeholder="phone number" className="input w-full input-bordered" />

            <input type="submit" value="Submit" className='w-full btn btn-accent' />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingAppointModal;