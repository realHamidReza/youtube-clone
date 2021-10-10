export const commentsListReducer = (
    state = {
        loading: true,
        comments: null,
    },
    action
) => {
    const { type, payload } = action;

    switch (type) {
        case "COMMENTS_LIST_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "COMMENTS_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                comments: payload,
            };
        case "COMMENTS_LIST_FAIL":
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};
