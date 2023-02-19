import React, {FormEventHandler, useState} from 'react'
import CustomListBox from './shared/CustomListBox'
import {usePoliticiansSearch} from '../context/PoliticiansSearchContext'
import {genders, politicalParties} from '../utils/constants'

const PoliticianSearchFilter = () => {
  const { politicalParty, setPoliticalParty, gender, setGender, setSearch } = usePoliticiansSearch()
  const [currentSearch, setCurrentSearch] = useState('')
  const handleSubmit:FormEventHandler=(event)=> {
    setSearch(currentSearch)
    event.preventDefault();
  }
  return (
    <div className={'flex flex-col gap-2'}>
      <div className={'grid grid-cols-1 md:grid-cols-2 gap-2'}>
        <CustomListBox
          name={'Genero'}
          selectedOption={gender ?? 'Cualquiera'}
          setSelectedOption={setGender}
          options={genders}
          nullValue={'Cualquiera'}
        ></CustomListBox>
        <CustomListBox
          name={'Partido'}
          selectedOption={politicalParty ?? 'Cualquiera'}
          setSelectedOption={setPoliticalParty}
          options={politicalParties}
          nullValue={'Cualquiera'}
        ></CustomListBox>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only'>
          Search
        </label>
        <div className='relative '>
          <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-gray-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              ></path>
            </svg>
          </div>
          <input
            type='search'
            id='default-search'
            value={currentSearch}
            onChange={(event) => setCurrentSearch(event.target.value)}
            className='bg-white block p-4 pl-10 w-full text-sm text-gray-900   outline-purple-300  border border-gray-300  focus:border-none rounded-lg'
            placeholder='Busca politicos por su nombre...'
          />
          <button
            type='button'
            onClick={() => setSearch(currentSearch)}
            className='text-white absolute right-2.5 bottom-2.5 bg-purple-500 hover:bg-purple-600 font-medium rounded-lg text-sm px-4 py-2'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
export default PoliticianSearchFilter
