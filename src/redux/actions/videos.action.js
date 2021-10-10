import request from "../../api";

export const getPopularVideos = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: "POPULAR_VIDEOS_REQUEST",
        });

        const { data } = await request.get("/videos", {
            params: {
                part: "snippet,contentDetails,statistics",
                chart: "mostPopular",
                regionCode: "US",
                maxResults: 20,
                pageToken: getState().popularVideos.nextPageToken,
            },
        });

        dispatch({
            type: "POPULAR_VIDEOS_SUCCESS",
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: "All",
            },
        });
    } catch (error) {
        dispatch({
            type: "POPULAR_VIDEOS_FAIL",
            payload: error.message,
        });
    }
};

export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
    try {
        dispatch({
            type: "POPULAR_VIDEOS_REQUEST",
        });

        const { data } = await request.get("/search", {
            params: {
                part: "snippet",
                maxResults: 20,
                pageToken: getState().popularVideos.nextPageToken,
                q: keyword,
                type: "video",
            },
        });

        dispatch({
            type: "POPULAR_VIDEOS_SUCCESS",
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: keyword,
            },
        });
    } catch (error) {
        dispatch({
            type: "POPULAR_VIDEOS_FAIL",
            payload: error.message,
        });
    }
};

export const getVideoById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "SELECTED_VIDEO_REQUEST",
        });

        const { data } = await request.get("/videos", {
            params: {
                part: "snippet,statistics",
                id,
            },
        });

        console.log(data);

        dispatch({
            type: "SELECTED_VIDEO_SUCCESS",
            payload: data.items[0],
        });
    } catch (error) {
        dispatch({
            type: "SELECTED_VIDEO_FAIL",
            payload: error.message,
        });
    }
};

export const getRelatedVideos = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "RELATED_VIDEOS_REQUEST",
        });

        const { data } = await request.get("/search", {
            params: {
                part: "snippet",
                relatedToVideoId: id,
                maxResults: 15,
                type: "video",
            },
        });

        dispatch({
            type: "RELATED_VIDEOS_SUCCESS",
            payload: data.items,
        });
    } catch (error) {
        dispatch({
            type: "RELATED_VIDEOS_FAIL",
            payload: error.response.data.message,
        });
    }
};

export const getVideosBySearch = (keyword) => async (dispatch) => {
    try {
        dispatch({
            type: "SEARCHED_VIDEOS_REQUEST",
        });

        const { data } = await request.get("/search", {
            params: {
                part: "snippet",
                maxResults: 20,
                q: keyword,
                type: "video",
            },
        });

        dispatch({
            type: "SEARCHED_VIDEOS_SUCCESS",
            payload: data.items,
        });
    } catch (error) {
        dispatch({
            type: "SEARCHED_VIDEOS_FAIL",
            payload: error.message,
        });
    }
};

export const getVideosByChannel = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "CHANNEL_VIDEOS_REQUEST",
        });

        const {
            data: { items },
        } = await request.get("/channels", {
            params: {
                part: " contentDetails",
                id,
            },
        });

        const uploadPlaylistId =
            items[0].contentDetails.relatedPlaylists.uploads;

        const { data } = await request.get("/playlistItems", {
            params: {
                part: "snippet, contentDetails",
                playlistId: uploadPlaylistId,
                maxResults: 30,
            },
        });

        dispatch({
            type: "CHANNEL_VIDEOS_SUCCESS",
            payload: data.items,
        });
    } catch (error) {
        dispatch({
            type: "CHANNEL_VIDEOS_FAIL",
            payload: error.response.data.message,
        });
    }
};
