import styled from "styled-components";

export const SideHeader = styled.div`
border-bottom: 1px solid var(--border-color);
width: 100%;
padding: 0 30px;
white-space: nowrap;
padding-top: 26px;
display: flex;
justify-content: center;
align-items: center;
`;

export const SideBody = styled.div`
  position: relative;
  height: 100%;
  outline: none;
  /* position: absolute; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 26px;
`;

export const SideFooter = styled.div`
  position: relative;
  padding: 8px 8px 14px;
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--border-color);
`;

export const SideWrapper = styled.div`
  margin-top: 20px;
`;

export const SideTitle = styled.div`
  color: var(--menu-title-color);
  margin-bottom: 14px;
  /* font-family: 'Gilroy'; */
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  svg {
    width: 16px;
    margin-right: 8px;
  }
`;

export const NotificationBadge = styled.span`
  position: absolute;
  background: var(--danger);
  border-radius: 4px;
  width: 16px;
  height: 16px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  right: -6px;
  top: -6px;
  & + svg {
    margin-left: 22px;
    @media screen and (max-width: 945px) {
      display: none;
    }
  }
  position: relative;
  top: 0;
  right: 0;
  margin-left: auto;
  width: 18px;
  height: 18px;
  font-size: 11px;
`;

export const ItemLink = styled.a`
    text-decoration: none;
    color: var(--item-link-color);
    display: flex;
    align-items: center;
    font-weight: 400;
    padding: 10px;
    font-size: 14px;
    border-radius: 6px;
    transition: 0.3s;
    background-color: ${({active}) => active ? 'var(--hover-menu-bg)' : 'transparent'};
    &:hover {
      color: var(--hover-menu-bg);
    }
    &:active{
        background-color: var(--hover-menu-bg);
        color: white;
    }
`;
