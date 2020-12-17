import styled from 'styled-components';

export const Span = styled.span`
    color: #999;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    @media(max-width: 575px){
        font-size: 16px;
    }
`
export const Title = styled.h2`
    font-size: 45px;
    margin: 5px 0 20px 0;
    @media(max-width: 575px){
        font-size: 28px;
    }
`
export const Desc = styled.p`
    color: #999;
    font-size: 18px;
    line-height: 1.7;
    margin-bottom: 50px;
    @media(max-width: 575px){
        font-size: 16px;
    }
`
export const Box = styled.div`
    border: 1px solid #ddd;
    padding: 15px;

`

export const Image = styled.img`
    width: 500px;
    @media(max-width: 991px){
        width: 100%
    }
`
export const Over = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 0%;
    background: rgba(0 , 0 , 0 , .8);
`
export const BoxOver = styled.div`
    position: absolute;
    color: #fff;
    text-align: left;
    padding: 15px;
`
export const TitleBox = styled.h4`
    @media(max-width: 991px){
        font-size: 20px;
    }
`
export const DescBox = styled.p`
    font-size: 18px;
    @media(max-width: 991px){
        font-size: 16px;
    }
`
export const Icon = styled.div`
    position: absolute;
    bottom:0;
    right: 0;
    color: #fff;
    background: #0594A9;
    padding: 15px;
`
export const BoxImage = styled.div`
    position: relative;
    &:hover ${Over} {
        height: 100%;
    }
    &:hover ${BoxOver}{
        -webkit-opacity: 1;
        -moz-opacity: 1;
        -o-opacity: 1;
        -ms-opacity: 1;
        opacity: 1;
    }
    &:hover ${Icon}{
        -webkit-opacity: 1;
        -moz-opacity: 1;
        -o-opacity: 1;
        -ms-opacity: 1;
        opacity: 1;
    }
`