"use client"

import {
  deleteCity,
  selectCityHistory,
} from "@/lib/features/weather/weatherSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"

export default function SearchHistoryPage() {
    const dispatch = useAppDispatch()
    const cityHistory = useAppSelector(selectCityHistory)
    
    const deleteItem = (city: string) => {
      dispatch(deleteCity(city))
    }

    if (cityHistory.length === 0) return (
      <div className={'flex justify-center mt-5'}>
        <div className={'w-96 shadow rounded-lg'}>
          <div className={'flex justify-center bg-white w-96 h-12 p-3 hover:bg-gray-100'}>
            Go search a city!
          </div>
        </div>
      </div>
    )

    return (
      <div className={'flex justify-center mt-5'}>
        <div className={'w-96 shadow rounded-lg'}>
          {
            cityHistory.map(({ value }) => (
              <div
                key={value}
                className={'flex justify-between bg-white w-96 h-12 p-3 border-t border-slate-200 hover:bg-gray-100'}
              >
                <div>
                  {value}
                </div>
                <div
                  className={'mr-2 font-bold cursor-pointer'}
                  onClick={() => deleteItem(value)}
                >
                  X
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
}