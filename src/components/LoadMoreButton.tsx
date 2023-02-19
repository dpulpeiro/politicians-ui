import React from 'react'

interface Props {
  onClick: () => void
}
export const LoadMoreButton = ({ onClick }: Props) => {
  return (
    <div className={'flex items-center justify-center my-10'}>
      <button
        type='button'
        onClick={onClick}
        className='text-white bg-gradient-to-r w-full max-w-md from-purple-500 to-pink-500 hover:bg-gradient-to-l
                                focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium
                                rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
      >
        Cargar Más
      </button>
    </div>
  )
}
