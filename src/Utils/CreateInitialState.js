const createInitialState = async (API) => {
	let products = [];
	await fetch(`${API}/api/v1/products`)
		.then((response) => response.json())
		.then((data) => (products = data))
		.catch((err) => console.log(err));
	console.log(products);
	return products

};

export { createInitialState };
