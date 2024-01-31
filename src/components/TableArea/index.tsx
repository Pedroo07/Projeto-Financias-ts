import * as C from './styles'
import { Item } from '../../types/Item'
import { TableItem } from '../TableItem/index'

type Props = {
  list: Item[]
  onDelete: (index: number) => void
}

export const TableArea = ({ list, onDelete }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Titulo</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} onDelete={() => onDelete(index)}/>
        ))}
      </tbody>
    </C.Table>
  )
}
