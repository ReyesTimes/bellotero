import React from 'react';
import styled from 'styled-components';

const Input = styled.input`

`;
function RangeInput ({ min = 0, max, value, fn }) {
    function changeEvnt(value, fn) {
        if (fn) {
            fn(value);
        }
        
    }

    return (
        <>
            <Input 
                type="range" 
                min={min} 
                max={max}
                onChange={(e) => changeEvnt(e.target.value, fn)} 
                value={value}
            />
        </>
    );
}

export default RangeInput;