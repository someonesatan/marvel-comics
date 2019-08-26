import React from 'react'
import styled from 'styled-components'

import { ComicsInfo } from '../../store/comicsCard/types'

const Image = styled.img``
const Container = styled.div`
  width: 300px;
  height: 450px;
  background-color: #7d7d7d;
  position: relative;
  display: flex;
`
const TitleBox = styled.div`
  position: absolute;
  bottom: 0;
  height: 25%;
  width: 100%;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.65);
  padding: 6px;
  display: flex;
`
const Title = styled.p`
  margin: 0;
  font-size: 20px;
  color: #fff;
  font-family: 'Courier New', Courier, monospace;
`

const Comics: React.FC<ComicsInfo> = ({ title, thumbnail={ path: '', extension: '' }, id }) => {
  return (
    <Container>
      <Image alt='thumbnail of the comics' src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`} />
      <TitleBox>
        <Title>{title}</Title>
      </TitleBox>
    </Container>
  )
}

export default Comics