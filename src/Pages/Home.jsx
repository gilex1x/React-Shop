import React from 'react';
import Card from '@components/Card';
import Products from '@template/Products';


const Home = () => {
    return (
        <React.Fragment>
            <h1>Soy el Home</h1>
            <Products>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Products>
        </React.Fragment>
        
    );
}

export default Home;