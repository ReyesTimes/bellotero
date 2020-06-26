import { 
    SET_CALCULATOR_TITLE, 
    SET_CALCULATOR_DESCRIPTION,
    SET_IS_LOADING_CALCULATOR
} from '../actions.js';

const initialState = {
    title: '',
    calculator: '',
    isLoading: true,
};

export default function calculator (state = initialState, action) {
    switch (action.type) {
        case SET_CALCULATOR_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case SET_CALCULATOR_DESCRIPTION:
            return {
                ...state,
                description: action.payload,
            }
        case SET_IS_LOADING_CALCULATOR:
            return {
                ...state,
                isLoading: action.payload,
            }
        default:
            return state;
    }
};