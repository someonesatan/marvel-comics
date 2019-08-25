import * as React from 'react'
import styled from 'styled-components'

import Comics from './Comics'
import { Comics as ComicsType } from '../store/comics/types'

interface ListProps {
  comicsList: ComicsType[]
  getComicsList: any
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

class List extends React.Component<ListProps> {

  componentDidMount() {
    this.props.getComicsList()
  }

  getComicsMap = () => (
    this.props.comicsList.map(comics => {
      return (
        <Comics key={comics.id} {...comics}/>
      )
    })
  )


  render() {
    return (
      <Container>
        {this.getComicsMap()}
      </Container>
    )
  }
}

export default List