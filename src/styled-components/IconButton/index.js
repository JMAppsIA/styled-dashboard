import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
  ${({ isLeft, isRight }) => {
    switch(true) {
      case isLeft: {
        return {
          marginRight: 16
        }
      }
      case isRight: {
        return {
          marginLeft: 16
        }
      }
      default: {
        return {
          margin: 0
        }
      }
    }
  }};

  &::hover {
    color: var(--hover-menu-bg);
  }

  & + svg {
    margin-left: 22px;
    @media screen and (max-width: 945px) {
      display: none;
    }
  }
`;

// export const Button = styled.button`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   place-items: center;
//   background-color: ${(props) => props.backgroundColor};
//   color: var(--primary-bg);
//   border: 0;
//   outline: none;
//   margin: 0;
//   padding: 0 10px;
//   border-radius: 6px;
//   z-index: 2;
//   cursor: pointer;
//   ${({ noSize, extraSmall, small, medium, large, extraLarge }) => {
//     switch (true) {
//       case noSize: {
//         return {
//           width: "0px",
//           height: "0px",
//         };
//       }
//       case extraSmall: {
//         return {
//           width: "40px",
//           height: "40px",
//         };
//       }
//       case small: {
//         return {
//           width: "126px",
//           height: "44px",
//         };
//       }
//       case medium: {
//         return {
//           width: "166px",
//           height: "43px",
//         };
//       }
//       case large: {
//         return {
//           width: "267px",
//           height: "55px",
//         };
//       }
//       case extraLarge: {
//         return {
//           width: "400px",
//           height: "57.75px",
//         };
//       }
//       default: {
//         return {
//           width: "400px",
//           height: "57.75px",
//         };
//       }
//     }
//   }}
//   @media (max-width: 535px) {
//     right: -3px;
//   }
// `;

export const IconNotificationBadge = styled.span`
  position: absolute;
  background-color: #3a6df0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  right: -6px;
  top: -6px;
  z-index: 2;
`;
