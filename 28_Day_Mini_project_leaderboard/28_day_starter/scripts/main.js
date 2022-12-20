const userForm = document.getElementById('userForm');
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const countryInput = document.getElementById('country');
const scoreInput = document.getElementById('score');
const submit = document.getElementById('submit');


const errorDiv = document.getElementById('errorDiv');
const errorSpan = document.getElementById('errorSpan');

const allPlayersDiv = document.getElementById('allPlayers');

const playerInformation = []

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];




userForm.addEventListener('submit', (e) => {
         e.preventDefault();
         if (isFormValid()) {
            createNewPlayer();
            sortingPlayers();
            clearScreen();
            displayPlayers();
         } else {
            displayErrorMessage();
         }
    })

function isFormValid() {
    let validForm = true;
    if( firstNameInput.value === '' ) {
        validForm = false;
     }

     if( lastNameInput.value === '' ) {
        validForm = false;
     }

     if( countryInput.value === '' ) {
        validForm = false;
     }

     if( scoreInput.value === '' && typeof(score.value) !== 'number') {
        validForm = false;
     }
     return validForm;
}


function displayErrorMessage() {
    errorSpan.textContent = 'All fields are required';
}

function createNewPlayer(){
    const newUser = {'firstName': (firstNameInput.value).toUpperCase(), 'lastName': (lastNameInput.value).toUpperCase(),
    'country': (countryInput.value).toUpperCase(), 'score': parseInt(scoreInput.value)};
    playerInformation.push(newUser);
}

function displayPlayers(){
    playerInformation.forEach((player) => {
        const playerMainDiv = document.createElement('div');
        const nameDateDiv = document.createElement('div');
        const countryDivContainer = document.createElement('div');
        const scoreDivContainer = document.createElement('div');
        const playerButtonsDiv = document.createElement('div');
        const nameSurnameSpan = document.createElement('span')
        const dateSpan = document.createElement('span')
        const countrySpan = document.createElement('span')
        const scoreSpan = document.createElement('span')
        const deleteButton = document.createElement('button');
        const increaseButton = document.createElement('button');
        const decreaseButton = document.createElement('button');

        dateSpan.textContent = playerCreatingDate();
        nameSurnameSpan.textContent = `${player.firstName} ${player.lastName}`
        countrySpan.textContent = `${player.country}`
        scoreSpan.textContent = `${player.score}`

        deleteButton.textContent = '🖐';
        increaseButton.textContent = '+5';
        decreaseButton.textContent = '-5';

        deleteButton.addEventListener('click', ()=> {
            playerMainDiv.parentNode.removeChild(playerMainDiv);
        })

        increaseButton.addEventListener('click', ()=> {
            player.score+=5;
            scoreSpan.textContent = `${player.score}`
            sortingPlayers();
            clearScreen();
            displayPlayers();
        })

        decreaseButton.addEventListener('click', ()=> {
            player.score-=5
            scoreSpan.textContent = `${player.score}`
            sortingPlayers();
            clearScreen();
            displayPlayers();
        })

        nameSurnameSpan.setAttribute('class', 'playerInformation');
        dateSpan.setAttribute('class', 'dateInformation');
        countryDivContainer.setAttribute('class', 'countryContainer')
        scoreDivContainer.setAttribute('class', 'scoreContainer')
        countrySpan.setAttribute('class', 'playerInformation');
        scoreSpan.setAttribute('class', 'playerInformation');
        playerMainDiv.setAttribute('class', 'player');
        
        deleteButton.setAttribute('class', 'playerButtons');
        increaseButton.setAttribute('class', 'playerButtons');
        decreaseButton.setAttribute('class', 'playerButtons');

        nameDateDiv.setAttribute('class', 'playerNameDateContainer');
        playerButtonsDiv.setAttribute('class', 'playerButtonContainer');

        nameDateDiv.appendChild(nameSurnameSpan);
        nameDateDiv.appendChild(dateSpan);

        countryDivContainer.appendChild(countrySpan);
        scoreDivContainer.appendChild(scoreSpan);

        playerButtonsDiv.appendChild(deleteButton);
        playerButtonsDiv.appendChild(increaseButton);
        playerButtonsDiv.appendChild(decreaseButton);
        playerMainDiv.appendChild(nameDateDiv);
        playerMainDiv.appendChild(countryDivContainer);
        playerMainDiv.appendChild(scoreDivContainer);
        playerMainDiv.appendChild(playerButtonsDiv)

        allPlayersDiv.appendChild(playerMainDiv);
    })
}

function sortingPlayers(){
    if (playerInformation.length > 1) {
        playerInformation.sort(compare);
    }
}

function playerCreatingDate() {
    var dateObj = new Date();
    var month = dateObj.getMonth(); //months from 1-12
    var day = dateObj.getDay();
    var year = dateObj.getFullYear();
    var hour = dateObj.getHours();
    var minutes = dateObj.getMinutes();

    return `${monthNames[month]} ${day}, ${year} ${hour}:${minutes}`
}

function compare( a, b ) {
    if ( a.score < b.score ){
      return 1;
    }
    if ( a.score > b.score ){
      return -1;
    }
    return 0;
  }

function clearScreen() {
    while(allPlayersDiv.firstChild) {
        allPlayersDiv.removeChild(allPlayersDiv.lastChild);
    }
 }


