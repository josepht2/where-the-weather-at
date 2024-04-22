import type { PayloadAction } from "@reduxjs/toolkit"
import axios from 'axios'

import { createAppSlice } from "@/lib/createAppSlice"

export interface WeatherSliceState {
  cityHistory: { label: string, value: string }[]
  currentCityWeather?: any
  status: "idle" | "failed" | 'server_offline'
}

const initialState: WeatherSliceState = {
  cityHistory: [],
  currentCityWeather: undefined,
  status: 'idle'
}

export const weatherSlice = createAppSlice({
  name: "weather",
  initialState,
  reducers: (create) => ({
    deleteCity: create.reducer(
      (state, action: PayloadAction<string>) => {
        console.log(action)
        state.cityHistory = state.cityHistory.filter(
          ({ value }) => value !== action.payload
        )
      }
    ),
    getWeather: create.asyncThunk(
      async (city: string) => {
        const { data } = await axios.get(`http://localhost:8080/weather?city=${city}`)
        return data
      },
      {
        fulfilled: (state, action) => {
          state.status = "idle"
          state.currentCityWeather = action.payload

          const city = action.meta.arg
          const pastCity = state.cityHistory.find(({ value }) => value === city)

          if (!pastCity) {
            state.cityHistory.push({ label: city, value: city })
          }
        },
        rejected: (state, action) => {
          if (action.error.code === "ERR_NETWORK") {
            state.status = 'server_offline'
          } else {
            state.status = "failed"
          }
        },
      },
    ),
  }),
  selectors: {
    selectCityHistory: (weather) => weather.cityHistory,
    selectCurrentCityWeather: (weather) => weather.currentCityWeather,
    selectStatus: (weather) => weather.status
  }
})

export const {
  deleteCity,
  getWeather
} = weatherSlice.actions

export const {
  selectCityHistory,
  selectCurrentCityWeather,
  selectStatus
} = weatherSlice.selectors
