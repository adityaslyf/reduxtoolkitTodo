import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: nanoid(),
            text: "Learn Redux Toolkit",
        }
    ],
    status: "idle",
    error: null,
};













