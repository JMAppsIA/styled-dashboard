import React from "react";
import { BadgeWrapper } from "../../styled-components/Badge";
import { Text } from "../../styled-components/Text";

const Badge = ({ type, size, textColor, text }) => {
  return (
    <BadgeWrapper {...{ type }} {...{ size }}>
      <Text regular size={13} color={textColor}>
        {text}
      </Text>
    </BadgeWrapper>
  );
};

export default Badge;
