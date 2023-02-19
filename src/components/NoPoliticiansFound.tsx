import React from 'react'

interface Props {
  more: boolean
}
export const NoPoliticiansFound = ({ more }: Props) => {
  return (
    <div className={'flex items-center justify-center my-10'}>
      <div>No se han encontrado {more ? 'más ' : ''}políticos con este filtro</div>
    </div>
  )
}
