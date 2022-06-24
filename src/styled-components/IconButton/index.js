import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  place-items: center;
  background-color: ${(props) => props.backgroundColor};
  color: var(--primary-bg);
  border: 0;
  outline: none;
  margin: 0;
  padding: 0 10px;
  border-radius: 6px;
  z-index: 2;
  cursor: pointer;
  ${({ noSize, extraSmall, small, medium, large, extraLarge }) => {
    switch (true) {
      case noSize: {
        return {
          width: "0px",
          height: "0px",
        };
      }
      case extraSmall: {
        return {
          width: "40px",
          height: "40px",
        };
      }
      case small: {
        return {
          width: "126px",
          height: "44px",
        };
      }
      case medium: {
        return {
          width: "166px",
          height: "43px",
        };
      }
      case large: {
        return {
          width: "267px",
          height: "55px",
        };
      }
      case extraLarge: {
        return {
          width: "400px",
          height: "57.75px",
        };
      }
      default: {
        return {
          width: "400px",
          height: "57.75px",
        };
      }
    }
  }}
  @media (max-width: 535px) {
    right: -3px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  width: 30px;
  height: 10px;
`;

export const IconNotificationBadge = styled.span`
  display: flex;
  justify-content: center;
  position: absolute;
  background: var(--danger);
  height: 6px;
  top: 0;
  right: 0;
  width: 6px;
  align-items: center;
  text-align: center;
  font-size: 10px;
  border-radius: 75%;
  color: white;
  border: 1px solid var(--danger);
`;
