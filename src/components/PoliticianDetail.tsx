import React from 'react'
import {Politician} from '../types/Politician';

interface Props {
    politician: Politician
}
export const PoliticianDetail = ({ politician }: Props) => {
    return (
        <>
            <div>
                <span className={'font-bold'}>id:</span> {politician.id}
            </div>
            <div>
                <span className={'font-bold'}>nombre:</span> {politician?.nombre}
            </div>
            <div>
                <span className={'font-bold'}>partido:</span> {politician?.partido}
            </div>
            <div>
                <span className={'font-bold'}>genero:</span> {politician?.genero}
            </div>
            <div>
                <span className={'font-bold'}>cargo:</span> {politician?.cargo}
            </div>
            <div>
                <span className={'font-bold'}>cargo_para_filtro:</span> {politician?.cargo_para_filtro}
            </div>
            <div>
                <span className={'font-bold'}>institucion:</span> {politician?.institucion}
            </div>
            <div>
                <span className={'font-bold'}>ccaa:</span> {politician?.ccaa}
            </div>
            <div>
                <span className={'font-bold'}>sueldo base:</span> {politician?.sueldobase_sueldo}
            </div>
            <div>
                <span className={'font-bold'}>complementos sueldo:</span>{' '}
                {politician?.complementos_sueldo}
            </div>
            <div>
                <span className={'font-bold'}>pagasextra_sueldo:</span> {politician?.pagasextra_sueldo}
            </div>
            <div>
                <span className={'font-bold'}>otrasdietaseindemnizaciones_sueldo:</span>{' '}
                {politician?.otrasdietaseindemnizaciones_sueldo}
            </div>
            <div>
                <span className={'font-bold'}>trienios_sueldo:</span> {politician?.trienios_sueldo}
            </div>
            <div>
                <span className={'font-bold'}>retribucionmensual:</span>{' '}
                {politician?.retribucionmensual}
            </div>
            <div>
                <span className={'font-bold'}>retribucionanual:</span>{' '}
                {politician?.retribucionanual}
            </div>
            <div>
                <span className={'font-bold'}>observaciones:</span> {politician?.observaciones}
            </div>
        </>
    )
}
