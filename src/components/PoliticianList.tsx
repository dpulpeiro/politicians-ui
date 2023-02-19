import React from 'react'
import { Politician } from '../types/Politician'
import PoliticianListItem from './PoliticianListItem'

interface Props {
  politicians: Politician[]
}
export const PoliticianList = ({ politicians }: Props) => {
  return (
    <div className={'flex flex-col gap-4 mt-10'}>
      {politicians.map((politician, index) => {
        return <PoliticianListItem key={index} politician={politician}></PoliticianListItem>
      })}
    </div>
  )
}
