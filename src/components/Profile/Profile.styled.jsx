import styled from 'styled-components';

export const ProfileStyled = styled.div`
    font-family: 'Roboto', sans-serif;
    color: #f6f9f9;
    background-color: #004c9390;
    border-radius: 5px;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
    padding-top: 30px;
    position: relative;
    width: 350px;
    max-width: 100%;
    text-align: center;
    height: 350px;
    overflow: hidden;
`;

export const Avatar = styled.img`
    margin: 0 auto 25px;
    display: block;
    width: 30%;
    height: auto;
    border-radius: 50%;
    border: 1px solid #f6f9f9;
    padding: 7px;
`;

export const Name = styled.p`
    padding: 0;
    margin: 0;
    color: #ffffff;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.19;
    margin-bottom: 15px;
`;

export const Tag = styled.p`
    padding: 0;
    margin: 0;
    color: #f0f0f0bb;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 15px;
`;

export const Location = styled.p`
    padding: 0;
    margin: 0;
    color: #f0f0f0bb;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 15px;
`;

export const Stats = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    font-weight: 500;
    list-style-type: none;
    font-size: 12px;
    padding-left: 0px;
    margin-bottom: 0;
    margin-top: 30px;
    background-color: #b9b6b6bb;
    border-top: 1px solid #f6f9f9;
`;

export const StatsItem = styled.li`
    width: 33.333%;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    &:not(:last-child) {
    border-right: 1px solid #f6f9f9;
}
`;

export const Label = styled.span`
    display: block;
    color: #f0f0f0bb;
    margin-bottom: 8px;
    text-align: center;
`;

export const Quantity = styled.span`
    display: block;
    text-align: center;
    color: #ffffff;
    font-size: 14px;
`;



