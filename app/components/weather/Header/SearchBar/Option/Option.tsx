"use client"

import { components, OptionProps } from 'react-select'

export const Option = (props: OptionProps<any>) => {
    if (props.data.__isNew__) return (
        <components.Option
            {...props}
            children={`Search "${props.data.value}"`}
        />
    )
    
    return (
        <components.Option {...props} />
    )
}