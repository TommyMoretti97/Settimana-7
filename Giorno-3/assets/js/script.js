const url = 'https://striveschool-api.herokuapp.com/books';

fetch(url) 
.then(response => response.json())
.then(data => populateHomePage(data));

      


function populateHomePage(data) {
    data.forEach(book => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '18rem';
        card.style.margin = '10px';
        card.style.display = 'inline-block';
        card.style.height = '40rem';

        let img = document.createElement('img');
        img.src = book.img;
        
        img.classList.add('card-img-top');
        img.alt = '...';
         
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerText = book.title;

       let cardText = document.createElement('p');
       cardText.classList.add('card-text');
       cardText.innerText = book.price + '$';

       let cardLink = document.createElement('a');
       cardLink.classList.add('btn');
       cardLink.classList.add('btn-primary');
       cardLink.innerText = 'add';

       let cardRemove = document.createElement('a');
       cardRemove.classList.add('btn');
       cardRemove.classList.add('btn-danger');
       cardRemove.innerText ='Scarta';
                        

       cardBody.appendChild(cardTitle);
       cardBody.appendChild(cardText);
       cardBody.appendChild(cardLink);
       card.appendChild(img);
       card.appendChild(cardBody);
       cardBody.appendChild(cardRemove);
       

        document.querySelector('#root').appendChild(card);
         
        let removeButtons = document.querySelectorAll('.btn-danger');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => removeFromCart(button));
    });
    function removeFromCart(button) {
        let cartItem = button.parentElement.parentElement;
        cartItem.remove();
    }

    });
    let addButtons = document.querySelectorAll('.btn-primary');
    addButtons.forEach((button, index) => {
        button.addEventListener('click', () => addToCart(data[index]));
    });
    function addToCart(book) {
        let cartItem = `${book.title} - ${book.price}$`;
        let cartList = document.getElementById('cartList');
        let cartItemElement = document.createElement('li');
        
        cartItemElement.classList.add('list-group-item');
        cartItemElement.innerHTML = `
        ${book.title} - ${book.price} € 
        <button class="btn btn-secondary ">Rimuovi</button>
    `;
        // cartItemElement.innerText = cartItem;
        cartList.appendChild(cartItemElement);
       

        // Aggiorna il carrello nello storage del browser
        updateCartStorage();
        
    }
    
    function updateCartStorage() {
        const cartList = document.getElementById('cartList');
        const cartItems = Array.from(cartList.children).map(item => item.textContent.trim());

        // Salva il carrello nello storage del browser
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }
    
     let removeButtons1 = document.querySelectorAll('.btn-secondary');
     removeButtons1.forEach(button => {
         button.addEventListener('click', () => removeFromCart1(button));
    });
    function removeFromCart1(button) {
        let item = button.parentNode;
        item.remove();
        
        updateCartStorage();
    }
    let cartList = document.getElementById('cartList');
    cartList.addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-secondary')) {
            removeFromCart1(event.target);
        }
    });
}

