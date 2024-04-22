"use client"

import { selectCurrentCityWeather } from "@/lib/features/weather/weatherSlice"
import { useAppSelector } from "@/lib/hooks"

import styles from './Body.module.css'

export const Body = () => {
    const currentCityWeather = useAppSelector(selectCurrentCityWeather)
    
    const {
        location: {
            name,
            region,
            country
        },
        current: {
            temp_f,
            temp_c,
            condition: {
                text: conditionText,
                icon
            }
        }
    } = currentCityWeather

    return (
        <>
            <div className={styles.header}>
                <div className={styles.title}>
                {`${name}, ${region}`}
                </div>
                <div className={styles.subtitle}>
                {`${country}`}
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.temperatureContainer}>
                    <div className={styles.temperatureText}>
                        {`${temp_f}°F / ${temp_c}°C`}
                    </div>
                </div>
                <div className={styles.conditionContainer}>
                    <div className={styles.conditionText}>
                        {conditionText}
                    </div>
                    <img
                        className={styles.conditionImage}
                        src={icon}
                    />
                </div>
            </div>
        </>
    )
}
  