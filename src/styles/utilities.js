import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`;

export const Main = styled.div`
    background-color: ${props => props.theme.colors.ice_blue};
    padding: 121px 0px;
    `;

export const Title = styled.h1`
    font-size: 2.25rem;
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    display: inline-block;
    font-weight: 900;
    line-height: 1.11;
    letter-spacing: 0.77px;
    padding: 4px;
`;