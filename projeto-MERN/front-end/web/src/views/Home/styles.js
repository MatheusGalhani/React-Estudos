import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`

export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;

    button {
        background: none;
        border: none;
        outline:none;
    }
`;


export const Content = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Title = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;    
    border-bottom: 1px solid #20295f;
    margin-bottom: 20px;

    h3 {
        color: #20295f;
        position: relative;
        top: 30px;
        background: #fff;
        padding: 0 20px;
    }
`;