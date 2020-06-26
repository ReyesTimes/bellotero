import React from 'react';
import styled, { css } from 'styled-components';

const Input = styled.input`
    height: 52px;
    font-weight: 500;
    font-size: 2rem;
    padding: 12px 6px;
    text-align: right;
    line-height: 1.11;
    letter-spacing: 0.77px;
    max-width: 190px;
    color: ${props => props.theme.colors.black};
    border: ${props => `1px solid ${props.theme.colors.grey_light}`};
    background-color: ${props => props.theme.colors.white};

    ${props => props.minWidth && css`
        max-width: 67px;
    `}
`

const Content = styled.div`
    position: relative;
`;

const Icon = styled.i`
    position: absolute;
    color: ${props => props.theme.colors.black};
    opacity: 0.24;
    margin-left:12px;
    margin-top: 6px;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.67;
    letter-spacing: 0.51px;
`;
function InputNumber ({ value, fn, icon = '', minWidth = false }) {
    function changeEvnt(value, fn) {
        if (fn) {
            fn(value);
        }
    }

    return (
        <>
            { icon ? (
                <Content>
                    <Icon aria-hidden="true">{icon}</Icon>
                    {minWidth}
                    <Input type="text" value={value} money onChange={(e) => changeEvnt(e.target.value, fn)} minWidth={minWidth}/>
                </Content>): <Input type="text" value={value} money onChange={(e) => changeEvnt(e.target.value, fn)} minWidth={minWidth} />}
        </>
    );
}

export default InputNumber;