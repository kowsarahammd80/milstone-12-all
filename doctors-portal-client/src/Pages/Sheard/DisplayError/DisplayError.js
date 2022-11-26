import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const DisplayError = () => {

  const {logOut} = useContext(AuthContext)
   
  const error = useRouteError();
   
  const navigate = useNavigate()

  const handleLogOut = () => {
    logOut()
      .then(result => {
        navigate('/login')
       })
      .catch(e => console.error(e))
  }

  return (
    <div>
       <p className='text-red-500'>Something went wrong</p>
       <p className='text-red-400'>{error.statusText || error.message} </p>
       <h4 className='text-3xl'>Please <button onClick={handleLogOut} className='btn btn-outline'>Log OUt</button> </h4>
    </div>
  );
};

export default DisplayError;