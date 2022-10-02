let firstBox = document.querySelectorAll(".first li")
let secondBox = document.querySelector(".second")

firstBox.forEach((elm , index)=>{
    elm.addEventListener("click" ,(event)=>{
        event.target.innerText = index + 1

        setTimeout(() => {
            event.target.innerText = ""
          }, 1000)
        
    });
});

secondBox.addEventListener("click" , (event)=>{
    let text = event.target.dataset.text;
    event.target.innerText = text
    setTimeout(() => {
        event.target.innerText = ""
      }, 1000)
     
})