import styled from "styled-components";

export const ProgressWrapper = styled.div`
  background-color: #d8d8d8;
  border-radius: 20px;
  position: relative;
  margin: 15px 0;
  ${({size}) => {
    switch (size) {
      case 'xs': {
        return {
          height: 5,
          width: 50,
        };
      }
      case 'sm': {
        return {
          height: 10,
          width: 100,
        };
      }
      case 'md': {
        return {
          height: 20,
          width: 200,
        };
      }
      case 'l': {
        return {
          height: 30,
          width: 300,
        };
      }
      case 'xl': {
        return {
          height: 50,
          width: 500,
        };
      }
      default: {
        return {
          height: 30,
          width: 300,
        };
      }
    }
  }}
`;

export const ProgressDone = styled.div`
  background: ${(props) => props.color || `linear-gradient(to left, #f2709c, #ff9472)`};
  box-shadow: ${(props) => props.color || `0 3px 3px -5px #f2709c, 0 2px 5px #f2709c`};
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;
  font-size: ${(props) => props.size}px;
`;
