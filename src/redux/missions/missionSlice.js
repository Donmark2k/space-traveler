import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchMissions } from './missionSlice';

const BASE_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missionList: [],
  status: 'idle',
  error: null,
};

export const fetchMissions = createAsyncThunk('mission/fetchMissions', async() => {
try {
  const response = await axios.get(BASE_URL);
  return response.data;
} catch (error) {
  return error.message;
}
})

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase( fetchMissions.pending, (state)=> ({
      ...state,
      status: 'loading',
    }))
    .addCase(fetchMissions.fulfilled, (state, action) => ({
      ...state,
      missionList: action.payload.map((mission)=> ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      })),
      status: 'loaded',
    }))
    .addCase(fetchMissions.rejected, (state, action) => ({
      ...state,
      status: 'failed',
      error: [...state.error, action.error.message]
    }) );

  },
});

export default missionSlice.reducer;
