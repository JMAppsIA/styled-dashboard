import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  CardButton,
  CardButtonMenu,
  CardContent,
  CardDescription,
  CardDescriptionButtons,
  CardDescriptionWrapper,
  CardDetailWrapper,
  CardImage,
  CardTitle,
  CardWrapper
} from "../../styled-components/Card";

const Card = ({ type, hasBackgroundImage, hasBackgroundColor, colorBg, imageBg, linearGradient, hasPadding, centerContent, title, description, buttonLabel, icon, hasImage, image, hideButton }) => {
  return type === "info" ? (
    <CardWrapper {...{hasBackgroundImage}} {...{hasBackgroundColor}} {...{colorBg}} {...{imageBg}} {...{linearGradient}}>
      <CardContent {...{hasPadding}} {...{centerContent}}>
        <CardTitle>
          <FontAwesomeIcon icon={icon} />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
        {!hideButton && <CardButton>{buttonLabel}</CardButton>}
      </CardContent>
     { hasImage && <CardImage
        src={image}
        alt=""
      />}
    </CardWrapper>
  ) : (
    <CardDetailWrapper>
      <CardTitle>
        <FontAwesomeIcon icon={icon} />
        {title}
      </CardTitle>
      <CardDescriptionWrapper>{description}</CardDescriptionWrapper>
      <CardDescriptionButtons>
        <CardButton>{buttonLabel}</CardButton>
        <CardButtonMenu />
      </CardDescriptionButtons>
    </CardDetailWrapper>
  );
};

export default Card;
