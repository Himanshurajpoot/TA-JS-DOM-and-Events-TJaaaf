let count = 0;
let count2 = 0;
let user_Icon = document.querySelectorAll(".manualIcon i");
let comp_Icon = document.querySelectorAll(".game-icon-comp i");
let youText = document.querySelector(".you-text");
let computerText = document.querySelector(".computer-text");
let win = document.querySelector(".win-box");
let computerCount = document.querySelector(".computer-count");
let youCount = document.querySelector(".you-count");

let reset = document.querySelector(".reset-btn");


function hendleclick(e, userIcons, comp_Icon) {
    // player--user
    userIcons.forEach((icon) => {
        if (icon.style.color === 'black') {
            icon.style.color = 'rgb(30,144,255)'
        }
    });

    e.target.style.color = 'black';
    let clickName = e.target.dataset.set;
    youText.innerText = `--- ${clickName}`;
    youText.style.color = 'rgb(30,144,255)';

    // player--computer

    comp_Icon.forEach((randomNum) => {
        if (randomNum.style.color === 'black') {
            randomNum.style.color = "red"
        }


    });

    let randomNum = Math.floor(Math.random() * comp_Icon.length);
    comp_Icon[randomNum].style.color = "black";

    let computerName = comp_Icon[randomNum].dataset.set;
    computerText.innerText = `--- ${computerName}`;
    computerText.style.color = "red";

    // conditions 
    if (clickName === computerName) {
        win.innerText = "It's a tie.";

    } else if (clickName === "Rock" && computerName === "Paper") {
        win.innerText = "You Lost!";
        computerCount.innerText = ++count;
    } else if (clickName === "Rock" && computerName === "Scissors") {
        win.innerText = "You Won!";
        youCount.innerText = ++count2;
    } else if (clickName === "Paper" && computerName === "Rock") {
        win.innerText = "You Won!";
        youCount.innerText = ++count2;
    } else if (clickName === "Paper" && computerName === "Scissors") {
        win.innerText = "You Lost!";
        computerCount.innerText = ++count;
    } else if (clickName === "Scissors" && computerName === "Rock") {
        win.innerText = "You Lost!";
        computerCount.innerText = ++count;
    } else if (clickName === "Scissors" && computerName === "Paper") {
        win.innerText = "You Won!";
        youCount.innerText = ++count2;
    }
}

youCount.innerText = count;

computerCount.innerText = count;


user_Icon.forEach(element => {
    element.addEventListener("click", (e) => hendleclick(e, user_Icon, comp_Icon))
});

reset.addEventListener("click", function () {
    computerText.innerHTML = "";
    youText.innerText = "";
    count = 0;
    count2 = 0;
    youCount.innerText = count;
    computerCount.innerText = count2;
    user_Icon.forEach((elm) => elm.style.color = 'rgb(30,144,255)');
    comp_Icon.forEach((elm) => elm.style.color = "red");
});




