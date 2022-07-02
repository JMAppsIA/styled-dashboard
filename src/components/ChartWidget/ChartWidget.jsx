import React from "react";
import {
  ChartBox,
  ChartBoxBody,
  ChartBoxFooter,
  ChartBoxHeader,
  ChartBoxImage,
} from "../../styled-components/Chart";
import { Text } from "../../styled-components/Text";
import Badge from "../Badge/Badge";

const ChartWidget = ({
  hasIcon,
  isCustomIcon,
  icon,
  width,
  height,
  title,
  hasBadge,
  badgeSize,
  badgeType,
  badgeText,
  textType,
  description,
  footerContent,
}) => {
  return (
    <ChartBox>
      <ChartBoxHeader>
        {hasIcon ? (
          <>
            {isCustomIcon ? <ChartBoxImage src={icon} {...{ width }} {...{ height }} /> : icon}
            <Text>{title}</Text>
          </>
        ) : (
          <Text>{title}</Text>
        )}
      </ChartBoxHeader>
      <ChartBoxBody>
        {hasBadge ? (
          <>
            <Text thinItalic size={22}>
              {description}
            </Text>
            <Badge type={badgeType} size={badgeSize} textColor={textType} text={badgeText}/>
          </>
        ) : (
          <Text thinItalic size={22}>
            {description}
          </Text>
        )}
      </ChartBoxBody>
      <ChartBoxFooter>{footerContent}</ChartBoxFooter>
    </ChartBox>
  );
};

export default ChartWidget;
