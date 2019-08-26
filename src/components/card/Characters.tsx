import React from 'react'
import styled from 'styled-components'

import { Character as CharacterType } from '../../store/comicsCard/types'
import Character from './Character'

interface CharactersProps {
  characters: CharacterType[]
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Header = styled.p`
  margin: 0 0 15px 0;
  font-size: 18px;
`
const EmptyList = styled(Header)``

const CharacterList: React.FC<CharactersProps> = ({ characters }) => {

  const getCharacters = () => {
    if (characters.length) {
      return characters.map(item => {
        return <Character key={item.id} character={{...item}} />
      })
    } else {
      return <EmptyList>Not found</EmptyList>
    }
  }

  return (
    <Container>
      <Header>Characters:</Header>
      {getCharacters()}
    </Container>
  )
}

export default CharacterList