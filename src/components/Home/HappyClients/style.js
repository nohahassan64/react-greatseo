import styled from 'styled-components';

export const Title = styled.h2`
    color: #121212;
    font-weight: bold;
    font-size: 45px;
    @media(max-width: 575px){
        font-size: 28px;
    }
`
export const Desc = styled.p`
    color: #999;
    font-size: 18px;
    margin-bottom: 60px;
    width: 70%;
    text-align: center;
    margin: 30px auto;
    @media(max-width: 991px){
        width: 100%;
    }

`
export const BoxPerson = styled.div`
    overflow: hidden;
    background: #333333;
    width: 20%;
    margin: auto;
    -webkit-border-radius: 20px 20px 0 0;
    -moz-border-radius: 20px 20px 0 0;
    -o-border-radius: 20px 20px 0 0;
    -ms-border-radius: 20px 20px 0 0;
    border-radius: 20px 20px 0 0;
    padding: 5px 15px;
    @media(max-width: 991px){
        width: 40%;
    }
`
export const Image = styled.img`
    width: 30%;
    float: left;
    margin: 20px 0;
`
export const Name = styled.p`
    color: #fff;
    font-size: 18px;
    font-style: italic;
    margin-bottom: 0;
`
export const Job = styled.p`
    color: #777;
    font-size: 18px;
    font-style: italic;
    margin-top: 0;
`
export const Testim = styled.div`
    background: #0594A9;
    color: #fff;
    border: 5px solid #EE902F;
    width: 70%;
    margin: auto;
    padding: 30px;
    @media(max-width: 991px){
        width: 100%;
    }
`
export const Icon = styled.i`
    font-size: 40px;
    color: #333;
`
export const TitleTestim = styled.h3`
    display: inline-block;
    margin: 0 20px;
`
export const DescTestim = styled.p`
    font-size: 18px;
`