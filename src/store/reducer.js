import { 
    SET_TESTIMONIAL_TITLE,
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    SET_TESTIMONIALS_LIST,
    SET_CALCULATOR_TITLE, 
    SET_CALCULATOR_DESCRIPTION,
    SET_IS_LOADING_TESTIMONIAL,
    SET_IS_LOADING_CALCULATOR
} from './actions.js';

const initialState = {
    counter: 0,
    testimonialTitle: '',
    testimonials: [],
    currentTestimonial: 0,
    calculatorTitle: '',
    calculatorDescription: '',
    isLoadingTestimonial: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TESTIMONIAL_TITLE:
            return {
                ...state,
                testimonialTitle: action.payload,
            };
        case SET_TESTIMONIALS_LIST:
            return {
                ...state,
                testimonials: [...action.payload],
            }
        case INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter - 1,
            }
        case SET_CALCULATOR_TITLE:
            return {
                ...state,
                calculatorTitle: action.payload
            }
        case SET_CALCULATOR_DESCRIPTION:
            return {
                ...state,
                calculatorDescription: action.payload,
            }
        case SET_IS_LOADING_TESTIMONIAL:
            return {
                ...state,
                isLoadingTestimonial: action.payload,
            }
        case SET_IS_LOADING_CALCULATOR:
            return {
                ...state,
                isLoadingCalculator: action.payload,
            }
        default:
            return state;
    }

};

export default reducer;