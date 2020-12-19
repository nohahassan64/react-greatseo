import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    background: #F8F9FA;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 50px;
    padding-right: 50px;

@media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
    }
`;
export const NavLogo = styled(Link)`
    cursor: pointer;
    display: flex;
    justify-self: flex-start;
    align-items: center;
`;
export const MobileIcon = styled.div`
    display: none;

@media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100% , 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #7C7C7D;
}
`;
export const NavMenu = styled.ul`
    list-style: none;
    text-align: center;
    display: flex;
    align-items: center;
    background-color: #209FB2;
    border-radius: 5px;
    border: 1px solid #209FB2;
    height: 60px;
    margin: auto 0;
    padding-left: 0;

@media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 90vh;
    width: 100%;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease-in-out;
}
`;
export const NavItem = styled.li`
    height: 60px;

@media screen and (max-width: 960px) {
    width: 100%;
    padding: 40px 0;

}
`;
export const NavLinks = styled(Link)`
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 12px 18px;
    position: relative;
    
    z-index: 1;
    :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;
    background: #000;
    z-index: -1;
    transition: all .5s ease-in-out ;
    border-radius: 5px;
    }
    &:hover {
        color: #fff;
        text-decoration: none;
        :before {
            height: 100%;
        }
    }


@media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
        color: #fff;
        transition: all 0.5s ease-in-out;
    }
}
`;
