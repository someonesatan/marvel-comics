import * as React from 'react'
import styled from 'styled-components'

const StyledSpinner = styled.img`
  margin: 15px 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Spinner: React.FC = () => (
  <StyledSpinner src='/spinner.svg'/>
)

export default Spinner