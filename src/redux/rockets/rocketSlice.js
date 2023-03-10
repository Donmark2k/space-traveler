import { createSlice, createAsyncThunk } from '@redujs/toolkit';


const initialState = {
    rockets : [],
}


const rocketSlice = createSlice ({
    name : 'rockets',
    initialState,
    reducers: {},
    extraReducers : (builder) {

    }
});

export default rocketSlice.reducer;