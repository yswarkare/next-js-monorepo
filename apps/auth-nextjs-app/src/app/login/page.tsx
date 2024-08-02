"use client"

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from 'axios'
import ShimmerBtn from "@/components/ShimmerBtn";
import InputUI from "@/components/InputUI";

const LogInPage = () => {

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const onLogIn = () => {

  }

  return (
    <div className='flex flex-col gap-2 items-center justify-center min-h-screen py-2'>
      <h1 className="text-center text-white text-2xl">
        LogIn Page
      </h1>
      
      <label htmlFor="email" className="">Email</label>
      <input className="py-2 px-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="email" name="email" id="email" value={user.email} placeholder="email" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />

      <label htmlFor="password" className="">Password</label>
      <input className="py-2 px-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="password" name="password" id="password" value={user.password} placeholder="password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />

      <ShimmerBtn onClick={(e) => onLogIn()}>SignUp</ShimmerBtn>

      <div className="pt-4">
        <Link href='/signup' className="link link-accent link-hover">Visit SignUp Page</Link>
      </div>
    </div>
  );
}

export default LogInPage;
