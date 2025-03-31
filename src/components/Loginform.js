import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';

const Loginform = ({setisLoggedIn}) => {
    const navigate = useNavigate();

    const [formData, setformData] = useState({
        email : "",
        password : ""
    });

    const [showPassword, setshowPassword] = useState(false);

    function changeHandler(event) {
        setformData ((prevData) => {
            return {
                ...prevData,
                [event.target.name] : event.target.value 
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        setisLoggedIn(true);
        toast.success('Logged In');
        console.log(formData);
        navigate('/dashboard');
    }
            
  return (
      <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label htmlFor='email' className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>

            <input
             required
             type='email'
             name='email'
             id='email'
             value={formData.email}
             placeholder='Enter email address'
             onChange={changeHandler}
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>

        <label htmlFor='password' className='w-full relative'>
            <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
        
            <input
             required
             type= {showPassword ? ('text') : ('password')}
             name='password'
             id='password'
             value={formData.password}
             placeholder='Enter Password'
             onChange={changeHandler}
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

            <span
             className='absolute right-3 top-[40px]  cursor-pointer'
             onClick={() => setshowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible size={24} fill='#AFB2BF'/>) : (<AiOutlineEye size={24} fill='#AFB2BF'/>)}
            </span>

            <Link to='#'>
                <p className='text-xs mt-1 max-w-max text-blue-100 ml-auto'>Forgot Password</p>
            </Link>
        </label>



        <button
         className='w-full flex justify-center items-center rounded-[8px] font-medium bg-yellow-50 text-richblack-900 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
         Sign In
        </button>
      </form>
  )
}

export default Loginform
