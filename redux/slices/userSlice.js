import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    profilePicture: "",
    followers: 100,
    following: 200,
    posts: 300,
    about: "volved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    followedBy: ['elonMusk', 'billGates', 'markZuckerberg'],
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            return {
                ...state,
                username : action.payload.username,
                profilePicture : action.payload.profilePicture,
                followers : state.followers,
                following : state.following,
                posts : state.posts,
                about : state.about,
                followedBy : state.followedBy,
            }
        },
        logout: (state, action) => {
            return {
                ...state,
                username : "",
                profilePicture : "",
                followers : 0,
                following : 0,
                posts : 0,
                about : "",
                followedBy : [],
            }
        }
    }
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;