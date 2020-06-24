import React from 'react';
import styled from 'styled-components';
import { Wrapper, Main, Title } from '../styles/utilities.js';
import TestimonialContainer from '../components/TestimonialContainer.js';

import { useSelector } from 'react-redux';

const TestimonialTitle = styled(Title)`
  margin-bottom: 80px;
`;

function App() {
  const title = useSelector((state) => state.testimonialTitle);

  return (
    <Main>
      <Wrapper>
        <TestimonialTitle>{ title }</TestimonialTitle>
        <TestimonialContainer />
      </Wrapper>
    </Main>
  );
}

export default App;
