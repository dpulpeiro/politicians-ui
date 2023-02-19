import React from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className='p-2 rounded-t-xl shadow dark:bg-gray-800 flex justify-center bg-white text-3xl'>
      <div className={'container flex items-center justify-center '}>
        <span className='text-sm font-bold text-gray-500 sm:text-center dark:text-gray-400'>
          © 2022{' '}
          <Link to='/' className='hover:underline'>
            OpenPoliticians™
          </Link>
          .
        </span>
      </div>
    </footer>
  )
}
