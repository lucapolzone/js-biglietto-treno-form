//Input utente
const userNameInput = document.getElementById('user-name');
const travelKmInput = document.getElementById('travel-km');

//Bottone "Genera"
const printButton = document.getElementById('print-button');

//Assegno una variabile alla tariffa di partenza del biglietto
const baseTicket = 0.21;

//Prezzo finale del biglietto
const finalTicketPrice = document.getElementById('final-ticket-price');



//Funzione sul bottone
printButton.addEventListener('click', function() {

    //Input Nome
    const userName = userNameInput.value;
    console.log(userName);
    
    //Input num Km
    const travelKm = parseInt(travelKmInput.value);
    console.log(travelKm);

    //Calcolo il prezzo totale del biglietto
    const totalTicketPrice = (baseTicket * travelKm).toFixed(2);
    console.log(totalTicketPrice);

    //Stampo il risultato
    finalTicketPrice.innerText = 'Il tuo biglietto costa €' + totalTicketPrice;

  }
);





