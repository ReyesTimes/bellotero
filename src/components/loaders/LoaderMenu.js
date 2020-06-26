import React from 'react';
import styled from 'styled-components';

const Loading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Rect = styled.div`
    height: 16px;
    width: 62px;
    margin: 24px;
    background-color ${props => props.theme.colors.loader};
`

function LoaderMenu() {
    return (
        <Loading role="status" aria-label="Cargando">
            <Rect aria-hidden="true"/>
            <Rect aria-hidden="true"/>
            <Rect aria-hidden="true"/>
            <Rect aria-hidden="true"/>
        </Loading>
    );
}

export default LoaderMenu;