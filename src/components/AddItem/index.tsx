import React, { useState } from 'react'
import { Item } from '../../types/Item'
import * as C from './styles'

type Props = {
    onAdd: (item: Item) => void
}

export const AddItem = ({ onAdd }: Props) => {
    const [inputTitle, setInputTitle] = useState<string>('')
    const [inputDate, setInputDate] = useState<Date>()
    const [inputValue, setInputValue] = useState<number>(0)
    const [inputSelect, setInputSelect] = useState<string>('')

    const inputTitleCommand = (event: React.ChangeEvent<HTMLInputElement>) => setInputTitle(event.target.value)
    const inputValueCommand = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(Number(event.target.value))
    const inputDateCommand = (event: React.ChangeEvent<HTMLInputElement>) => {
        const dateValue = event.target.value
        const parsedDate = new Date(dateValue)
        setInputDate(parsedDate)
    }

    const handleEvent = () => {
        if (!inputDate) {
            alert('Por favor, selecione uma data.');
            return;
        }if (!inputTitle){
            alert('Por Favor adicione um titulo')
            return
        }if (!inputValue){
            alert('Por Favor adicione um valor')
            return
        }if(inputSelect === ''){
            alert('Por Favor selecione uma categoria')
        }

        let newItem: Item = {
            date: inputDate,
            category: inputSelect,
            title: inputTitle,
            value: inputValue
        }

        onAdd(newItem);
    }

    return (
        <C.Container>
            <C.Div>
                <h3>Data</h3>
                <C.InputItem
                    type='date'
                    value={inputDate?.toISOString().split('T')[0]}
                    onChange={inputDateCommand}
                />
            </C.Div>
            <C.Div>
                <h3>Categoria</h3>
                {/* Adicione a lógica para selecionar a categoria */}
                <C.SelectItem value={inputSelect} onChange={(e) => setInputSelect(e.target.value) } >
                    <option value=""></option>
                    <option value="renda">Renda</option>
                    <option value="gasto">Despesas</option>
                </C.SelectItem>
            </C.Div>
            <C.Div>
                <h3>Título</h3>
                <C.InputItem
                    type='text'
                    value={inputTitle}
                    onChange={inputTitleCommand}
                />
            </C.Div>
            <C.Div>
                <h3>Valor</h3>
                <C.InputItem
                    type='number'
                    value={inputValue}
                    onChange={inputValueCommand}
                />
            </C.Div>
            <C.Button onClick={handleEvent}>Adicionar</C.Button>
        </C.Container>
    )
}