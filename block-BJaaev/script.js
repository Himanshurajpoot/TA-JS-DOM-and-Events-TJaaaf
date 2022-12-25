
let input = document.querySelector(`input[type="text"]`)
let root = document.querySelector(".ul-Root")
let small = document.querySelector("small")
let all = document.querySelector(".all")
let active = document.querySelector(".active")
let completed = document.querySelector(".completed")
let clearCompleted = document.querySelector(".clearCompleted")
let defaultSelected = "all"
let alltodos = localStorage.getItem("allTodos") ? JSON.parse(localStorage.getItem("allTodos")) : []

function hendletodo(e) {
    if (e.keyCode === 13 && e.target.value) {
        alltodos.push({
            name: e.target.value,
            isDone: false,
            id: alltodos.length
        })
        e.target.value = ""
        creatUI()
        localStorage.setItem("allTodos", JSON.stringify(alltodos))
    }
}

// deletetodo function
function hendleDelete(e) {
    let id = e.target.dataset.id
    alltodos.splice(id, 1)
    alltodos.map((elm, i) => {
        elm.id = i
        return elm
    })
    localStorage.setItem("allTodos", JSON.stringify(alltodos))
    creatUI()
}

// toggling function
function hendleToggle(e) {
    let id = e
    alltodos.map((elm) => {
        if (elm.id == id) {
            elm.isDone = !elm.isDone
        }
        return elm;
    })
    localStorage.setItem("allTodos", JSON.stringify(alltodos))
    creatUI()
}

// creating ui funtion
function creatUI(data = alltodos) {
    root.innerHTML = ""
    data.forEach((todo, index) => {
        let li = document.createElement("li")
        let input = document.createElement("input")
        input.type = "checkbox"
        input.checked = todo.isDone
        input.setAttribute("data-id", index)
        input.addEventListener("input", () => hendleToggle(todo.id))
        input.classList.add("check")
        let p = document.createElement("p")
        p.innerText = todo.name
        let span = document.createElement("span")
        span.setAttribute("data-id", index)
        span.innerText = "X"
        span.addEventListener("click", hendleDelete)
        li.append(input, p, span)
        root.append(li)
    })
    small.innerText = `${data.length} itom left`
}

creatUI()

// hendleAllBtn
function hendleAll() {
    creatUI()
    small.innerText = `${alltodos.length} itom left`
    defaultSelected = "all"
    updateActiveBtn()

}
all.addEventListener("click", hendleAll)

// hendleActiveBtn
function hendleActive() {
    let filterUnChecked = alltodos.filter((e) => !e.isDone)
    small.innerText = `${filterUnChecked.length} itom left`
    defaultSelected = "active"
    updateActiveBtn()
    creatUI(filterUnChecked)
}
active.addEventListener("click", hendleActive)

// hendleCompletedBtn
function hendleCompleted() {
    let filterChecked = alltodos.filter((e) => e.isDone)
    small.innerText = `${filterChecked.length} itom left`
    defaultSelected = "completed"
    updateActiveBtn()
    creatUI(filterChecked)
}
completed.addEventListener("click", hendleCompleted)

//    clearCompletedBtn
function clearCompletedBtn() {
    alltodos = alltodos.filter((e) => !e.isDone)
    small.innerText = `${alltodos.length} itom left`
    alltodos.map((elm, i) => {
        elm.id = i
        return elm
    })
    localStorage.setItem("allTodos", JSON.stringify(alltodos))
    defaultSelected = "all"
    updateActiveBtn()
    creatUI()
}
clearCompleted.addEventListener("click", clearCompletedBtn)

function updateActiveBtn(btn = defaultSelected) {
    all.classList.remove("selected")
    active.classList.remove("selected")
    completed.classList.remove("selected")
    if (btn === "all") {
        all.classList.add("selected")
    }

    if (btn === "active") {
        active.classList.add("selected")
    }

    if (btn === "completed") {
        completed.classList.add("selected")
    }
}

updateActiveBtn()
input.addEventListener("keyup", hendletodo)



