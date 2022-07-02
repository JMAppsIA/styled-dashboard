import React from "react";
import {
  ProgressDone,
  ProgressWrapper,
} from "../../styled-components/ProgressBar";
import { Text } from "../../styled-components/Text";

const ProgressBar = ({ size, done, hasInnerText, textColor, textSize, color }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <ProgressWrapper {...{ size }}>
      {hasInnerText ? (
        <ProgressDone style={style} size={textSize} {...{color}}>
          <Text regular color={textColor} size={textSize}>{done}%</Text>
        </ProgressDone>
      ) : (
        <ProgressDone style={style} {...{color}}/>
      )}
    </ProgressWrapper>
  );
};

export default ProgressBar;
