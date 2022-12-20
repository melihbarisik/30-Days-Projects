const countriesList = document.getElementById('countriesList');
const countSpan = document.getElementById('countSpan');
const filterInput = document.getElementById('filter');
const nameButton = document.getElementById('nameButton');
const capitalButton = document.getElementById('capitalButton');
const populationButton = document.getElementById('populationButton');
const nameToggleIcon = document.getElementById('nameToggleIcon');
const upArrowForName = document.getElementById('upArrowForName');
const downArrowForName = document.getElementById('downArrowForName');
const upArrowForCapital = document.getElementById('upArrowForCapital');
const downArrowForCapital = document.getElementById('downArrowForCapital');
const upArrowForPopulation = document.getElementById('upArrowForPopulation');
const downArrowForPopulation = document.getElementById('downArrowForPopulation');

upArrowForName.style.display = 'none'
downArrowForName.style.display = 'none'

upArrowForCapital.style.display = 'none'
downArrowForCapital.style.display = 'none'

upArrowForPopulation.style.display = 'none'
downArrowForPopulation.style.display = 'none'


const countries = [];
var countriesFilterdViaName = []
var countriesFilterdViaCapital = []
var filteredKey = ""
var filteredArray = []
var noRepeatArray = [];
var nameToggle = false;
var capitalToggle = false;
var populationToggle = false;


filterInput.addEventListener('input', (e) => {
    filteredKey= filterInput.value;
    filterViaName();
    filterViaCapital();
    filterViaLanguages();
    noRepeatArray = [];
    noRepeatArray = [...new Set(filteredArray.map(JSON.stringify))].map(JSON.parse);
    countryCount();
    displayCountries();
    createPopulationChart();
})

function showAllCountriesInTheBeginning() {
  noRepeatArray = [...worldCountries];
  populationLanguagesSpan.textContent = 'World\'s Population Information'
  countryCount();
  displayCountries();
  createPopulationChart();
}

function filterViaName(){
    filteredArray = [];
    worldCountries.forEach(country => {
        const countryNameLowerCase = country.name.toLowerCase();
        const filteredKeyLowerCase = filteredKey.toLowerCase();
      if (countryNameLowerCase.includes(filteredKeyLowerCase)) {
        filteredArray.push({'name': country.name, 'capital': country.capital, 'languages': country.languages, 'population': country.population, 'flag': country.flag})
      }
    })
}

function filterViaCapital(){

    worldCountries.forEach(country => {
        const countryCapitalLowerCase = typeof country.capital === 'string' ? country.capital.toLowerCase() : "";
        const filteredKeyLowerCase = filteredKey.toLowerCase();
      if ((countryCapitalLowerCase).includes(filteredKeyLowerCase)) {
        filteredArray.push({'name': country.name, 'capital': country.capital, 'languages': country.languages, 'population': country.population, 'flag': country.flag})
      }
    })
}

function filterViaLanguages(){

    worldCountries.forEach(country => {
        country.languages.forEach(language => {
            const languageLowerCase = language.toLowerCase();
            const filteredKeyLowerCase = filteredKey.toLowerCase();
            if (languageLowerCase.includes(filteredKeyLowerCase)) {
                filteredArray.push({'name': country.name, 'capital': country.capital, 'languages': country.languages, 'population': country.population, 'flag': country.flag})
            }
        })
        
    })
}

function countryCount() {
    countSpan.textContent = noRepeatArray.length;
}

function displayCountries() {
  clearCountriesFromScreen();
  noRepeatArray.forEach(country => {
    /* creating divs */
    const countryDiv = document.createElement('div');
    const countryNameDiv = document.createElement('div');
    const countryName = document.createElement('span');
    const countryFlag = document.createElement('img');
    const countryFlagDiv = document.createElement('div');
    const countryInformation = document.createElement('div');
    const countryCapital = document.createElement('span');
    const countryLanguage = document.createElement('span');
    const countryPopulation = document.createElement('span');
  
    /* setAttribute */
    countryDiv.setAttribute('class', 'countryDiv');
    countryFlagDiv.setAttribute('class', 'countryFlagDiv')
    countryFlag.setAttribute('class', 'flag');
    countryNameDiv.setAttribute('class', 'nameDiv')
    countryName.setAttribute('class', 'name');
    countryInformation.setAttribute('class', 'countryInformationDiv');
  

    /* set content*/
    countryName.textContent = country.name;
    countryFlag.src=country.flag;
    countryCapital.textContent = `Capital: ${country.capital}`;
    countryLanguage.textContent = `Languages: ${country.languages}`;
    countryPopulation.textContent = `Population: ${country.population}`;

    /* append child */
    countryNameDiv.appendChild(countryName);
    countryInformation.appendChild(countryCapital);
    countryInformation.appendChild(countryLanguage);
    countryInformation.appendChild(countryPopulation);
    countryFlagDiv.appendChild(countryFlag);
    countryDiv.appendChild(countryFlagDiv);
    countryDiv.appendChild(countryNameDiv);
    countryDiv.appendChild(countryInformation);
    countriesList.appendChild(countryDiv);
  })
}

function clearCountriesFromScreen() {
  while (countriesList.firstChild) {
    countriesList.removeChild(countriesList.lastChild);
  }
}

function sortByName() {
  nameToggle = !nameToggle;
  switchArrowForName(upArrowForName, downArrowForName, 'inline', 'none', nameToggle);
  noRepeatArray.sort(function (a, b) {
    if (nameToggle) {
   
    return a.name > b.name ? 1 : -1
   } else {
    return a.name > b.name ? -1 : 1
   }
  })
}

function sortByCapital() {
  capitalToggle = !capitalToggle;
  switchArrowForName(upArrowForCapital, downArrowForCapital, 'inline', 'none', capitalToggle);
  noRepeatArray.sort(function (a, b) {
   if (capitalToggle) {
    return a.capital > b.capital ? 1 : -1
   } else {
     return a.capital > b.capital ? -1 : 1
   }
  })
}

function sortByPopulation() {
  populationToggle = !populationToggle;
  switchArrowForName(upArrowForPopulation, downArrowForPopulation, 'inline', 'none', populationToggle);
  noRepeatArray.sort(function (a, b) {
   if (populationToggle) {
    return a.population > b.population ? 1 : -1
   } else {
     return a.population > b.population ? -1 : 1
   }
  })
}


nameButton.addEventListener('click', ()=> {
  clearOtherArrows(upArrowForCapital, downArrowForCapital);
  clearOtherArrows(upArrowForPopulation, downArrowForPopulation);
  sortByName();
  displayCountries();
})

capitalButton.addEventListener('click', ()=> {
  clearOtherArrows(upArrowForName, downArrowForName);
  clearOtherArrows(upArrowForPopulation, downArrowForPopulation);
  sortByCapital();
  displayCountries();
})

populationButton.addEventListener('click', ()=> {
  clearOtherArrows(upArrowForName, downArrowForName);
  clearOtherArrows(upArrowForCapital, downArrowForCapital);
  sortByPopulation();
  displayCountries();
})

function switchArrowForName(upArrow, downArrow, up, down, toggle) {
 if (toggle) {
  upArrow.style.display = down
  downArrow.style.display = up
 } else {
  upArrow.style.display = up
  downArrow.style.display = down
 }
  
}

function clearOtherArrows(upArrow, downArrow) {
  upArrow.style.display = 'none';
  downArrow.style.display = 'none'
}


/* chart starts*/
const chartButton = document.getElementById('chartButton');
const chart = document.getElementById('chart');
const chartPopulationButton = document.getElementById('chartPopulationButton');
const languagePopulationButton = document.getElementById('languagePopulationButton');
const chartContainer = document.getElementById('chartContainer');
const upArrow = document.getElementById('upArrow');
const populationLanguagesSpan = document.getElementById('populationLanguagesSpan');

const languageArray = [];
let languageWCounts = [];
let languageDisplayArray = [];

let populationDisplayArray = [];
let countryWPopulation = [];
let worldsPopulation = 0;

showAllCountriesInTheBeginning();

chartButton.addEventListener('click', ()=> {
})

function createChart(value, count, maxProgress) {
  console.log('count', count);
  graphDiv = document.createElement('div');
  const graphHeader = document.createElement('h2');
  const graphProgressNumber = document.createElement('h2');
  const grapProgress = document.createElement('progress');

  graphDiv.setAttribute('class', 'langInfo')
  graphHeader.setAttribute('class', 'languageName')
  graphProgressNumber.setAttribute('class', 'languageName')
  grapProgress.setAttribute('class', 'progress')

  grapProgress.value=count;
  grapProgress.max=maxProgress;


  graphHeader.textContent = value;
  graphProgressNumber.textContent = String(count).replace(/(.)(?=(\d{3})+$)/g,'$1,');
  graphDiv.appendChild(graphHeader);
  graphDiv.appendChild(grapProgress);
  graphDiv.appendChild(graphProgressNumber);


  chart.appendChild(graphDiv);
}

function clearGraph() {
  worldsPopulation = 0;
      while (chart.firstChild) {
        chart.removeChild(chart.lastChild);
        }
       
}

function takePartofTheArray(array , size) {
  return array.slice(0,10);
}

/* Language chart starts*/
languagePopulationButton.addEventListener('click', ()=> {
  clearGraph();
  createLanguageSet();
  languageWCounts.sort(compareCountsOfLanguage);
  languageDisplayArray = languageWCounts.length <= 10 ? languageWCounts : takePartofTheArray(countryWPopulation, 10)
  languageDisplayArray.forEach(country => {
    createChart(country.lang, country.count,100);
  })
  
 
})

function createLanguageSet() {
  languageWCounts = [];
  let languageSet;
  let languages = [];
  let languageCount = [];
  noRepeatArray.forEach(country => {
      country.languages.forEach(language =>{
          languages.push(language);
      })
  })

 languageSet = new Set(languages);
  
 languageSet.forEach(language => {
 languageCount = languages.filter(lang => lang === language);
 languageWCounts.push({lang: language, count: languageCount.length});
 })
  
}

function compareCountsOfLanguage(a, b) {

  if (a.count < b.count) {
      return 1
  }
  if (a.count > b.count) {
      return -1
  }

  return 0;
}

function createLanguagesChart() {
  clearGraph();
  createLanguageSet();
  languageWCounts.sort(compareCountsOfLanguage);
  languageDisplayArray = languageWCounts.length <= 10 ? languageWCounts : takePartofTheArray(languageWCounts, 10)
  languageDisplayArray.forEach(country => {
  createChart(country.lang, country.count, 100);
  })
}
 

languagePopulationButton.addEventListener('click', ()=> {
  populationLanguagesSpan.textContent = 'World\'s Lanuages Information'
  createLanguagesChart();
 
})
/* Language chart ends*/

/* Population chart starts*/

function createCountryPopulationObject() {
  countryWPopulation = [];

  noRepeatArray.forEach(country => {
      if (country.name === 'United States of America') {
          countryWPopulation.push({country: 'USA', population: country.population})
      } else if (country.name === 'Russian Federation') {
          countryWPopulation.push({country: 'Russia', population: country.population})
      }
      else {
          countryWPopulation.push({country: country.name, population: country.population})
      }
      
  })
}

function calcualteWorldsPopulation(){
  countryWPopulation.forEach(contryAndPopulation => {
      worldsPopulation+= contryAndPopulation.population;
  })
  countryWPopulation.push({country: 'World', population: worldsPopulation})
}

function comparePopulationOfCountries(a, b) {

  if (a.population < b.population) {
      return 1
  }
  if (a.population > b.population) {
      return -1
  }

  return 0;
}

function createPopulationChart() {
  clearGraph();
  createCountryPopulationObject();
  calcualteWorldsPopulation();
  countryWPopulation.sort(comparePopulationOfCountries);
  populationDisplayArray = countryWPopulation.length <= 10 ? countryWPopulation : takePartofTheArray(countryWPopulation, 10)
  
  if (populationDisplayArray.length > 1) {
 
      populationDisplayArray.forEach(populationArray => {  
      createChart(populationArray.country, populationArray.population, worldsPopulation)
  })
  }
 
}


chartPopulationButton.addEventListener('click', ()=> {
  populationLanguagesSpan.textContent = 'World\'s Population Information'
  createPopulationChart();
})
/* Population chart ends*/

