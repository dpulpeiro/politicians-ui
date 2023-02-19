import React from 'react'
import Layout from '../layout/Layout'
import PoliticianSearchFilter from '../components/PoliticianSearchFilter'
import {usePoliticiansSearch} from '../context/PoliticiansSearchContext'
import {LoadMoreButton} from '../components/LoadMoreButton'
import {NoPoliticiansFound} from '../components/NoPoliticiansFound'
import {PoliticianList} from '../components/PoliticianList'

const PoliticiansSearch = () => {
  const { politicians, hasMore, loadMore } = usePoliticiansSearch()
  return (
    <Layout>
        <h1 className={'font-bold text-2xl mb-20'}>Buscador de políticos:</h1>
      <PoliticianSearchFilter />
      <PoliticianList politicians={politicians} />
      {hasMore && <LoadMoreButton onClick={loadMore} />}
      {!hasMore && politicians.length === 0 && <NoPoliticiansFound more={false} />}
      {!hasMore && politicians.length !== 0 && <NoPoliticiansFound more={true} />}
    </Layout>
  )
}
export default PoliticiansSearch
