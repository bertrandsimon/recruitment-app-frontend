import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const applyReducer = createSlice({
	name: 'applyReducer',
	initialState,
	reducers: {
		applyJob: (state, action) => {
			console.log('', state.value)
			state.value.push(action.payload);
			console.log('', state.value)
		},
		
		
	},
});

export const { applyJob } = applyReducer.actions;
export default  applyReducer.reducer;
