import React, { ReactNode } from 'react'

enum ButtonColor {
    primary = 'is-primary',
    secondary = 'is-secondary',
    link = 'is-link',
    info = 'is-info',
    success = 'is-success',
    warning = 'is-warning',
    danger = 'is-danger',
    white = 'is-white',
    light = 'is-light',
    dark = 'is-dark',
    black = 'is-black',
    text = 'is-text'
}

enum ButtonSize {
    small,
    medium,
    large
}

interface ButtonProps {
    color?: ButtonColor,
    size?: ButtonSize,
    children: ReactNode
}

interface ButtonLinkPropsPartial {
    href: string,
    title: string
}

type ButtonLinkProps = ButtonProps & ButtonLinkPropsPartial

const Button = ({ color, size, children}: ButtonProps) => {
    const buttonClasses = `button ${color || ''} ${size || ''}`
    return <button className={buttonClasses}>{ children }</button>
}

const ButtonLink = ({ color, size, href, title, children }: ButtonLinkProps) => {
    const buttonClasses = `button ${color || ''} ${size || ''}`
    return <a className={buttonClasses} href={href} title={title}>{ children }</a>
}

export { Button, ButtonLink, ButtonSize, ButtonColor }