class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    confrontaEta(altroUtente) {
        if (this.age > altroUtente.age) {
            return `${this.firstName} è più vecchio di ${altroUtente.firstName}`;
        } else if (this.age < altroUtente.age) {
            return `${this.firstName} è più giovane di ${altroUtente.firstName}`;
        } else {
            return `${this.firstName} ha la stessa età di ${altroUtente.firstName}`;
        }
    }
}


const utentex = new User("Mario", "Rossi", 25, "Roma");
const utentey = new User("Luca", "Bianchi", 25, "Milano");


const risultatoConfronto = utentex.confrontaEta(utentey);
console.log(risultatoConfronto);


class Pet{
    constructor(petName, ownerName, species, breed){
        this.petName = petName; 
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    hasSameOwner(anotherPet) {
        return this.ownerName.toLowerCase() === anotherPet.ownerName.toLowerCase();
    }
}



const pets = [];

    function addPet() {
      const petName = document.getElementById('petName').value;
      const ownerName = document.getElementById('ownerName').value;
      const species = document.getElementById('species').value;
      const breed = document.getElementById('breed').value;

      const newPet = new Pet(petName, ownerName, species, breed);
      

      const hasSameOwner = pets.some(pet => pet.hasSameOwner(newPet));
      if (!hasSameOwner) {
        pets.push(newPet);
        displayPetList();
        clearForm();
      } else {
        alert('Questo proprietario ha già un animale.');
        pets.push(newPet);
        displayPetList();
        clearForm();
      }
    }
    
    

    function displayPetList() {
      const listContainer = document.getElementById('list');
      listContainer.innerHTML = '';

      pets.forEach(pet => {
        const listItem = document.createElement('li');
        listItem.textContent = `${pet.petName} - ${pet.ownerName} - ${pet.species} - ${pet.breed}`;
        listContainer.appendChild(listItem);
      });
    }

    function clearForm() {
      document.getElementById('petName').value = '';
      document.getElementById('ownerName').value = '';
      document.getElementById('species').value = '';
      document.getElementById('breed').value = '';
    }
    