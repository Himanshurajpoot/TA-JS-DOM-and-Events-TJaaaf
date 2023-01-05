// Card data
const cardsArray = [
    {
      name: 'shell',
      img: 'assets/blueshell.png',
    },
    {
      name: 'star',
      img: 'assets/star.png',
    },
    {
      name: 'bobomb',
      img: 'assets/bobomb.png',
    },
    {
      name: 'mario',
      img: 'assets/mario.png',
    },
    {
      name: 'luigi',
      img: 'assets/luigi.png',
    },
    {
      name: 'peach',
      img: 'assets/peach.png',
    },
    {
      name: '1up',
      img: 'assets/1up.png',
    },
    {
      name: 'mushroom',
      img: 'assets/mushroom.png',
    },
    {
      name: 'thwomp',
      img: 'assets/thwomp.png',
    },
    {
      name: 'bulletbill',
      img: 'assets/bulletbill.png',
    },
    {
      name: 'coin',
      img: 'assets/coin.png',
    },
    {
      name: 'goomba',
      img: 'assets/goomba.png',
    },
  ]

const game = document.getElementById('game')
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')
game.append(grid)
// Duplicate array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray)
// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random())

let firstGuess = ''
let secondGuess = ''
let count = 0
let previousTarget = null
let delay = 1200

// For each item in the gameGrid array...
gameGrid.forEach((elm)=>{
  let card = document.createElement("div")
  card.classList.add("card")
  card.dataset.name = elm.name
  let front = document.createElement("div")
  front.classList.add('front')
  let back = document.createElement("div")
  back.classList.add("back")
  back.style.backgroundImage=`url(${elm.img})`
  card.append(front,back)
  grid.append(card)
})


grid.addEventListener("click" ,(event)=>{
  let clicked = event.target
  if(clicked.nodeName==="SECTION"|| clicked === previousTarget || clicked.parentNode.classList.contains('selected')){return}
  if(count<2){
    count++
    if(count===1){
      firstGuess=clicked.parentNode.dataset.name
      clicked.parentNode.classList.add("selected")
    }else{
      secondGuess = clicked.parentNode.dataset.name
      clicked.parentNode.classList.add("selected")
    }
    if(firstGuess !=="" && secondGuess !==""){
      if(firstGuess===secondGuess){
       setTimeout(match,delay)
       setTimeout(resetguesses,delay)

      }else{
        setTimeout(resetguesses,delay)
      }
    }
    previousTarget = clicked
  }
  
})

let match =()=>{
  let selected = document.querySelectorAll(".selected")
  selected.forEach((elm)=> elm.classList.add("match"))
}

let resetguesses =()=>{
   firstGuess = ''
   secondGuess = ''
   count = 0
   let selected = document.querySelectorAll(".selected")
   selected.forEach((elm)=>elm.classList.remove("selected"))
}