import React from 'react'
import { connect } from 'react-redux'

import { AppState } from '../store'
import { getComicsInfo, getCharacters } from '../store/comicsCard/thunks'
import { clearInfo } from '../store/comicsCard/actions'
import { ComicsInfo, Character } from '../store/comicsCard/types'
import ComicsCard from '../components/card'

interface CardProps {
  getComicsInfo: any
  getCharacters: any
  comicsInfo: ComicsInfo
  clearInfo: () => void
  characters: Character[]
}

class Container extends React.Component<CardProps> {
  render() {
    return (
      <ComicsCard
        getCharacters={this.props.getCharacters}
        characters={this.props.characters}
        clearInfo={this.props.clearInfo}
        getComicsInfo={this.props.getComicsInfo}
        comicsInfo={this.props.comicsInfo}
      />
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  comicsInfo: state.comicsCard.comicsInfo,
  characters: state.comicsCard.characters
})

export default connect(mapStateToProps, {
  getComicsInfo,
  clearInfo,
  getCharacters
})(Container)
