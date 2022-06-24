import styled from 'styled-components';

export const AvatarContainer = styled.div`
    display: flex;
    margin-left: 22px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    /* border-left: 1px solid var(--border-color); */
    padding: 5px;
`;

export const AvatarImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--hover-menu-bg);
    cursor: pointer;
`;

export const AvatarName = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-left: 12px;
`;