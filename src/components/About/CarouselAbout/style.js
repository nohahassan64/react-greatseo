import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Slide = styled.div`
    background-image: url(/images/pattern-4.png);
    background-size: cover;
    background-color: #0594a9;
    padding: 160px 0px 110px 0px;
`
export const Box = styled.div`
    color: #fff;
    text-align: center;
`
export const LinkHome = styled(Link)`
    font-size: 18px;
    margin-right: 5px;
    background: #333;
    color: #fff;
    padding: 8px;
    &:hover{
        color: #fff;
        text-decoration: none;
    }
    @media(max-width: 575px){
        font-size: 16px;
    }

`
export const Span = styled.span`
    font-size: 18px;
    margin-left: 5px;
    background: #333;
    padding: 8px;
    @media(max-width: 575px){
        font-size: 16px;
    }
    `
export const Title = styled.h2`
    font-size: 38px;
    margin-top: 25px;
    @media(max-width: 575px){
        font-size: 28px;
    }
`
export const Desc = styled.p`
    font-size: 18px;
    @media(max-width: 575px){
        font-size: 16px;
    }
`