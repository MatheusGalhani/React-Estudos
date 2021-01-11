import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const Content = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: #ee6b26;
        font-weight: bold;
    }

    p {
        color: #20295f;
        font-weight: bold;
    }
`;

export const QrCodeArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ValidationCode = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    
    span {
        text-transform: uppercase;
        font-weight: bold;
    }

    input {
        font-size: 18px;
        padding: 10px;
        text-align: center;
    }

    button {
        font-size: 18px;
        font-weight: bold;
        background: #ee6b26;
        color: #fff;
        padding: 10px;
        border-radius: 30px;
        border: none;
        outline: none;
        cursor: pointer;
        margin-top: 10px;

        &:hover {
            background: #20295f;
        }
    }
`;
