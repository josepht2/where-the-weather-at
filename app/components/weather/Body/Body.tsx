"use client"

import { Condition } from './Condition'
import { Location } from './Location'
import { Temperature } from './Temperature'

export const Body = () => {
    return (
        <div className={'flex justify-center mt-5 bg-neutral-200'}>
            <div className={'bg-white w-1/2 h-96 p-3 shadow rounded-lg'}>
                <div className={'h-20 border-b border-slate-300'}>
                    <Location />
                </div>
                <div className={'flex mt-4 h-64'}>
                    <div className={'flex basis-3/5 items-center justify-center border-r border-slate-300'}>
                        <Temperature />
                    </div>
                    <div className={'flex basis-2/5 justify-center'}>
                        <Condition />
                    </div>
                </div>
            </div>
        </div>
    )
}
  