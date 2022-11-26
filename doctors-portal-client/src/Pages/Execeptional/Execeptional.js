import React from 'react';
import treatment from '../../assets/images/treatment.png'

const Execeptional = () => {
  return (
    <div className="hero mt-12 mb-5">

      <div className="hero-content flex-col lg:flex-row">

        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl lg:w-1/2 " alt='' />

        <div className='lg:w-1/2 m-10'>

          <h1 className="text-4xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>

          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

          <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>

        </div>

      </div>

    </div>
  );
};

export default Execeptional;