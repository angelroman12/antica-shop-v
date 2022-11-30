import { addProductsInLocalStorage, updateQuantityInLocalStorage, getElementFromLocalStorage, removeElementFromLocalStorage } from './localStorage.js';
class UI {
	constructor() {		
		this.productsDiv = document.getElementById('output');		
		this.outputDetails = document.getElementById('output-details');		
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
		this.detCont = document.querySelector('#output-details')
		this.searchInput = document.getElementById('search')
	}
	// Get products on index page
	showProducts(products) {
		let output = '';
		products.forEach((product) => {
            output =
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

          		  <h4></h4>
            	<h5></h5>
           		<p> </p> 
        	<a href="details.html?id=${product.id}"> <button class="det add-cart"> Detalii</button> </a>					
            </div>            
            `;
			this.productsDiv.innerHTML += output;
		});
	}
	// Get products on admin page	
	showProductsAdmin(products) {
		let output = '';
		products.forEach((product) => {
            output =
            `<div class="adminTable"> 
				<img class="img" src="${product.picture}">
				<h3>${product.author}</h3> 
				<h4>${product.title}</h4> 
				<h5>${product.price}</h5> 
				<button class="delete" id=${product.id} > Remove </button> </td>				
			</div>		
            `;
			this.productsDiv.innerHTML += output;
		});
	}
	// Get products on details page	
	showProductDetails(products){	
		
		let output = '';
		products.forEach((product) => {
			output = 
			`<div class="details">		
				<div class="book-pic">
						<img src=${product.picture}>
					</div>
					<div class="book-description">
						
						<ul>
						  <li>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
									<path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
							  		</svg>
							  		<span>Autor:</span> <strong>${product.author}  </strong>
						  		</li>
								<li>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
					 				 </svg>
					  
					 			 	<span>Titlu:</span> <strong>${product.title} </strong> 
								</li>

								<li>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
					  				</svg>
					  				<span>Pagini:</span> <strong>${product.pages} </strong>
								</li>

								<li>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
									<path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
					 				</svg>
					  				<span>Coperta:</span> <strong> ${product.coperta} </strong>
								</li>
								
						</ul>				
						<ul>
							<li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 	0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
								<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
						 		</svg><span> Descriere:</span>
						  		<p>  ${product.details} <p>					 
						    </li>
						</ul>
					</div>
					<div class="book-details">				
						<div class="details-div">
							<div class="price-div"> 
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
						  
									<span>Pret:</span> <strong> ${product.price} RON	</strong> 
									<button class="btn addToCart"  id="addProductToCart" ${product.id} > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
									<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
							  	</svg>
							  Adauga in cos  </i></button>		
								<input type="Number" value="1" id="quantity">	
							</div>
							
						</div>		
				</div>		
			</div>
			`;	
			this.outputDetails.innerHTML = output;		
			
			addProductToCart.addEventListener('click', () => {
			let count = parseInt(quantity.value);
			if (isNaN(count)) {
				count = 1;
			}
			addProductsInLocalStorage(product, count);
			this.modal.style.display = "flex";
			this.detCont.style.opacity = "20%"
		  });	
			  
		});
	 
	}
	// Get products on cart page	
	showProductsAdmin(products) {
		let output = '';
		products.forEach((product) => {
            output +=
            `<div class="adminTable"> 
				<img class="img" src="${product.picture}">
				<h3>${product.author}</h3> 
				<h4>${product.title}</h4> 
				<h5>${product.price} RON</h5> 
				<button class="delete" id=${product.id} > Remove </button> </td>				
			</div>		
            `;
			this.productsDiv.innerHTML = output;
		});
    }
    showProductsCart(storageItems) {
        let output = '';
        storageItems.forEach((book) => {
            output = `
            <table id="table-cart">
                <tbody> 
                    <tr class="cartRows">
                        <td><img src="${book.product.picture}" class="admin-card-img"/></td>
                        <td><button onclick="window.location.href='details.html?id=${book.product.id}'" class="title">${book.product.title}</button></td>                       
                        <td>${book.product.price} RON</td>
                        <td><input value=${book.count} id="quantity" type="number" min="1" max="10"/></td>
                        <td id="subtotal">${book.product.price*book.count} RON </td>
                        <td><button id=${book.product.id} type="button" class="card-button delete"> <i class="far fa-trash-alt" id=${book.product.id}></i></button></td>
                    </tr>
                </tbody>   
            </table> 
            `     
            this.cartBody.innerHTML += output;
        });
        let inputFields = document.querySelectorAll("input");
        inputFields.forEach( (inputElement) => {
            let row = inputElement.parentElement.parentElement;
            let removeButton = row.lastElementChild.firstElementChild;
            let productId = removeButton.id;
            inputElement.addEventListener('change', (e) => {
                let count = parseInt(e.target.value);
                if(!isNaN(count) && count > 0) {
                    updateQuantityInLocalStorage(productId, count);
                    return window.location.reload();
                } else {
                    let storageElement = getElementFromLocalStorage(productId);
                    e.target.value = storageElement.count;
                }
            });  
            
            removeButton.addEventListener('click', (e) => {
                removeElementFromLocalStorage(e.target.id);
                row.remove();
                    return window.location.reload();
                });
            });  
        }
    	
	
}
export const ui = new UI();