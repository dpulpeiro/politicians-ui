import React, {useEffect, useState} from 'react'
import Layout from '../layout/Layout'
import {Status} from '../types/Status'
import axios, {AxiosResponse} from 'axios'
import {StatisticsSummary} from '../types/StatisticsSummary'
import {PoliticianList} from '../components/PoliticianList'

const StatisticsPage = () => {
  const [statistics, setStatistics] = useState<StatisticsSummary | null>(null)
  const [status, setStatus] = useState(Status.LOADING)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/statistics`)
      .then((data: AxiosResponse<StatisticsSummary>) => {
        if (data.status == 200) {
          setStatistics(data.data)
          setStatus(Status.SUCCESS)
        } else {
          setStatus(Status.ERROR)
        }
      })
      .catch((data) => {
        if (data.response.status === 503) {
          setStatus(Status.UNAVAILABLE)
        } else {
          setStatus(Status.ERROR)
        }
      })
  }, [])
  return (
    <Layout>
      {status == Status.LOADING && <div>LOADING</div>}
      {status == Status.ERROR && <div>Error cargando estadisticas</div>}
      {status == Status.UNAVAILABLE && (
        <div>Servicio de estadisticas no disponible, quizas faltan politicos por cargar</div>
      )}
      {status === Status.SUCCESS && statistics !== null && (
        <div>
          <h1 className={'font-bold text-2xl'}>Estadisticas de nuestros politicos:</h1>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
              <div
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-100 bg-purple-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>

              </div>

              <div className="ml-4">
                <h2 className="font-semibold">{statistics.median_salary.toFixed(2)} €</h2>
                <p className="mt-2 text-sm text-gray-500">Median Salary</p>
              </div>
            </div>
            <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
              <div
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-100 bg-purple-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>

              <div className="ml-4">
                <h2 className="font-semibold">{statistics.mean_salary.toFixed(2)} €</h2>
                <p className="mt-2 text-sm text-gray-500">Mean Salary</p>
              </div>
            </div>
          </div>
          
          
          <h2 className={'font-bold text-xl mt-20'}> Top 10 de politicos con salario más alto:</h2>
          <PoliticianList politicians={statistics.top_politicians} />
        </div>
      )}
    </Layout>
  )
}
export default StatisticsPage
