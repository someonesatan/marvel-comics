import React from 'react'
import styled from 'styled-components'

interface FieldProps {
  label: string
  type: string
  width: string
  name: string
  value: string
  setFilter: (name: string, value: string) => void
}

const Container = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  & > input, select {
    box-sizing: border-box;
    height: 30px;
    padding: 5px 7px;
    font-size: 17px;
    border-radius: 2px;
  }
`
const Label = styled.label`
  font-size: 16px;
  margin-bottom: 2px;
  letter-spacing: 0.7px;
`
const Input = styled.input`
`
const Select = styled.select`
`

const Field: React.FC<FieldProps> = ({ value, name, label, type, children, width, setFilter }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilter(name, e.target.value) 
  }
  
  const getInputByType = () => {
    switch (type) {
      case 'select':
        return <Select onChange={handleChange} value={value}>{children}</Select>
      default:
        return <Input onChange={handleChange} value={value} type={type}/>
    }
  }

  return (
    <Container width={width}>
      <Label>{label}</Label>
      {getInputByType()}
    </Container>
  )
}

export default Field