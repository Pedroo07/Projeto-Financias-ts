import { Item } from '../types/Item'


export const getCurrentMonth = () => {
  let now = new Date()
  return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export const filteredList = (list: Item[], date: string): Item[] => {
  let newList: Item[] = []
  let [year, month] = date.split('-')

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) && (list[i].date.getMonth() + 1) === parseInt(month)
    ) {
      newList.push(list[i])
    }
  }
  return newList
}

export const FormatDate = (date: Date): string => {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate() + 1
  return `${AddZeroToDate(day)}/${AddZeroToDate(month)}/${year}`
}
const AddZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`

export const FormatMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split('-')
  let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho','Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  return `${months[parseInt(month) - 1]} ${year}`
}