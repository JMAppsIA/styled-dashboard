import styled from "styled-components";

export const DashboardContainer = styled.div`
  /* background-color: var(--theme-bg-color); */
  background-color: var(--theme-color);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 100%;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  font-size: 15px;
  font-weight: 500;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 58px;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  padding: 0 30px;
  white-space: nowrap;
  background-color: var(--white);
  @media screen and (max-width: 480px) {
    padding: 0 16px;
  }
/* &>a {
      padding: 20px 30px;
      text-decoration: none;
      color: var(--inactive-color);
      border-bottom: 2px solid transparent;
      transition: 0.3s;
      @media screen and (max-width: 610px) {
        &:not(.main-header-link) {
          display: none;
        }
      }
      &.is-active,
      &:hover {
        color: var(--theme-color);
        border-bottom: 2px solid var(--theme-color);
      }
    } */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
`;

export const LeftSide = styled.div`
  flex-basis: 240px;
  border-right: 1px solid var(--border-color);
  background-color: var(--side-bar-bg);
  overflow: auto;
  scroll-behavior: smooth;
  flex-shrink: 0;
  max-height: 860px;
  @media screen and (max-width: 945px) {
    display: none;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  scroll-behavior: smooth;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--theme-color);
    padding: 20px 40px;
    height: 100%;
    /* background-color: var(--theme-bg-color); */
    max-height: 860px;
    overflow: auto;
    scroll-behavior: smooth;

`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 58px;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  padding: 0 30px;
  white-space: nowrap;
  @media screen and (max-width: 480px) {
    padding: 0 16px;
  }
/* &>a {
      padding: 20px 30px;
      text-decoration: none;
      color: var(--inactive-color);
      border-bottom: 2px solid transparent;
      transition: 0.3s;
      @media screen and (max-width: 610px) {
        &:not(.main-header-link) {
          display: none;
        }
      }
      &.is-active,
      &:hover {
        color: var(--theme-color);
        border-bottom: 2px solid var(--theme-color);
      }
    } */
`;
