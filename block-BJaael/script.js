let mainbox = document.querySelector('.boxes');


for(let i=1;i<=500;i++){
    let minibox = document.createElement('div')
   
    minibox.classList.add('box')
    minibox.innerText=Math.floor(Math.random()*500)
    mainbox.append(minibox)
}

function rando(){
    let box =document.querySelectorAll(".box")
    box.forEach(elm=>{
        let r = Math.floor( Math.random()*256)
        let g = Math.floor( Math.random()*256)
        let b = Math.floor( Math.random()*256)
        let color = `rgb(${r},${g},${b})`
        elm.style.background=color
        elm.classList.add('box')
        elm.innerText=Math.floor(Math.random()*500)
        elm.style.background = color
})
}



mainbox.addEventListener('mousemove' ,rando)




