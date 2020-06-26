import { getTestimonials, getCalculatorInfo } from '../services/reqHandle.js';

export const SET_TESTIMONIAL_TITLE = 'SET_TESTIMONIAL_TITLE';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const SET_TESTIMONIALS_LIST = 'SET_TESTIMONIALS_LIST';
export const SET_CALCULATOR_TITLE = 'SET_CALCULATOR_TITLE';
export const SET_CALCULATOR_DESCRIPTION = 'SET_CALCULATOR_DESCRIPTION';
export const SET_IS_LOADING_TESTIMONIAL = 'SET_IS_LOADING_TESTIMONIAL';
export const SET_IS_LOADING_CALCULATOR = 'SET_IS_LOADING_CALCULATOR';

export const setTestimonials = () => async (dispatch) => {
    try {
        dispatch({ type: SET_IS_LOADING_TESTIMONIAL, payload: true });
        const { reviews, title } = await getTestimonials();
        dispatch({ type: SET_TESTIMONIALS_LIST, payload: reviews });
        dispatch({ type: SET_TESTIMONIAL_TITLE, payload: title });
        dispatch({ type: SET_IS_LOADING_TESTIMONIAL, payload: false });
    } catch (e) {
        console.log('alert');
    }
}

export const setCalcutalorInfo = () => async (dispatch) => {
    try {
        dispatch({ type: SET_IS_LOADING_CALCULATOR, payload: true });
        const { calculator } = await getCalculatorInfo();
        const { title, description } = calculator;
        dispatch({ type: SET_CALCULATOR_TITLE, payload: title });
        dispatch({ type: SET_CALCULATOR_DESCRIPTION, payload: description });
        dispatch({ type: SET_IS_LOADING_CALCULATOR, payload: false });
    } catch (e) {
        console.log('alert', e);
    }
}