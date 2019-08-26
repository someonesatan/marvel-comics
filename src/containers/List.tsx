import React from 'react'
import { connect } from 'react-redux'

import { AppState } from '../store'
import { getComicsList } from '../store/comicsList/thunks'
import { setFilter } from '../store/comicsList/actions'
import { Comics, Filter } from '../store/comicsList/types'
import List from '../components/ComicsList'

interface ListProps {
  comicsList: Comics
  getComicsList: any
  setFilter: any
  filter: Filter
}

class Container extends React.Component<ListProps> {
  render() {
    return (
      <List
        filter={this.props.filter}
        setFilter={this.props.setFilter}
        comicsList={this.props.comicsList}
        getComicsList={this.props.getComicsList}
      />
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  comicsList: state.comics.comicsList,
  filter: state.comics.filter
})

export default connect(mapStateToProps, {
  getComicsList,
  setFilter
})(Container)
