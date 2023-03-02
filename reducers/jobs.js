import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	jobs: 0,
	searchedJobName: '',
};

export const jobs = createSlice({
	name: 'jobs',
	initialState,
	reducers: {
		jobsCount: (state, action) => {
			state.jobs = action.payload;
			
		},
		searchJobSelected: (state, action) => {
			state.searchedJobName = action.payload;
			
		},
	
	},
});

export const { jobsCount, searchJobSelected } = jobs.actions;
export default  jobs.reducer;
