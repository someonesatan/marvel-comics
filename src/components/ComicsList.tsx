import * as React from 'react'
import styled from 'styled-components'

import Spinner from './Spinner'
import Comics from './Comics'
import { Comics as ComicsType, Filter as FilterType } from '../store/comicsList/types'
import Filter from './Filter'

interface ListProps {
  filter: FilterType
  comicsList: ComicsType
  getComicsList: (clearRecords: boolean, cb: (value: boolean) => void) => void
  setFilter: () => void
}
interface ListState {
  isLoading: boolean
  documentHeight: number
}

const Container = styled.div`
  width: 65vw; 
  margin: 0 auto;
  padding: 15px;
`
const ComicsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`


class List extends React.Component<ListProps, ListState> {

  constructor(props: ListProps) {
    super(props)

    this.state = {
      isLoading: false,
      documentHeight: 0
    }
  }

  componentDidMount() {
    this.scrollListner()
    this.getComics()
  }

  getComics = (clearRecords = false) => {
    this.setLoadingStatus(true)
    this.props.getComicsList(clearRecords, () => this.setLoadingStatus(false))
  }

  setLoadingStatus = (value: boolean) => {
    this.setState({ isLoading: value })
  }

  getComicsMap = () => {
    const comicsList = this.props.comicsList
    let comicsArray = []

    for(let key in comicsList) {
      comicsArray.push(
        <Comics key={comicsList[key].id} {...comicsList[key]} />
      )
    }

    return comicsArray
  }

  scrollListner = () => {
    window.onscroll = () => {
      const scrollHeight = window.innerHeight + window.pageYOffset

      if (scrollHeight === this.getDocumentHeight()) {
        this.getComics()
      }
    }
  }

  getDocumentHeight = () => {
    return Math.max(
      document.body.offsetHeight,
      document.body.scrollHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight
    )
  }

  render() {
    return (
      <Container>
        <Filter 
          setFilter={this.props.setFilter} 
          filter={this.props.filter} 
          getComics={this.getComics}
        />
        <ComicsList>
          {this.getComicsMap()}
        </ComicsList>
        {this.state.isLoading ?
          <Spinner />
          : null
        }
      </Container>
    )
  }
}

export default List