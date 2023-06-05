import Bird from './Bird.js'
import birdsData from './data.js'

let currentBirdIndex = 0
let currentBird = new Bird(birdsData[currentBirdIndex])

document.getElementById("accept-button").addEventListener('click', yes)
document.getElementById("reject-button").addEventListener('click', no)

render()


function render() {
    document.getElementById('card').innerHTML = currentBird.getBirdHtml()
}

function getNewBird() {
    currentBirdIndex = currentBirdIndex +1

    if(currentBirdIndex < birdsData.length){
        currentBird = new Bird(birdsData[currentBirdIndex])
        render()
    } else{
        currentBirdIndex = 0;
        currentBird = new Bird(birdsData[currentBirdIndex])
        render()
    }
}

function yes() {

    currentBird.setMatchStatus(true)
    
    document.querySelector(".bird-info").insertAdjacentHTML("beforebegin", currentBird.yes())

    setTimeout(() =>{
        getNewBird()
        currentBird.hasBeenLiked(true)
    }, 2000)
  
}

function no() {
    currentBird.setMatchStatus(false)
    document.querySelector(".bird-info").insertAdjacentHTML("beforebegin", currentBird.no())

    currentBird.no()
    setTimeout(() =>{
        getNewBird()
        currentBird.hasBeenLiked(false)
    }, 2000)
  
}

