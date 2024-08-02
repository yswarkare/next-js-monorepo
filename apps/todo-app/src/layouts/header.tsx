'use client'
import Link from 'next/link';
import { headerItems } from '../data/index';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'

const Header = () => {
  const [currentPath, setCurrentPath] = useState('/');
  const pathName = usePathname()
  useEffect(() => {
    console.log(pathName)
    setCurrentPath(pathName)
  }, [pathName])



  return (
    <ul className='w-full flex flex-row gap-3 justify-between'>
      {
        headerItems.map((item) => (
          <li className={`w-full py-2 text-gray-200 rounded-md ${currentPath === item.path ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`} key={item.path}>
            <Link className={`flex w-full justify-center`} href={item.path}>{item.label}</Link>
          </li>
        ))
      }
    </ul>
  )
}

export default Header;