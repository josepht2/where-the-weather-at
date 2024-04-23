"use client"

import CreatableSelect from 'react-select/creatable'

import {
    getWeather,
    selectCityHistory,
} from "@/lib/features/weather/weatherSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"

import { Option } from './Option'

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
        if (!cityOption) return

        dispatch(getWeather(cityOption.value))
    }

    return (
        <div className={'flex justify-center mt-5'}>
            <div className={'w-96'}>
                <CreatableSelect
                    isClearable
                    components={{
                        DropdownIndicator: null,
                        Option,
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