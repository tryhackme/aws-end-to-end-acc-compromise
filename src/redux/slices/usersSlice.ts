import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  allUsers: [],
  userLoading: false,
  loggedInUser: undefined,
};

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState: initialState,
  reducers: {
    allUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    loggedInUserAction: (state, action) => {
      state.loggedInUser = action.payload;
    },
    usersInitialState: (state, action) => {
      state.loggedInUser = undefined;
    },
  },
});

export const {allUsers, loggedInUserAction, usersInitialState} = usersSlice.actions;
export default usersSlice.reducer;
