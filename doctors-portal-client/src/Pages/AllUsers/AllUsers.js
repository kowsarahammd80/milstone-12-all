import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import AllUserTable from '../AllUserTable/AllUserTable';

const AllUsers = () => {

  const { data: users = [], refetch } = useQuery({

    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(`https://doctors-portal-server-kowsarahammd80.vercel.app/users`);
      const data = await res.json();
      return data;
    }

  })

  const handleMakeAdmin = (id) => {
    fetch(`https://doctors-portal-server-kowsarahammd80.vercel.app/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Make admin successful.')
          refetch()
        }
      })

  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>

            {/* {
             users.map((user, index) => <AllUserTable key={index} 
              user={user} 
              handleMakeAdmin={handleMakeAdmin}
             ></AllUserTable>)
           } */}

            {
              users.map((user, index) => <tr>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{
                  user?.role !== 'admin' &&
                  <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>

                }</td>
                <td><button className='btn btn-xs btn-accent'>Delete</button></td>
              </tr>
              )
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;  