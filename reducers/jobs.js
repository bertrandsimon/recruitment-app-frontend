import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	
	jobs: 0,
	searchedJobName: '',
	tagSelected: 'Manutention',
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
		jobTagSelected: (state, action) => {
			state.tagSelected = action.payload;
			
		},
	
	
	},
});

export const { jobsCount, searchJobSelected, jobTagSelected} = jobs.actions;
export default  jobs.reducer;
