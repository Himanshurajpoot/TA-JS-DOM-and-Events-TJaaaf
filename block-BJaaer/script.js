


let form = document.querySelector("form")
let formInfo = document.querySelector(".form-info")
let closeBtn = document.querySelector('.close-btn')
let userInfo = {}

function submitHendler(event) {
    event.preventDefault()
    let elements = event.target.elements
    userInfo.name = "Hello" + " " + elements.name.value
    userInfo.email = "Email:" + " " + elements.email.value
    userInfo.choose = "You Love:" + " " + elements.Choose.value
    userInfo.color = "Color:" + " " + elements.color.value
    userInfo.range = "Rating:" + " " + elements.range.value
    userInfo.book = "Book Genre:" + " " + elements.Book.value + " " + elements.color.value
    userInfo.terms = `👉: ${elements.terms.value === "on" ? "You have accepted the terms and conditions" : "You have not accepted the terms and conditions"}`

    for (let x in userInfo) {
        let li = document.createElement("li")
        li.innerText = userInfo[x]
        li.innerText.includes('Hello') ? li.classList.add('heading') : ''
        formInfo.append(li)
    }
    console.log(userInfo)
    form.style.display = "none"
    formInfo.style.display = "block"
    closeBtn.style.display = 'block'
}



form.addEventListener("submit", submitHendler)



function closeHendler() {
    form.style.display = "block"
    formInfo.style.display = "none"
    document.getElementById("myForm").reset()
    closeBtn.style.display = 'none'
    formInfo.innerHTML = ''
}



closeBtn.addEventListener("click", closeHendler)
