import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';
import { Wrapper } from '../styles/utilities.js';

// I M A G E S
import logo  from '../assets/img/bellotero-logo.svg';

// S E R V I C E S
import { getMenu } from '../services/reqHandle.js';

// MY  H O O K S 
import useEffectOnlyOnce from '../useEffectOnlyOnce.js';

const HeaderWrapper = styled(Wrapper)`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const Item = styled.li`
    &.active a > span {
        border-top: ${props => `4px solid ${props.theme.colors.blue}`};
    }

    a {
        color: ${props => props.theme.colors.blue};
        text-decoration: none;
        padding: 0 24px;
        font-weight: 500;
        display: flex;
    }

    a > span {
        height: 100%;
        padding: 24px 0px;
        border-top: 4px solid transparent;
    }
`;

const Logo = styled.div`

`;

function Header () {
    const [menu, setMenu] = useState([]);
    const { pathname } = useLocation();

    useEffectOnlyOnce(() => {
        getMenu()
        .then(({ items }) => {
            setMenu(items);
        })
    });

    function giveActiveStyle(route = '', pathname = '') {
        return pathname.includes(route) ? 'active': '';
    }
    
    return (
        <HeaderWrapper as="header">
            <Logo>
                <img src={logo} alt="Ir a inicio" />
            </Logo>
            <Nav>
                <ul>
                    {menu.map((el, key) => {
                        return (
                            <Item key={key} className={giveActiveStyle(el.route, pathname)}>
                                <Link to={el.route}>
                                    <span>{el.text}</span>
                                </Link>
                            </Item>
                        )
                    })}
                </ul>
            </Nav>
        </HeaderWrapper>
    );
}

export default Header;