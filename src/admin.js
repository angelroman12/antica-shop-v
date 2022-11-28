import { http } from './http.js';
import { ui } from './ui.js';
// Load products 
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
	http
		.get('https://6086e5aea3b9c200173b7295.mockapi.io/products')
		.then((data) => ui.showProductsAdmin(data));
}

// Add new product 
document.getElementById('submit').addEventListener('click', addNewProduct);

function addNewProduct() {

	const picture = document.getElementById('picture').value;
	const author = document.getElementById('author').value;
	const title = document.getElementById('title').value;
	const price = document.getElementById('price').value;
	const pages = document.getElementById('pages').value;
	const descriptionValue = document.getElementById('description').value;

	let product = {	
		picture: picture,
		author: author,
		price: price,
		title: title,
		pages: pages,
		description: descriptionValue,
	};

	http
		.post('https://6086e5aea3b9c200173b7295.mockapi.io/products', product)
		.then((data) => getProducts());	
		alert("Produsul a fost adaugat")		
}

// Delete product
document.getElementById('output').addEventListener('click', deleteProduct);

function deleteProduct(e) {
	if (e.target.classList.contains('delete')) {
		const id = e.target.id;
		http
			.delete(`https://6086e5aea3b9c200173b7295.mockapi.io/products/${id}`)
			.then((data) => getProducts())
			.catch('Error on delete!');
			alert("Produsul a fost sters")		
	}
	
}
const year = document.getElementById('year')
const currentYear = new Date().getFullYear()
year.innerHTML = currentYear