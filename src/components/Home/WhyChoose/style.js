import styled from 'styled-components'

export const Title = styled.h2`
    color: #121212;
    font-weight: bold;
    font-size: 45px;
    @media(max-width: 575px) {
        font-size: 28px;
    }
`
export const DescTitle = styled.p`
    color: #999999;
    padding: 20px 0;
    font-size: 18px;
`
export const TitleBox = styled.h3`
    color: #121212;
    font-weight: bold;
    font-size: 35px;
    padding: 10px 0;
    @media(max-width: 575px) {
        font-size: 24px;
    }
`
export const Desc = styled.p`
    font-size: 17px;
    line-height: 1.7;
`
export const Image = styled.img`
    width: 100%;
`