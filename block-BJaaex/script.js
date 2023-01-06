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
];

let timer = document.querySelector(".timer");
let moves = document.querySelector(".moves");
let move = document.querySelector(".move");
let seconds = document.querySelector(".second");
let minutes = document.querySelector(".minute");
let reset = document.querySelector(".reset");
let matchWin = document.querySelector(".win-Match");
let countMoveTime = document.querySelector(".count-Move-time");
let start = true;
let allMatch = 0;
let firstGuess = '';
let secondGuess = '';
let count = 0;
let minute = 0;
let second = 0;
let delay = 1200;
let delay2 = 1250;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.append(grid);
// Duplicate array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray);
// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random());

function timeCoundown() {
  startTime = setInterval(function () {
    if (second === 60) {
      minute = minute + 1
      minutes.innerText = minute
      second = 0
      seconds.innerText = second
    } else if (second < 60) {
      second = second + 1
      seconds.innerText = second
    }
  }, 1000)
};

// For each item in the gameGrid array...
gameGrid.forEach((elm) => {
  let card = document.createElement("div");
  card.classList.add("card")
  card.dataset.name = elm.name
  let front = document.createElement("div");
  front.classList.add('front')
  let back = document.createElement("div");
  back.classList.add("back")
  back.style.backgroundImage = `url(${elm.img})`
  card.append(front, back)
  grid.append(card)
});

// eventlistener-to-grid
grid.addEventListener("click", (event) => {
  let clicked = event.target
  if (start) {
    start = false
    timeCoundown()
  }
  if (clicked.nodeName === "SECTION" || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) { return }
  if (count < 2) {
    count++
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name

      clicked.parentNode.classList.add("selected")
    } else {
      secondGuess = clicked.parentNode.dataset.name
      clicked.parentNode.classList.add("selected")
      move.innerText = ++move.innerText
    }
    if (firstGuess !== "" && secondGuess !== "") {
      if (firstGuess === secondGuess) {
        allMatch = allMatch + 1
        setTimeout(match, delay)
        setTimeout(win, delay2)
        setTimeout(resetguesses, delay)
      } else {
        setTimeout(resetguesses, delay)
      };
    };
  };

});

// matchCard
let match = () => {
  let selected = document.querySelectorAll(".selected")
  selected.forEach((elm) => {
    elm.classList.add("match")
    elm.classList.add("selectedTwo")
  });

};

// resetguessses
let resetguesses = () => {
  firstGuess = ''
  secondGuess = ''
  count = 0
  let selected = document.querySelectorAll(".selected")
  selected.forEach((elm) => elm.classList.remove("selected"))
};

// resetBtn
reset.addEventListener("click", () => {
  window.location.reload()

});

// match-Win
function win() {
  if (allMatch === 12) {
    game.innerHTML = ""
    matchWin.innerText = "Match-Win"
    matchWin.classList.add('win-Match')
    countMoveTime.innerText = `${moves.innerText} and ${timer.innerText} Time`
    countMoveTime.classList.add("count-Move-time")
    clearInterval(startTime)
  };
};
matchWin.classList.remove("win-Match");
countMoveTime.classList.remove("count-Move-time");

