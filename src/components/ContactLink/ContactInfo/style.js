import styled from 'styled-components';

export const Title = styled.h2`
    font-size: 45px;
    margin: 5px 0 20px 0;
    text-align: center;
    @media(max-width: 575px){
        font-size: 28px;
    }
`
export const Desc = styled.p`
    color: #999;
    font-size: 18px;
    line-height: 1.7;
    margin-bottom: 50px;
    text-align: center;
    @media(max-width: 575px){
        font-size: 16px;
    }
`
export const InputLeft = styled.input`
    padding: 15px 35px;
    color: #ddd;
    border: 1px solid #ddd;
    float: left;
    width: 48%;
    margin-right: 2%;
    margin-left: 0;
    margin-bottom: 20px;
    @media(max-width: 575px){
        width: 100%;
        margin-right: 0%;
    }
`
export const InputRight = styled.input`
    padding: 15px 35px;
    color: #ddd;
    border: 1px solid #ddd;
    float: left;
    width: 48%;
    margin-right: 0;
    margin-left: 2%;
    margin-bottom: 20px;
    @media(max-width: 575px){
        width: 100%;
        margin-left: 0%;

    }
`

export const TextArea = styled.textarea`
    color: #ddd;
    border: 1px solid #ddd;
    width: 100%;
    height: 120px;
    padding: 20px;
    @media(max-width: 575px){
        width: 100%;
    }
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
    &:hover {
        color: #fff;
        text-decoration: none

    }
    @media(max-width: 991px) {
        padding: 10px 35px;
        font-size: 18px;
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
export const Image = styled.img`
    @media(max-width: 991px){
        width: 100%;
    }
`