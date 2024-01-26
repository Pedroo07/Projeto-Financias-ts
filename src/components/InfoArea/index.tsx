import * as  C from './styles'
type Props = {
    currentMonth: string
    onMonthChange: (newMonth: string) => void
}
import { FormatMonth } from '../../helpers/dateFilter'

export const InfoArea = ({currentMonth, onMonthChange}: Props) => {
    const PrevMonth = () => {
        let [year, month] = currentMonth.split('-')
        let newDate = new Date(parseInt(year), parseInt(month)-1 ,1)
        newDate.setMonth(newDate.getMonth() -1 )
        onMonthChange(`${newDate.getFullYear()}-${newDate.getMonth() + 1}`)
    }
    const NextMonth = () => {
        let [year, month] = currentMonth.split('-')
        let newDate = new Date(parseInt(year), parseInt(month)-1 ,1)
        newDate.setMonth(newDate.getMonth() + 1 )
        onMonthChange(`${newDate.getFullYear()}-${newDate.getMonth() + 1}`)
    }


    return(
<C.Container>
    <C.MonthArea>
        <C.MonthArrow onClick={PrevMonth}>⬅️</C.MonthArrow>
        <C.MonthText>{FormatMonth(currentMonth)}</C.MonthText>
        <C.MonthArrow onClick={NextMonth}>➡️</C.MonthArrow>
    </C.MonthArea>
    <C.ResumeArea>
        
    </C.ResumeArea>
</C.Container>
    )
}