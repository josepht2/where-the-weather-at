"use client"

import {
    selectCurrentCityWeather,
    selectStatus
} from "@/lib/features/weather/weatherSlice"
import { useAppSelector } from "@/lib/hooks"

import { Body } from './Body'
import styles from './BodyContainer.module.css'

export const BodyContainer = () => {
    const currentCityWeather = useAppSelector(selectCurrentCityWeather)
    const status = useAppSelector(selectStatus)

    if (status === 'server_offline') return (
        <div className={styles.failed}>
            Server is offline.
        </div>
    )

    if (status === 'failed') return (
        <div className={styles.failed}>
            Invalid city. Please try again.
        </div>
    )
    
    if (!currentCityWeather) return (
        <div className={styles.initial}>
            Search a city!
        </div>
    )

    return (
        <Body />
    )
  }
  