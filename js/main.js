//### Input utente

//Nome passeggero
const userNameInput = document.getElementById("user-name");

//Numero km
const travelKmInput = document.getElementById("travel-km");

//Fascia età del passeggero
const ageRangeInput = document.getElementById("age-range");


//### UTILS variables

//Bottone "Genera"
const printButton = document.getElementById("print-button");

//Bottone "Annulla", per l'animazione della scomparsa
const resetButton = document.getElementById("reset-button");

//Bottom container, per l'animazione della scomparsa
const bottomContainer = document.getElementById("ms_bottom-container")

//Per stampare il nome
const printName = document.getElementById("print-name");

//Per stampare il prezzo
const printPrice = document.getElementById("print-price");

//Per stampare l'offerta per fascia d'età
const printOffer = document.getElementById("print-offer");

//Tariffa di partenza del biglietto
const baseTicketRate = 0.21;

//Per stampare il numero randomico della carrozza
const printCarriage = document.getElementById("print-carriage");

//Per stampare il numero randomico cp
const printCP = document.getElementById("print-cp");



//Evento sul bottone
printButton.addEventListener("click", function() {

    //Input Nome
    const userName = userNameInput.value;
    console.log(userName);
    
    //Input num Km
    const travelKm = parseInt(travelKmInput.value);
    console.log(travelKm);

    //Richiamo l'input per la fascia d'età
    const ageRange = ageRangeInput.value;

    //Calcolo del biglietto senza sconti
    const baseTicketPrice = travelKm * baseTicketRate;
    console.log(baseTicketPrice);

    //Stampa il nome
    printName.innerText = userName;
    
    //Stampa il prezzo
    printPrice.innerText = baseTicketPrice + "€";



    if (ageRange == "minorenne") {

      //Calcolo lo sconto
      const youngDiscount = baseTicketPrice * 20 / 100;
      
      //Applico lo sconto
      const youngTicket = (baseTicketPrice - youngDiscount).toFixed(2);
      
      printPrice.innerText = youngTicket + "€";
      
      printOffer.innerText = "Offerta 20% sconto";
    
    } else if (ageRange == "over-65") {

      //Calcolo lo sconto
      const elderDiscount = baseTicketPrice * 40 / 100;

      //Applico lo sconto
      const elderTicket = (baseTicketPrice - elderDiscount).toFixed(2);
      
      printOffer.innerText = "Offerta 40% sconto";
      
      printPrice.innerText = elderTicket + "€";
    
    } else {
      printOffer.innerText = "Tariffa base";
      
      const finalTicketPrice = baseTicketPrice.toFixed(2);

      printPrice.innerText = finalTicketPrice + "€";

    }

    //numero carrozza randomico
    printCarriage.innerText = Math.floor(Math.random() * 10 + 1);

    //codice CP biglietto randomico
    printCP.innerText = Math.floor(Math.random() * 99999 + 1);

    bottomContainer.classList.remove("d-none");
  }
);

