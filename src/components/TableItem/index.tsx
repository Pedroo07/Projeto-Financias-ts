import * as C from './styles'
import { Item } from '../../types/Item'
import { FormatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'

type Props = {
    item: Item
    onDelete: () => void
}

export const TableItem = ({ item, onDelete }: Props) => {

    return (
        <C.TableLine>
            <C.TableColumn>{FormatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                R${item.value}
                </C.Value>
               </C.TableColumn>
               <C.TableColumn> 
                <button onClick={() => onDelete()}>➖</button> </C.TableColumn>
        </C.TableLine>
    )
}