import React from 'react';
import styled from 'styled-components';

const TitleRect = styled.div`
    background-color: ${props => props.theme.colors.loader};
    height: 36px;
    max-width: 150px;
    margin-bottom: .725rem;
    `

const SubTitleRect = styled.div`
    background-color: ${props => props.theme.colors.loader};
    height: 19px;
    max-width: 100px;
    `;

const Container = styled.div`
    padding: 2rem;
    display: flex;
    
    & > div {
        &:first-child {
            
            flex: 0 0 32%;
        }
        
        &:last-child {
            flex: 0 0 68%;
        }
    }
    `

const ParaRect = styled.div`
    margin-bottom: .75rem;
    height: 34px;
    width: 100%;
    background-color: ${props => props.theme.colors.loader};
`;

function LoaderCardInfo() {
    return (
        <Container role="status" aria-label="Cargando">
            <div aria-hidden="true">
                <TitleRect/>
                <SubTitleRect/>
            </div>
            <div>
                <ParaRect/>
                <ParaRect/>
                <ParaRect/>
            </div>
        </Container>
    );
}

export default LoaderCardInfo;