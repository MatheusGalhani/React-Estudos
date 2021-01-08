import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`


export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
`;

export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    img {
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;
    }

    button {
        background: none;
        border: none;
        outline: none;
    }

    .inative {
        opacity: 0.5;
    }
`;


export const InputField = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span {
        color: #707070;
        margin: 5px 0;
    }

    input {
        font-size: 16px;
        padding: 15px;
        border: none;
        outline: none;
        border-bottom: 1px solid #ee6b26;
    }

`;

export const TextAreaField = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span {
        color: #707070;
        margin: 5px 0;
    }

    textarea {
        font-size: 16px;
        padding: 15px;
        border: 1px solid #ee6b26;
        border-radius: 10px;
        outline: none;
    }
`;

export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        color: #20295f;
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
        background: none;
        border: none;
        outline: none;
        
        &:hover {
            opacity: 0.7;
        }
    }

    div {
        display: flex;
        align-items: center;
        color: #ee6b26;
        font-weight: bold;
        font-size: 18px;
    }
`;

export const Save = styled.div`
    width: 100%;
    margin-top: 40px;

    button{
        width: 100%;
        background: #ee6b26;
        color: #fff;
        border: none;
        outline: none;
        font-weight: bold;
        font-size: 20px;
        border-radius: 30px;
        padding: 20px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }

`;