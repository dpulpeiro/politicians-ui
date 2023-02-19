import { Politician } from './Politician'

export interface StatisticsSummary {
  mean_salary: number
  median_salary: number
  top_politicians: Politician[]
}
