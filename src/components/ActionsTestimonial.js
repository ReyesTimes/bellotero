import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const ActionsContainer = styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    width: 240px;
    height: 56px;
    position: absolute;
    right: 0px;
    top: 89%;
    
    & > div {
        flex: 0 50%;
    }
    `;

const ActionsCurrentPage = styled.div`
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    font-stretch: normal;
    font-style: italic;
    line-height: 1;
    letter-spacing: 0.69px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: ${props => `1px solid ${props.theme.colors.white}`};
    `;

const ActionsButtons = styled.div`
    display: flex;
`;

const BtnAction = styled.button`
    font-size: 2rem;
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    flex: 0 50%;
    border: none;
    cursor: pointer;
`;

function ActionsTestimonial () {
    const counter = useSelector((state) => state.testimonial.counter);
    const length = useSelector((state) => state.testimonial.list.length);
    const isLoading = useSelector((state) => state.testimonial.isLoading);
    const dispatch = useDispatch()

    function isDecrementAllowed(type, counter) {
        if (type === 'DECREMENT_COUNTER' && counter > 0) {
            return true;
        }

        return false;
    }

    function isIncrementAllowed(type, counter, length) {
        if (type === 'INCREMENT_COUNTER' && (counter + 1) < length) {
            return true;
        }
        return false;
    }

    function changeCounter(type, counter, length) {
        if (isDecrementAllowed(type, counter) || isIncrementAllowed(type, counter, length)) {
            dispatch({ type });
        }
    }

    return (
        <ActionsContainer>
            <ActionsCurrentPage>
                {
                    isLoading ? 'X/X': `${counter + 1}/${length}`
                }
            </ActionsCurrentPage>
            <ActionsButtons>
                <BtnAction onClick={() => changeCounter('DECREMENT_COUNTER', counter, length)}>←</BtnAction>
                <BtnAction onClick={() => changeCounter('INCREMENT_COUNTER', counter, length)}>→</BtnAction>
            </ActionsButtons>
        </ActionsContainer>
    );
}

export default ActionsTestimonial;