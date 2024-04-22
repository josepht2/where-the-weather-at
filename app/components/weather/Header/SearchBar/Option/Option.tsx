"use client"

import { components, OptionProps } from 'react-select'

import {
    deleteCity
} from "@/lib/features/weather/weatherSlice"
import { useAppDispatch } from "@/lib/hooks"

import styles from './Option.module.css'

export const Option = (props: OptionProps<any>) => {
    const dispatch = useAppDispatch()
    
    const deleteCityOption = () => {
        dispatch(deleteCity(props.data.value))
    }

    if (props.data.__isNew__) return (
        <components.Option
            {...props}
            children={`Search "${props.data.value}"`}
        />
    )
    
    return (
        <div className={styles.container}>
            <components.Option {...props} />
            <div
                className={styles.clearButton}
                onClick={deleteCityOption}
            >
                X
            </div>
        </div>
    )
}