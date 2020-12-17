import styled from 'styled-components'

export const Box = styled.div`
    border-bottom: 3px dotted #F2F3F5;
    padding-bottom: 80px;
`

export const Span = styled.span`
    text-transform: uppercase;
    color: #99999F;
    font-size: 14px;
`
export const Title = styled.h2`
    color: #121212;
    font-weight: bold;
    font-size: 45px;
    @media(max-width: 575px) {
        font-size: 28px;
    }

`
export const Desc = styled.p`
    font-size: 16px;
`
export const Buttons = styled.div`
    margin: 60px 0 20px 0;
    border: 1px solid #ccc;
    overflow: hidden;
`
export const Link = styled.a`
    display: block;
    text-decoration: none;
    width: 48%;
    margin-right: 1%;
    margin-left: 1%;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    float: left;
    border: 1px solid;
    color: ${(props) => (props.primary ? '#fff' : '#333') };
    background-color: ${(props) => (props.primary ? '#0594A9' : 'transparent') };
    border-color: ${(props) => (props.primary ? '#0594A9' : 'transparent') };
    cursor: pointer;
    &:hover {
        background-color: #333333;
        border: 1px solid #333333;
        color: #fff;
        text-decoration: none;
}`

