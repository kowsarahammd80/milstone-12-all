import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
// import { useNavigatio } from 'react-day-picker';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Sheard/Loading/Loading';
import CheckOutFrom from './CheckOutFrom';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {

  const booking = useLoaderData()


  const navigation = useNavigation();
  const { price, appointmentDate, slot, treatment } = booking

  if(navigation.state === "loading"){
    return <Loading></Loading>
  }

 

  return (
    <div>
      <h3 className='text-3xl '>payment for {treatment}</h3>
      <p className='text-xl'>Please pay <strong> ${price} </strong> for your appointment on {appointmentDate}</p>

      <div className='mt-10 w-80'>
        <Elements stripe={stripePromise}>
          <CheckOutFrom 
           booking = {booking}
          />
        </Elements>
      </div>

    </div>
  );

};

export default Payment;