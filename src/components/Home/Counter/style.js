import styled from 'styled-components';

export const CounterSection = styled.div`
    background: #F2F3F5;
`
export const Icon = styled.i`
    background: #ee902f;
    color: #fff;
    padding: 30px;
    font-size: 50px;
    text-align: center;
    transition: .5s;
    &:hover{
        background: #209FB2;
    }
`
export const Span = styled.span`
    display: block;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 0;
`
export const Desc = styled.p`
margin-top: 0;
font-size: 20px;
@media(max-width: 575px){
    margin-bottom: 35px;
}
`