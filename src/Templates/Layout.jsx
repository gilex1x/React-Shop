import React from 'react'
import Footer from '@components/Footer'
import Header from '@components/Header'
const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Header/>
                <section>
                {children}
                </section>
            <Footer/>
        </React.Fragment>
    );
}

export default Layout;