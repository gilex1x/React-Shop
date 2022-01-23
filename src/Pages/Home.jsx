import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../Templates/Products';

const Home = (props) => {
	const {productList}=useSelector(state=>state)
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

export default Home;
