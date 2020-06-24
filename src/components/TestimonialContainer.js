import React from 'react';
import styled from 'styled-components';

import { getTestimonials } from '../services/reqHandle.js';

const Container = styled.div`
    background-color: ${props => props.theme.colors.white};
`

const ActionsContainer = styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    width: 240px;
    height: 56px;
    
    & > div {
        flex: 0 50%;
    }
    `;

const ActionsCurrentPage = styled.div`
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    font-stretch: normal;
    font-style: italic;
    line-height: 1;
    letter-spacing: 0.69px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: ${props => `1px solid ${props.theme.colors.white}`};
    `;

const ActionsButtons = styled.div`
    display: flex;
`;

const BtnAction = styled.button`
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    flex: 0 50%;
    border: none;
`;

function TestimonialContainer() {
    getTestimonials();
    return (
        <Container>
            <ActionsContainer>
                <ActionsCurrentPage>1/4</ActionsCurrentPage>
                <ActionsButtons>
                    <BtnAction>left</BtnAction>
                    <BtnAction>right</BtnAction>
                </ActionsButtons>
            </ActionsContainer>
        </Container>
    );
};

export default TestimonialContainer;