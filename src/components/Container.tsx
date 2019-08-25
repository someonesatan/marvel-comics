import React from 'react'
import { connect } from 'react-redux'

import { AppState } from '../store'
import { getComicsList } from '../store/comics/thunks'
import { Comics } from '../store/comics/types'
import List from './ComicsList'

interface AppProps {
  comicsList: Comics[]
  getComicsList: any
}

class Container extends React.Component<AppProps> {
  render() {
    return (
      <List
        comicsList={this.props.comicsList}
        getComicsList={this.props.getComicsList}
      />
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  comicsList: state.comics.comicsList
})

export default connect(mapStateToProps, {
  getComicsList
})(Container)
