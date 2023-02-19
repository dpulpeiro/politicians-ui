import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PoliticiansSearch from './pages/PoliticianSearchPage'
import Politician from './pages/PoliticianPage'
import StatisticsPage from './pages/StatisticsPage'
import ImportPoliticiansPage from './pages/ImportPoliticiansPage'
import { PoliticiansSearchContextProvider } from './context/PoliticiansSearchContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Toaster />

    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <PoliticiansSearchContextProvider>
              <PoliticiansSearch />
            </PoliticiansSearchContextProvider>
          }
        />
        <Route path='/statistics' element={<StatisticsPage />} />
        <Route path='/import' element={<ImportPoliticiansPage />} />
        <Route path='/politicians/:id' element={<Politician />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
