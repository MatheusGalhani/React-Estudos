import styled from 'styled-components';


export const Container = styled.div`
    width: 260px;
    height: 60px;
    background: ${props => props.actived ? '#ee6b26' : '#20295f'};
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    cursor: pointer;

    img {
        width: 25px;
        height: 25px;
    }

    span {
        color: #fff;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    &:hover {
            background-color: #ee6b26;
    }
`;