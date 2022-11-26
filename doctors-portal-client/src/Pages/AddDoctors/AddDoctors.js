import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../Sheard/Loading/Loading';

const AddDoctors = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const imgeHostingKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate()

  const { data: specialties, isLoading } = useQuery({
    queryKey: ['specialty'],
    queryFn: async () => {
      const res = await fetch('https://doctors-portal-server-kowsarahammd80.vercel.app/appointmentSpecialty');
      const data = await res.json();
      return data;
    }
  })

  const handleAddDoctor = data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imgeHostingKey}`
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success) {

          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          }

          //save doctor information to the database 
          fetch('https://doctors-portal-server-kowsarahammd80.vercel.app/doctors', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
          })
            .then(res => res.json())
            .then(result => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
            })
          navigate('/dashboard/managedoctors')

        }
      })
  }

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className='w-96 p-7'>
      <form onSubmit={handleSubmit(handleAddDoctor)}>

        <div className="form-control w-full max-w-xs">

          <label className="label"> <span className="label-text">Name</span></label>

          <input type='text' {...register("name", { required: "Your name is required" })} className="input input-bordered w-full max-w-xs" />

          {errors.name && <p role="alert" className='text-red-400'>{errors.name?.message}</p>}

        </div>

        <div className="form-control w-full max-w-xs">

          <label className="label"> <span className="label-text">Email</span></label>

          <input type='email' {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />

          {errors.email && <p role="alert" className='text-red-400'>{errors.email?.message}</p>}

        </div>

        <div className="form-control w-full max-w-xs">

          <label className="label"> <span className="label-text">Specialty</span></label>

          <select
            {...register('specialty')}
            className="select select-bordered w-full max-w-xs">
            <option disabled selected>Please Select a Specialty</option>

            {
              specialties?.map(specialty => <option
                key={specialty._id}
                specialty={specialty}
              >{specialty.name}</option>)
            }

          </select>

        </div>

        <div className="form-control w-full max-w-xs">

          <label className="label"> <span className="label-text">photo</span></label>

          <input type='file' {...register("image", { required: "Your photo is required" })} className="input input-bordered w-full max-w-xs" />

          {errors.img && <p role="alert" className='text-red-400'>{errors.img?.message}</p>}

        </div>

        <input className='btn btn-accent w-full mt-6' value='Add Doctor' type="submit" />

        {/* {

          signUpError &&

          <p className='text-red-400'>{signUpError}</p>

        } */}

      </form>
    </div>
  );
};

export default AddDoctors;