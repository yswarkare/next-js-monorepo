'use client'

import { useEffect } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";

const headerItems = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Profile',
    path: '/profile',
  },
  {
    label: 'Sign Up',
    path: '/signup',
  },
  {
    label: 'Log In',
    path: '/login',
  },
  {
    label: 'Log Out',
    path: '/logout',
  },
  {
    label: 'About',
    path: '/about',
  },
];

const Header = () => {

  const pathname = usePathname();

  useEffect(() => {
    
  }, [])
  

  return (
    <div className='flex flex-row'>
      <ul className='flex flex-row justify-between'>
        {headerItems.map((item) => (
          <li key={item.path}><Link href={item.path}>{item.label}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
