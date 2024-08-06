'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link';
import DotLoader from '@/components/icons/DotLoader';

export default function VerifyEmailPage() {
  const [token, setToken] = useState('');
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const verifyUserEmail = async () => {
    try {
      setLoading(true)
      const res = await axios.post('/api/users/verifyemail', { token })
      console.log(res)
      setVerified(true)
    } catch (error) {
      console.log(error);
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const urlToken = window.location.search.split('=')[1];
    setToken(urlToken || '')
  }, []);

  useEffect(() => {
    if (token?.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">verify email</h1>
      <h2 className='p-2 bg-orange-500'>{token ? `${token}` : 'no token'}</h2>
      {
        loading ?
          <DotLoader />
          :
          ""
      }
      {
        verified && (
          <div>
            <h2 className="text-2xl">Email Verified</h2>
            <Link href={'/login'}>LogIn Page</Link>
          </div>
        )
      }
      {
        error && (
          <div>
            <h2 className="text-2xl bg-red-500 text-black">Error</h2>
          </div>
        )
      }

    </div>
  )
}