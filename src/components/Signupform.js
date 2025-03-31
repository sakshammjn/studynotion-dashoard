import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const Signupform = ({setisLoggedIn}) => {
    const navigate = useNavigate();

    const [formData, setformData] = useState({
        fName : '',
        lName : '',
        email : '',
        password : '',
        confirmPassword : ''
    });

    const [showPassword, setshowPassword] = useState(false);
    const [showConfirmedPassword, setshowConfirmedPassword] = useState(false);
    const [accountType, setaccountType] = useState('student');

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
         if (formData.password != formData.confirmPassword) {
            toast.error('Password dont match');
            return;
         }

         setisLoggedIn(true);
         toast.success('Account Created')

         const accountData = {
            ...formData
         }

         const finalData = {
            ...accountData,
            accountType
         }

         console.log("printing account data :")
         console.log(finalData)

         navigate('/dashboard')
    }

  return (
    <div className=''>

      {/* student instructor tab */}
      <div
       className='flex bg-richblack-800 p-1 gap-z-1 my-6 rounded-full max-w-max '>
        <button
         onClick={() => setaccountType('student')}
         className={`${accountType === 'student'
         ? "bg-richblack-900 text-richblack-5"
         : "bg-transparent text-richblack-200"
         }  py-2 px-5 rounded-full transition-all duration-200`}>
         Student
        </button>

        <button
         onClick={() => setaccountType('instructor')}
         className={`${accountType === 'instructor'
         ? "bg-richblack-900 text-richblack-5"
         : "bg-transparent text-richblack-200"
         }  py-2 px-5 rounded-full transition-all duration-200`}>
         Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>

      {/* first name and last name */}
        <div className='flex justify-between'>
            <label>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                 First Name<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type='text'
                name='fName'
                onChange={changeHandler}
                placeholder='Enter First Name'
                value={formData.fName}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>
            <label>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type='text'
                name='lName'
                onChange={changeHandler}
                placeholder='Enter Last Name'
                value={formData.lName}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>
        </div>

        {/* email address */}
        <label>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-4'>Email Address<sup className='text-pink-200'>*</sup></p>
            <input
                required
                type='email'
                name='email'
                onChange={changeHandler}
                placeholder='Enter Email Address'
                value={formData.email}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>

        {/* create and confirm password */}
        <div className='flex justify-between'>
            <label className='relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-4'>Create Password<sup className='text-pink-200'>*</sup></p>
                <input
                    required
                    type= {showPassword ? ('text') : ('password')}
                    name='password'
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    value={formData.password}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />

                <span
                 className='absolute right-3 top-[55px] cursor-pointer'
                 onClick={() => setshowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible size={24} fill='#AFB2BF'/>) : (<AiOutlineEye size={24} fill='#AFB2BF'/>)}
                </span>
            </label>

            <label className='relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-4'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                <input
                    required
                    type= {showConfirmedPassword ? ('text') : ('password')}
                    name='confirmPassword'
                    onChange={changeHandler}
                    placeholder='Confrim Password'
                    value={formData.confirmPassword}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />

                <span
                 className='absolute right-3 top-[55px] cursor-pointer'
                 onClick={() => setshowConfirmedPassword((prev) => !prev)}>
                    {showConfirmedPassword ? (<AiOutlineEyeInvisible size={24} fill='#AFB2BF'/>) : (<AiOutlineEye size={24} fill='#AFB2BF'/>)}
                </span>
            </label>
        </div>
        
        <button
         className='w-full flex justify-center items-center rounded-[8px] font-medium bg-yellow-50 text-richblack-900 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
         Create Account
        </button>
      </form>
    </div>
  )
}

export default Signupform
