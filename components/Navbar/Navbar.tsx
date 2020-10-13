import React, { ReactNode } from 'react'

interface NavbarProps {
    children: ReactNode,
}

const Navbar = ({ children }: NavbarProps) => {
    return <nav className="navbar is-spaced has-shadow" role="navigation" aria-label="main-navigation">
        { children }
    </nav>
}

export default Navbar