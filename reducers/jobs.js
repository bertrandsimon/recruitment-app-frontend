import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	jobs: 0,
};

export const jobs = createSlice({
	name: 'jobs',
	initialState,
	reducers: {
		jobsCount: (state, action) => {
			state.jobs = action.payload;
			
		},
	
	},
});

export const { jobsCount } = jobs.actions;
export default  jobs.reducer;
