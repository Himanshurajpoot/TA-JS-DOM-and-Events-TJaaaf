
let div = document.querySelector('div')
let form = document.querySelector("form")
let i =0

function handleCut(e) {
    // console.log(e.target);
    e.target.parentElement.parentElement.remove()
}

function handleClose(e) {
    e.preventDefault()
    let movie = e.target.elements.Movie.value
    let ul = document.createElement("ul")
    let li = document.createElement('li')
    li.classList.add("movie-checkbox")
    let li2 = document.createElement("li")
    let check = document.createElement('input')
    check.classList.add("check")
    check.type = 'checkbox'
    let p = document.createElement('p')
    p.innerText = movie
    let span = document.createElement('span')
    
    span.classList.add("cut")
    span.innerText = "❌"
    span.setAttribute("data-id",i++)
    span.addEventListener('click', handleCut)

    li.append(check, p)
    li2.append(span)
    ul.append(li, li2)
    div.append(ul,)
    e.target.elements.Movie.value = ""

}


form.addEventListener("submit", handleClose)


