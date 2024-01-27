import * as C from './styles'

type Props = {
    title: string
    value: number
}
export const ResumeItem = ({title,value}: Props) => {

    return(
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Value>R$ {value}</C.Value>
        </C.Container>
    )
}