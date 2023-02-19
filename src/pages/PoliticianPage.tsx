import React, {useEffect, useState} from 'react'
import Layout from '../layout/Layout'
import {useNavigate, useParams} from 'react-router-dom'
import axios, {AxiosResponse} from 'axios'
import {Politician} from '../types/Politician'
import {Status} from '../types/Status'
import toast from 'react-hot-toast';
import {PoliticianDetail} from '../components/PoliticianDetail';
import {PoliticianDetailUpdate} from '../components/PoliticianDetailUpdate';

const ViewType={
  VIEW:0,
  UPDATE:1
}


const PoliticianPage = () => {
  const { id } = useParams()
  const [politician, setPolitician] = useState<Politician | null>(null)
  const [viewType, setViewType] = useState(ViewType.VIEW)
  const [status, setStatus] = useState(Status.LOADING)
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/politicians/${id}`)
      .then((data: AxiosResponse<Politician>) => {
        if (data.status == 200) {
          setPolitician(data.data)
          setStatus(Status.SUCCESS)
        } else {
          setStatus(Status.ERROR)
        }
      })
      .catch((data) => {
        if (data.response.status == 404) {
          setStatus(Status.NOT_FOUND)
        } else {
          setStatus(Status.ERROR)
        }
      })
  }, [])
  const handleRemove=()=>{
    toast.promise(axios.delete(`${process.env.REACT_APP_API}/politicians/${id}`),{
      loading:`Eliminando a ${politician?.nombre}`,
      success:'Politico eliminado',
      error:'Error eliminando politico'
    }).then(()=>{
      navigate('/')
    })
  }
  const handleUpdate=()=>{
    setViewType(viewType===ViewType.VIEW?ViewType.UPDATE:ViewType.VIEW)
  }
  return (
    <Layout>
      {status == Status.SUCCESS && politician!==null&& (

        <div>
          <button
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300
              font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              onClick={handleRemove}>Remove</button>
          <button
              className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
              font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              onClick={handleUpdate}>{viewType===ViewType.VIEW?'Change to Update':'Change To View'}</button>
          {viewType===ViewType.VIEW &&<PoliticianDetail politician={politician}></PoliticianDetail>}
          {viewType===ViewType.UPDATE &&<PoliticianDetailUpdate politician={politician} updatePolitician={setPolitician}/>}
        </div>
      )}
      {status == Status.LOADING && <div>LOADING</div>}
      {status == Status.NOT_FOUND && <div>Politico no encontrado</div>}
      {status == Status.ERROR && <div>Error buscando polico</div>}
    </Layout>
  )
}
export default PoliticianPage
