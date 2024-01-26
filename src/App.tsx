import { useState, useEffect } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import { Category } from './types/Category'
import { categories } from './data/categories'
import { items } from './data/items'
import { getCurrentMonth, filteredList }
  from './helpers/dateFilter'
import { TableArea } from './components/TableArea/index';
import { InfoArea } from './components/InfoArea'
const App = () => {

  const [list, setList] = useState(items)
  const [filterList, setFilterList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  useEffect(() => {
    setFilterList(filteredList(list, currentMonth))
  }, [list, currentMonth])

  const handleMonth = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
        onMonthChange={handleMonth}
        currentMonth={currentMonth} />
        { }
        <TableArea list={filterList} />
      </C.Body>
    </C.Container>
  )
}

export default App