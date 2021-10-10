import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import {
    channelDetailsReducer,
    subscribedChannelsReducer,
} from "./channel.reducer";
import { commentsListReducer } from "./comments.reducer";
import {
    channelVideosReducer,
    popularVideosReducer,
    relatedVideosReducer,
    searchedVideosReducer,
    selectedVideoReducer,
} from "./videos.reducer";

export const reducer = combineReducers({
    auth: authReducer,
    popularVideos: popularVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelDetailsReducer,
    commentsList: commentsListReducer,
    relatedVideos: relatedVideosReducer,
    searchedVideos: searchedVideosReducer,
    subscribedChannels: subscribedChannelsReducer,
    channelVideos: channelVideosReducer,
});
