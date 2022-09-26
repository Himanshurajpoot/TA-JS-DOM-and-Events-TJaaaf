let box1 = document.querySelector('.click-box')
let box2 = document.querySelector('.move-mouse-box')

box1.addEventListener('click', function(event){
   let arr = ['red','blue','green','yellow','purple','voilet','orange'] 
   let x = arr[Math.floor(Math.random() * arr.length-1)]
   box1.style.backgroundColor=x
})

box2.addEventListener('mousemove',function(event){
    let arr = ['red','blue','green','yellow','purple','voilet','orange'] 
    let x = arr[Math.floor(Math.random() * arr.length)]
    box2.style.backgroundColor=x
})