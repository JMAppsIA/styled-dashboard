import styled from 'styled-components'

export const ChartContainer = styled.div`
    width: 100%;
    height: 200px;
    flex: 7;
`;

export const ChartBox = styled.div`
    width: 166px;
    height: 180px;
    background-image: url('https://www.transparenttextures.com/patterns/cubes.png');
    background-color: var(--side-bar-bg);
    /* border: 1px solid var(--theme-bg-color); */
    border-radius: 8px;
    cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.04);
    background-color: var(--side-bar-bg);
  }
`;

export const ChartBoxHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 21px;
    margin-top: 20px;
`;

export const ChartBoxBody = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 21px;
    margin-top: 8px;
`;

export const ChartBoxFooter = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 21px;
    margin-top: 8px;
`;

export const ChartBoxImage = styled.img``;

