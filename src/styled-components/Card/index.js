import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20;
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--theme-color);
  border-radius: 14px;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  height: auto;
  width: 100%;
  height: 100%;
  overflow: hidden;
  ${({hasBackgroundColor, hasBackgroundImage,imageBg, colorBg, linearGradient}) => {
    switch(true) {
      case hasBackgroundColor: {
        return {
          backgroundColor: colorBg
        };
      }
      case hasBackgroundImage: {
        return {
          backgroundImage: `url(${imageBg}), 
            linear-gradient(
              to right top,
              ${linearGradient}
            )
          `,
        }
      }
      default: {
        return null
      }
    }
  }}
  @media screen and (max-width: 510px) {
    padding: 20px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  
  ${({hasPadding, centerContent}) => {
    switch(true) {
      case hasPadding: {
        return {
          padding: '20px 40px'
        };
      }
      case centerContent: {
        return {
          alignItems: 'center',
  alignContent: 'center'
        };
      }
      default: {
        return null;
      }
    }
  }}
  @media screen and (max-width: 415px) {
    padding: 20px;
  }
`;

export const CardTitle = styled.h3`
  display: flex;
  align-items: center;
  margin: 0;
  svg {
    width: 28px;
    margin-right: 14px;
  }
`;

export const CardDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-top: 16px;
  line-height: 1.7em;
  color: #ebecec;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-bg);
  border: none;
  padding: 8px 26px;
  color: #fff;
  border-radius: 20px;
  margin-top: 16px;
  cursor: pointer;
  transition: 0.3s;
  width: 92px;
  white-space: nowrap;
`;

export const CardImage = styled.img`
  width: 186px;
  height: 100px;
  -o-object-fit: cover;
  object-fit: cover;
  margin-top: -25px;
  -o-object-position: center;
  object-position: center;
`;

export const CardDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20px);
  font-size: 16px;
  background-color: var(--side-bar-bg);
  border-radius: 14px;
  border: 1px solid var(--theme-bg-color);
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.02);
    background-color: var(--theme-bg-color);
  }
  svg {
    width: 28px;
    border-radius: 6px;
    margin-right: 12px;
    flex-shrink: 0;
  }

  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");

  overflow: hidden;
  @media screen and (max-width: 1110px) {
    width: calc(50% - 20px);
    &:last-child {
      /* margin-top: 20px; */
      /* margin-left: 0px; */
    }
  }
  @media screen and (max-width: 565px) {
    width: calc(100% - 20px);
    margin-top: 20px;
    & + .app-card {
      margin-left: 0;
    }
  }
`;

export const CardDescriptionWrapper = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 20px;
`;

export const CardDescriptionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-top: 16px;
`;

export const CardButtonMenu = styled.div`
  width: 5px;
  height: 5px;
  background-color: var(--button-inactive);
  border-radius: 50%;
  box-shadow: 7px 0 0 0 var(--button-inactive),
    14px 0 0 0 var(--button-inactive);
  margin: 0 12px;
`;
