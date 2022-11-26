import React from 'react';

const AllUserTable = ({user, handleMakeAdmin}) => {
   
  const { email, name} = user;

  
   
  return (
    
      <tr>
        <th></th>
        <td>{name}</td>
        <td>{email}</td>
        <td><button onClick= {() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button></td>
        <td><button className='btn btn-xs btn-accent'>Delete</button></td>
      </tr>
   
  );
};

export default AllUserTable;