const initialState = {
    counter: 0,
    testimonialTitle: 'Our customers love us',
    testimonials: [
        {
            name: 'Pete Zahut',
            comment: "It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail",
            position: "Chief @ Maniak",
        },
        {
            name: 'Pete Zahut',
            comment: "It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail",
            position: "Chief @ Maniak",
        },
    ],
};

const reducer = (state = initialState, action) => {
    if (action.type === 'SET_TESTIMONIAL_TITLE') {
        return {
            ...state,
            title: state.title,
        };
    }

    return state;
};

export default reducer;