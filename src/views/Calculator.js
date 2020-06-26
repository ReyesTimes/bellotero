import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// U T I L I T I E S  styled-componets
import { Wrapper, Main, Title } from '../styles/utilities.js';

// C O M P O N E N T S
import CalculatorHandle from '../components/CalculatorHandle.js';

const Container = styled.section`
    display: flex;
    justify-content: space-between;

    & > div {
        flex: 0 0 50%;
    }
`;

const WrapperMsg = styled.div`
    width: 70%;
`

const TestimonialTitle = styled(Title)`
  display: unset;
  line-height: 1.6;
`;

const ContainerTitle = styled.div`
  margin-bottom: 2rem;
`;

const Description = styled.p`
    color: ${props => props.theme.colors.black};
    font-size: 16px;
    line-height: 1.5;
    font-weight: normal;
`;

const CounterView = () => {
    const title = useSelector((state) => state.counterTitle);
    const description = useSelector((state) => state.counterDescription);

    return (
        <Main>
            <Wrapper>
                <Container>
                    <div>
                        <WrapperMsg>
                            <ContainerTitle>
                                <TestimonialTitle>{title}</TestimonialTitle>
                            </ContainerTitle>
                            <Description>{description}</Description>
                        </WrapperMsg>
                    </div>
                    <div>
                        <CalculatorHandle />
                    </div>
                </Container>
            </Wrapper>
        </Main>
    )
};

export default CounterView;