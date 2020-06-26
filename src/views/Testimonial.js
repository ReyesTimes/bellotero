import React from 'react';
import styled from 'styled-components';
import { Wrapper, Main, Title } from '../styles/utilities.js';

// C O M P O N E N T S
import TestimonialContainer from '../components/TestimonialContainer.js';
import LoaderTestimonialTitle from '../components/loaders/LoaderTestimonialTitle.js';

import { useSelector, useDispatch } from 'react-redux';

// MY  H O O K S 
import useEffectOnlyOnce from '../useEffectOnlyOnce.js';


// S E R V I C E S
import { setTestimonials } from '../store/actions.js';

const TestimonialTitle = styled(Title)`
  margin-bottom: 80px;
`;

function App() {
  const title = useSelector((state) => state.testimonial.title);
  const isLoading = useSelector((state) => state.testimonial.isLoading);
  const dispatch = useDispatch();

  useEffectOnlyOnce(() => {
    dispatch(setTestimonials());
  });
  return (
    <Main>
      <Wrapper>
        {
          isLoading ? <LoaderTestimonialTitle extraMagin={true} /> : (<TestimonialTitle>{ title }</TestimonialTitle>)
        }
        <TestimonialContainer />
      </Wrapper>
    </Main>
  );
}

export default App;
