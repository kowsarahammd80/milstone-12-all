import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useToken from '../../Hooks/useToken';

const Login = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const { logIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('')

  const [loginUserEmail, setLoginUserEmail] = useState('')

  const [token] = useToken(loginUserEmail)

  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  if (token) {
    navigate(from, { replace: true })
  }

  const handleLogin = (data) => {

    console.log(data);
    setLoginError('');
    logIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user)
        setLoginUserEmail(data.email)
      })
      .catch(error => {
        console.error(error.message)
        setLoginError(error.message)
      })

  }

  return (

    <div className='h-[800px] flex justify-center items-center'>

      <div className='w-96 p-7'>

        <h2 className='text-xl text-center mb-6 font-semibold'>Login !</h2>

        <form onSubmit={handleSubmit(handleLogin)}>

          <div className="form-control w-full max-w-xs">

            <label className="label"> <span className="label-text">Email</span></label>

            <input type='text' {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />

            {errors.email && <p role="alert" className='text-red-400'>{errors.email?.message}</p>}

          </div>

          <div className="form-control w-full max-w-xs">

            <label className="label"> <span className="label-text">Password</span></label>

            <input type='password' {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password must be 6 characters' } })} className="input input-bordered w-full max-w-xs" />

            {errors.password && <p role="alert" className='text-red-400'>{errors.password?.message}</p>}

            <label className="label"> <span className="label-text">Forget Password?</span></label>

          </div>

          <div>
            {
              loginError && <p className='text-red-600 mb-2'>{loginError}</p>
            }
          </div>

          <input className='btn btn-accent w-full' value='login' type="submit" />
        </form>

        <p className='mt-2'>New to Doctors Portal <Link className='text-secondary font-semibold' to='/signup'>Create a new account</Link> </p>

        <div className="divider">OR</div>

        <button className='btn bnt-outline w-full'>CONTINUE WITHE GOOGLE</button>

      </div>

    </div>

  );

};

export default Login;