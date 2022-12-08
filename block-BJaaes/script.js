let form = document.querySelector("form")
let small = document.querySelectorAll("small")




function doesContainANumber(str) {
    return str.split("").some(e => Number(e))
}

function doesContainAString(str) {
    return str.split("").every(e => Number(e))
}

function errorClass(elm) {
    elm.classList.add("error")
    elm.nextElementSibling.classList.add("error")
    elm.classList.remove("success")
    elm.nextElementSibling.classList.remove("success")
}

function successClass(elm) {
    elm.classList.remove("error")
    elm.nextElementSibling.classList.remove("error")
    elm.classList.add("success")
    elm.nextElementSibling.classList.add("success")
}

let usernameError = ""
let nameError = ""
let emailError = ""
let numberError = ""
let ConfirmPasswordError = ""
let passwordError = ""
function formhender(event) {
    event.preventDefault()
    // username-------
    let usernameElm = event.target.elements.username
    if (usernameElm.value === "") {
        usernameError = "Con't be empty!"
        errorClass(usernameElm)
    } else if (usernameElm.value.length < 5) {
        usernameError = "username can't be less than 5 characters"
        errorClass(usernameElm)
    } else {
        usernameError = ""
        successClass(usernameElm)
    }
    usernameElm.nextElementSibling.innerText = usernameError

    // name-----
    let nameElm = event.target.elements.name
    if (nameElm.value === "") {
        nameError = "Con't be empty!"
        errorClass(nameElm)
    } else if (doesContainANumber(nameElm.value)) {
        nameError = "You con't use number in the name field"
        errorClass(nameElm)
    } else {
        nameError = ""
        successClass(nameElm)
    }
    nameElm.nextElementSibling.innerText = nameError

    //  Email-----
    let emailElm = event.target.elements.email
    if (emailElm.value === "") {
        emailError = "Con't be empty!"
        errorClass(emailElm)
    } else if (emailElm.value.length < 6) {
        emailError = "Not a valid email"
        errorClass(emailElm)
    } else if (!emailElm.value.includes("@")) {
        emailError = "Not a valid email"
        errorClass(emailElm)
    } else {
        emailError = ""
        successClass(emailElm)
    }
    emailElm.nextElementSibling.innerText = emailError

    // Phone-Number--------
    let numberElm = event.target.elements.number
    if (numberElm.value === "") {
        numberError = "Con't be empty!"
        errorClass(numberElm)
    } else if (!doesContainAString(numberElm.value)) {
        numberError = "Phone number can only contain numbers"
        errorClass(numberElm)
    } else if (numberElm.value.length < 7) {
        numberError = "Con't be less than 7 characters"
        errorClass(numberElm)
    } else {
        numberError = ""
        successClass(numberElm)
    }
    numberElm.nextElementSibling.innerText = numberError

    // password--------confirm-password
    let passwordElm = event.target.elements.password
    let confirmPassElm = event.target.elements.Confirm_Password
    if (passwordElm.value === "") {
        passwordError = "Con't be empty!"
        errorClass(passwordElm)
        errorClass(confirmPassElm)
    } else if (passwordElm.value !== confirmPassElm.value) {
        ConfirmPasswordError = "Password and confirm password must be same"
        passwordError = "Password and confirm password must be same"
        errorClass(confirmPassElm)
        errorClass(passwordElm)
    } else {
        passwordError = ""
        ConfirmPasswordError = ""
        successClass(passwordElm)
        successClass(confirmPassElm)
    }
    passwordElm.nextElementSibling.innerText = passwordError
    confirmPassElm.nextElementSibling.innerText = ConfirmPasswordError

// alert massege
    let count = 0
    let count2 = 0
    small.forEach((e) => {
        if (e.innerText === "") {
            count2++
        } else {
            count++
        }
    })
    if(count ===0){
        alert('User Added Successfully!')
      
    }else{
        alert("User Added not Successfully!")
    }
}
form.addEventListener("submit", formhender)