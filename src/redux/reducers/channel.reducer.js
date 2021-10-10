export const channelDetailsReducer = (
    state = {
        loading: true,
        channel: {},
    },
    action
) => {
    const { type, payload } = action;

    switch (type) {
        case "CHANNEL_DETAILS_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "CHANNEL_DETAILS_SUCCESS":
            return {
                ...state,
                loading: false,
                channel: payload,
            };
        case "CHANNEL_DETAILS_FAIL":
            return {
                ...state,
                channel: null,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};

export const subscribedChannelsReducer = (
    state = {
        loading: true,
        channels: {},
    },
    action
) => {
    const { type, payload } = action;

    switch (type) {
        case "SUBSCRIBED_CHANNELS_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "SUBSCRIBED_CHANNELS_SUCCESS":
            return {
                ...state,
                loading: false,
                channels: payload,
            };
        case "SUBSCRIBED_CHANNELS_FAIL":
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};
