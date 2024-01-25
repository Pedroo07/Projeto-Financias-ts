import * as C from './styles'
import { Item } from '../../types/Item'

type Props = {
  list: Item[]
}

export const TableArea = () => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Titulo</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
        <tbody>
          { }
        </tbody>
      </thead>
    </C.Table>
  )
}
