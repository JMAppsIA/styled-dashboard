import styled from "styled-components";

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
  overflow: hidden;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png"),
    linear-gradient(
      to right top,
      #cf4af3,
      #e73bd7,
      #f631bc,
      #fd31a2,
      #ff3a8b,
      #ff4b78,
      #ff5e68,
      #ff705c,
      #ff8c51,
      #ffaa49,
      #ffc848,
      #ffe652
    );
  @media screen and (max-width: 510px) {
    padding: 20px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 40px;
  @media screen and (max-width: 415px) {
    padding: 20px;
  }
`;

export const CardTitle = styled.h3`
  font-weight: 500;
  font-size: 17px;
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
  background-color: #3a6df0;
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
  width: calc(33.3% - 20px);
  font-size: 16px;
  background-color: var(--content-bg);
  border-radius: 14px;
  border: 1px solid var(--theme-bg-color);
  padding: 20px;
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
      margin-top: 20px;
      margin-left: 0px;
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
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6em;
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
