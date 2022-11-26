import React from 'react';
import Testimonial from '../../../Testimonial/Testimonial';
import ContactUsHom from '../../ContactUSHom/ContactUsHom';
import Execeptional from '../../Execeptional/Execeptional';
import HomeAppointment from '../../HomeAppointment/HomeAppointment';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';

const Home = () => {
  return (
    <div className='mx-5'>
      <Banner></Banner>
      <InfoCard></InfoCard>
      <Services></Services>
      <Execeptional></Execeptional>
      <HomeAppointment></HomeAppointment>
      <Testimonial></Testimonial>
      <ContactUsHom></ContactUsHom>
    </div>
  );
};

export default Home;