import React from 'react'
import styled from 'styled-components';
import logo  from '../assets/img/bellotero-logo.svg';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Wrapper = styled(HeaderWrapper)`
    max-width: 768px;
    margin: 0 auto;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        margin: 0px;
        padding: 0px;
        display: flex;
        list-style: none;
    }
`;

const Logo = styled.div`

`;

function Header () {
    return (
        <Wrapper>
            <Logo>
                <img src={logo} alt="Ir a inicio" />
            </Logo>
            <Nav>
                <ul>
                    <li></li>
                </ul>
            </Nav>
        </Wrapper>
    );
}

export default Header;