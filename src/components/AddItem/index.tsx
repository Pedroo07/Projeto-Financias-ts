import { Item } from '../../types/Item'
import * as C from './styles'

type Props ={
    onAdd: (item: Item) => void
}

export const AddItem = ({onAdd}: Props) => {

    const handleEvent = () => {
        let newItem: Item = {
            date: new Date(2024,1,9),
            category: 'gasto',
            title: 'Adega 22',
            value: 40.00
        }
        onAdd(newItem)
    }
    return(
    <C.Container>
        <button onClick={handleEvent}>Add</button>
    </C.Container>
    )    
}