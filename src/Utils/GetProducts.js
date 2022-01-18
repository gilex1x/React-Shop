const getProducts = async (API) => {
	let products = [];
	await fetch(`${API}/api/v1/products`)
		.then((response) => response.json())
		.then((data) => products.push(data))
		.catch((err) => console.log(err));
    return products;
};


export default getProducts;
