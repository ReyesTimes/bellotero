import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

// C O M P O N E N T S
import RangeInput from '../components/RangeInput.js';
import InputNumber from '../components/InputNumber.js';

const FieldSet = styled.div`
    display: flex;
    justify-content: space-between;
    `

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
`

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

function getEstimateCostFoodSavings(monthlyIngredientSpending) {
    console.log(monthlyIngredientSpending)
    return parseFloat((monthlyIngredientSpending * .33).toFixed(2));
}

function getEstimateAnnualSavings(fullTimeEmployes, estimateCostFoodSavings) {
    return Math.round((fullTimeEmployes * 1337) + estimateCostFoodSavings);
}


function CalculatorHandle () {
    const [ monthlyIngredientSpending, setMonthlyIngredientSpending ] = useState(10);
    const [ fullTimeEmployes, setFullTimeEmployes ] = useState(1);
    //const [ estimateAnnualSavings ] = useState(getEstimateAnnualSavings(fullTimeEmployes, estimateCostFoodSavings))
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
            <Group>
                <FieldSet>
                    <Label> Monthly<br /> ingredient spending</Label>
                    <InputNumber value={monthlyIngredientSpending} fn={changeMonthlyIngredientSpending} icon="$"/>
                </FieldSet>
                <RangeInput min={10} max={100} value={monthlyIngredientSpending} fn={changeMonthlyIngredientSpending}/>
            </Group>
            <Group extraMargin>
                <FieldSet>
                    <Label> Full-time employes that<br /> process invoices</Label>
                    <InputNumber value={fullTimeEmployes} fn={changeFullTimeEmployes} minWidth={true}/>
                </FieldSet>
                <RangeInput min={1} max={10} value={fullTimeEmployes} fn={changeFullTimeEmployes}/>
            </Group>
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