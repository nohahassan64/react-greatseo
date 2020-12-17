import styled from 'styled-components';

export const OurPricingSection = styled.div`
    background: #222124;
`
export const Title = styled.h2`
    color: #fff;
    font-size: 45px;
`
export const Desc = styled.p`
    color: #999;
    font-size: 18px;
    margin-bottom: 60px;
    @media(max-width: 575px){
        font-size: 16px;
    }
    `
export const Box = styled.div`
    background: #fff;
    @media(max-width: 767px){
        margin-bottom: 35px;
    }
`
export const Head = styled.div`
    background: #209FB2;
    color: #fff;
    padding: 40px;
    position: relative;
    &:hover {
        background: #EE902F;
    }
`
export const Sup = styled.span`
    position: absolute;
    top: 24%;
    left: 30%;
    @media(max-width: 991px){
        left: 17%
    }
    @media(max-width: 575px){
        left: 36%
    }

`
export const SpanPrice = styled.span`
    font-size: 60px;
    padding-right: 30px;
`
export const Span = styled.span`
    font-style: italic;
`
export const TitleBox = styled.p`
    margin-top: 0;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 6px;
`
export const Ul = styled.ul`
    list-style: none;
    margin: 30px 0 0 0;
    padding: 0;
`
export const Li = styled.li`
    color: #777;
    padding: 15px;
`
export const Link = styled.a`
    display: inline-block;
    margin: 40px 0;
    border: 3px solid #209FB2;
    background: #F2F3F5;
    color: #333;
    padding: 12px 50px;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    position: relative;
    z-index: 1;
    overflow: hidden;
    @media(max-width: 991px){
        padding: 10px 30px;
        font-size: 18px;
    }
    &:hover {
        color: #fff;
        text-decoration: none

    }
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        width: 0;
        height: 100%;
        background: #209FB2;
        -webkit-transition: all .5s ease-in-out ;
        -moz-transition: all .5s ease-in-out ;
        -o-transition: all .5s ease-in-out ;
        -ms-transition: all .5s ease-in-out ;
        transition: all .5s ease-in-out ;
            z-index: -1;
    }
    &:hover::before {
        width: 100%;
        left: 0;
    }
`