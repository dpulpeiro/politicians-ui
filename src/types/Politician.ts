export interface Politician {
  id: string
  nombre: string
  partido: string
  partido_para_filtro: string
  genero: string
  cargo_para_filtro: string
  cargo: string
  institucion: string
  ccaa: string
  sueldobase_sueldo: number | null
  complementos_sueldo: number | null
  pagasextra_sueldo: number | null
  otrasdietaseindemnizaciones_sueldo: number | null
  trienios_sueldo: number | null
  retribucionmensual: number | null
  retribucionanual: number | null
  observaciones: string
}
