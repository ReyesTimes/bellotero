import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// C O M P O N E N T S
import LoaderCardInfo from './loaders/LoaderCardInfo.js';

const WrapperOverflow = styled.div`
    background-color: ${props => props.theme.colors.white};
    overflow: hidden;
    width: 94%;
    min-height: 260px;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    transition: 350ms cubic-bezier(.17,.67,.83,.67) transform;
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

function Carousel () {
    const testimonials = useSelector((state) => state.testimonial.list);
    const counter = useSelector((state) => state.testimonial.counter);
    const isLoading = useSelector((state) => state.testimonial.isLoading);

    function setPositionToTranslate() {
        return { transform: `translateX(-${counter * 100 }%)` }
    }
    return (
        <WrapperOverflow>
            {
                isLoading ? <LoaderCardInfo />: (
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
                )
            }
        </WrapperOverflow>
    );
}

export default Carousel;