import React from 'react'
import { connect } from 'react-redux'

import ComicsCard from '../components/ComicsCard'

interface CardProps {
}

class Container extends React.Component<CardProps> {
  render() {
    return (
      <ComicsCard/>
    )
  }
}

const mapStateToProps = (state: CardProps) => ({
})

export default connect(mapStateToProps)(Container)
