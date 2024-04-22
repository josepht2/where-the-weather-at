"use client"

import CreatableSelect from 'react-select/creatable'

import {
    getWeather,
    selectCityHistory,
} from "@/lib/features/weather/weatherSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"

import { Option } from './Option'
import styles from './SearchBar.module.css'

const selectStyles = {
    menu: (baseStyles: any) => ({
        ...baseStyles,
        marginTop: 0
    }),
    menuList: (baseStyles: any) => ({
        ...baseStyles,
        paddingTop: 0,
        paddingBottom: 0
    })
}

export const SearchBar = () => {
    const dispatch = useAppDispatch()
    const cityHistory = useAppSelector(selectCityHistory)

    const selectCity = (cityOption: any) => {
        dispatch(getWeather(cityOption.value))
    }

    return (
        <div className={styles.container}>
            <div className={styles.select}>
                <CreatableSelect
                    isClearable
                    components={{
                        DropdownIndicator: null,
                        Option
                    }}
                    onChange={selectCity}
                    options={cityHistory}
                    placeholder={'Search city...'}
                    styles={selectStyles}
                />
            </div>
        </div>
    )
  }