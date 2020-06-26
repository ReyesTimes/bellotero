const initialState = {
    counter: 0,
    testimonialTitle: 'Our customers love us',
    testimonials: [],
    currentTestimonial: 0,
    counterTitle: 'Save more with Bellotero.io',
    counterDescription: 'With Bellotero.io you save time and money make real-time decisions that boost your business and your bottom line. Get less wrongfully blocked payments, save time on bookkeeping and no need to worry about safety.',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TESTIMONIAL_TITLE':
            return {
                ...state,
                testimonialTitle: action.title,
            };
        case 'INCREMENT_COUNTER':
            return {
                ...state,
                counter: state.counter + 1,
            }
        case 'DECREMENT_COUNTER':
            return {
                ...state,
                counter: state.counter - 1,
            }
        case 'SET_TESTIMONIALS_LIST':
            return {
                ...state,
                testimonials: [...action.reviews],
            }
        default:
            return state;
    }

};

export default reducer;