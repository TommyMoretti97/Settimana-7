
function salva() {

    let salvaDato = document.getElementById('nome').value;
    localStorage.setItem('nome', salvaDato);
    testo = document.getElementById('elementoSalvato');
    testo.innerHTML = localStorage.getItem('nome');
}
function rimuovi() {
    localStorage.removeItem('nome');
    testo.innerHTML = '';
}

function updateCounter() {
    
    if (sessionStorage.getItem('counter')) {
        
        let counterValue = parseInt(sessionStorage.getItem('counter'));

        sessionStorage.setItem('counter', counterValue + 1);

       
        document.getElementById('counter').innerText = counterValue + 1;
    } else {
      
        sessionStorage.setItem('counter', 1);

        document.getElementById('counter').innerText = 1;
    }
}


setInterval(updateCounter, 1000);