import React from 'react'
import styled from 'styled-components'

import Router from './Router'

const Container = styled.div`
  width: 65vw; 
  margin: 0 auto;
  padding: 15px;
`

const App: React.FC = () => {
  return (
    <Container>
      <Router />
    </Container>
  )
}

export default App