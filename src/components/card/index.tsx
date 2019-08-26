import React from 'react'
import styled from 'styled-components'
import { RouteComponentProps, withRouter, match } from "react-router"

import { ComicsInfo as ComicsInfoType, Character } from '../../store/comicsCard/types'
import Spinner from '../Spinner'
import Thumbnail from './Thumbnail'
import Characters from './Characters'

interface CardProps extends RouteComponentProps {
  comicsInfo: ComicsInfoType
  characters: Character[]
  getComicsInfo: (comicsId: string, cb: (value: boolean) => void) => void
  getCharacters: (comicsId: string) => void
  match: match<Identifiable>
  clearInfo: () => void
}

interface CardState {
  isLoading: boolean
}

interface Identifiable {
  id: string
}

const Container = styled.div`

`
const Info = styled.div`
  display: flex;
  margin-bottom: 25px;
  & > :first-child {
    margin-right: 25px;
  }
`
const DescHeader = styled.p`
  margin: 0 0 15px 0;
  font-size: 18px;
`
const DescriptionBlock = styled.div`

`
const Description = styled.div`
  line-height: 1.5;
  font-size: 17px;
`

class Card extends React.Component<CardProps, CardState> {

  constructor(props: CardProps) {
    super(props)

    this.state = {
      isLoading: false
    }
  }

  componentDidMount() {
    this.getComicsInfo()
  }

  componentWillUnmount() {
    this.props.clearInfo()
  }

  getComicsInfo = () => {
    this.setLoadingStatus(true)
    this.props.getCharacters(this.props.match.params.id)
    this.props.getComicsInfo(this.props.match.params.id, () => this.setLoadingStatus(false))
  }

  setLoadingStatus = (value: boolean) => {
    this.setState({ isLoading: value })
  }

  render() {
    const { comicsInfo, characters } = this.props

    return (
      <Container>
        <Info>
          <Thumbnail {...comicsInfo} />
          <DescriptionBlock>
            <DescHeader>Description:</DescHeader>
            <Description>{comicsInfo ? comicsInfo.description : ''}</Description>
          </DescriptionBlock>
        </Info>
        <Characters characters={characters}/>

        {this.state.isLoading ?
          <Spinner />
          : null
        }
      </Container>
    )
  }
}

export default withRouter(Card)