import request from "../../api";

export const getChannelDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "CHANNEL_DETAILS_REQUEST",
        });

        const { data } = await request.get("/channels", {
            params: {
                part: "snippet,statistics,contentDetails",
                id,
            },
        });

        dispatch({
            type: "CHANNEL_DETAILS_SUCCESS",
            payload: data.items[0],
        });
    } catch (error) {
        dispatch({
            type: "CHANNEL_DETAILS_FAIL",
            payload: error.response.data,
        });
    }
};

export const getSubscribedChannels = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: "SUBSCRIBED_CHANNELS_REQUEST",
        });

        const { data } = await request.get("/subscriptions", {
            params: {
                part: "snippet, contentDetails",
                mine: true,
                maxResults: 20,
            },
            headers: {
                Authorization: `Bearer ${getState().auth.accessToken}`,
            },
        });

        dispatch({
            type: "SUBSCRIBED_CHANNELS_SUCCESS",
            payload: data.items,
        });
    } catch (error) {
        dispatch({
            type: "SUBSCRIBED_CHANNELS_FAIL",
            payload: error.response.data,
        });
    }
};
