import {configureStore} from "@reduxjs/toolkit";
import formSlice from "./actions";

const store = configureStore({
    reducer: {
        form: formSlice
    }
})

export default store