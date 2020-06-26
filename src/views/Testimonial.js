import React from 'react';
import styled from 'styled-components';
import { Wrapper, Main, Title } from '../styles/utilities.js';
import TestimonialContainer from '../components/TestimonialContainer.js';

import { useSelector, useDispatch } from 'react-redux';

// MY  H O O K S 
import useEffectOnlyOnce from '../useEffectOnlyOnce.js';


// S E R V I C E S
import { getTestimonials } from '../services/reqHandle.js';

const TestimonialTitle = styled(Title)`
  margin-bottom: 80px;
`;

function App() {
  const title = useSelector((state) => state.testimonialTitle);
  const dispatch = useDispatch()

  useEffectOnlyOnce(() => {
    getTestimonials()
    .then(({ title, reviews }) => {
      dispatch({ type: 'SET_TESTIMONIALS_LIST', reviews });
      dispatch({ type: 'SET_TESTIMONIAL_TITLE', title })
    });
  });
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
