import styled from 'styled-components';

export const Desc = styled.p`
    font-size: 16px;
    color: #777;
`
export const Title = styled.h4`
    color: #0594A9;
    font-size: 22px;
    margin-bottom: 25px;
    @media(max-width: 575px){
        margin-top: 20px;
    }

`
export const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`
export const Li = styled.li`
    padding: 7px 0;
    color: #777;
    cursor: pointer;
    &:hover {
        color: #0594A9;
    }
`
export const Input = styled.input`
    border: none;
    border-bottom: 2px solid #333;
    width: 100%;
    margin-bottom: 20px;
    position: relative;
`

export const Icon = styled.i`
    position: absolute;
    left: 90%;;
`
export const IconSocial = styled.i`
    background: ${(props) => (props.facebook ? '#3b5999' : '')};
    background: ${(props) => (props.git ? '#131418' : '')};
    background: ${(props) => (props.twitter ? '#55acee' : '')};
    background: ${(props) => (props.dribble ? '#ea4c89' : '')};
    background: ${(props) => (props.pinter ? '#bd081c' : '')};
    color: #fff;
    font-size: 20px;
    padding: 12px;
    cursor: pointer;
`