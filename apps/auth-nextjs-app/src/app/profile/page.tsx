'use client'

import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'
import toast from "react-hot-toast";
import { toastOptions } from "@/data/toast-options";
import Link from "next/link";


const ProfilePage = () => {
  const router = useRouter()
  const [data, setData] = useState('')

  const logOutUser = async () => {
    try {
      const res = await axios.get('/api/users/logout')
      console.log(res)
      toast.success('Logged out successfully!', toastOptions)
      router.push('/login')
    } catch (error: any) {
      console.log(error);
      toast.error(error.message, toastOptions)
    }
  }

  const getUserDetails = async () => {
    try {
      const res = await axios.get('/api/users/user')
      setData(res.data.user._id)
    } catch (error: any) {
      console.log(error)
      toast.error(error.message, toastOptions)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      Profile Page
      <hr />
      <h3>user details</h3>
      <p>{data === '' ? 'Nothing' : <Link href={`/profile/${data}`}>User Page</Link>}</p>
      <hr />
      <button className="btn btn-info" title="get-user-data" type="button" onClick={() => getUserDetails()}>Get User Details</button>
      <hr />
      <button className="btn btn-primary" title="log-out" type="button" onClick={() => logOutUser()}>Log Out</button>
    </div>
  );
}

export default ProfilePage;
