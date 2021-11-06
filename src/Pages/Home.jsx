import React from 'react';
import {connect} from 'react-redux';
import Card from '@components/Card';
import Products from '@template/Products';


const Home = ({...myItems}) => {
    return (
        <React.Fragment>
            <h1>Soy el Home</h1>
            <Products>
               {myItems.length ?
               myItems.map(item=>{
                return <Card key={item.id} {...item}/>
               }) : <h2>No tenemos articulos disponibles</h2>}
            </Products>
        </React.Fragment>
        
    );
}
const mapStateToProps=state=>{
    return{
        myItems: state.myItems
    }
}
export default connect(mapStateToProps,null)(Home);
//export default connect(mapStateToProps,mapDispatchToProps)(jsxElement);