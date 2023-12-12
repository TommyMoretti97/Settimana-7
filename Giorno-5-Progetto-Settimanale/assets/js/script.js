const url = "https://striveschool-api.herokuapp.com/api/product/";
const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc2YzcwMjNkYWRhMDAwMThhNmEyZDMiLCJpYXQiOjE3MDIzNzIzMTUsImV4cCI6MTcwMzU4MTkxNX0.8MsVwPxWEPXeX-8ECmN8y_gu45xDJdhBQR43Sx2TF5s" 
});


    


window.onload = function() {
    showLoadingIndicator();
    fetch(url, { headers })
    .then(response => response.json())
    .then((data) => {
        addNewProduct();
        let card = document.getElementById("cards");
        card.innerHTML = "";
        data.forEach(product => {
            card.innerHTML += `
            <div class="col">   
                <div class="card">
                <img src="${product.imageUrl}" class="card-img-top" height="343px" alt="...">
                <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <a class="btn btn-warning me-2 mb-2" href="back.html?id=${product._id}" >Modifica</a>
                <a class="btn btn-info mb-2" href="detail.html?id=${product._id}" >Scopri di più</a>
                </div>
                </div>
            </div>
            `;
        });
        })
        .catch(error => console.error('Error:', error));
        hideLoadingIndicator();
        
        
        
}


function addNewProduct() {
    const newProducts = 
    {
        "name": "Nokia 3310",
        "description": "Indestructible cellphone",
        "brand": "Nokia",
        "imageUrl": "https://m.media-amazon.com/images/I/614r6gJOBeL.jpg",
        "price": 99
    }
    fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(newProducts),
        
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
    })
    .catch(error => console.error('Error:', error));
    
}

function nascondiBottone() {
    const nascondiBottone = document.querySelector(".btn-primary");
    nascondiBottone.addEventListener("click", () => {
       const bottoneElimina = document.getElementById("eliminaProdotto");
       bottoneElimina.style.display = "none";
    });
}
nascondiBottone();

function showLoadingIndicator() {
    const loadingIndicator = document.getElementById("loadingIndicator");
    loadingIndicator.style.display = "block";
}

function hideLoadingIndicator() {
    const loadingIndicator = document.getElementById("loadingIndicator");
    loadingIndicator.style.display = "none";
}