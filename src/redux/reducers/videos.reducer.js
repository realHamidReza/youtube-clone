export const popularVideosReducer = (
    state = {
        videos: [],
        loading: false,
        nextPageToken: null,
        activeCategory: "All",
    },
    action
) => {
    const { type, payload } = action;

    switch (type) {
        case "POPULAR_VIDEOS_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "POPULAR_VIDEOS_SUCCESS":
            return {
                ...state,
                loading: false,
                videos:
                    state.activeCategory === payload.category
                        ? [...state.videos, ...payload.videos]
                        : payload.videos,
                nextPageToken: payload.nextPageToken,
                activeCategory: payload.category,
            };
        case "POPULAR_VIDEOS_FAIL":
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};

export const selectedVideoReducer = (
    state = {
        loading: true,
        video: null,
    },
    action
) => {
    const { type, payload } = action;

    switch (type) {
        case "SELECTED_VIDEO_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "SELECTED_VIDEO_SUCCESS":
            return {
                ...state,
                loading: false,
                video: payload,
            };
        case "SELECTED_VIDEO_FAIL":
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};

export const relatedVideosReducer = (
    state = {
        loading: true,
        videos: [],
    },
    action
) => {
    const { type, payload } = action;

    switch (type) {
        case "RELATED_VIDEOS_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "RELATED_VIDEOS_SUCCESS":
            return {
                ...state,
                loading: false,
                videos: payload,
            };
        case "RELATED_VIDEOS_FAIL":
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};

export const searchedVideosReducer = (
    state = {
        loading: true,
        videos: [],
    },
    action
) => {
    const { type, payload } = action;

    switch (type) {
        case "SEARCHED_VIDEOS_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "SEARCHED_VIDEOS_SUCCESS":
            return {
                ...state,
                loading: false,
                videos: payload,
            };
        case "SEARCHED_VIDEOS_FAIL":
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};

export const channelVideosReducer = (
    state = {
        loading: true,
        videos: [],
    },
    action
) => {
    const { type, payload } = action;

    switch (type) {
        case "CHANNEL_VIDEOS_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "CHANNEL_VIDEOS_SUCCESS":
            return {
                ...state,
                loading: false,
                videos: payload,
            };
        case "CHANNEL_VIDEOS_FAIL":
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};
