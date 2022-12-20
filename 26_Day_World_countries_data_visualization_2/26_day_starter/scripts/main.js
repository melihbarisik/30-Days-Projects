const countriesDiv = document.getElementById('countries')
const input = document.getElementById('input');
const numberAndKeyword = document.getElementById('numberAndKeyword');


const searchButton = document.getElementById('searchButton');
const startingWordButton = document.getElementById('startingWord');
const searchWithAnyWordButton = document.getElementById('searchWithAnyWord');
const sortingButton = document.getElementById('sortingButton');


let chosenButton = "";
let searchedCountriesArray = [];

function displayCountries() {
    countriesAndKeyword();
    clearCountries();
    searchedCountriesArray.forEach(country => {
    const countryDiv = document.createElement('div');
    const countryNameSpan = document.createElement('span');
    countryNameSpan.textContent = country;
    countryDiv.appendChild(countryNameSpan);
    countryNameSpan.classList.add('countrySpan')
    countryDiv.classList.add('countryDiv')
    countriesDiv.appendChild(countryDiv);
   })
}

function countriesAndKeyword() {
   numberAndKeyword.textContent = `Countries containing ${input.value.toUpperCase()} are ${searchedCountriesArray.length}`
}

function clearCountries() {
   while(countriesDiv.firstChild) {
      countriesDiv.removeChild(countriesDiv.lastChild);
   }
}

startingWordButton.addEventListener('click', (e) => {
   startingWordButton.classList.toggle('clickedButton');
   chosenButton='startingWord';
   clearCountries();
})

searchWithAnyWordButton.addEventListener('click', (e) => {
   searchWithAnyWordButton.classList.toggle('clickedButton');
   chosenButton='searchWithAnyWord';
   clearCountries();
})

sortingButton.addEventListener('click', (e) => {
   searchedCountriesArray.reverse();
   displayCountries();
})

input.addEventListener('input', (e) => {
   countriesAndKeyword();
   if(chosenButton && chosenButton === 'startingWord') {
      searchViaStartingWord();
      return;
   }

   if(chosenButton && chosenButton === 'searchWithAnyWord') {
      searchViaAnyWord();
      return;
   }
})

function searchViaStartingWord() {
   searchedCountriesArray = [];
   let sliceCountry = "";
   countriesArray.forEach(country =>{
      sliceCountry = country.slice(0, input.value.length);
      if(sliceCountry.toLowerCase() === input.value.toLowerCase()) {
         searchedCountriesArray.push(country.toUpperCase());
      }
   })
   displayCountries();
}

function searchViaAnyWord() {
     searchedCountriesArray = [];
      countriesArray.forEach(country => {
      if(country.toUpperCase().includes(input.value.toUpperCase()) ) {
         searchedCountriesArray.push(country.toUpperCase());
      }
   })
   countriesAndKeyword();
   displayCountries();
}


// 2 butondan diğerine tıklanırsa biri seçili kalmalı


