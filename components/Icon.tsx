import React, { ReactNode } from 'react'

enum IconSize {
    small = 'is-small',
    medium = 'is-medium',
    large = 'is-large'
}

interface IconProps {
    size?: IconSize,
    children: ReactNode 
}

const Icon = ({ size, children }: IconProps) => {
    const iconClasses = `icon ${size}`
    return <span className={iconClasses}>{ children }</span>
}

export { Icon, IconSize }