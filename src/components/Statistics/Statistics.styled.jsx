import styled from "styled-components";

export const StatisticsStyled = styled.section`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    min-width: 300px;
    max-height: 135px;
    margin-left: 15px;
    border-top: 1px solid #c4c4c4;
    border-left: 1px solid #c4c4c4;
    border-right: 1px solid #c4c4c4;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
`;

export const Title = styled.h2`
    margin: 0;
    text-transform: uppercase;
    font-size: 25px;
    text-align: center;
    padding: 25px;
    border-bottom: 1px solid #c4c4c4;
`;

export const Statlist = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

`;

export const Item = styled.li`
    font-size: 15px;
    width: 20%;
    padding: 10px;
    border-bottom: 1px solid #c4c4c4;
    height: 100%;
    background-color: ${getRandomHexColor};
    &:not(:last-child) {
        border-right: 1px solid #c4c4c4;
    
}
`;

export const StyledSpan = styled.span`
    display: block;
    text-align: center;
`;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

