
class UIfilter {
    constructor() {		
		this.productsDiv = document.getElementById('output');		
		this.picture = document.getElementById('picture');
		this.author = document.getElementById('author');
		this.title = document.getElementById('title');
		this.id = document.getElementById('id');
		this.price = document.getElementById('price');		
		this.description = document.getElementById('description');
		this.tableBody = document.getElementById('table-body');
        this.cartBody = document.getElementById('cart-body');
		this.quantity = document.getElementById('quantity');
        this.total = document.getElementById('total');
        this.subtotal = document.getElementById('subtotal');
		this.modal = document.querySelector('.modal');
		this.detCont = document.querySelector('#output')
		this.searchInput = document.getElementById('search')
		this.neexistent = document.getElementById('neexistent')
	}

	returnCard (product) {
		let output;
		return output =
		`
		<div class="card">
		<a href="details.html?id=${product.id}" ><img src="${product.picture}"> </a>
		<h4> ${product.author}</h4>
		<h5>${product.title}</h5>
		<p>${product.price} ${product.curency} </p> 
		<a href="details.html?id=${product.id}"> <button class="det add-cart"> Detalii</button> </a>					
		</div>            
		`;
	}

	cheap2130(products) {
		let filtrate = products.filter(product => product.price >= 21 && product.price <= 30)
	    let output = ''
	    filtrate.forEach((product) => {
			output =
			this.returnCard(product)
			this.productsDiv.innerHTML += output;
		   
	   });
   }
   cheap3140(products) {
	let filtrate = products.filter(product => product.price >= 31 && product.price <= 40)
    let output = ''
    filtrate.forEach((product) => {
		output =
		this.returnCard(product)
		this.productsDiv.innerHTML += output;
   });
}
	cheap4150(products) {
	let filtrate = products.filter(product => product.price >= 41 && product.price <= 50)
    let output = ''
    filtrate.forEach((product) => {
		output =
		this.returnCard(product)
		this.productsDiv.innerHTML += output;
   });
}
	cheap51(products) {
		let filtrate = products.filter(product => product.price >= 51)
    	let output = ''
    	filtrate.forEach((product) => {
			output =
			this.returnCard(product)
			this.productsDiv.innerHTML += output;
   });
}
	stock(products) {
		let filtrate = products.filter(product => product.stoc)
		let output = ''
    	filtrate.forEach((product) => {
	 	output =
			this.returnCard(product)
			this.productsDiv.innerHTML += output;
   });
	}
	// find(products){
	//  	let bookTitle =	products.find(product => product.title === this.searchInput.value)
	// 	let myArray = []
	// 	console.log(bookTitle)
	// 	let output = ''
	// 	myArray.push(bookTitle)
	// 	myArray.map((product) => {
	// 		output =
	// 		`
	// 		<div class="card">
	// 		<a href="details.html?id=${product.id}" ><img src="${product.picture}"> </a>
	// 		<h4> ${product.author}</h4>
	// 		<h5>${product.title}</h5>
	// 		<p>${product.price} ${product.curency} </p> 
	// 		<a href="details.html?id=${product.id}"> <button class="det add-cart"> Detalii</button> </a>					
	// 		</div>            
	// 	   `;
	// 	this.productsDiv.innerHTML += output;
	// 	})
	// }
	findFilter(products) {
		let authors = products.filter(autor => autor.author === this.searchInput.value || autor.title === this.searchInput.value)	
		if(authors){
		let output = '';
		authors.forEach((product) => {
			output =
			this.returnCard(product)
			this.productsDiv.innerHTML += output;
		this.neexistent.style.display = 'flex'
		});
	}
	}

	coverBrosata(products) {
		let cover = products.filter(coperta => coperta.coperta === 'Brosata') 
		let output = ''
    	cover.forEach((product) => {
			output =
			this.returnCard(product)
			this.productsDiv.innerHTML += output;
   });
	}

	
	coverCartonata(products) {
		let cover = products.filter(coperta => coperta.coperta === 'Cartonata') 
		let output = ''
    	cover.forEach((product) => {
			output =
			this.returnCard(product)
			this.productsDiv.innerHTML += output;
   });
	}

}

export const uiFilter = new UIfilter();