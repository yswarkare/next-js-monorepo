"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from 'axios'
import ShimmerBtn from "@/components/ShimmerBtn";
import InputUI from "@/components/daisyUi/InputUI";
import { toast } from "react-hot-toast";
import DotLoader from "@/components/icons/DotLoader";
import { toastOptions } from "@/data/toast-options";

const initUser = {
  email: '',
  password: '',
}

const LogInPage = () => {
  const router = useRouter();
  const [user, setUser] = useState(initUser)
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(initUser);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onLogIn = async () => {
    try {
      setLoading(true);
      const res = await axios.post('/api/users/login', user);
      console.log(res);
      toast.success('login success!', toastOptions)
      router.push('/profile')
    } catch (error: any) {
      console.log(error)
      if (error?.message) {
        toast.error(error.message, toastOptions)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  return (
    <div className='flex flex-col gap-2 items-center justify-center min-h-screen py-2'>
      <h1 className="text-center text-white text-2xl">
        LogIn Page
      </h1>

      <label htmlFor="email" className="">Email</label>

      <InputUI type="email" id="email" position="left" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />

      <label htmlFor="password" className="">Password</label>

      <InputUI type="password" id="password" position="left" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />

      <div className="relative mt-4">
        {loading && <DotLoader />}
        <ShimmerBtn onClick={(e) => onLogIn()} disabled={buttonDisabled}>LogIn</ShimmerBtn>
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
        <Link href='/signup' className="link link-accent link-hover">Visit SignUp Page</Link>
      </div>
    </div>
  );
}

export default LogInPage;
