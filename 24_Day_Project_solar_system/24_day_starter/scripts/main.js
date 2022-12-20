const searchButton = document.getElementById("search-button")
const massInput = document.getElementById("mass");
const imageDiv = document.getElementById("image-div");
const descriptionDiv = document.getElementById("description");
const resultDiv = document.getElementById('resultDiv');
const descriptionText = document.getElementById('description-text');
const dropdown = document.getElementById('dropdown');
const planetImage = document.getElementById('planetImage');
const resultHeader = document.getElementById('resultHeader');

const planets = {
    earth: 9.8,
    jupiter: 23.10,
    mars: 3.7,
    mercury: 3.7,
    moon: 1.6,
    neptune: 11,
    pluto: 0.7,
    saturn: 9,
    uranus: 8.7,
    venus: 8.9

}

searchButton.addEventListener('click', e => {
    const selectedPlanet = dropdown.options[dropdown.selectedIndex].value;
    
    if (massInput.value === "") {
        missingElementMessage('Mass is required');
        
    } 
    else if (selectedPlanet === 'none') {
        missingElementMessage('You did not choose a planet yet')
        
    }
    else if(selectedPlanet) {
        displayInformation(selectedPlanet, `The weight of the object on ${selectedPlanet.toUpperCase()}`, massInput.value);
    }
})


const missingElementMessage = message => {
    imageDiv.style.display = 'none';
    descriptionDiv.style.display = 'flex';
    resultDiv.style.display = 'none';
    descriptionText.textContent = message
}

const displayInformation = (selectedPlanet, message, weightofValue) => {
   imageDiv.style.display = 'flex';
   descriptionDiv.style.display = 'flex';
   resultDiv.style.display = 'flex';
   descriptionDiv.style.height = '20rem';

 
   planetImage.src = `./images/${selectedPlanet}.png`
   descriptionText.textContent = message;
   newton = weightofValue * planets[selectedPlanet];
   resultHeader.textContent = `${(Math.round(weightofValue * planets[selectedPlanet])).toFixed(2)} N`;
}  


