const url = "https://striveschool-api.herokuapp.com/api/product/";
const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc2YzcwMjNkYWRhMDAwMThhNmEyZDMiLCJpYXQiOjE3MDIzNzIzMTUsImV4cCI6MTcwMzU4MTkxNX0.8MsVwPxWEPXeX-8ECmN8y_gu45xDJdhBQR43Sx2TF5s" 
});


function popolaDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const productUrl = `${url}/${productId}`;

    fetch(productUrl, {
        method: 'GET',  // Cambiato da 'PUT' a 'GET'
        headers: headers,
    })
    .then(response => response.json())
    .then(product => {
        const imgDettagli = document.getElementById("imgDettagli");
        const descrizioneDettagli = document.getElementById("descrizioneDettagli");

        // Assicurati che gli elementi HTML siano presenti
        if (imgDettagli && descrizioneDettagli) {
            // Usa innerHTML o innerText per impostare il contenuto
            imgDettagli.innerHTML = `<img src="${product.imageUrl}" class="img-fluid" alt="Product Image">`;
            descrizioneDettagli.innerHTML = ` ${product.brand} <div class="h3"> ${product.name}</div> <div class="bg-dark text-warning w-25"> Prezzo: ${product.price} $</div> <div > Descrizione: ${product.description} </div> `;
        }
    })
    .catch(error => console.error('Error:', error));
}


window.onload = function() {
    popolaDetailPage();
}