import axios from "axios";

const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params: {
        key: "AIzaSyBMjsEk76J23aNo-po6To3w0xQWU-Urp3Y",
    },
});

export default request;
