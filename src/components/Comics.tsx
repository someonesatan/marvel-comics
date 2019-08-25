import React from 'react'
import styled from 'styled-components'

import { Comics as ComicsType } from '../store/comics/types'

const Image = styled.img`
`
const Container = styled.div`
  margin: 8px;
  position: relative;
  cursor: pointer;
  display: flex;
  &:hover {
    ${Image} {
      filter: invert(25%);
    }
  }
`
const TitleBox = styled.div`
  position: absolute;
  bottom: 0;
  height: 20%;
  width: 100%;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.65);
  padding: 6px;
  display: flex;
`
const Title = styled.p`
  font-size: 20px;
  color: #fff;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Courier New', Courier, monospace;
`


const Comics: React.FC<ComicsType> = ({ title, thumbnail }) => {
  return (
    <Container>
      <Image alt='thumbnail of thecomics' src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`} />
      <TitleBox>
        <Title>{title}</Title>
      </TitleBox>
    </Container>
  )
}

export default Comics