import React from 'react';
import Card from '../Components/Card';
import 'Styles/Products.css';

const Products = ({ products }) => {
	//Condicional de que si esta en otra pagina que no sea el home. lo muestre como un carousel
	return (
		<section className='productos'>
			{products.length == 0 ? (
				<h2>...Loading</h2>
			) : (
				products.map((item) => <Card key={item.productId} item={item} />)
			)}
		</section>
	);
};

export default Products;
