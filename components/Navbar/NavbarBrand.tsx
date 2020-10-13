import React, { ReactNode } from 'react'

interface NavbarBrandProps {
    children: ReactNode
}

const NavbarBrand = ({ children }: NavbarBrandProps) => {
    return <div className="navbar-brand">{children}</div>
}

export default NavbarBrand