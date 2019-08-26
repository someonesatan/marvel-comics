import React from 'react'
import styled from 'styled-components'

import { Character as CharacterType } from '../../store/comicsCard/types'

interface CharacterProps {
  character: CharacterType
}

const Container = styled.div`
  display: flex;
  margin-bottom: 15px;
`
const Image = styled.img`
  margin-right: 20px;
`
const Name = styled.p`
  margin: 0;
  font-size: 16px;
`

const Character: React.FC<CharacterProps> = ({ character: { thumbnail = { path: '', extension: '' }, name } }) => {
  return (
    <Container>
      <Image alt='thumbnail of the comics' src={`${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`} />
      <Name>{name}</Name>
    </Container>
  )
}

export default Character

