import styled from "styled-components";

export const TransactionHistoryTable = styled.table`
    font-family: 'Lucida Sans Unicode', 'Lucida Grande', Sans-Serif;
    font-size: 12px;
    border-collapse: collapse;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    text-align: start;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
    overflow: hidden;
`;

export const StyledTh = styled.th`
    background: #afcde7;
    color: white;
    padding: 10px 20px;
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: white;
    :first-child {
        text-align: left;
    }
`;

export const StyledTd = styled.td`
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: white;
    background: #d8e6f3;
    :first-child {
        text-align: left;
        background: #afcde7;
        color: white;
        padding: 10px 20px;
    }

`

