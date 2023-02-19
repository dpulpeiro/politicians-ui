import React, { Fragment, useState } from 'react'
import { Logo } from './Logo'
import { Dialog, Transition } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <header className='relative font-bold h-12 min-h-[50px] z-10 w-full left-0 top-0 flex justify-center border-b bg-gray-50'>
      {/* <div className="">*/}
      <div className='flex flex-row max-w-6xl w-full items-center justify-between relative'>
        <div className='px-4 w-60 max-w-full'>
          <Logo />
        </div>
        <div className='flex flex-1 justify-end '>
          <div className='pointer-events-auto md:hidden' data-headlessui-state=''>
            <button
              className='group flex items-center rounded-full bg-white/90 px-4 py-2 mr-4 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'
              type='button'
              aria-expanded='false'
              onClick={openModal}
            >
              Menu
              <svg
                viewBox='0 0 8 6'
                aria-hidden='true'
                className='ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400'
              >
                <path
                  d='M1.75 1.75 4 4.25l2.25-2.5'
                  fill='none'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
              </svg>
            </button>
          </div>

          <nav className=' hidden md:block backdrop-blur mr-4'>
            <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
              <li>
                <Link
                  className={`relative block px-3 py-2 transition ${
                    location.pathname === '/statistics' && 'text-purple-500'
                  } hover:text-purple-500 dark:hover:text-purple-400`}
                  to='/statistics'
                >
                  Statistics
                  {location.pathname === '/statistics' && (
                    <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-purple-500/0 via-purple-500/40 to-purple-500/0 dark:from-purple-400/0 dark:via-purple-400/40 dark:to-purple-400/0' />
                  )}
                </Link>
              </li>
              <li>
                <Link
                  className={`relative block px-3 py-2 transition ${
                    location.pathname === '/import' && 'text-purple-500'
                  } hover:text-purple-500 dark:hover:text-purple-400`}
                  to='/import'
                >
                  Import
                  {location.pathname === '/import' && (
                    <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-purple-500/0 via-purple-500/40 to-purple-500/0 dark:from-purple-400/0 dark:via-purple-400/40 dark:to-purple-400/0' />
                  )}
                </Link>
              </li>
              <li>
                <a
                  className={
                    'relative block px-3 py-2 transition hover:text-purple-500 dark:hover:text-purple-400'
                  }
                  href='/prueba_seleccion_fs.csv'
                >
                  Download CSV
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='absolute z-50' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-start mt-20 justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <ul className='flex flex-col  text-sm font-medium text-zinc-800 dark:text-zinc-200'>
                    <li>
                      <Link
                        className='relative block px-3 py-2 transition hover:text-purple-500 dark:hover:text-purple-400'
                        to='/statistics'
                      >
                        Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        className='relative block px-3 py-2 transition hover:text-purple-500 dark:hover:text-purple-400'
                        to='/import'
                      >
                        Import
                      </Link>
                    </li>
                  </ul>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>{' '}
    </header>
  )
}
export default NavBar
