import React from 'react';
import styled from 'styled-components';
import { Wrapper, Main, Title } from '../styles/utilities.js';
import TestimonialContainer from '../components/TestimonialContainer.js';

const TestimonialTitle = styled(Title)`
  margin-bottom: 80px;
`;

function App() {
  return (
    <Main>
      <Wrapper>
        <TestimonialTitle>Our customers love us</TestimonialTitle>
        <TestimonialContainer />
      </Wrapper>
    </Main>
  );
}

export default App;
