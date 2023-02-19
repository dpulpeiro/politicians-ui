import React from 'react'
import { Politician } from '../types/Politician'
import { Link } from 'react-router-dom'
import { genderColor, politicalPartyColor } from '../utils/constants'

interface Props {
  politician: Politician
}

const PoliticianListItem = ({ politician }: Props) => {
  return (
    <Link
      to={`/politicians/${politician.id}`}
      className={'no-underline hover:pointer rounded-lg bg-white shadow p-4 hover:bg-purple-100'}
    >
      <div className={'flex flex-col md:flex-row justify-between'}>
        <div className={'font-bold'}>{politician.nombre}</div>
        <div className={'flex gap-1 flex-wrap'}>
          <span
            className={` p-1.5 px-2 text-xs font-medium uppercase tracking-wider 
                    text-${
                      politicalPartyColor[
                        politician.partido_para_filtro as keyof typeof politicalPartyColor
                      ]
                    }-800 
                    bg-${
                      politicalPartyColor[
                        politician.partido_para_filtro as keyof typeof politicalPartyColor
                      ]
                    }-200
                     rounded-lg bg-opacity-50 mr-2`}
          >
            {politician.partido}
          </span>
          <span
            className={`inline p-1.5 px-2 text-xs font-medium  tracking-wider 
                    text-${genderColor[politician.genero as keyof typeof genderColor]}-800 
                    bg-${genderColor[politician.genero as keyof typeof genderColor]}-200
                     rounded-lg bg-opacity-50 mr-2`}
          >
            {politician.genero}
          </span>
          <span
            className={
              'inline p-1.5 px-2 text-xs font-bold  bg-gray-300 tracking-wider rounded-lg bg-opacity-50 mr-2'
            }
          >
            {politician.cargo}
          </span>
          <span
            className={
              'inline p-1.5 px-2 text-xs font-bold  bg-yellow-300 tracking-wider rounded-lg bg-opacity-50 mr-2'
            }
          >
            {politician.retribucionanual}€
          </span>
        </div>
      </div>
    </Link>
  )
}
export default PoliticianListItem
