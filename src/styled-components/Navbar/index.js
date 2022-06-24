import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const NavLeftSide = styled.div`
  flex: 4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavRightSide = styled.div`
  justify-content: flex-end;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 16px 0 40px;
  margin-left: auto;
  flex-shrink: 0;
  svg {
    width: 22px;
    flex-shrink: 0;
  }
`;
