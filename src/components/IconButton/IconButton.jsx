import React from 'react'
import { Button } from '../../styled-components/IconButton'

const IconButton = ({isIcon, children, backgroundColor, buttonWidth, buttonHeight, image, hasNotifications, notifications, ...props}) => {
  return (
    <Button {...props} {...{buttonWidth}} {...{buttonHeight}} {...{backgroundColor}} {...{isIcon}}>
        {children}
    </Button>
  );
}

export default IconButton