import React from 'react';
import styled from 'styled-components';

// C O M P O N E N T S
import ActionsTestimonial from './ActionsTestimonial.js';
import Carousel from './Carousel.js';

const Container = styled.div`
    position: relative;
`

function TestimonialContainer() {
    return (
        <Container>
            <Carousel />
            <ActionsTestimonial />
        </Container>
    );
};

export default TestimonialContainer;