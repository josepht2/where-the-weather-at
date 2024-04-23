"use client"

import {
    selectCurrentCityWeather,
    selectStatus,
} from "@/lib/features/weather/weatherSlice"
import { useAppSelector } from "@/lib/hooks"

export const Temperature = () => {
    const currentCityWeather = useAppSelector(selectCurrentCityWeather)
    const status = useAppSelector(selectStatus)
    
    if (!currentCityWeather || status !== 'idle') return null

    const {
        current: {
            temp_f,
            temp_c,
        },
    } = currentCityWeather

    return (
        <div className={'text-5xl'}>
            {`${temp_f}°F / ${temp_c}°C`}
        </div>
    )
}
  