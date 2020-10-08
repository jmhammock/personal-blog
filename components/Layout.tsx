import React from 'react';

const Layout = ({ children }): JSX.Element => {
    return <main className="container">
        {children}
    </main>
}

export default Layout;