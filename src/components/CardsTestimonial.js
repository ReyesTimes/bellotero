import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const WrapperOverflow = styled.div`
    background-color: ${props => props.theme.colors.white};
    overflow: hidden;
    width: 94%;
    min-height: 260px;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    transition: 450ms ease-out transform;
`;

const Card = styled.div`
    flex: 0 0 100%;
    padding: 2rem;
    display: flex;
    
    & div:first-child {
        flex: 0 0 32%;
    }

    & div:last-child {
        flex: 0 0 68%;
    }
`;

const Name = styled.h3`
    font-size: 2rem;
    margin-top: 0px;
    margin-bottom: .725rem;
`;

const Position = styled.span`
    color: ${props => props.theme.colors.grey};
`;

const Comment = styled.p`
    font-size: 1.714rem;
    font-weight: bold;
    line-height: 1.33;
`;

function CardsTestimonial () {
    const testimonials = useSelector((state) => state.testimonials);
    const counter = useSelector((state) => state.counter);

    function setPositionToTranslate() {
        return { transform: `translateX(-${counter * 100 }%)` }
    }
    return (
        <WrapperOverflow>
            <Container style={setPositionToTranslate()}>
                {testimonials.map((testimonial, key) => {
                    return (
                    <Card key={key}>
                        <div>
                            <Name>{testimonial.name}</Name>
                            <Position>{testimonial.position}</Position>
                        </div>
                        <div>
                            <Comment>
                                "{testimonial.comment}"
                            </Comment>
                        </div>
                    </Card>
                    );
                })}
            </Container>
        </WrapperOverflow>
    );
}

export default CardsTestimonial;