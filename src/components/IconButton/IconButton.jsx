import React from 'react'
import { ButtonContainer, Button } from '../../styled-components/IconButton'

const IconButton = ({isLeft, isRight, children, ...props}) => {
  return (
    <ButtonContainer {...{isLeft}} {...{isRight}}>
      {children}
    </ButtonContainer>
  );
}

export default IconButton