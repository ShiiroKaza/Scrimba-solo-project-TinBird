import Bird from './Bird.js'
import birdsData from './data.js'

let currentBirdIndex = 0
let currentBird = new Bird(birdsData[currentBirdIndex])

let isWaiting = false

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
    if(!isWaiting){
        document.querySelector(".bird-info").insertAdjacentHTML("beforebegin", currentBird.yes())
        isWaiting =true
    
        setTimeout(() =>{
            getNewBird()
            currentBird.isLiked()
            isWaiting = false
        }, 2000)
    }  
}

function no() {
    if(!isWaiting){
         document.querySelector(".bird-info").insertAdjacentHTML("beforebegin", currentBird.no())
         isWaiting =true

         currentBird.isSwiped()
         currentBird.no()
         
         setTimeout(() =>{
             getNewBird()
             isWaiting = false
         }, 2000)
    }
}
   

