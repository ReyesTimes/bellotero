import { 
    SET_TESTIMONIAL_TITLE,
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    SET_TESTIMONIALS_LIST,
    SET_IS_LOADING_TESTIMONIAL,
} from '../actions.js';

const initialState = {
    counter: 0,
    title: '',
    list: [],
    isLoading: true,
};

export default function testimonial (state = initialState, action) {
    switch (action.type) {
        case SET_TESTIMONIAL_TITLE:
            return {
                ...state,
                title: action.payload,
            };
        case SET_TESTIMONIALS_LIST:
            return {
                ...state,
                list: [...action.payload],
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
        case SET_IS_LOADING_TESTIMONIAL:
            return {
                ...state,
                isLoading: action.payload,
            }
        default:
            return state;
    }

};