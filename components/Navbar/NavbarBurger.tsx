import React from 'react'

interface NavbarBurgerProps {
    isActive: boolean,
    handleClick: () => void
}

const NavbarBurger = ({ isActive, handleClick }: NavbarBurgerProps) => {
    const isActiveClass = isActive ? ' is-active' : '';
    const isExpanded = isActive ? 'true' : 'false'; 
    return <a
            role="button"
            className={`navbar-burger${isActiveClass}`}
            onClick={handleClick}
            aria-label="menu" aria-expanded={isExpanded}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
    </a>
}

export default NavbarBurger