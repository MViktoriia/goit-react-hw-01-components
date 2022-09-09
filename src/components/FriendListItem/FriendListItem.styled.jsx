import styled from 'styled-components';

export const Status = styled.span`
    display: block;
    text-align: center;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 15px;
    margin-left: 10px;

    background-color: ${props => {
        switch (props.isOnline) {
            case true:
                return 'rgb(1, 188, 1)';
            case false:
                return 'red';
            default:
                return 'blue'
    }
    }};
`;

export const Avatar = styled.img`
    margin-right: 5px;
`;

export const Name = styled.p`
    padding: 0;
    margin: 0;
`