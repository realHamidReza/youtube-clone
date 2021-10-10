import request from "../../api";

export const getCommentsByVideoId = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "COMMENTS_LIST_REQUEST",
        });

        const { data } = await request.get("/commentThreads", {
            params: {
                part: "snippet",
                videoId: id,
            },
        });

        dispatch({
            type: "COMMENTS_LIST_SUCCESS",
            payload: data.items,
        });
    } catch (error) {
        dispatch({
            type: "COMMENTS_LIST_FAIL",
            payload: error.response.data.message,
        });
    }
};

export const addComment = (id, text) => async (dispatch, getState) => {
    try {
        const obj = {
            snippet: {
                videoId: id,
                topLevelComment: {
                    snippet: {
                        textOriginal: text,
                    },
                },
            },
        };

        await request.post("/commentThreads", obj, {
            params: {
                part: "snippet",
                videoId: id,
            },
            headers: {
                Authorization: `Bearer ${getState().auth.accessToken}`,
            },
        });

        dispatch({
            type: "CREATE_COMMENT_SUCCESS",
        });

        setTimeout(() => dispatch(getCommentsByVideoId(id)), 5000);
    } catch (error) {
        dispatch({
            type: "CREATE_COMMENT_FAIL",
            payload: error.response.data.message,
        });
    }
};
