import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userConnected: false,
	name: '',
	surname	: '',
};

export const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loggedStatus: (state, action) => {
			state.userConnected = !state.userConnected;
		},
		loggedName: (state, action) => {
			state.name = action.payload;
		},
		loggedSurname: (state, action) => {
			state.surname = action.payload;
		},
	},
});

export const { loggedStatus, loggedName, loggedSurname } = user.actions;
export default  user.reducer;
