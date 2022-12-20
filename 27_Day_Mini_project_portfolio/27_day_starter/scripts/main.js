const slideHeader = document.getElementById('slideHeader');
const slideIcon = document.getElementById('slideIcon');
const techSpan = document.getElementById('technologies');

let techCounter = 0;
let counter = 0;
const slideInfo = [
    {
        icon : '💻',
        description : 'Software Developer'
    },
    {
        icon : '🔥',
        description : 'Always in Bussines'
    },
    {
        icon : '📔',
        description : 'Open for Learning'
    }
]

const technologies = [
    {
        color: 'red',
        tech: 'JS'
    },
    {
        color: 'blue',
        tech: 'CSS'
    },
    {
        color: 'orange',
        tech: 'HTML'
    }
]

  

function startSlideShow() {
    setInterval(function () {
        slideHeader.setAttribute('class', 'startSlide');
        if (counter === (slideInfo.length)) {
            counter = 0;
        }
        slideHeader.textContent = slideInfo[counter].description;
        slideIcon.textContent = slideInfo[counter].icon;
        counter++;
        setTimeout(() => {
            slideHeader.classList.remove('startSlide');
        },4000)
    },5000)
}
 startSlideShow();
   
function startTech(){

    setInterval(function () {
        techSpan.setAttribute('class', 'techSpan')
        techSpan.textContent = technologies[techCounter].tech;
        techSpan.style.color = technologies[techCounter].color;
        techCounter++;
        if (techCounter === technologies.length) techCounter = 0;
        setTimeout(() => {
            techSpan.classList.remove('techSpan');
        },1900)
    },2000)
}
startTech();

   
