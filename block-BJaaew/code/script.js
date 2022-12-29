
let housesBtn = document.querySelector(".house-btn")
let peopleOfHouse = document.querySelector(".peoples")
let searchBar = document.querySelector(".search_bar")

let allpeople = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people)
    return acc
}, [])


let alltags = got.houses.map((house) => house.name)
let activeHouse = ""

function creatUI(data = []) {
    peopleOfHouse.innerHTML = ""
    data.forEach((elm) => {
        let ul = document.createElement("ul")
        ul.classList.add("people-box")
        let image = document.createElement("img")
        image.src = elm.image
        let h2 = document.createElement("h2")
        h2.innerText = elm.name
        let p = document.createElement("p")
        p.innerText = elm.description
        let a = document.createElement("a")
        a.innerText = "KNOW MORE!"
        a.href = elm.wikiLink
        ul.append(image, h2, p, a)
        peopleOfHouse.append(ul)
    })
}

function creatTag(tags = []) {
    housesBtn.innerHTML = ""
    tags.forEach((tag) => {
        let btn = document.createElement("button")
        btn.innerText = tag
        if (activeHouse === tag) {
            btn.classList.add("active")
        }
        btn.addEventListener("click", () => {
            activeHouse = tag
            let filterPeople = got.houses.find((elm) => elm.name === tag).people
            creatUI(filterPeople)
            creatTag(alltags)
        })
        housesBtn.append(btn)
    })

}

function hendleSearch(e) {
    let value = e.target.value
    let searchFilter = allpeople.filter((elm) => elm.name.toLowerCase().includes(value.toLowerCase()))
    creatUI(searchFilter)
}

creatUI(allpeople)
creatTag(alltags)
searchBar.addEventListener("input", hendleSearch)

