import React from 'react'
import styled from 'styled-components'

import { Filter as FilterType } from '../store/comicsList/types'
import Field from './Field'

interface FilterProps {
  filter: FilterType
  setFilter: () => void
  getComics: (clearRecords: boolean) => void
}

type ButtonEvent = React.MouseEvent<HTMLButtonElement>

const Container = styled.form`
  display: flex; 
  flex-wrap: wrap;
  margin-bottom: 25px;
  align-items: flex-end;
  & > * {
    margin: 0 25px 10px 0;
  }
`
const Submit = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 4px;
  font-size: 16px;
`

const Filter: React.FC<FilterProps> = ({ setFilter, getComics, filter }) => {

  const submit = (e:  ButtonEvent): void => {
    e.preventDefault()
    getComics(true)
  }

  return (
    <Container>
      <Field 
        name='order'
        setFilter={setFilter} 
        width='170px' 
        label='Order' 
        type='select'
        value={filter.order}
      >
        <option value='title'>Title</option>
        <option value='focDate'>Foc date</option>
        <option value='onsaleDate'>On sale date</option>
      </Field>

      <Field 
        name='name'
        setFilter={setFilter} 
        width='240px' 
        label='Name' 
        type='text'
        value={filter.name}
      />
      <Submit onClick={submit}>Submit</Submit>
    </Container>
  )
}

export default Filter