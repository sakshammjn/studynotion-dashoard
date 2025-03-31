import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/signup.png'

const Signup = ({setisLoggedIn}) => {
  return (
    <div>
      <Template
        title="Join the million learning to code in StudyNotion for free!"
        desc1="Build skills for today, tomorrow and beyond!"
        desc2="Education to future-proof your career"
        image={signupImg}
        formtype="signup"
        setisLoggedIn={setisLoggedIn}
      />
    </div>
  )
}

export default Signup
