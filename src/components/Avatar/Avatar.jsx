import React from 'react'
import { AvatarContainer, AvatarImage, AvatarName } from '../../styled-components/Avatar'

const Avatar = ({source, name}) => {
  return (
    <AvatarContainer>
        <AvatarImage src={source} alt={`avatar`}/>
        <AvatarName>{name}</AvatarName>
    </AvatarContainer>
  )
}

export default Avatar