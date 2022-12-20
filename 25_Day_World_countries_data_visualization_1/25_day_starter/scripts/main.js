
const graphs = document.getElementById('graphs');
let graphDiv = document.createElement('div');
const langInfo = document.getElementById('langInfo');
const populationButton = document.getElementById('populationButton')
const languagesButton = document.getElementById('languagesButton')

const languageArray = [];
let languageWCounts = [];
let firstTenLanguage = [];

let firstTenPopulation = [];
let countryWPopulation = [];

let worldsPopulation = 0;

function createGraph(value, count, maxProgress) {
    
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

    graphs.appendChild(graphDiv);
}

function createLanguagesGraph() {
    clearGraph();
    createLanguageSet() 
    languageWCounts.sort(compareCountsOfLanguage);
    firstTenLanguage = takePartofTheArray(languageWCounts, 10);
    
    firstTenLanguage.forEach(languageArray => {
    createGraph(languageArray.lang, languageArray.count,100);
    })
}

function createPopulationGraph() {
  clearGraph();
  createCountryPopulationObject();
  calcualteWorldsPopulation();
  countryWPopulation.sort(comparePopulationOfCountries);
  firstTenPopulation = takePartofTheArray(countryWPopulation, 10);
  
  firstTenPopulation.forEach(languageArray => {  
  createGraph(languageArray.country, languageArray.population, worldsPopulation)
})

}

function incrementValueofLanguage(mapVal) {
    languageMap.set(mapVal, languageMap.get(mapVal) + 1);
}

function createLanguageSet() {
    languageWCounts = [];
    let languageSet;
    let languages = [];
    let languageCount = [];
    countriesData.forEach(country => {
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

function takePartofTheArray(array , size) {
    return array.slice(0,10);
}

function createCountryPopulationObject() {
    countryWPopulation = [];

    countriesData.forEach(country => {
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

function comparePopulationOfCountries(a, b) {

    if (a.population < b.population) {
        return 1
    }
    if (a.population > b.population) {
        return -1
    }

    return 0;
}

function calcualteWorldsPopulation(){
    countryWPopulation.forEach(contryAndPopulation => {
        worldsPopulation+= contryAndPopulation.population;
    })
    countryWPopulation.push({country: 'World', population: worldsPopulation})
}


function clearGraph() {
    worldsPopulation = 0;
        while (graphs.firstChild) {
            graphs.removeChild(graphs.lastChild);
          }
         
}


populationButton.addEventListener('click', (e)=>{
    createPopulationGraph();
})


languagesButton.addEventListener('click', (e)=>{
    createLanguagesGraph();
})
