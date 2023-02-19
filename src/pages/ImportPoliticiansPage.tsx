import React from 'react'
import Layout from '../layout/Layout'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import toast from 'react-hot-toast'

const ImportPoliticiansPage = () => {
  const onDrop = (acceptedFiles: File[]) => {
    const formData = new FormData()
    formData.append('csv_file', acceptedFiles[0])
    toast.promise(
      axios.post(`${process.env.REACT_APP_API}/bulk`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
      {
        loading: 'Loading politicians CSV',
        success: 'CSV loaded',
        error: 'Error loading CSV',
      },
    )
  }
  return (
    <Layout>
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section className={'relative h-80  '}>
            <div className='absolute top-[-1rem] bottom-[-1rem] left-[-1rem] right-[-1rem]'>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  opacity: 0.3,
                  filter: 'blur(16px)',
                  background:
                    'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
                }}
              ></div>
            </div>

            <div
              {...getRootProps()}
              className='relative shadow-lg cursor-pointer rounded-lg
                h-full bg-gray-200 z-50 w-full flex flex-col items-center justify-center
                rounded-xl border-2 border-dashed
                     border-blue-400 bg-white  text-center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-10 w-10 text-blue-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                />
              </svg>
              <h2 className='mt-4 text-xl font-medium text-gray-700 tracking-wide'>
                Politicians file
              </h2>
              <p className='mt-2 text-gray-500 tracking-wide'>
                Clicka o arrastra el fichero csv con los políticos{' '}
              </p>
              <input type={'file'} className={'h-full w-full'} {...getInputProps()} />
            </div>
          </section>
        )}
      </Dropzone>
    </Layout>
  )
}
export default ImportPoliticiansPage
