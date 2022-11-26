import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ComfirmationModal from '../Sheard/ComfirmationModal/ComfirmationModal';
import Loading from '../Sheard/Loading/Loading';



const ManageDoctors = () => {

  const [deleteingDoctorModal, setDeleteingDoctorModal] = useState(null)

  const closeModel = () => {

    setDeleteingDoctorModal(null)

  };


  const { data: doctors, isLoading, refetch } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      try {
        const res = await fetch('https://doctors-portal-server-kowsarahammd80.vercel.app/doctors', {
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        });
        const data = await res.json();
        return data;
      }
      catch (error) {

      }
    }
  });

  const handleDeletingDoctor = (doctor) => {
    fetch(`https://doctors-portal-server-kowsarahammd80.vercel.app/doctors/${doctor._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Doctor ${doctor.name} deleted successfully`)
        }

      })

  }


  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h3>{doctors?.length}</h3>

      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              doctors?.map((doctor, i) => <tr>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={doctor.image} alt='' />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label onClick={() => setDeleteingDoctorModal(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>

                </td>
              </tr>)
            }

          </tbody>
        </table>
      </div>

      {
        deleteingDoctorModal &&
        <ComfirmationModal
          title={`Are you sure you want to delete`}
          message={`If you delete ${deleteingDoctorModal.name}. It cannot be undone`}
          successAction={handleDeletingDoctor}
          modalData={deleteingDoctorModal}
          closeModel={closeModel}
          successButtonName='Delete'
        ></ComfirmationModal>
      }

    </div>
  );

};

export default ManageDoctors;