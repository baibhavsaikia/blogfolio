import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk(
    "post",
    async(arg, {getState, dispatch}) => {
        const state = getState();
        const { name, email, heading, content, category } = state.post.postDetails;
        const createdAt = new Date().toISOString();

        const data = {
            name,
            email,
            heading,
            content,
            category,
            createdAt,
        };
        const BASE_URL = 'http://localhost:5000'
        const response = await axios.post(
        `${BASE_URL}/posts`,
        JSON.stringify(data),
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
        );

        console.log(response.data);
        if (response.data.status === "SUCCESS") {
            dispatch(postActions.resetContent());
        } else {
            // alert("Could not process your request at the moment");
        }
    }
)



const postSlice = createSlice({
    name: 'post',
    initialState: {
        postDetails: {
            name: "",
            email: "",
            heading: "",
            content: "",
            category: "",
        },
        
    },
    reducers: {
        nameAdded (state, action) {
            state.postDetails.name = action.payload;
        },
        emailAdded (state, action) {
            state.postDetails.email = action.payload;
        },
        headingAdded (state, action) {
            state.postDetails.heading = action.payload;
        },
        contentAdded (state, action) {
            state.postDetails.content = action.payload;
        },
        categoryAdded (state, action) {
            state.postDetails.category = action.payload;
        },
        resetContent (state) {
            state.postDetails.name = "";
            state.postDetails.email = "";
            state.postDetails.heading = "";
            state.postDetails.content = "";
            state.postDetails.category = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state, action) => {
          state.isLoading = true;
          console.log("Loading...");
        });
        builder.addCase(fetchPost.fulfilled, (state, action) => {
          state.isLoading = false;
          console.log("Stopped loading. Success");
        });
        builder.addCase(fetchPost.rejected, (state, action) => {
          state.isLoading = false;
          console.log("Stopped loading. Failed");
        });
      },
})

export const postActions = postSlice.actions;

export default postSlice;