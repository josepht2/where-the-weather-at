"use client"

import {
    selectCurrentCityWeather,
    selectStatus,
} from "@/lib/features/weather/weatherSlice"
import { useAppSelector } from "@/lib/hooks"

export const Condition = () => {
    const currentCityWeather = useAppSelector(selectCurrentCityWeather)
    const status = useAppSelector(selectStatus)
    
    if (!currentCityWeather || status !== 'idle') return null

    const {
        current: {
            condition: {
                text: conditionText,
                icon,
            },
        },
    } = currentCityWeather
    
    return (
        <div>
            <div className={'mt-2 text-2xl text-center'}>
                {conditionText}
            </div>
            <img
                className={'mt-3 w-36 h-36'}
                src={icon}
            />
        </div>
    )
}
  