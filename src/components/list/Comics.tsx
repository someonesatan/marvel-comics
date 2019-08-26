import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { ComicsInfo } from '../../store/comicsList/types'

const Image = styled.img`
  filter: invert(15%);
`
const Container = styled(Link)`
  width: 300px;
  height: 450px;
  background-color: #7d7d7d;
  margin-bottom: 15px;
  position: relative;
  cursor: pointer;
  display: flex;
  &:hover {
    ${Image} {
      filter: invert(0%) drop-shadow(0px 0px 12px black);
    }
  }
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

const Comics: React.FC<ComicsInfo> = ({ title, thumbnail, id }) => {
  return (
    <Container to={`/comics/${id}`}>
      <Image alt='thumbnail of the comics' src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`} />
      <TitleBox>
        <Title>{title}</Title>
      </TitleBox>
    </Container>
  )
}

export default Comics