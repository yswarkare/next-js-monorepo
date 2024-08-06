"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from 'axios'
import ShimmerBtn from "@/components/ShimmerBtn";
import InputUI from "@/components/daisyUi/InputUI";
import { toast } from 'react-hot-toast'
import DotLoader from "@/components/icons/DotLoader";

const initUser = {
  email: '',
  password: '',
  username: ''
}

const SignUpPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(initUser);
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [user, setUser] = useState(initUser)

  const onSignUp = async () => {
    try {
      setLoading(true)
      const res: any = await axios.post('/api/users/signup', user)
      console.log(res);
      router.push('/login')
      toast.success(res.message)
    } catch (error: any) {
      console.log(error);
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user]);

  return (
    <div className='flex flex-col gap-2 items-center justify-center min-h-screen py-2'>
      <h1 className="text-center text-white text-2xl">
        SignUp Page
      </h1>
      <label htmlFor="username" className="">Username</label>

      <InputUI type="username" id="username" position="right" onChange={(e) => { setUser({ ...user, username: e.target.value }) }} />

      <label htmlFor="email" className="">Email</label>

      <InputUI type="email" id="email" position="right" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />

      <label htmlFor="password" className="">Password</label>


      <InputUI type="password" id="password" position="right" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />

      <div className="relative mt-4">
        {loading && <DotLoader />}
        <ShimmerBtn disabled={buttonDisabled} onClick={(e) => onSignUp()}>{buttonDisabled ? 'No SignUp' : 'SignUp'}</ShimmerBtn>
      </div>

      {errors &&
        <ul>
          {Object.entries(errors).map(([key, value]) => value && (
            <li key={key}>
              <div>{key}</div>
              <div>{value}</div>
            </li>
          ))}
        </ul>
      }

      <div className="pt-4">
        <Link href='/login' className="link link-accent link-hover">Visit Login Page</Link>
      </div>
    </div>
  );
}

export default SignUpPage;
