"use client"

import {
    selectCurrentCityWeather,
    selectStatus,
} from "@/lib/features/weather/weatherSlice"
import { useAppSelector } from "@/lib/hooks"

export const Location = () => {
    const currentCityWeather = useAppSelector(selectCurrentCityWeather)
    const status = useAppSelector(selectStatus)

    if (status === 'server_offline') return (
        <div className={'flex justify-center'}>
            <div className={'mt-3 text-4xl'}>
                Server is offline.
            </div>
        </div>
    )

    if (status === 'failed') return (
        <div className={'flex justify-center'}>
            <div className={'mt-3 text-4xl'}>
                Invalid city. Please try again.
            </div>
        </div>
    )
    
    if (!currentCityWeather) return (
        <div className={'flex justify-center'}>
            <div className={'mt-3 text-4xl'}>
                Search a city!
            </div>
        </div>
    )

    const {
        location: {
            name,
            region,
            country,
        },
    } = currentCityWeather

    return (
        <>
            <div className={'text-3xl font-semibold'}>
                {name}, {region}
            </div>
            <div className={'text-xl'}>
                {country}
            </div>
        </>
    )
}
  