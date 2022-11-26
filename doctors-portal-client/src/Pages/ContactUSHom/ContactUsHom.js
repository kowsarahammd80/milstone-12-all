import React from 'react';
import bg from '../../assets/images/appointment.png'

const ContactUsHom = () => {

  return (

    <section className='mt-20 mb-8'
      style={{
        background: `url(${bg})`
      }}
    >
      <div className='p-4'>
        <div className='text-center'>
          <h4 className='text-lg text-primary font-bold'>Contact Us</h4>
          <h2 className='text-4xl text-white'>Stay connected with us</h2>
        </div>
        <div className="hero">
          <div className="hero-content ">
            <div className="text-center lg:text-left">

            </div>
            <div className=" flex-shrink-0 w-full shadow-2xl ">
              <div className="card-body p-6">
                <div className="form-control">

                  <input type="text" placeholder="email" className="input input-bordered " />
                </div>
                <div className="form-control">

                  <input type="text" placeholder="subject" className="input input-bordered" />


                  <textarea className="textarea w-full textarea-bordered h-24 p-3 mt-3" placeholder="massage"></textarea>


                </div>
                <div className="form-control mt-6 ">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
  
};

export default ContactUsHom;