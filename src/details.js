import { http } from './http.js';
import { ui } from './ui.js';
 
window.onload = () => {
	if(window.location.search !== '') {
		const id = window.location.search.split('=')[1];	
		http.get("https://6086e5aea3b9c200173b7295.mockapi.io/products?id="+id)
		.then((data) =>  ui.showProductDetails(data));		
	}
}


const modal =document.querySelector('.modal')
const cancelBtn = document.querySelector('#cancel')
cancelBtn.addEventListener('click', () => {
	modal.style.display = "none"
})

const year = document.getElementById('year')
const currentYear = new Date().getFullYear()
year.innerHTML = currentYear