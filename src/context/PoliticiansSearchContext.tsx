import { Politician } from '../types/Politician'
import React, { useContext, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'
import { Page } from '../types/Page'

interface Context {
  politicians: Politician[]
  search: string | null
  setSearch: (search: string | null) => void
  politicalParty: string | null
  setPoliticalParty: (politicalParty: string | null) => void
  gender: string | null
  setGender: (gender: string | null) => void
  page: number
  hasMore: boolean
  loadMore: () => void
}
interface Props {
  children: JSX.Element
}
const initGlobalContext = (): Context => {
  return {
    politicians: [],
    search: null,
    setSearch: (search: string | null) => null,
    politicalParty: null,
    setPoliticalParty: (politicalParty: string | null) => null,
    gender: null,
    setGender: (gender: string | null) => null,
    page: 0,
    hasMore: false,
    loadMore: () => null,
  }
}
export const PoliticiansSearchContext = React.createContext(initGlobalContext())
export const PoliticiansSearchContextProvider = ({ children }: Props) => {
  const [politicians, setPoliticians] = useState<Politician[]>([])
  const [search, setSearch] = useState<string | null>(null)
  const [politicalParty, setPoliticalParty] = useState<string | null>(null)
  const [gender, setGender] = useState<string | null>(null)
  const [page, setPage] = useState<number>(0)
  const [hasMore, setHasMore] = useState<boolean>(false)
  const loadMore = () => {
    setPage(page + 1)
  }

  // Called when filter changes
  useEffect(() => {
    setPage(0)
    axios
      .get(`${process.env.REACT_APP_API}/politicians`, {
        // eslint-disable-next-line camelcase
        params: { search: search, political_party: politicalParty, gender: gender, page: page },
      })
      .then((response: AxiosResponse<Page<Politician>>) => {
        const data = response.data
        setHasMore(data.total - data.items.length > 0)
        setPoliticians(data.items)
      })
  }, [search, politicalParty, gender])

  // Called when page changes
  useEffect(() => {
    if (page > 0)
      axios
        .get(`${process.env.REACT_APP_API}/politicians`, {
          // eslint-disable-next-line camelcase
          params: { search: search, political_party: politicalParty, gender: gender, page: page },
        })
        .then((response: AxiosResponse<Page<Politician>>) => {
          const data = response.data
          setHasMore(data.total - (data.items.length + politicians.length) > 0)
          setPoliticians([...politicians, ...data.items])
        })
        .catch(() => toast.error('Error buscando politicos'))
  }, [page])
  return (
    <PoliticiansSearchContext.Provider
      value={{
        politicians,
        search,
        setSearch,
        politicalParty,
        setPoliticalParty,
        gender,
        setGender,
        page,
        loadMore,
        hasMore,
      }}
    >
      {children}
    </PoliticiansSearchContext.Provider>
  )
}
export const usePoliticiansSearch = () => useContext(PoliticiansSearchContext)
