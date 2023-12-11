const url = "https://api.pexels.com/v1/search?query=";
let contenitore = document.getElementById("cards");
let products = [];

const getPhotos = (searchQuery) => {
    fetch(`${url}${searchQuery}`, {
        headers: {
            "Authorization": "EmVKfARxgn016wjU2Q8nbficWvW7CRyjjpLZ4Dt1LcYit9z3j4BT4jj6",
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        products = data;
        createCard(data.photos);
    })
    .catch(error => {
        console.log(error);
    });
}

const createCard = (images) => {
    contenitore.innerHTML = ''; // Pulisci il contenitore prima di aggiungere nuove immagini

    images.forEach(element => {
        let immagine =
        `<div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <a href="#" onclick="openDetailPage('${element.src.medium}', '${element.photographer}', '${element.photographerPage}')">
                    <img src="${element.src.medium}" class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" alt="${element.photographer}">
                </a>
                <div class="card-body">
                    <h5 class="card-title">${element.photographer}</h5>
                    <p class="card-text">
                        ${element.photographer} captures stunning views of ${element.photographer}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="openModal(this)" data-image-url="${element.src.medium}">
                                View
                            </button>
                            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="hideCard(this)">
                                Hide
                            </button>
                        </div>
                        <small class="text-muted">${element.id}</small>
                    </div>
                </div>
            </div>
        </div>`;
        contenitore.innerHTML += immagine;
    });
}
const hideCard = (button) => {
    let card = button.closest('.card');
    card.style.display = 'none';
}


const openModal = (button) => {
    let modalImage = document.getElementById('modalImage');
    let imageUrl =  button.getAttribute('data-image-url');
    modalImage.src = imageUrl;
    // Attiva il modale utilizzando Bootstrap
    $('#imageModal').modal('show');
}

const closeModal = () => {
    // Chiudi il modale utilizzando Bootstrap
    $('#imageModal').modal('hide');
}




window.onload = () => {
    let primaryButton = document.querySelector('.btn-primary');
    primaryButton.addEventListener('click', () => {
        getPhotos('mountains');
    });

    let secondaryButton = document.querySelector('.btn-secondary');
    secondaryButton.addEventListener('click', () => {
        getPhotos('sunsets');
    });

    let customSearchButton = document.querySelector('.input-group .btn-outline-secondary');
    customSearchButton.addEventListener('click', () => {
        let customInputField = document.querySelector('.input-group .form-control');
        getPhotos(customInputField.value);
    });
    
   

    getPhotos();
}

const searchImages = () => {
    let searchInput = document.getElementById("searchInput");
    let searchQuery = searchInput.value.trim();
    getPhotos(searchQuery);
}