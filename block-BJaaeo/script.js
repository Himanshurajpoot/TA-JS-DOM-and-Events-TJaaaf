
let  operations_box = document.querySelectorAll(".operations-box")
let display = document.querySelector(".calculation-box")


let initialValue = 0

function hendleClick(event){
    
    if(event.target.classList.contains("eq-box")){
        display.innerText =eval( display.innerText)
        return
    }


    if(event.target.classList.contains("c-box")){
        display.innerText =initialValue
        return
    }

    if(display.innerText== initialValue){
        display.innerText = event.target.innerText
    }else{
        display.innerText += event.target.innerText 
    }
}

operations_box.forEach((elm)=>{
 elm.addEventListener("click" , hendleClick)
})

display.innerText = initialValue

