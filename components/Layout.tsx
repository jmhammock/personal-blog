import { MarkGithubIcon } from '@primer/octicons-react';
import React, { useState } from 'react';
import { ButtonLink, ButtonColor } from './Button';
import { Icon, IconSize } from './Icon';
import Navbar from './Navbar/Navbar';
import NavbarBrand from './Navbar/NavbarBrand';
import NavbarBurger from './Navbar/NavbarBurger';
import { NavbarItemLink } from './Navbar/NavbarItem';
import NavbarMenu from './Navbar/NavbarMenu';
import { NavbarEnd } from './Navbar/NavbarPosition';

const Layout = ({ children }): JSX.Element => {
    const [isActive, setIsActive] = useState(false);

    const toggleIsActive = () => setIsActive(!isActive);

    return <>
        <Navbar>
            <div className="container">
            <NavbarBrand>
                <NavbarItemLink href="/" title="Home Page">
                    <img src="https://bulma.io/images/bulma-logo.png" height={28} width={112}/>
                </NavbarItemLink>
                <NavbarBurger isActive={isActive} handleClick={toggleIsActive}/>
            </NavbarBrand>
            <NavbarMenu isActive={isActive}>
                <NavbarEnd>
                    <ButtonLink color={ButtonColor.primary} href="/" title="Jason Hammock GitHub">
                        <Icon size={IconSize.small}>
                            <MarkGithubIcon />
                        </Icon>
                    </ButtonLink>
                </NavbarEnd>
            </NavbarMenu>
            </div>
        </Navbar>
        <div className="container">
            {children}
        </div>
    </>
}

export default Layout;