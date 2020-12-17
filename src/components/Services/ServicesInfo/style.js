import styled from 'styled-components';

export const ServicesInfoSection = styled.div`
    background: #F2F3F5;
`
export const Title = styled.h2`
    font-size: 45px;
    margin: 5px 0 20px 0;
    text-align: center;
    @media(max-width: 575px){
        font-size: 28px;
    }
`
export const DescTitle = styled.p`
    color: #999;
    font-size: 18px;
    line-height: 1.7;
    margin-bottom: 50px;
    text-align: center;
    @media(max-width: 575px){
        font-size: 16px;
    }
`

export const IconHeader = styled.i`
    position: absolute;
    right: 20px;
    top: 35%;
    font-size: 20px;
    @media(max-width: 575px){
        font-size: 18px;
    }
`
export const DescCard = styled.p`
    font-size: 17px;
    margin: 10px 0 29px 0;
    line-height: 1.7;
    @media(max-width: 575px){
        font-size: 16px;
    }
`
export const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`
export const Li = styled.li`
    font-size: 18px;
    padding: 7px 0;
    &:hover {
        background: #0594A9;
        color: #fff;
    }
    @media(max-width: 575px){
        font-size: 16px;
    }
`
export const Icon = styled.i`
margin: 0 10px;
`

export const Box = styled.div`
    background: #fff;
    margin: 50px;
    padding: 20px;
    text-align: center;

`
export const Image = styled.img`
    width: 100%;
`
export const TitleBox = styled.h4`
    font-size: 18px;
    @media(max-width: 575px){
        font-size: 16px;
    }
`
export const Desc = styled.p`
    font-size: 16px;
`
