import React from 'react';
import styled, { css } from 'styled-components';

const TitleRect = styled.div`
    background-color: ${props => props.theme.colors.blue};
    height: 47px;
    width: 390px;

    ${props => props.extraMargin && css`
        margin-bottom: 80px;
    `}
`;

function LoaderTestimonialTitle({ extraMargin = false }) {
    return (
        <>
            <TitleRect extraMargin={extraMargin} role="status" aria-label="Cargando"/>
        </>
    );
}

export default LoaderTestimonialTitle;