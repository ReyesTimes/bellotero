import React from 'react';
import styled, { css } from 'styled-components';

// C O M P O N E N T S
import RangeInput from './fields/RangeInput.js';
import InputNumber from './fields/InputNumber.js';

const Group = styled.div`
    margin-bottom: 4.125rem;
    ${props => props.extraMargin && css`
        margin-bottom: 5.42rem;
    `}
`

const Label = styled.label`
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
`;

const FieldSet = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
`;

function FormGroup({ marginGroup, min, max, value, fnEvent, icon }) {
    return (
        <>
            <Group  marginBottom={marginGroup}>
                <FieldSet>
                    <Label> Monthly<br /> ingredient spending</Label>
                    <InputNumber value={value} fn={fnEvent} icon={icon} />
                </FieldSet>
                <RangeInput min={min} max={max} value={value} fn={fnEvent}/>
            </Group>
        </>
    );
}

export default FormGroup;