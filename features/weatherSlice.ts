import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: WeatherState = {
  weather: "Sunny",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    // mutate the weather
    mutateWeather(state, action: PayloadAction<string>) {
      state.weather = action.payload;
    },
  },
});

export const { mutateWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
