import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
  rockets: [],
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {

  },
});

export default rocketSlice.reducer;
