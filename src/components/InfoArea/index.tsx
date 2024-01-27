import * as  C from './styles'
import { ResumeItem } from '../ResumeItem'
type Props = {
    currentMonth: string
    onMonthChange: (newMonth: string) => void
    income: number
    expense: number
}
import { FormatMonth } from '../../helpers/dateFilter'

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
    const PrevMonth = () => {
        let [year, month] = currentMonth.split('-')
        let newDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        newDate.setMonth(newDate.getMonth() - 1)
        onMonthChange(`${newDate.getFullYear()}-${newDate.getMonth() + 1}`)
    }
    const NextMonth = () => {
        let [year, month] = currentMonth.split('-')
        let newDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        newDate.setMonth(newDate.getMonth() + 1)
        onMonthChange(`${newDate.getFullYear()}-${newDate.getMonth() + 1}`)
    }


    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={PrevMonth}>⬅️</C.MonthArrow>
                <C.MonthText>{FormatMonth(currentMonth)}</C.MonthText>
                <C.MonthArrow onClick={NextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title='Receitas' value={income}/>
                <ResumeItem title='Despesas' value={expense}/>
                <ResumeItem title='Balanço' value={income - expense} color={(income - expense) < 0 ?'red' : ((income - expense) === 0 ? 'black' : 'green')}/>
            </C.ResumeArea>
        </C.Container>
    )
}