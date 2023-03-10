import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const api = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rocketList: [],
  state: idle,
  error: null,
};

export const fetchRocket = createAsyncThunk('rockets/fetchRocket',
async()=> {
  try {
    const response = await axios.get(api);
    return response.data;
  } catch (error) {
    return error.message;
  }
})

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {

  },
});

export default rocketSlice.reducer;
