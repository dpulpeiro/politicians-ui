import * as React from 'react'

export function Logo() {
  return (
    <a href='/' className='w-full block py-0 my-0 font-bold'>
      <div className='flex flex-row items-center align-middle text-center justify-center gap-2 w-min'>
        <div
          className='relative flex h-8 bg-white w-8 flex-none items-center
            justify-center rounded-full shadow-md shadow-zinc-800/5
            ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'
        >
          <img
            alt='OpenPoliticians'
            src='/logo.png'
            decoding='async'
            data-nimg='future'
            className='h-5 w-5 transparent'
            loading='lazy'
          />
        </div>
        <div className={'text-center'}>OpenPoliticians</div>
      </div>
    </a>
  )
}
