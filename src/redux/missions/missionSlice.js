import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
    mission: [],
}


const missionSlice = createSlice({
    name: 'missions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    },
})

export default missionSlice.reducer;
