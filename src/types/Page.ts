export interface Page<ItemType> {
  items: ItemType[]
  total: number
  page: number
  size: number
}
