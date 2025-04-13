// weatherSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (taskDescription) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${taskDescription}&appid=${API_KEY}`);
    const data = await response.json();
    return data;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default weatherSlice.reducer;
