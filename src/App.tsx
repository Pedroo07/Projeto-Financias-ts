import { useState, useEffect } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import { categories } from './data/categories'
import { items } from './data/items'
import { getCurrentMonth, filteredList }
  from './helpers/dateFilter'
import { TableArea } from './components/TableArea/index';
import { InfoArea } from './components/InfoArea'
import { AddItem } from './components/AddItem'
const App = () => {

  const [list, setList] = useState(items)
  const [filterList, setFilterList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  useEffect(() => {
    setFilterList(filteredList(list, currentMonth))
  }, [list, currentMonth])

  useEffect(() => {
    let incomeCount = 0
    let expenseCount = 0
    for (const item of filterList) {
      const { category, value } = item
      const { expense } = categories[category]
      if (expense) {
        expenseCount += value
      } else {
        incomeCount += value
      }
    }
    setIncome(incomeCount)
    setExpense(expenseCount)
  }, [filterList])


  const handleMonth = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }
  const handleAddItem = (item: Item) => {
    let newList = [...list]
    newList.push(item)
    setList(newList)
  }
  const handleDeleteItem = (index: number) => {
    let newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          onMonthChange={handleMonth}
          currentMonth={currentMonth}
          income={income}
          expense={expense}
        />
        <AddItem onAdd={handleAddItem} />
        <TableArea list={filterList} onDelete={handleDeleteItem} />
      </C.Body>
    </C.Container>
  )
}

export default App