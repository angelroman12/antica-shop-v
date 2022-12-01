
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
			<ul>
			<li>
						 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
						 <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
				   </svg> ${product.author}
					</li>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
					  </svg>${product.title}
					</li>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				  </svg>${product.price} ${product.curency} 
					</li>
			</ul>
		
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