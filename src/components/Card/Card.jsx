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
  CardWrapper,
} from "../../styled-components/Card";

const Card = ({ type }) => {
  return type === "info" ? (
    <CardWrapper>
      <CardContent>
        <CardTitle>
          <FontAwesomeIcon icon={faChartPie} />
          {`Your Stats`}
        </CardTitle>
        <CardDescription>{`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, quaerat ducimus. Voluptas delectus voluptate error minima fugiat maiores quia beatae. Aliquid quam nulla ratione expedita cumque error maiores, provident a!`}</CardDescription>
        <CardButton>{`Start Free`}</CardButton>
      </CardContent>
      <CardImage
        class="content-wrapper-img"
        src="https://assets.codepen.io/3364143/glass.png"
        alt=""
      />
    </CardWrapper>
  ) : (
    <CardDetailWrapper>
      <CardTitle>
        <FontAwesomeIcon icon={faChartPie} />
        {`Your Stats`}
      </CardTitle>
      <CardDescriptionWrapper>{`Edit, master and create fully proffesional videos`}</CardDescriptionWrapper>
      <CardDescriptionButtons>
        <CardButton>{`Start Free`}</CardButton>
        <CardButtonMenu />
      </CardDescriptionButtons>
    </CardDetailWrapper>
  );
};

export default Card;
