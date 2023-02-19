import React, {useState} from 'react'
import {Politician} from '../types/Politician';
import toast from 'react-hot-toast';
import axios, {AxiosResponse} from 'axios';
import {Dictionary} from '../types/Dictionary';

interface Props {
    politician: Politician
    updatePolitician: (politician:Politician)=>void,
}

export const PoliticianDetailUpdate = ({ politician ,updatePolitician}: Props) => {
    const [updatedPolitician,setUpdatedPolitician] =useState(politician)
    const updateDict=(original:Politician,newPolitician:Politician)=>{
        const updateData:Dictionary<any>={}
        Object.keys(original).forEach((key)=>{

            if (key!=='id' &&newPolitician[key as keyof typeof newPolitician]!==original[key as keyof typeof original]){
                updateData[key]=newPolitician[key as keyof typeof newPolitician]
            }
        })
        return updateData
    }
    const handleUpdatePolitician=()=>{
        toast.promise(axios.patch(`${process.env.REACT_APP_API}/politicians/${politician.id}`,updateDict(politician,updatedPolitician)),{
            loading:'Modificando politico',
            success:'Politico modificado',
            error:'Error modificando politico',
        }).then((data:AxiosResponse<Politician>)=>{
            updatePolitician(data.data)
        })
    }
    return (
        <form onSubmit={handleUpdatePolitician}>
            <div>
                <span className={'font-bold'}>id:</span> {updatedPolitician.id}
            </div>
            <div className={'flex flex-col md:flex-row items-center'}>
                <span className={'font-bold'}>nombre:</span>

                <input
                    className=" inline shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nombre" onChange={(event)=>setUpdatedPolitician({...updatedPolitician, nombre:event.target.value})} type="text" value={updatedPolitician.nombre}/>

            </div>
            <div>
                <span className={'font-bold'}>partido:</span>

                <input
                    className=" inline shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="partido" onChange={(event)=>setUpdatedPolitician({...updatedPolitician, partido:event.target.value})} type="text" value={updatedPolitician.partido}/>

            </div>
            <div>
                <span className={'font-bold'}>genero:</span> {updatedPolitician?.genero}

                <input
                    className=" inline shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="genero" onChange={(event)=>setUpdatedPolitician({...updatedPolitician, genero:event.target.value})} type="text" value={updatedPolitician.genero}/>
            </div>
            <div>
                <span className={'font-bold'}>cargo:</span><input
                className=" inline shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cargo" onChange={(event)=>setUpdatedPolitician({...updatedPolitician, cargo:event.target.value})} type="text" value={updatedPolitician.cargo}/>
            </div>
            <div>
                <span className={'font-bold'}>cargo_para_filtro:</span><input
                className=" inline shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cargo_para_filtro" onChange={(event)=>setUpdatedPolitician({...updatedPolitician, 'cargo_para_filtro':event.target.value})} type="text" value={updatedPolitician.cargo_para_filtro}/>
            </div>
            <div>
                <span className={'font-bold'}>institucion:</span> <input
                className=" inline shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="institucion" onChange={(event)=>setUpdatedPolitician({...updatedPolitician, institucion:event.target.value})} type="text" value={updatedPolitician.institucion}/>
            </div>
            <div>
                <span className={'font-bold'}>ccaa:</span> <input
                className=" inline shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ccaa" onChange={(event)=>setUpdatedPolitician({...updatedPolitician, ccaa:event.target.value})} type="text" value={updatedPolitician.ccaa}/>
            </div>
            <div>
                <span className={'font-bold'}>sueldo base:</span>  <input
                className=" inline shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="sueldobase_sueldo" onChange={(event)=>{
                // eslint-disable-next-line camelcase
                setUpdatedPolitician({...updatedPolitician, sueldobase_sueldo:parseFloat(event.target.value)})}} type="number" value={updatedPolitician.sueldobase_sueldo??undefined}/>
            </div>
            <div>
                <span className={'font-bold'}>complementos sueldo:</span> <input
                className=" inline shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="complementos_sueldo" onChange={(event)=>{
                // eslint-disable-next-line camelcase
                setUpdatedPolitician({...updatedPolitician, complementos_sueldo:parseFloat(event.target.value)})}} type="number" value={updatedPolitician.complementos_sueldo??undefined}/>
            </div>
            <div>
                <span className={'font-bold'}>pagasextra_sueldo:</span> <input
                className=" inline shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pagasextra_sueldo"
                onChange={(event)=>{
                    // eslint-disable-next-line camelcase
                    setUpdatedPolitician({...updatedPolitician, pagasextra_sueldo:parseFloat(event.target.value)})}} type="number" value={updatedPolitician.pagasextra_sueldo??undefined}/>
            </div>
            <div>
                <span className={'font-bold'}>otrasdietaseindemnizaciones_sueldo:</span><input
                className=" inline shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="otrasdietaseindemnizaciones_sueldo" onChange={(event)=>{
                // eslint-disable-next-line camelcase
                setUpdatedPolitician({...updatedPolitician, otrasdietaseindemnizaciones_sueldo:parseFloat(event.target.value)})}} type="number" value={updatedPolitician.otrasdietaseindemnizaciones_sueldo??undefined}

                />
            </div>
            <div>
                <span className={'font-bold'}>trienios_sueldo:</span> <input
                className=" inline shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="trienios_sueldo" onChange={(event)=>{
                // eslint-disable-next-line camelcase
                setUpdatedPolitician({...updatedPolitician, trienios_sueldo:parseFloat(event.target.value)})}} type="number" value={updatedPolitician.trienios_sueldo??undefined}/>

            </div>
            <div>
                <span className={'font-bold'}>retribucionmensual:</span><input
                className=" inline shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="retribucionmensual" onChange={(event)=>{
                // eslint-disable-next-line camelcase
                setUpdatedPolitician({...updatedPolitician, retribucionmensual:parseFloat(event.target.value)})}} type="number" value={updatedPolitician.retribucionmensual??undefined}/>
            </div>
            <div>
                <span className={'font-bold'}>retribucionanual:</span><input
                className=" inline shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="retribucionanual" onChange={(event)=>{
                // eslint-disable-next-line camelcase
                setUpdatedPolitician({...updatedPolitician, retribucionanual:parseFloat(event.target.value)})}} type="number" value={updatedPolitician.retribucionanual??undefined}/>
            </div>
            <div>
                <span className={'font-bold'}>observaciones:</span> <input
                className=" inline shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="observaciones"  onChange={(event)=>{
                // eslint-disable-next-line camelcase
                setUpdatedPolitician({...updatedPolitician, observaciones:event.target.value})}} type="text" value={updatedPolitician.observaciones}/>
            </div>
            <button
                type='button'
                onClick={handleUpdatePolitician}
                className='text-white bg-gradient-to-r w-full max-w-md from-purple-500 to-pink-500 hover:bg-gradient-to-l
                                focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium
                                rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
            >
                Guardar Cambios
            </button>
        </form>
    )
}
