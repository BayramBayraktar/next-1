import { configureStore } from "@reduxjs/toolkit";
import Email from "./Slices/Email";
import Current from "./Slices/Current";

const Store = configureStore({
    reducer: {
        Email,
        Current
    }
})


export default Store;