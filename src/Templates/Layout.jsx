import React from 'react'
import Footer from 'Components/Footer'
import Header from 'Components/Header'
import 'Styles/index.css';
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