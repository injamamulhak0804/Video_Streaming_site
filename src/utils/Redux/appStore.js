import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSilce from "./searchSlice";
import svideoSlice from "./svideoSlice";
import chatSlice from "./chatSlice";


const appStore = configureStore({
    reducer: {
        app: appSlice,
        search: searchSilce,
        sVid: svideoSlice,
        chat: chatSlice
    }
})

export default appStore;

