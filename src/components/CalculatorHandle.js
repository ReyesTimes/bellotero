import React, { useState } from 'react';
import styled from 'styled-components';

// C O M P O N E N T S
import FormGroup from './FormGroup.js';

const ResultGroup = styled.div`
    display: flex;
    justify-content: flex-end;

    & > * {
        &:last-child {
            margin-left: 3.5rem;
        }
    }
`

const Result = styled.div`
    text-align: right;
`;

const TextResult = styled.p`
    display: block;
    font-size: 4.5rem;
    color: ${props => props.theme.colors.blue};
    font-weight: 500;
    line-height: 1;
    letter-spacing: 1px;
    margin-bottom: .75rem;
    padding-right: 0.5rem;

    &>span {
        font-size: 2rem;
    }
`

const TextMsg = styled.p`
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
`;

function getEstimateCostFoodSavings(monthlyIngredientSpending) {
    return parseFloat((monthlyIngredientSpending * .33).toFixed(2));
}

function getEstimateAnnualSavings(fullTimeEmployes, estimateCostFoodSavings) {
    return Math.round((fullTimeEmployes * 1337) + estimateCostFoodSavings);
}


function CalculatorHandle () {
    const [ monthlyIngredientSpending, setMonthlyIngredientSpending ] = useState(10);
    const [ fullTimeEmployes, setFullTimeEmployes ] = useState(1);
    
    function changeFullTimeEmployes(value) {
        setFullTimeEmployes(value);
    }
    
    function changeMonthlyIngredientSpending(value) {
        setMonthlyIngredientSpending(value);
    }

    function renderEstimateCostFoodSavings(value) {
        return getEstimateCostFoodSavings(value);
    }
    
    function renderEstimateAnnualSavings(monthlyIngredientSpending, fullTimeEmployes) {
        let estimateCostFoodSavings = getEstimateCostFoodSavings(monthlyIngredientSpending);
        
        return getEstimateAnnualSavings(fullTimeEmployes, estimateCostFoodSavings);
    }

    return (
        <>
            <FormGroup marginBottom={300} min={10} max={100} value={monthlyIngredientSpending} fnEvent={changeMonthlyIngredientSpending} icon="$"/>
            <FormGroup min={1} max={10} value={fullTimeEmployes} fnEvent={changeFullTimeEmployes} />
            <ResultGroup>
                <Result>
                    <TextResult>
                        <span>$</span>{renderEstimateCostFoodSavings(monthlyIngredientSpending)}
                    </TextResult>
                    <TextMsg>Estimated cost food savings</TextMsg>
                </Result>
                <Result>
                    <TextResult>
                        <span>$</span>{renderEstimateAnnualSavings(monthlyIngredientSpending, fullTimeEmployes)}
                    </TextResult>
                    <TextMsg>Your estimated annual savings</TextMsg>
                </Result>
            </ResultGroup>
        </>
    );
}

export default CalculatorHandle;