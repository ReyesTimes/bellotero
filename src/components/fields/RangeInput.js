import React from 'react';
import styled from 'styled-components';

const sliderThumb = `
    -webkit-appearance: none;
    border: 6px solid #071eb3;
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background: #ffffff;
    cursor: pointer;
    box-shadow: 0 2px 8px 0 rgba(7, 30, 179, 0.24);
`;

const Input = styled.input`
    background: linear-gradient(to right,#071eb3 0%, #071eb3 75%, #f0f2ff 75%, #f0f2ff 100%);
    border-radius: 8px;
    height: 7px;
    width: 100%;
    outline: none;
    transition: background 450ms ease-in;
    -webkit-appearance: none;

    &[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        ${sliderThumb}* Add cool effects to your sliders! */
    }

/* All the same stuff for Firefox */
    &[type=range]::-moz-range-thumb {
        box-shadow: 0 2px 8px 0 rgba(7, 30, 179, 0.24);
        ${sliderThumb}
    }

    /* All the same stuff for IE */
    &[type=range]::-ms-thumb {
        box-shadow: 0 2px 8px 0 rgba(7, 30, 179, 0.24);
        ${sliderThumb}
    }
`;
function RangeInput ({ min = 0, max, value, fn }) {
    function changeEvnt(value, fn) {
        if (fn) {
            fn(value);
        }
    }

    function getPercentageFull(value, min, max) {
        return ((value - min) * 100) / (max - min)
    }

    return (
        <>
            <Input 
                type="range" 
                min={min} 
                max={max}
                onChange={(e) => changeEvnt(e.target.value, fn)} 
                value={value}
                style={{ background: `linear-gradient(to right, #071eb3 0%, #071eb3 ${getPercentageFull(value, min, max)}%, #f0f2ff ${getPercentageFull(value, min, max)}%, #f0f2ff 100%)` }}
            />
        </>
    );
}

export default RangeInput;