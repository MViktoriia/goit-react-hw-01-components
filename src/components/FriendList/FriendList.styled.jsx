import styled from 'styled-components';

export const FriendListStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    margin-left: 15px;
    margin-right: 15px;
`;

export const Item = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-width: 250px;
    font-size: 15px;
    border: 1px solid #d0cfcf;
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;