import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
gap: 0.7rem;
background-color: white;
box-shadow: 0 0 5px #ccc;
border-radius: 10px;
padding: 20px;
margin-top: 20px;
`
export const InputItem = styled.input`
padding: 5px;
font-size: 1.1rem;
font-weight: 500;
border:1px solid lightblue;
`
export const SelectItem = styled.select`
font-weight: 500;
padding: 5px;
font-size: 1.1rem;
border: 1px solid lightblue;

`
export const Div = styled.div`
display: flex;
flex-direction: column;
`
export const Button = styled.button`
margin-top: 18px;
border: none;
border-radius: 8px;
cursor: pointer;
font-size: 1.05rem;
width: 10rem;
padding: 5px;
margin-right: 1px;
background-color: lightblue;
color: black;
`