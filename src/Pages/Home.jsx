import React from 'react';
import { connect } from 'react-redux';
import Products from '../Templates/Products';

const Home = ({productList}) => {
	return (
		<React.Fragment>
			<h1>Soy el Home</h1>
			<Products products={productList}/>
		</React.Fragment>
	);
};
const mapStateToProps = (state) => {
	return {
		productList: state.productList,
	};
};

export default connect(mapStateToProps, null)(Home);
