import React, { ReactNode } from 'react'

interface NavbarMenuProps {
    isActive: boolean,
    children: ReactNode
}

const NavbarMenu = ({ isActive, children }: NavbarMenuProps) => {
    const isActiveClass = isActive ? ' is-active' : '';
    return <div className={`navbar-menu${isActiveClass}`}>
        {children}
    </div>
}

export default NavbarMenu